---
id: "embeddings"
title: "What Are Embeddings?"
tags: [ai-fundamentals, embeddings, representation, core-concept]
---
### 🗺️ **What Are Embeddings?**

> Embeddings are how AI represents things (words, letters, images, concepts) as lists of numbers — positions in a space where proximity means similarity.

Computers don't understand words. They understand numbers. Embeddings are the bridge: they turn meaningful things into numerical positions where **similar things end up close together** and **different things end up far apart**.

---

### ♟️ **The Chessboard Metaphor**

Imagine a chessboard — but instead of 8×8, it has many dimensions. Every word (or letter, or concept) gets placed on this board.

**Before training:** everything is placed **randomly**. The word "king" might be next to "banana" and far from "queen." Meaningless.

**After training:** the board has reorganized itself:
- "king" and "queen" are close together (both royalty)
- "cat" and "dog" are close together (both pets)
- "banana" is near "apple" (both fruits)
- "banana" is far from "queen" (unrelated)

**📌 An embedding is a position on the board. Training moves things into meaningful positions.**

---

### 🔢 **What Does an Embedding Look Like?**

An embedding is just a list of numbers — called a **vector**. Each number is a dimension.

2D example (simplified):

```
"cat"    → [0.2, 0.8]
"dog"    → [0.3, 0.7]
"banana" → [0.9, 0.1]
```

In this space, "cat" and "dog" are close. "banana" is far away.

Real embeddings have many more dimensions:

| Model | Embedding Dimensions |
| --- | --- |
| **Word2Vec** | 100–300 |
| **GPT-2** | 768 |
| **GPT-3** | 12,288 |
| **MicroGPT (Karpathy)** | 16 |

More dimensions = more room to capture subtle relationships.

**📌 You don't need to visualize 768 dimensions. Just know: more dimensions = richer representation.**

---

### 📐 **Types of Embeddings**

| Type | What Gets Embedded | Used In |
| --- | --- | --- |
| **Word embeddings** | Individual words → vectors | Word2Vec, GloVe |
| **Token embeddings** | Subword tokens → vectors | GPT, BERT, all modern LLMs |
| **Positional embeddings** | Position in a sequence → vectors | Transformers (so "bank" in position 1 differs from "bank" in position 5) |
| **Sentence embeddings** | Entire sentences → single vector | Semantic search, RAG systems |
| **Image embeddings** | Images → vectors | CLIP, image search |

---

### 🧮 **How Are Embeddings Created?**

There are two main approaches:

**1. Learned from scratch (during training)**

The model starts with random vectors and adjusts them as it trains. This is what happens in GPT:

```
# Every character gets a row of random numbers
embedding_table = [
    [0.02, -0.05, 0.01, ...],  # 'a'
    [0.08, -0.03, 0.06, ...],  # 'b'
    [0.04,  0.01, 0.03, ...],  # 'c'
    ...
]
```

During training, backpropagation nudges these numbers until they capture real relationships.

**2. Pre-trained (and reused)**

Someone else already trained embeddings on massive data. You download them and use them directly:

```python
from gensim.models import KeyedVectors
model = KeyedVectors.load_word2vec_format('GoogleNews-vectors.bin')
model.most_similar('king')  # → [('queen', 0.71), ('prince', 0.68), ...]
```

---

### ⚡ **The Famous Example: Word Arithmetic**

One of the most striking properties of well-trained embeddings:

```
king - man + woman ≈ queen
```

This works because the embedding space has learned that "king" and "queen" differ in the same way that "man" and "woman" differ — along a "gender" direction in the space.

Other examples:

| Operation | Result |
| --- | --- |
| `Paris - France + Italy` | ≈ `Rome` |
| `bigger - big + small` | ≈ `smaller` |
| `walking - walk + swim` | ≈ `swimming` |

**📌 Good embeddings don't just place things — they capture relationships as directions in space.**

---

### 🧩 **Token Embeddings + Positional Embeddings**

In transformer models like GPT, every token gets **two** embeddings combined:

**Token embedding:** "What letter/word is this?"

```
'e' → [0.2, 0.5, -0.1, 0.3, ...]
```

**Positional embedding:** "Where in the sequence is it?"

```
position 0 → [0.1, -0.2, 0.4, 0.0, ...]
position 1 → [0.3,  0.1, 0.2, 0.5, ...]
```

**Combined:** "This is the letter 'e' at position 0"

```
'e' at position 0 → [0.3, 0.3, 0.3, 0.3, ...]  # token + position added together
```

This matters because the same letter means different things in different positions. The `m` at the start of a name behaves differently from the `m` in the middle.

**📌 Token embedding = what it is. Positional embedding = where it is. The model needs both.**

---

### 📏 **Measuring Similarity**

How do you measure "closeness" on the board? Two common methods:

**Cosine similarity:** Measures the angle between two vectors.
- `1.0` = identical direction (very similar)
- `0.0` = perpendicular (unrelated)
- `-1.0` = opposite (antonyms sometimes)

**Euclidean distance:** Measures straight-line distance between two points.
- Small distance = similar
- Large distance = different

| Method | What It Measures | Range | Used In |
| --- | --- | --- | --- |
| **Cosine similarity** | Direction alignment | -1 to 1 | Semantic search, RAG |
| **Euclidean distance** | Straight-line distance | 0 to ∞ | Clustering, k-NN |

**📌 When you do semantic search in XueCodex's RAG system, it's comparing embedding vectors using one of these methods.**

---

### 🗃️ **Embedding Databases (Vector Stores)**

Once you have embeddings, you need somewhere to store and search them. This is what **vector databases** do:

| Tool | Type | Used For |
| --- | --- | --- |
| **FAISS** | Library (Meta) | Fast similarity search — used in XueCodex |
| **Pinecone** | Managed service | Production RAG systems |
| **ChromaDB** | Open source | Local development and prototyping |
| **Weaviate** | Open source | Scalable vector + keyword search |

These databases are optimized for one operation: "given this vector, find the most similar vectors in the database." That's the core of RAG retrieval.

---

### 🎯 **Why It Matters to You**

- **XueCodex's RAG search** works by embedding your query and finding the most similar knowledge items — that's vector similarity in action
- **AIropa's classifier** uses embeddings under the hood when the LLM processes article text
- When you eventually fine-tune or train local models, you'll be **adjusting these embedding tables directly**
- Understanding embeddings is the bridge between "I can call an API" and "I understand what the model is doing with my data"

---

### ✨ Bitty Bonus Recap Spell

> "Embeddings are the chessboard of AI. Every word, every token, every concept has a position. Similar things cluster together, different things drift apart. The model doesn't understand language — it understands geometry. And geometry is just positions on a board."
