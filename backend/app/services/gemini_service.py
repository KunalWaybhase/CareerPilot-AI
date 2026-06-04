import google.generativeai as genai

from app.core.config import (
    GEMINI_API_KEY
)

genai.configure(
    api_key=GEMINI_API_KEY
)

model = genai.GenerativeModel(
    "gemini-2.5-flash"
)
def generate_ai_roadmap(
    target_role,
    missing_skills,
    readiness_score
):

    prompt = f"""
    Act as a senior software engineering mentor.

    Target Role:
    {target_role}

    Missing Skills:
    {missing_skills}

    Readiness Score:
    {readiness_score}

    Create a personalized roadmap.

    Include:
    1. Learning order
    2. Projects
    3. Interview preparation
    4. Timeline

    Keep response under 500 words.
    """

    response = model.generate_content(
        prompt
    )

    return response.text