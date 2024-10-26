from typing import List, Optional
from pydantic import BaseModel

class CustomerSchema(BaseModel):
    id: Optional[int]
    region: str
    subscription_length: int
    monthly_bill: float
    total_usage: float
    
    class Config:
        from_attributes = True

class PredictionSchema(BaseModel):
    customer_id: int
    churn_probability: float
    recommendations: List[str]