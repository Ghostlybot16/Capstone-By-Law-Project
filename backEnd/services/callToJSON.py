from flask import Flask, request, jsonify
import json
from api import search_by_keywords

app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    return "JSON-based search service is running!"

@app.route('/processJSON', methods=['POST'])
def process_json():
    
    # Handles keyword search requests on JSON data.
    data = request.get_json()
    keywords = data.get("keywords", [])

    try:
        # Load by-laws data
        bylaws_data = load_json("bylaws.json")
        
        # Search by keywords
        categorized_results = search_by_keywords(bylaws_data, keywords, max_results=5, truncate_length=150)

        return jsonify(categorized_results)
    except Exception as e:
        return jsonify({"error": f"An error occurred: {str(e)}"}), 500

def load_json(file_path):
    # Helper function to load JSON data
    with open(file_path, 'r', encoding='utf-8') as file:
        return json.load(file)

if __name__ == "__main__":
    app.run(port=5000, host="0.0.0.0")
