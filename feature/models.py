from pydantic import BaseModel
from typing import List, Optional, Dict

class CustomerBase(BaseModel):
    region: str
    subscription_length: int
    monthly_bill: float
    total_usage: float

class ChurnPrediction(BaseModel):
    churn_probability: float
    recommendations: List[str]
    regional_insights: Optional[Dict]
    customer_segment: str

class RegionalInsights(BaseModel):
    region: str
    festivals: List[str]
    peak_seasons: List[str]
    common_concerns: List[str]