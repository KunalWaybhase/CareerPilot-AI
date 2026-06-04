from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.schemas.interview import (
    InterviewEvaluationRequest
)
from app.services.interview_service import (
    evaluate_answer
)
from app.database.dependencies import (
    get_db,
    get_current_user
)

from app.models.user import User

from app.services.interview_service import (
    generate_interview_questions
)

router = APIRouter(
    prefix="/interview",
    tags=["Interview"]
)


@router.get("/generate")
def generate_questions(
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

    questions = generate_interview_questions(
        user.target_role
    )

    return {
        "target_role": user.target_role,
        "questions": questions
    }
@router.post("/evaluate")
def evaluate_interview_answer(
    request: InterviewEvaluationRequest
):

    feedback = evaluate_answer(
        request.question,
        request.answer
    )

    return {
        "feedback": feedback
    }