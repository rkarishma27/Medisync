from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from datetime import datetime

from database import engine, SessionLocal
from db_models import Base, TicketDB
from models import TicketCreate
from classification_model import classify_ticket_nlp
from risk_engine import analyze_risk

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Healthcare Support Ticket Analyzer")

app.add_middleware(
    CORSMiddleware,
    allow_origin_regex=r"http://localhost:\d+",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/health")
def health():
    return {"status": "ok"}

@app.get("/api/tickets")
def get_tickets(db: Session = Depends(get_db)):
    tickets = db.query(TicketDB).order_by(TicketDB.id.desc()).all()
    return [
        {
            "ticket_id": t.ticket_id,
            "message": t.message,
            "category": t.category,
            "severity": t.risk,
            "source": t.source,
        }
        for t in tickets
    ]

@app.post("/api/ticket")
def create_ticket(ticket: TicketCreate, db: Session = Depends(get_db)):
    result = classify_ticket_nlp(ticket.message)
    risk = analyze_risk(ticket.message, result["category"])

    latest = db.query(TicketDB).order_by(TicketDB.id.desc()).first()
    num = (latest.id + 1) if latest else 1

    db_ticket = TicketDB(
        ticket_id=f"T{num:04d}",
        source=ticket.source,
        message=ticket.message,
        timestamp=datetime.utcnow(),
        category=result["category"],
        confidence=int(result["confidence"] * 100),
        risk=risk,
    )

    db.add(db_ticket)
    db.commit()

    return {"ticket_id": db_ticket.ticket_id}


