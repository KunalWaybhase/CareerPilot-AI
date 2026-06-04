from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.dependencies import (
    get_db,
    get_current_user
)

from app.models.user import User

from app.services.resume_parser import (
    extract_text_from_pdf
)

from app.services.ats_analyzer import (
    analyze_resume
)

from app.services.skill_extractor import (
    extract_skills
)

from app.services.skill_gap_analyzer import (
    analyze_skill_gap
)

router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)
@router.get("/overview")
def dashboard_overview(
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
            "error": "Resume not uploaded"
        }

    text = extract_text_from_pdf(
        user.resume_path
    )

    ats_result = analyze_resume(text)

    skills_found = extract_skills(text)

    gap_result = analyze_skill_gap(
        user.target_role,
        skills_found
    )

    return {
        "student": user.name,
        "email": user.email,
        "target_role": user.target_role,

        "ats_score":
            ats_result["ats_score"],

        "readiness_score":
            gap_result["readiness_score"],

        "job_ready":
            gap_result["job_ready"],

        "skills_found":
            skills_found,

        "strengths":
            gap_result["strengths"],

        "missing_skills":
            gap_result["missing_skills"],

        "next_focus":
            gap_result["missing_skills"]
    }