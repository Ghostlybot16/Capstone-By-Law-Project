from flask import Flask, request, jsonify
import spacy 

# Load the SpaCy language model 
nlp = spacy.load("en_core_web_sm")

# Initialize Flask app
app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    return "Flask server is running"

# Define a route to process keywords 
@app.route('/processKeywords', methods=['POST'])

def process_keywords():
    
    # Get the keyword from the JSON request 
    data = request.get_json()
    keywords = data.get("keywords", [])
    
    # Process each keyword with SpaCy to extract related terms 
    processed_keywords = [f"processed_{keyword.strip()}" for keyword in keywords]
    
    # Return each keyword by prefixing with "processed_" as a placeholder
    return jsonify({
        "original_keywords": keywords,
        "processed_keywords": processed_keywords
    })
# Run the app
if __name__ == "__main__":
    app.run(port=5000, host="0.0.0.0")