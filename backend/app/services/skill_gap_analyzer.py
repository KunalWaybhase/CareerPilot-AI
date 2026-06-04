def analyze_skill_gap(
    target_role: str,
    skills_found: list
):

    role_requirements = {

        "Backend Developer": [
            "Python",
            "SQL",
            "PostgreSQL",
            "FastAPI",
            "Git",
            "Docker",
            "REST APIs"
        ],

        "Frontend Developer": [
            "JavaScript",
            "React.js",
            "Git",
            "HTML",
            "CSS"
        ],

        "Data Scientist": [
            "Python",
            "SQL",
            "Machine Learning",
            "Statistics",
            "Pandas"
        ]
    }

    required_skills = role_requirements.get(
        target_role,
        []
    )

    strengths = []

    missing_skills = []

    for skill in required_skills:

        if skill in skills_found:
            strengths.append(skill)

        else:
            missing_skills.append(skill)

    readiness_score = 0

    if len(required_skills) > 0:

        readiness_score = int(
            (
                len(strengths)
                / len(required_skills)
            )
            * 100
        )

    job_ready = readiness_score >= 80

    return {
        "target_role": target_role,
        "required_skills": required_skills,
        "skills_found": skills_found,
        "strengths": strengths,
        "missing_skills": missing_skills,
        "readiness_score": readiness_score,
        "job_ready": job_ready
    }