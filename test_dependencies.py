# test_dependencies.py
required_modules = [
    "dotenv",
    "langchain",
    "langchain_community",
    "faiss-cpu",
    "sentence_transformers",
    "openai",  # Needed for ChatOpenAI base class
    "unstructured",
]

print("🧪 Checking required Python modules...")
for module in required_modules:
    try:
        __import__(module.replace("-", "_"))
        print(f"✅ {module}")
    except ImportError:
        print(f"❌ {module} NOT INSTALLED")