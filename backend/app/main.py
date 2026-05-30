from app.api.auth import router as auth_router
from fastapi import FastAPI

from app.database.base import Base
from app.database.database import engine

# Import models so SQLAlchemy sees them
from app.models import User

app = FastAPI(
    title="CareerPilot API",
    version="1.0.0"
)

# Create tables automatically
Base.metadata.create_all(bind=engine)
app.include_router(auth_router)
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