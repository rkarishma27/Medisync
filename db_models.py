from sqlalchemy import Column, String, DateTime, Integer, JSON
from database import Base

class TicketDB(Base):
    __tablename__ = "tickets"

    id = Column(Integer, primary_key=True, index=True)
    ticket_id = Column(String, unique=True, index=True, nullable=False)

    source = Column(String)
    message = Column(String)
    timestamp = Column(DateTime)
    category = Column(String)
    confidence = Column(Integer)
    risk = Column(JSON)





