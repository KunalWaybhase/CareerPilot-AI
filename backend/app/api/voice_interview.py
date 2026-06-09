import os

from fastapi import (
    APIRouter,
    UploadFile,
    File
)

from app.services.voice_interview_service import (
    transcribe_audio
)

router = APIRouter(
    prefix="/voice-interview",
    tags=["Voice Interview"]
)

@router.post("/upload-answer")
async def upload_answer(
    file: UploadFile = File(...)
):

    os.makedirs(
        "uploads/voice_answers",
        exist_ok=True
    )

    file_path = (
        f"uploads/voice_answers/"
        f"{file.filename}"
    )

    with open(
        file_path,
        "wb"
    ) as buffer:

        buffer.write(
            await file.read()
        )

    transcript = transcribe_audio(
        file_path
    )

    return {
        "filename": file.filename,
        "transcript": transcript
    }