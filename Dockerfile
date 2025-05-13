# Dockerfile for RAG Backend
FROM python:3.10-slim

# Set working directory
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y build-essential && rm -rf /var/lib/apt/lists/*

# Install Python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application files
COPY . .

# Run the FastAPI app with Uvicorn
CMD ["uvicorn", "rag_api:app", "--host", "0.0.0.0", "--port", "8000"]
