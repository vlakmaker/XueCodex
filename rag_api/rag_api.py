from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from langchain_community.vectorstores import FAISS
from langchain_community.embeddings import HuggingFaceBgeEmbeddings
from langchain_community.document_loaders import DirectoryLoader
from langchain_community.chat_models import ChatOpenAI
from langchain.prompts import PromptTemplate
from langchain.chains import RetrievalQA
from fastapi import HTTPException  # make sure this is imported
import os

app = FastAPI()

# 🌍 CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all for dev; tighten later
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 📦 Input model
class AskRequest(BaseModel):
    api_key: str
    question: str

# 📚 Load and embed docs once
print("🔎 Loading and embedding documents...")
loader = DirectoryLoader("./site/docs", glob="**/*.md")
docs = loader.load()

embedding_model = HuggingFaceBgeEmbeddings(
    model_name="BAAI/bge-small-en-v1.5",
    encode_kwargs={"normalize_embeddings": True},
)

db = FAISS.from_documents(docs, embedding_model)
retriever = db.as_retriever(search_kwargs={"k": 4})

# 🧠 Prompt template
template = """Answer the question based only on the provided context.

Context:
{context}

Question:
{question}

Answer:"""

prompt = PromptTemplate(
    input_variables=["context", "question"],
    template=template,
)

@app.post("/ask")
def ask(request: AskRequest):
    try:
        qa = RetrievalQA.from_chain_type(
            llm=ChatOpenAI(
                openai_api_key=request.api_key,
                openai_api_base="https://openrouter.ai/api/v1",
                model="mistralai/mistral-7b-instruct",
            ),
            chain_type="stuff",
            retriever=retriever,
            return_source_documents=True,
        )

        result = qa({"query": request.question})

        sources = [
            f"https://xuecodex.tech/docs/{doc.metadata['source'].replace('site/docs/', '').replace('.md', '')}"
            for doc in result["source_documents"]
            if "source" in doc.metadata
        ]

        return {
            "answer": result["result"],
            "sources": list(set(sources)),
        }

    except Exception as e:
        print("❌ Internal server error:", e)
        raise HTTPException(status_code=500, detail=str(e))
