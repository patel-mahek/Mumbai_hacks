# backend/app/main.py
from flask import Flask, request, jsonify
from transformers import pipeline
import torch
import logging

# Initialize Flask app
app = Flask(__name__)

# Initialize the LLM pipeline (distilbert sentiment analysis as an example)
model = pipeline(
    "text-classification",
    model="distilbert-base-uncased-finetuned-sst-2-english",
    device=0 if torch.cuda.is_available() else -1
)

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

@app.route("/", methods=["GET"])
def root():
    return jsonify({"message": "Backend is up and running!"})

@app.route("/query", methods=["POST"])
def get_llm_response():
    data = request.json
    if "query" not in data:
        return jsonify({"error": "No query provided"}), 400

    query = data["query"]
    try:
        # Process the query with the LLM model
        result = model(query)
        return jsonify({"response": result})
    except Exception as e:
        logger.error(f"Error processing query: {str(e)}")
        return jsonify({"error": str(e)}), 500

# For running directly
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=True)
