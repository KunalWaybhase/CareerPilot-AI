from fastapi import APIRouter
from sqlalchemy.orm import Session
from fastapi import Depends

from app.database.dependencies import (
    get_db,
    get_current_user
)

from app.models.user import User

from app.services.resume_parser import (
    extract_text_from_pdf
)

from app.services.skill_extractor import (
    extract_skills
)

from app.services.skill_gap_analyzer import (
    analyze_skill_gap
)
from app.schemas.roadmap import RoadmapRequest

router = APIRouter(
    prefix="/roadmap",
    tags=["Roadmap"]
)


@router.post("/generate")
def generate_roadmap(
    request: RoadmapRequest
):

    role = request.target_role.lower()

    if role == "backend developer":

        roadmap = [
            "Learn Python",
            "Learn OOP",
            "Learn SQL",
            "Learn PostgreSQL",
            "Learn FastAPI",
            "Build Backend Projects",
            "Practice DSA",
            "Apply for Jobs"
        ]

    elif role == "frontend developer":

        roadmap = [
            "Learn HTML",
            "Learn CSS",
            "Learn JavaScript",
            "Learn React",
            "Learn TypeScript",
            "Build Frontend Projects",
            "Practice DSA",
            "Apply for Jobs"
        ]

    elif role == "data scientist":

        roadmap = [
            "Learn Python",
            "Learn Statistics",
            "Learn Pandas",
            "Learn NumPy",
            "Learn Machine Learning",
            "Build Data Science Projects",
            "Learn SQL",
            "Apply for Jobs"
        ]

    else:

        roadmap = [
            "Role not found"
        ]

    return {
        "role": request.target_role,
        "roadmap": roadmap
    }
@router.get("/skill-gap")
def get_skill_gap(
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

    if not user.target_role:
        return {
            "error": "Target role not set"
        }

    text = extract_text_from_pdf(
        user.resume_path
    )

    skills_found = extract_skills(text)

    result = analyze_skill_gap(
        user.target_role,
        skills_found
    )

    return result