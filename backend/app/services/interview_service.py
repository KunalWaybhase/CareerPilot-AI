from app.services.gemini_service import model


def generate_interview_questions(
    target_role: str
):

    prompt = f"""
    Act as a senior technical interviewer.

    Generate 10 interview questions for a
    {target_role} position.

    Include:
    - Beginner questions
    - Intermediate questions
    - Practical questions

    Return only the questions.
    """

    response = model.generate_content(
        prompt
    )

    return response.text
def evaluate_answer(
    question: str,
    answer: str
):

    prompt = f"""
    Act as a senior technical interviewer.

    Question:
    {question}

    Candidate Answer:
    {answer}

    Evaluate the answer.

    Return:

    Score out of 10

    Strengths

    Weaknesses

    Improvement Suggestions
    """

    response = model.generate_content(
        prompt
    )

    return response.text