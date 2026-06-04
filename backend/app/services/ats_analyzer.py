def analyze_resume(text: str):

    score = 0

    strengths = []
    weaknesses = []
    recommendations = []

    text = text.lower()

    # Education
    if "b.e" in text or "bachelor" in text:
        score += 15
        strengths.append(
            "Education section detected"
        )
    else:
        weaknesses.append(
            "Education section missing"
        )

    # Projects
    if "project" in text:
        score += 25
        strengths.append(
            "Projects section detected"
        )
    else:
        weaknesses.append(
            "Projects section missing"
        )

    # Skills
    skill_keywords = [
        "python",
        "sql",
        "react",
        "flutter",
        "aws",
        "firebase",
        "fastapi"
    ]

    found_skills = 0

    for skill in skill_keywords:

        if skill in text:
            found_skills += 1

    score += min(found_skills * 5, 25)

    if found_skills >= 3:
        strengths.append(
            "Good technical skill set"
        )
    else:
        weaknesses.append(
            "Limited technical skills detected"
        )

    # Certifications
    if "certificate" in text:
        score += 10
        strengths.append(
            "Certifications detected"
        )
    else:
        recommendations.append(
            "Add certifications"
        )

    # LinkedIn
    if "linkedin" not in text:
        recommendations.append(
            "Add LinkedIn profile"
        )

    # GitHub
    if "github" not in text:
        recommendations.append(
            "Add GitHub profile"
        )

    return {
        "ats_score": min(score, 100),
        "strengths": strengths,
        "weaknesses": weaknesses,
        "recommendations": recommendations
    }