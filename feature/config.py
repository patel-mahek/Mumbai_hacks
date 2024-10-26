from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    API_V1_STR: str = "/api/v1"
    PROJECT_NAME: str = "CRM Analysis System"
    CORS_ORIGINS: list = ["http://localhost:8000"]
    MODEL_PATH: str = "models/llama_crm_model"
    
    class Config:
        env_file = ".env"

settings = Settings()