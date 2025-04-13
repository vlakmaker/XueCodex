from langchain.vectorstores import FAISS
from langchain.embeddings import OpenAIEmbeddings
import os

# Initialize the embedding model (you can swap this out for others later)
embedding_model = OpenAIEmbeddings()

# Create the FAISS vector store from the chunks
vectorstore = FAISS.from_documents(chunks, embedding_model)

# Save the index to disk so you don’t have to rebuild it every time
vectorstore.save_local("xuecodex_index")

print("✅ Vector store created and saved as 'xuecodex_index/'")
