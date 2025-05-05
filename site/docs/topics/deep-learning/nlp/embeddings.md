---
id: "embeddings"
title: What Are Embeddings
tags: [embeddings, word2vec, neural networks]
---
# 🧠 What Are Embeddings?

**Embeddings** are how we turn symbolic data (like words, sentences, images, or even users) into **vectors of numbers** — in a way that captures **meaning, similarity, or structure**.

> Think of embeddings as giving your data a GPS coordinate in meaning-space.
> 

They’re the bridge between raw input and neural network understanding.

---

### 🔢 Why Not Just Use Words Directly?

Computers can’t understand raw text like “dragon” or “honor.” We need to turn them into numbers. One way is one-hot encoding:

```
ini
CopyEdit
dragon = [0, 0, 0, 1, 0, 0, 0]
honor  = [0, 1, 0, 0, 0, 0, 0]

```

But that doesn’t say anything about how **similar** "dragon" and "honor" are — they’re just orthogonal blobs.

---

## 💫 Embeddings Fix That

An **embedding** maps each item (like a word) to a **dense vector of real numbers**. The vector is learned by a model and captures **semantic or structural relationships**.

> So instead of random position, "dragon" and "honor" are placed closer in vector space if they appear in similar contexts.
> 

---

## 🧭 Embeddings In Practice

| Domain | Embedding Example |
| --- | --- |
| NLP | Words → vectors (Word2Vec, GloVe, BERT) |
| Images | Images → vectors (ResNet, CLIP) |
| Recommenders | Users & items → embedding vectors |
| Graphs | Nodes → embeddings (e.g., Node2Vec, GNNs) |

These vectors are often used to:

- Compare similarity (cosine distance, dot product)
- Feed into deeper neural layers
- Store in vector databases for fast search (e.g., RAG)

---

## 🧪 Example: Word Embeddings

| Word | Embedding Vector (truncated) |
| --- | --- |
| king | [0.61, -0.12, 0.43, ..., 0.09] |
| queen | [0.59, -0.11, 0.45, ..., 0.10] |
| banana | [-0.28, 0.77, 0.13, ..., -0.09] |

You can see:

- `king` and `queen` are **close**
- `banana` is somewhere else entirely

---

## 🔍 TL;DR – What Are Embeddings?

- A **vector representation** of some discrete input (like a word)
- Learned by a model to **capture relationships**
- Useful for search, similarity, classification, and as input to neural networks