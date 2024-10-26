import torch
from transformers import pipeline
from typing import Dict, List

class CRMModel:
    def __init__(self):
        self.model = pipeline(
            "text-classification",
            model="distilbert-base-uncased-finetuned-sst-2-english",
            device=0 if torch.cuda.is_available() else -1
        )
        
        self.regional_insights = {
            "Maharashtra": {
                "festivals": ["Ganesh Chaturthi", "Diwali"],
                "peak_seasons": ["Oct-Nov", "Aug-Sep"],
                "common_concerns": ["Network Coverage", "Data Speed"]
            },
            "Delhi": {
                "festivals": ["Diwali", "Durga Puja"],
                "peak_seasons": ["Oct-Nov", "Mar-Apr"],
                "common_concerns": ["Call Quality", "Customer Service"]
            }
        }
    
    def predict_churn(self, customer_data: Dict) -> Dict:
        # Convert customer data to text format
        text = f"""
        Region: {customer_data['region']}
        Subscription Length: {customer_data['subscription_length']} months
        Monthly Bill: ₹{customer_data['monthly_bill']}
        Total Usage: {customer_data['total_usage']} GB
        """
        
        prediction = self.model(text)
        churn_prob = float(prediction[0]['score'])
        
        return {
            "churn_probability": churn_prob,
            "recommendations": self._generate_recommendations(customer_data),
            "regional_insights": self.regional_insights.get(customer_data['region'], {}),
            "customer_segment": self._determine_segment(customer_data)
        }
    
    def _generate_recommendations(self, data: Dict) -> List[str]:
        recommendations = []
        
        if data['monthly_bill'] > 1000:
            recommendations.append("Consider offering a loyalty discount")
        if data['total_usage'] < 30:
            recommendations.append("Suggest usage-appropriate plans")
        if data['subscription_length'] > 12:
            recommendations.append("Offer premium service upgrades")
            
        return recommendations
    
    def _determine_segment(self, data: Dict) -> str:
        if data['monthly_bill'] > 1500:
            return "Premium"
        elif data['monthly_bill'] > 800:
            return "Regular"
        return "Basic"
