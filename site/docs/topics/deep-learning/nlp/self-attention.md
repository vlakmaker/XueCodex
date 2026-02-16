---
id: "self-attention"
title: "What Is Self-Attention?"
tags: [transformers, nlp, neural-networks, attention]
---
# What Is Self-Attention?

> **Where this fits:** This is a focused reference page on the self-attention mechanism.
> For the full transformer reading path, see: [Transformers Overview](./transformers-attention.md) then [Core Mechanism](./transformer-core-mechanism.md) then [Full Architecture](./transformer-architecture.md).

Self-attention allows a model to look at **all the other words in a sentence** (or a document, or code...) and **decide how important each of them is** for understanding a particular word.

Imagine reading:

> "The dog chased the llama because it was fast."

You need to ask:  
🧠 "Does *it* refer to *the dog* or *the llama*?"  

That’s where **self-attention** comes in. It helps assign *relevance scores* between tokens so the model can understand these dependencies.

---

## 🧠 How It Works: Step-by-Step

### 1. **Projection into Q, K, V (Query, Key, Value)**

Every token in the input sequence is passed through three learned linear transformations:

- **Query (Q):** What am I looking for?
- **Key (K):** What does each word offer?
- **Value (V):** What content do I retrieve if a match is found?

Each token gets its own Q, K, and V vectors.

---

### 2. **Attention Scores via Dot Product**

To compute how much *attention* one word pays to others:

1. Compute dot product between **Q** of the current word and **K** of all words.
2. Scale the result by the square root of the key dimension $\sqrt$d_k$$.
3. Apply **softmax** to turn scores into weights.
4. Multiply weights with **V** to get the final contextual embedding.

---

### 📐 Full Formula

$$
\text{Attention}(Q, K, V) = \text{softmax}\left(\frac$QK^T${\sqrt$d_k$}\right)V
$$

- $Q \in \mathbb{R}^$n \times d_k$$
- $K \in \mathbb{R}^$n \times d_k$$
- $V \in \mathbb{R}^$n \times d_v$$
- $n$ = sequence length, $d_k$ = key/query dim, $d_v$ = value dim

The result is a matrix of **contextualized embeddings**: one for each word, now aware of its neighbors.

---

## 💡 Why Divide by √d_k?

Without scaling, large dot product values would cause the **softmax** to become too peaky, resulting in near one-hot distributions.  
The division stabilizes gradients and ensures better learning.

---

## 🧪 Simple Conceptual Example

For a 3-token input:  
Tokens = `"I"`, `"love"`, `"cats"`

Each token gets Q, K, V (vectors like `[0.1, 0.3]`)

1. Compute `Q × Kᵀ` → similarity scores
2. Apply `softmax` → attention weights (e.g., `[0.2, 0.3, 0.5]`)
3. Multiply by V → weighted sum → contextual embedding for token

---

## 🌀 Multi-Head Attention

Instead of just one set of Q/K/V projections, the model uses multiple “heads”:

- Each head learns different relationships (e.g., grammar, meaning)
- The outputs of all heads are **concatenated and linearly transformed**

This lets the model capture different types of context simultaneously.

---

## 🧭 Why Self-Attention Matters

- 💬 Understands **global relationships**, not just nearby words
- ⚡ Fully **parallelizable** (unlike RNNs)
- 🧠 Easily scaled up (transformers can handle huge sequences)
- 🔁 Enables **contextual embeddings** — words are represented *in context*

---

## ⏱️ Positional Encoding

Because attention alone is order-agnostic, we inject **position info**:

- 🔁 **Sinusoidal positional encoding** (Transformer paper)
- 🧠 **Learnable positional embeddings** (BERT, GPT)

These are **added to the token embeddings** before attention so the model knows word order.

---

## 🧪 Mini Practicum: Predicting “hate” from “not like”

Input: `"not like"`  
Model should predict: `"hate"`

Steps:
1. Embed tokens → `[x_not, x_like]`
2. Compute `Q = x × W_Q`, `K = x × W_K`, `V = x × W_V`
3. Get `attention_weights = softmax(Q × Kᵀ / √d_k)`
4. Compute `H' = attention_weights × V`
5. Final output: `H = H' × W_o`
6. Pass through linear classifier → vocabulary → predict `"hate"`

---

## Summary

Self-attention lets a model:
- Compare all tokens with all others via dot product
- Learn long-range dependencies
- Replace sequential memory with direct *contextual lookup*
- Power the core of the Transformer architecture

---

## Where to Go Next

- [Transformer Core Mechanism](./transformer-core-mechanism.md) — deeper treatment of Q/K/V, multi-head attention, and positional encoding
- [Attention Mechanism](./attention-mechanism.md) — a worked translation example showing attention step by step
- [Transformer Architecture](./transformer-architecture.md) — the full pipeline from input to output
