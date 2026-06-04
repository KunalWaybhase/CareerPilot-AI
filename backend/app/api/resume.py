from fastapi import APIRouter, UploadFile, File, Depends
from sqlalchemy.orm import Session
from datetime import datetime
import shutil
import os
from app.services.ats_analyzer import (
    analyze_resume
)
from app.services.skill_extractor import (
    extract_skills
)
from app.services.resume_parser import (
    extract_text_from_pdf
)
from app.database.dependencies import (
    get_db,
    get_current_user
)
from app.models.user import User

router = APIRouter(
    prefix="/resume",
    tags=["Resume"]
)


@router.post("/upload")
async def upload_resume(
    file: UploadFile = File(...),
    current_user=Depends(get_current_user),
    db: Session = Depends(get_db)
):

    if not file.filename.endswith(".pdf"):
        return {
            "error": "Only PDF files allowed"
        }

    upload_dir = "uploads/resumes"

    os.makedirs(
        upload_dir,
        exist_ok=True
    )

    file_path = os.path.join(
        upload_dir,
        file.filename
    )

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(
            file.file,
            buffer
        )

    user = (
        db.query(User)
        .filter(
            User.id == current_user["user_id"]
        )
        .first()
    )

    user.resume_path = file_path
    user.resume_uploaded_at = datetime.utcnow()

    db.commit()

    return {
        "filename": file.filename,
        "saved_path": file_path,
        "message": "Resume uploaded and linked to user"
    }
@router.get("/parse")
def parse_resume(
    current_user=Depends(get_current_user),
    db: Session = Depends(get_db)
):

    user = (
        db.query(User)
        .filter(
            User.id == current_user["user_id"]
        )
        .first()
    )

    if not user.resume_path:
        return {
            "error": "No resume uploaded"
        }

    text = extract_text_from_pdf(
        user.resume_path
    )

    return {
        "resume_text": text[:3000]
    }
@router.get("/analyze")
def analyze_uploaded_resume(
    current_user=Depends(get_current_user),
    db: Session = Depends(get_db)
):

    user = (
        db.query(User)
        .filter(
            User.id == current_user["user_id"]
        )
        .first()
    )

    if not user.resume_path:
        return {
            "error": "No resume uploaded"
        }

    text = extract_text_from_pdf(
        user.resume_path
    )

    result = analyze_resume(text)

    return result
@router.get("/skills")
def get_resume_skills(
    current_user=Depends(get_current_user),
    db: Session = Depends(get_db)
):

    user = (
        db.query(User)
        .filter(
            User.id == current_user["user_id"]
        )
        .first()
    )

    if not user.resume_path:
        return {
            "error": "No resume uploaded"
        }

    text = extract_text_from_pdf(
        user.resume_path
    )

    skills = extract_skills(text)

    return {
        "skills_found": skills,
        "count": len(skills)
    }