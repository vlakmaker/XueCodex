import os
from dotenv import load_dotenv
from langchain_community.document_loaders import DirectoryLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain_community.vectorstores import FAISS
from langchain_core.prompts import PromptTemplate
from langchain_core.runnables import RunnableMap
from langchain_community.chat_models import ChatOpenAI
from langchain.chains import RetrievalQA

# 🔑 Load OpenRouter API key
load_dotenv()
api_key = os.getenv("OPENROUTER_API_KEY")

# 🧠 Step 1: Load and split your notes
loader = DirectoryLoader("/home/vlakmaker/XueCodex/site/docs", glob="**/*.md", show_progress=True)
docs = loader.load()

splitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=50)
chunks = splitter.split_documents(docs)

# 🧲 Step 2: Embed and store in FAISS
embedding_model = HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")
vectorstore = FAISS.from_documents(chunks, embedding_model)
vectorstore.save_local("xuecodex_index")

print("✅ Vector store built and saved!")

# 🔁 Step 3: Ask a question!
retriever = vectorstore.as_retriever(search_kwargs={"k": 4})

llm = ChatOpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key=api_key,
    model="mistralai/mistral-7b-instruct",  # You can swap this anytime
    temperature=0.2
)

qa_chain = RetrievalQA.from_chain_type(
    llm=llm,
    retriever=retriever,
    return_source_documents=True
)

# 🔍 Ask your Codex
while True:
    query = input("\n💬 Ask XueCodex: ")
    if query.lower() in ["exit", "quit"]:
        break
    result = qa_chain(query)

    print("\n🧠 Answer:\n", result["result"])
    print("\n📚 Sources:")
    for doc in result["source_documents"]:
        print("—", doc.metadata["source"])
