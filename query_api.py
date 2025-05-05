from langchain_community.vectorstores import FAISS
from langchain_community.embeddings import HuggingFaceBgeEmbeddings
from langchain_community.document_loaders import DirectoryLoader
from langchain_community.llms import OpenAI
from langchain.prompts import PromptTemplate
from langchain.chains import RetrievalQA
from langchain_community.chat_models import ChatOpenAI

import os
from dotenv import load_dotenv

# 🔧 Load .env with OPENROUTER_API_KEY
load_dotenv()
os.environ["OPENAI_API_BASE"] = "https://openrouter.ai/api/v1"
os.environ["OPENAI_API_KEY"] = os.getenv("OPENROUTER_API_KEY")

# 📚 Load and embed documents
print("🔎 Loading documents from 'site/docs'...")
loader = DirectoryLoader("./site/docs", glob="**/*.md")
docs = loader.load()

print(f"📄 Loaded {len(docs)} documents. Embedding...")

embedding_model = HuggingFaceBgeEmbeddings(
    model_name="BAAI/bge-small-en-v1.5",
    encode_kwargs={"normalize_embeddings": True},
)

db = FAISS.from_documents(docs, embedding_model)
retriever = db.as_retriever(search_kwargs={"k": 4})

# 💬 Set up the RAG chain with OpenRouter
llm = ChatOpenAI(
    openai_api_base="https://openrouter.ai/api/v1",
    openai_api_key=os.getenv("OPENROUTER_API_KEY"),
    model="mistralai/mistral-7b-instruct",  # or your preferred model
    temperature=0
)

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

qa_chain = RetrievalQA.from_chain_type(
    llm=llm,
    retriever=retriever,
    chain_type="stuff",
    chain_type_kwargs={"prompt": prompt},
)

# 🚀 Interactive RAG-based querying
print("\n🧠 Ask a question based on your docs. Type 'exit' to quit.\n")
while True:
    user_input = input("🔍 Your question: ")
    if user_input.lower() in ["exit", "quit"]:
        break
    response = qa_chain.invoke({"query": user_input})
    print(f"\n📘 Answer: {response['result']}\n")
