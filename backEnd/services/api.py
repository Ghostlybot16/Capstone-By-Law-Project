import json

def load_json(file_path):
    """Load JSON data from a file."""
    with open(file_path, 'r', encoding='utf-8') as file:
        return json.load(file)

def search_by_keywords(data, keywords, max_results=5, truncate_length=150):
    """
    Search and rank content by relevance to the keywords.
    
    Args:
        data (list): Parsed JSON data.
        keywords (list): Keywords to search for.
        max_results (int): Maximum number of results to return per category.
        truncate_length (int): Length to truncate results for brevity.
    
    Returns:
        dict: Categorized and ranked results.
    """
    results = []

    for article in data:
        for section in article.get("sections", []):
            text = section["text"].lower()
            score = sum(text.count(keyword.lower()) for keyword in keywords)
            
            if score > 0:
                results.append({
                    "article": article["article"],
                    "section": section["section"],
                    "text": section["text"],
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
        categories[category] = [
            {
                "article": item["article"],
                "section": item["section"],
                "text": (item["text"][:truncate_length] + '...') if len(item["text"]) > truncate_length else item["text"]
            }
            for item in categories[category][:max_results]
        ]

    return categories

def generate_output(categories):
    """
    Generate structured output from the categorized results.
    
    Args:
        categories (dict): Filtered and categorized results.
    
    Returns:
        str: Formatted output string.
    """
    output = ["Structured Output:\n"]
    for category, items in categories.items():
        if items:
            output.append(f"{category}:\n")
            for item in items:
                article_info = f"({item['article']}, Section: {item['section']})"
                output.append(f"- {item['text']} {article_info}\n")

    # Add disclaimer
    disclaimer = (
        "\nFor more detailed inquiries or specific scenarios, consult the by-law directly or contact local authorities for clarification.\n\n"
        "Disclaimer: This information is for general informational purposes only. Please refer to official municipal sources for the most accurate and up-to-date information."
    )
    output.append(disclaimer)

    return "\n".join(output)

def main():
    """Main function to execute the workflow."""
    try:
        bylaws_data = load_json("bylaws.json")
    except FileNotFoundError:
        print("Error: The file 'bylaws.json' was not found. Ensure the file is in the correct location.")
        return

    # Get user input for keywords
    user_input = input("Enter keywords to search (comma-separated): ")
    keywords = [kw.strip() for kw in user_input.split(",") if kw.strip()]

    if not keywords:
        print("Error: No keywords provided. Please enter at least one keyword.")
        return

    # Search and filter results
    categorized_results = search_by_keywords(bylaws_data, keywords, max_results=5, truncate_length=150)

    # Generate and print structured output
    structured_output = generate_output(categorized_results)
    print("\n" + structured_output)

if __name__ == "__main__":
    main()