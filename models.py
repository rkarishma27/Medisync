from pydantic import BaseModel

class TicketCreate(BaseModel):
    source: str
    message: str

class ClassificationResult(BaseModel):
    category: str
    confidence: float



