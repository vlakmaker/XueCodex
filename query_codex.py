from langchain_community.document_loaders import DirectoryLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter

# Load all .md and .txt files from your knowledge folder
loader = DirectoryLoader("./site/docs", glob="**/*.md", show_progress=True)
docs = loader.load()

# Split documents into chunks for embedding
splitter = RecursiveCharacterTextSplitter(
    chunk_size=500,
    chunk_overlap=50
)
chunks = splitter.split_documents(docs)

print(f"Loaded {len(docs)} documents.")
print(f"Split into {len(chunks)} chunks.")
