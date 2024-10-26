# app.py
import os
import tempfile
from flask import Flask, request, jsonify
import google.generativeai as genai
from config import Config
from pdf_extractor import extract_text_from_pdf
from prompts import generate_lead_prompt, generate_customer_prompt, SYSTEM_PROMPT

app = Flask(__name__)

# Configure Google Gemini
genai.configure(api_key=Config.GEMINI_API_KEY)

@app.route('/process_pdf', methods=['POST'])
def process_pdf():
    """
    Endpoint to process uploaded PDF and return extracted data as JSON.
    Expects:
        - 'file': The uploaded PDF file.
        - 'type': The type of document ('lead' or 'customer').
    """
    if 'file' not in request.files:
        return jsonify({'error': 'No file part in the request'}), 400

    file = request.files['file']
    doc_type = request.form.get('type', '').lower()

    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    if doc_type not in ['lead', 'customer']:
        return jsonify({'error': "Invalid type. Must be 'lead' or 'customer'."}), 400

    # Save the file temporarily
    with tempfile.NamedTemporaryFile(delete=False, suffix=".pdf") as tmp:
        file.save(tmp.name)
        temp_path = tmp.name

    try:
        # Extract text from PDF
        pdf_text = extract_text_from_pdf(temp_path)
        if not pdf_text:
            return jsonify({'error': 'Failed to extract text from PDF'}), 500

        # Generate appropriate prompt
        if doc_type == 'lead':
            user_prompt = generate_lead_prompt(pdf_text)
        else:
            user_prompt = generate_customer_prompt(pdf_text)

        # Combine system prompt and user prompt
        prompt_message = f"{SYSTEM_PROMPT}\n\n{user_prompt}"

        # Initialize the model
        model = genai.GenerativeModel("gemini-1.5-flash")

        # Call Gemini's generate_content method
        response = model.generate_content(prompt_message)

        # Extract the text response
        response_text = response.text

        # Here you can add additional parsing if necessary
        # For now, we assume the response is JSON formatted as requested

        # Attempt to parse JSON from the response
        try:
            extracted_data = response_text.strip()
            # Sometimes the model might add extra text, so we attempt to extract JSON
            import json
            start = extracted_data.find('{')
            end = extracted_data.rfind('}') + 1
            json_str = extracted_data[start:end]
            data = json.loads(json_str)
        except json.JSONDecodeError as e:
            return jsonify({'error': 'Failed to parse JSON from AI response', 'details': str(e), 'response': response_text}), 500

        return jsonify(data), 200

    except Exception as e:
        return jsonify({'error': 'An error occurred during processing', 'details': str(e)}), 500

    finally:
        # Delete the temporary file
        if os.path.exists(temp_path):
            os.remove(temp_path)

if __name__ == '__main__':
    # Run the Flask app
    app.run(host='0.0.0.0', port=5000, debug=True)
