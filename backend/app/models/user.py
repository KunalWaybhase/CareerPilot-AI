from sqlalchemy import Column, Integer, String, DateTime

from app.database.base import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)

    name = Column(String, nullable=False)

    email = Column(
        String,
        unique=True,
        index=True,
        nullable=False
    )

    hashed_password = Column(
        String,
        nullable=False
    )

    college = Column(String, nullable=True)

    branch = Column(String, nullable=True)

    graduation_year = Column(Integer, nullable=True)

    semester = Column(Integer, nullable=True)

    cgpa = Column(String, nullable=True)

    linkedin_url = Column(String, nullable=True)

    github_url = Column(String, nullable=True)

    target_role = Column(String, nullable=True)

    resume_path = Column(
        String,
        nullable=True
    )

    resume_uploaded_at = Column(
        DateTime,
        nullable=True
    )