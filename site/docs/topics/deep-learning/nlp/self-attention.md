---
id: "self-attention"
title: "What Is Self-Attention?"
tags: [transformers, nlp, neural networks]
---

# 🔍 What Is Self-Attention?

Self-attention allows a model to look at **all the other words in a sentence** (or a document, or code...) and **decide how important each of them is** for understanding a particular word.

Imagine reading:

> "The dog chased the llama because it was fast."
> 

You need to know:

> Does “it” refer to the dog or the llama?
> 

That’s where **self-attention** steps in. It weighs **“it”’s** relation to **dog** and **llama** and assigns a *relevance score*.

---

### 🧠 How It Works: Step-by-Step (with Slides)

### 1. **Projection into Q, K, V (Queries, Keys, Values)**

Every input token is turned into **three vectors** using learned matrices:

- **Query (Q)**: What are we looking for?
- **Key (K)**: What do we have to offer?
- **Value (V)**: What is the actual content we want to share?

All of this happens in parallel for every word in a sentence.

### 2. **Computing Attention Scores (aka Relevance)**

Let’s say the model is processing the word **“it”**.

- “It” becomes a **Query** vector.
- Every other word becomes a **Key** vector.
- The dot product of Query × Key gives a **score**: How relevant is this word to “it”?
- Apply softmax = normalized relevance weights.

These scores are then used to **weight the Value vectors** of each word. Words that are more relevant contribute more to the final output vector.

### 3. **Weighted Sum → Output**

The model multiplies each Value by its attention weight and **adds them all together** to form an output vector that is **context-aware**.

So the vector for “it” now **knows what “it” is referring to.**

---

### 🔁 Multi-Head Attention

One attention head may capture **subject-verb** relationships. Another may look at **noun-adjective** dependencies. To cover multiple types of patterns, we split attention into **multiple heads**—each learns a different type of relationship.

Each head does its own QKV magic, and then their outputs are **concatenated and linearly transformed**.

---

### 🌀 Efficiency: Sparse & Grouped Attention

As sequences get longer, computing attention becomes expensive.

### 🧠 Grouped Attention

You can **group** attention heads to reuse the same Keys/Values and save computation. Each group has its own Queries but shares context. More efficient, almost no loss in performance.

### 🌌 Sparse Attention

Full attention = quadratic cost (every token attends to every other). Sparse attention = look only at nearby or important tokens.

Example:

- **Global**: Attend to all previous tokens (slow).
- **Local**: Only attend to nearby tokens (like a sliding window).
- **Strided/Fix**: Attend in patterns (like every 3rd token or critical anchors).

These optimizations help scale to long documents (e.g., 100K tokens) while keeping costs manageable.

---

### 🤖 Summary: Why Self-Attention Is Powerful

- Understands context across a whole sequence (not just neighbors like RNNs).
- Parallelizable, unlike sequential RNNs.
- Can be made efficient with grouped or sparse attention.
- Each head learns different linguistic or structural patterns.