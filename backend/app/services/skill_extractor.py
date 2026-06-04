def extract_skills(text: str):

    skill_database = [
        "Python",
        "JavaScript",
        "SQL",
        "MySQL",
        "PostgreSQL",
        "React.js",
        "Flutter",
        "FastAPI",
        "Firebase",
        "AWS",
        "Git",
        "GitHub",
        "Docker",
        "DSA",
        "System Design",
        "Cybersecurity",
        "Networking",
        "REST APIs"
    ]

    found_skills = []

    text_lower = text.lower()

    for skill in skill_database:

        if skill.lower() in text_lower:
            found_skills.append(skill)

    return list(set(found_skills))