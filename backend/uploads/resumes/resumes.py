from fastapi import APIRouter, UploadFile, File
import shutil
import os

router = APIRouter(
    prefix="/resume",
    tags=["Resume"]
)


@router.post("/upload")
async def upload_resume(
    file: UploadFile = File(...)
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

    return {
        "filename": file.filename,
        "saved_path": file_path,
        "message": "Resume saved successfully"
    }