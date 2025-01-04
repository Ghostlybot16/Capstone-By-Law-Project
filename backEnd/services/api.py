from sentence_transformers import SentenceTransformer, util

# Load the SentenceTransformer model once
model = SentenceTransformer("all-MiniLM-L6-v2")

def search_by_keywords(data, keywords, max_results=5):
    """
    Search and rank content by semantic similarity to the keywords.
    """
    # Combine keywords into a query string
    query = " ".join(keywords)
    query_embedding = model.encode(query, convert_to_tensor=True)

    results = []

    for article in data:
        for section in article.get("sections", []):
            section_text = section["text"]

            # Generate embedding for the section
            section_embedding = model.encode(section_text, convert_to_tensor=True)

            # Compute semantic similarity
            score = util.pytorch_cos_sim(query_embedding, section_embedding).item()

            # Add to results if similarity is above a threshold
            if score > 0.3:  # Minimum similarity threshold
                results.append({
                    "article": article["article"],
                    "section": section["section"],
                    "text": section_text,
                    "score": score
                })

    # Sort results by score in descending order
    results = sorted(results, key=lambda x: x["score"], reverse=True)

    # Categorize results
    categories = {
        "General Information": [],
        "Fees and Time Limits": [],
        "Permits and Accessibility": [],
        "Safety and Loading Zones": []
    }

    for result in results:
        text = result["text"].lower()
        if any(kw in text for kw in ["fee", "time limit"]):
            categories["Fees and Time Limits"].append(result)
        elif any(kw in text for kw in ["permit", "accessibility"]):
            categories["Permits and Accessibility"].append(result)
        elif any(kw in text for kw in ["safety", "loading zone"]):
            categories["Safety and Loading Zones"].append(result)
        else:
            categories["General Information"].append(result)

    # Limit entries per category and truncate text
    for category in categories:
        categories[category] = categories[category][:max_results]

    return categories
