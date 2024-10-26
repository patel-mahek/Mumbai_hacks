def generate_customer_prompt(document_text):
    """
    Generates a prompt for analyzing customer documents.

    Args:
        document_text (str): The extracted text from the PDF.

    Returns:
        str: The formatted customer analysis prompt.
    """
    return f"""
    Analyze the following customer document and extract key information into a structured format.

    Required Information:
    1. Basic Profile:
    - Full name
    - Contact details (email, phone)
    - Address
    - Age/DOB (if available)
    2. Cultural Context:
    - Primary language
    - Cultural preferences
    - Important dates/festivals
    3. Purchase Behavior:
    - Previous purchases
    - Preferred products/services
    - Price sensitivity
    - Shopping patterns
    4. Engagement Preferences:
    - Preferred communication channels
    - Best contact times
    - Language preferences
    - Special considerations

    Document:
    {document_text}

    Return the analysis in the following JSON format:
    {{
        "basic_profile": {{
            "full_name": string,
            "email": string|null,
            "phone": string|null,
            "address": string|null,
            "age_or_dob": string|null
        }},
        "cultural_context": {{
            "primary_language": string,
            "cultural_preferences": string[],
            "important_dates": string[]
        }},
        "purchase_behavior": {{
            "previous_purchases": string[],
            "preferred_products": string[],
            "price_sensitivity": "low"|"medium"|"high",
            "shopping_patterns": string[]
        }},
        "engagement_preferences": {{
            "preferred_channels": string[],
            "best_contact_times": string[],
            "special_considerations": string[]
        }},
        "key_insight": string
    }}
    """

def generate_lead_prompt(document_text):
    """
    Generates a prompt for analyzing lead documents.

    Args:
        document_text (str): The extracted text from the PDF.

    Returns:
        str: The formatted lead analysis prompt.
    """
    return f"""
    Analyze the following lead document and provide a comprehensive analysis for CRM purposes.

    Required Information:
    1. Lead Profile:
    - Full name
    - Contact information
    - Company/Organization
    - Position/Role
    2. Qualification Assessment:
    - Budget indicators
    - Authority level
    - Need/Pain points
    - Timeline indicators
    3. Engagement Strategy:
    - Recommended approach
    - Cultural considerations
    - Communication preferences
    - Potential objections
    4. Opportunity Analysis:
    - Conversion probability (%)
    - Potential deal size
    - Product/Service fit
    - Competition status

    Document:
    {document_text}

    Return the analysis in the following JSON format:
    {{
        "lead_profile": {{
            "full_name": string,
            "contact_info": {{
                "email": string|null,
                "phone": string|null
            }},
            "company": string|null,
            "position": string|null
        }},
        "qualification": {{
            "budget_range": string,
            "authority_level": "low"|"medium"|"high",
            "pain_points": string[],
            "timeline": string
        }},
        "engagement_strategy": {{
            "recommended_approach": string,
            "cultural_considerations": string[],
            "communication_preferences": string[],
            "potential_objections": string[]
        }},
        "opportunity_analysis": {{
            "conversion_probability": number,
            "potential_deal_size": string,
            "product_fit": string[],
            "competition_status": string
        }},
        "lead_status": "hot"|"warm"|"cold",
        "key_insight": string
    }}
    """

# System prompt to guide the model's behavior
SYSTEM_PROMPT = """
You are an expert CRM analyst specialized in extracting structured information from customer documents. 
Your analysis should be:
1. Precise and data-driven
2. Culturally sensitive and nuanced
3. Business-oriented with actionable insights
4. Consistent in JSON formatting

If certain information is not available, use null in the JSON rather than making assumptions.
Always maintain the specified JSON structure even if some fields lack data.
"""
