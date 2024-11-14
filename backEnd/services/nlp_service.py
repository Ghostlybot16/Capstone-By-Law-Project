from flask import Flask, request, jsonify
import spacy 

# Load the SpaCy language model 
nlp = spacy.load("en_core_web_sm")

# Initialize Flask app
app = Flask(__name__)

# Define a route to process keywords 
@app.route('/processKeywords', methods=['POST'])

def process_keywords():
    
    # Get the keyword from the JSON request 
    data = request.get_json()
    keywords = data.get("keywords", [])
    
    # Process each keyword with SpaCy to extract related terms 
    processed_keywords = []
    for keyword in keywords:
        doc = nlp(keyword)
        for token in doc:
            processed_keywords.append(token.lemma_)
    
    # Return the processed keywords as JSON
    return jsonify({
        "original_keywords": keywords,
        "processed_keywords": processed_keywords
    })
    

# Run the app
if __name__ == "__main__":
    app.run(port=5000)