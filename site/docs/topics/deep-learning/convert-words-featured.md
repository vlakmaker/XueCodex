---
id: "convert-words-features"
title: "Converting Words to Features in NLP"
tags: [deep learning, neural networks, words]
---
# **Converting Words to Features in NLP**

### 🟢 1. **One-Hot Encoding**

**What it is:**

A way to represent words as vectors with the same length as the vocabulary size. Each word is assigned a unique index. The one-hot vector has a 1 at the index of that word and 0s elsewhere.

**Example:**

Vocabulary = "I","like","cats""I", "like", "cats""I","like","cats"

- "I" → 1,0,01, 0, 01,0,0
- "like" → 0,1,00, 1, 00,1,0
- "cats" → 0,0,10, 0, 10,0,1

**Why it’s used:**

It's easy to understand and implement. It ensures each word has a unique representation.

**Limitations:**

- Doesn’t capture meaning or similarity (e.g., “cat” and “kitten” are just as unrelated as “cat” and “banana”).
- High memory usage with large vocabularies (sparse vectors).

---

### 🟢 2. **Bag of Words (BoW)**

**What it is:**

A way to represent a whole sentence or document as a single vector. You sum or average the one-hot vectors of all the words in the sentence.

**Example:**

Sentence: "I like cats"

- BoW vector = 1,1,11, 1, 11,1,1 (just sum of the individual one-hot vectors)

**Why it’s used:**

Gives a simple summary of word presence/frequency in a document.

**Limitations:**

- Word order is lost.
- Still uses sparse vectors.
- No semantic information.

---

### 🟢 3. **Embeddings**

**What it is:**

Instead of sparse one-hot vectors, embeddings map words to dense vectors in a lower-dimensional space. Each word gets a vector of, say, 50 or 100 dimensions, learned during training.

**Example:**

- "cat" → 0.23,−1.5,0.88,...0.23, -1.5, 0.88, ...0.23,−1.5,0.88,...
- "kitten" might have a similar vector, capturing their semantic closeness.

**Implemented via:**

An **embedding matrix**, where:

- Rows = words
- Columns = embedding dimensions
    
    (If 10,000 words in vocab and 100-dim embeddings, matrix = 10,000 × 100)
    

**Advantages:**

- Captures similarity between words.
- Efficient: low-dimensional and dense.
- Learnable: vectors are trained during model training.

---

### 🟢 4. **Embedding Bag**

**What it is:**

An efficient way to combine multiple word embeddings (from a sentence or document) into one vector by summing or averaging them, **without manually handling one-hot vectors**.

**Why it’s better than BoW:**

- Works directly with token indices.
- Avoids overhead of creating/summing one-hot vectors.
- Built-in support for batching multiple documents with offsets.

**Offsets:**

In a batched setting (e.g., 3 documents):

- Index tensor = all token indices across all docs.
- Offset tensor = starting index of each doc in the index tensor.

**PyTorch class:**

`nn.EmbeddingBag(num_embeddings, embedding_dim, mode='mean')`

Mode can be `'sum'`, `'mean'`, or `'max'`.

---

### 🔧 5. **Using Embeddings in PyTorch**

**Steps:**

1. **Tokenization:** Break text into words.
2. **Vocabulary creation:** Assign an index to each word.
3. **Embedding layer:** `nn.Embedding(vocab_size, embed_dim)` maps token indices to vectors.
4. **EmbeddingBag layer (optional):** `nn.EmbeddingBag(...)` aggregates word embeddings for whole sentences or documents efficiently.
5. **Feeding to a model:** These dense vectors go into your neural network as features.

**Example Code Snippet:**

```python
python
CopyEdit
embedding = nn.Embedding(num_embeddings=10_000, embedding_dim=100)
indices = torch.tensor([1, 5, 8])  # e.g., "I like cats"
output = embedding(indices)

```

**With EmbeddingBag:**

```python
python
CopyEdit
embedding_bag = nn.EmbeddingBag(num_embeddings=10_000, embedding_dim=100, mode='mean')
indices = torch.tensor([1, 5, 8, 2, 3, 6])  # tokens from multiple docs
offsets = torch.tensor([0, 3])  # starting positions for each doc
output = embedding_bag(indices, offsets)

```

---

## ✅ **Summary Recap**

| Concept | Purpose | Pros | Cons |
| --- | --- | --- | --- |
| One-Hot Encoding | Represent each word as unique ID | Simple, fast for small vocab | Sparse, doesn’t capture meaning |
| Bag of Words | Represent a document as word count | Easy doc-level summary | Loses order, sparse, no context |
| Embeddings | Dense word representation | Captures similarity, efficient, trainable | Needs training or pre-trained vectors |
| Embedding Bag | Efficient aggregated embeddings | Great for sentence/doc-level input, fast |  |