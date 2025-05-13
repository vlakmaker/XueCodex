FROM python:3.10-slim

WORKDIR /app

# Make sure requirements.txt is copied before anything else
COPY requirements.txt .

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the app (e.g., rag_api.py and site/)
COPY . .

# Start the FastAPI app with Uvicorn
CMD ["uvicorn", "rag_api.rag_api:app", "--host", "0.0.0.0", "--port", "8000"]