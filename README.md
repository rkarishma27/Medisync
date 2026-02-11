🏥 MediSync – AI-Powered Healthcare Ticket Analyzer

MediSync is a full-stack healthcare grievance and support ticket system that uses Natural Language Processing (NLP) to automatically categorize patient complaints, assess risk, and stream tickets in real time to an admin dashboard.
The system simulates how hospitals and healthcare platforms triage patient issues such as insurance disputes, medical delays, billing issues, and patient safety risks.

🚀 Features
🧠 AI-Based Ticket Classification
Uses a real NLP model (facebook/bart-large-mnli)
Automatically categorizes complaints into:
Billing
Insurance
Medical
Technical
Fraud
Provides a confidence score for each classification
⚠️ Risk Assessment Engine
Rule-based healthcare risk scoring
Detects:
Clinical urgency
Insurance escalation
Treatment delays

Assigns risk levels:
PATIENT_SAFETY_RISK
CLINICAL_ATTENTION_NEEDED
ADMIN_PRIORITY
INFORMATIONAL

📡 Real-Time Admin Dashboard
WebSocket-based live updates
New tickets appear instantly without page refresh
Displays:
Ticket details
Category
Risk level
Risk score
💾 Persistent Storage
Stores tickets in SQLite using SQLAlchemy
Enables ticket history and auditability

🛠️ Tech Stack
Backend
FastAPI – REST API & WebSockets
Hugging Face Transformers – NLP model
SQLAlchemy – ORM
SQLite – Database
Uvicorn – ASGI server

Frontend
React (Vite) – UI
React Router – Navigation
WebSockets – Real-time updates
Fetch API – Backend communication
