from pydantic import BaseModel, EmailStr


class UserCreate(BaseModel):
    name: str
    email: EmailStr
    password: str


class UserLogin(BaseModel):
    email: EmailStr
    password: str

class UserResponse(BaseModel):
    id: int
    name: str
    email: str

    class Config:
        from_attributes = True

class UserProfileUpdate(BaseModel):
    college: str | None = None
    branch: str | None = None
    graduation_year: int | None = None
    semester: int | None = None
    cgpa: str | None = None
    linkedin_url: str | None = None
    github_url: str | None = None
    target_role: str | None = None


class UserProfileResponse(BaseModel):
    id: int
    name: str
    email: str

    college: str | None = None
    branch: str | None = None
    graduation_year: int | None = None
    semester: int | None = None
    cgpa: str | None = None

    linkedin_url: str | None = None
    github_url: str | None = None
    target_role: str | None = None

    class Config:
        from_attributes = True