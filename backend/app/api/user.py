from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.dependencies import (
    get_db,
    get_current_user
)
from app.models.user import User
from app.schemas.user import (
    UserProfileUpdate,
    UserProfileResponse
)
router = APIRouter(
    prefix="/user",
    tags=["User"]
)


@router.get("/profile",response_model=UserProfileResponse)
def get_profile(
    current_user=Depends(get_current_user),
    db: Session = Depends(get_db)
):

    user = (
        db.query(User)
        .filter(User.id == current_user["user_id"])
        .first()
    )

    return user


@router.put(
    "/profile",
    response_model=UserProfileResponse
)
def update_profile(
    profile: UserProfileUpdate,
    current_user=Depends(get_current_user),
    db: Session = Depends(get_db)
):

    user = (
        db.query(User)
        .filter(User.id == current_user["user_id"])
        .first()
    )

    for key, value in profile.dict(
        exclude_unset=True
    ).items():
        setattr(user, key, value)

    db.commit()
    db.refresh(user)

    return user