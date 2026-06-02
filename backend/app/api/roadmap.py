from fastapi import APIRouter

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