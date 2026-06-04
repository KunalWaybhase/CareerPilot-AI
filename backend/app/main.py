from app.api.auth import router as auth_router
from fastapi import FastAPI
from app.api.user import router as user_router
from app.api.roadmap import router as roadmap_router
from app.database.base import Base
from app.api.resume import router as resume_router
from app.database.database import engine
from app.api import interview
from app.api import dashboard
# Import models so SQLAlchemy sees them
from app.models import User

app = FastAPI(
    title="CareerPilot API",
    version="1.0.0"
)

# Create tables automatically
Base.metadata.create_all(bind=engine)
app.include_router(auth_router)
app.include_router(user_router)
app.include_router(roadmap_router)  
app.include_router(resume_router)
app.include_router(interview.router)
app.include_router(dashboard.router)
@app.get("/")
def root():
    return {
        "message": "CareerPilot Backend Running"
    }

@app.get("/health")
def health_check():
    return {
        "status": "healthy"
    }