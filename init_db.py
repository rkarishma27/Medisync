from database import engine
from db_models import TicketDB

TicketDB.metadata.create_all(bind=engine)
