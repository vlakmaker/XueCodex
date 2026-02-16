---
id: "document-categorization-prediction"
title: "Converting Words to Features in NLP"
tags: [deep learning, neural networks, words]
---
# **“Document Categorization Prediction with TorchText”**

---

### 🧠 1. **Document Classifier Overview**

A **document classifier** is a model that takes raw text (like news articles) and predicts which category it belongs to — e.g., *sports*, *business*, or *science*.

- **Input:** Raw text
- **Output:** A predicted class label (e.g., “sports”)
- **How:** Converts text → numbers → applies neural network → outputs classification

---

### 🔢 2. **Neural Network Basics**

A **neural network** is a function made up of layers of connected “neurons” (really just numbers and matrix operations). Here’s how the flow works:

### 🔹 Layers in a Neural Network:

- **Input Layer:**
    
    Accepts a numeric representation of the text (e.g., bag-of-words or embeddings).
    
- **Hidden Layers:**
    
    Perform matrix multiplication and apply activation functions like ReLU or sigmoid. These layers “learn” internal features.
    
- **Output Layer:**
    
    Produces a vector of **logits** — one number per possible class.
    

### 🔹 Logits:

- Raw, unnormalized scores (can be negative or positive).
- Not probabilities — just signals for classification.

### 🔹 Argmax Function:

- Applied to the output logits.
- Returns the **index** of the largest value — this corresponds to the predicted class.

---

### ⚙️ 3. **Hyperparameters**

**Hyperparameters** are configurations **you set manually** when designing a neural network. Common ones include:

| Hyperparameter | Description |
| --- | --- |
| **Number of hidden layers** | Depth of the network |
| **Neurons per layer** | Width or complexity per layer |
| **Embedding dimension** | Size of the dense word vector |
| **Number of output classes** | Equals the number of possible categories (e.g., 4 for news: world, sports, business, tech) |

These are **not** learned — you tune them using validation data.

---

### 🧰 4. **PyTorch Implementation Overview**

### 🔹 Dataset: **AG News Dataset**

- Each row = (label, text)
- Labels are mapped to categories like:
    - 0 = World
    - 1 = Sports
    - 2 = Business
    - 3 = Science & Tech

### 🔹 Processing Pipeline:

1. **Tokenization** → Convert raw text into tokens (e.g., “I like cats” → “I”,“like”,“cats”“I”, “like”, “cats”“I”,“like”,“cats”).
2. **Vocabulary** → Each token gets an index.
3. **Indexing** → Tokens in text are replaced with their corresponding index.
4. **Offsets** → Track where each document starts in a flattened tensor.

---

### 🧱 5. **Model Architecture**

### 🔸 1. **Embedding Bag Layer**

- Similar to `nn.Embedding` but directly aggregates multiple tokens into one vector (by summing or averaging).
- Input: token indices and offsets
- Output: single vector for the document

### 🔸 2. **Fully Connected (Linear) Layer**

- Maps the aggregated vector to output logits (one per category).

```python
class TextClassificationModel(nn.Module):
    def __init__(self, vocab_size, embed_dim, num_class):
        super().__init__()
        self.embedding = nn.EmbeddingBag(vocab_size, embed_dim, sparse=True)
        self.fc = nn.Linear(embed_dim, num_class)

    def forward(self, text, offsets):
        embedded = self.embedding(text, offsets)
        return self.fc(embedded)

```

---

### 🧪 6. **Prediction Workflow**

- Input: Tokenized and indexed text + offset
- Pass through embedding bag → get dense representation
- Pass through fully connected layer → get logits
- Apply **argmax** → get predicted class

```python
output = model(text_tensor, offset_tensor)
prediction = torch.argmax(output, dim=1)

```

---

### 🔄 7. **Batching**

- Batching is used to process multiple documents at once.
- Use PyTorch’s `DataLoader` to batch inputs.
- Create a **batch function** that:
    - Flattens text indices from all samples into one tensor.
    - Adds an offset to mark where each sample starts.

---

## ✅ Recap Summary

| Concept | Explanation |
| --- | --- |
| **Neural Network** | Transforms numeric input into a classification through layers of weights and activations |
| **Embedding Bag** | Maps word indices to dense vectors and aggregates them for full documents |
| **Logits** | Raw output scores (one per class), used before applying argmax |
| **Argmax** | Selects the index of the highest logit to predict the document’s class |
| **Hyperparameters** | Settings like number of layers, neurons, and embedding size, manually tuned |
| **Text Pipeline** | Tokenization → Indexing → Offsets → Embedding → Classification |
| **Batching** | Combines multiple samples for efficient processing with `offsets` to track each |