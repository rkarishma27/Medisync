from transformers import pipeline

_classifier = None

def get_classifier():
    global _classifier
    if _classifier is None:
        _classifier = pipeline(
            "zero-shot-classification",
            model="facebook/bart-large-mnli"
        )
    return _classifier


def classify_ticket_nlp(text: str):
    classifier = get_classifier()
    labels = ["Billing", "Insurance", "Medical", "Technical", "Fraud"]
    result = classifier(text, labels)
    return {
        "category": result["labels"][0],
        "confidence": float(result["scores"][0])
    }
