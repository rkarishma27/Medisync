def analyze_risk(message: str, category: str):
    message_lower = message.lower()
    score = 0
    reasons = []

    # Clinical risk keywords
    clinical_keywords = [
        "pain", "bleeding", "emergency", "delay",
        "postponed", "surgery", "chemotherapy",
        "not treated", "waiting", "critical"
    ]

    insurance_keywords = [
        "insurance", "claim", "rejected",
        "denied", "approval", "policy"
    ]

    # Clinical risk scoring
    if category.lower() == "medical":
        score += 30
        reasons.append("Clinical-related issue")

        for word in clinical_keywords:
            if word in message_lower:
                score += 10
                reasons.append(f"Clinical keyword detected: {word}")

    # Insurance escalation
    for word in insurance_keywords:
        if word in message_lower:
            score += 15
            reasons.append(f"Insurance issue detected: {word}")

    # Delay detection
    if "delay" in message_lower or "postponed" in message_lower:
        score += 20
        reasons.append("Treatment delay detected")

    # Final risk level
    if score >= 70:
        risk_level = "PATIENT_SAFETY_RISK"
    elif score >= 40:
        risk_level = "CLINICAL_ATTENTION_NEEDED"
    elif score >= 20:
        risk_level = "ADMIN_PRIORITY"
    else:
        risk_level = "INFORMATIONAL"

    return {
        "risk_level": risk_level,
        "score": score,
        "reasons": reasons
    }
