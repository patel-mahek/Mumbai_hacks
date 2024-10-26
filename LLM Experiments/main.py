import os
import google.generativeai as genai
from pdf_extractor import extract_text_from_pdf
from prompts import generate_lead_prompt, generate_customer_prompt, SYSTEM_PROMPT
from dotenv import load_dotenv

load_dotenv()

def main():
    # Load PDF and extract text
    pdf_path = "lead_profile.pdf"
    pdf_text = extract_text_from_pdf(pdf_path)

    # Configure Google Gemini client
    genai.configure(api_key=os.getenv("API_KEY"))

    # Choose the type of analysis (customer or lead)
    analysis_type = "lead"  # Change to "customer" if needed

    if analysis_type == "lead":
        user_prompt = generate_lead_prompt(pdf_text)
    elif analysis_type == "customer":
        user_prompt = generate_customer_prompt(pdf_text)
    else:
        raise ValueError("Invalid analysis type. Choose 'lead' or 'customer'.")

    # Create prompt message with system context
    prompt_message = f"{SYSTEM_PROMPT}\n\n{user_prompt}"

    # Call Gemini's generate_content method
    try:
        model = genai.GenerativeModel("gemini-1.5-pro-002")
        response = model.generate_content(prompt_message)

        # Print out the text response
        print("Response:", response.text)
    except Exception as e:
        print(f"Error during API call: {e}")


if __name__ == "__main__":
    main()
