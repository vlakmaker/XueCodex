---
id: "transformer-core-mechanism"
title: "Transformer Core Mechanism — How Attention Actually Works"
tags: [transformers, attention, nlp, neural networks]
related: [transformer-attention, transformer-architecture]
---
# 🔬 Transformer Core Mechanism — How Attention Actually Works

> Read **"Transformers and Attention"** first for the overview and model variants.  
> Read **"Transformer Architecture"** after this for the full pipeline.

This page covers what happens **inside** a Transformer block — the part that makes the whole thing work.

---

## 🧭 The Word Order Problem: Positional Encoding

Transformers process all words at once (in parallel), unlike RNNs that read left to right. But that creates a problem: **if you see all words simultaneously, how do you know their order?**

"Dog bites man" and "Man bites dog" would look identical without position information.

**Positional encoding** solves this. Before anything enters the Transformer, each word's embedding gets a **position signal** added to it — essentially a stamp that says "I'm word 1", "I'm word 3", etc.

```
Embedding("cat")     = [0.56, -0.12, ..., 0.77]
Position(word 3)     = [0.01, 0.99, ..., -0.44]
Final input          = [0.57,  0.87, ..., 0.33]  ← element-wise addition
```

The original "Attention Is All You Need" paper used **sinusoidal functions** (sine and cosine waves at different frequencies) to generate these position vectors. The idea: each position gets a unique pattern, and the model can learn to use the relative distances between positions.

Modern models (GPT, LLaMA) often use **learned positional embeddings** instead — the model just learns a vector for each position during training, or uses **Rotary Position Embeddings (RoPE)** which encode relative positions more flexibly.

**Key takeaway:** Without positional encoding, Transformers have no concept of word order. It's the first thing that happens, and it's essential.

---

## 🔑 Query, Key, Value — The Core of Attention

This is the part that sounds intimidating but follows a simple logic.

### The Library Analogy

Imagine every word in a sentence is a person in a library:
- **Query (Q):** "What am I looking for?" — the question a word asks
- **Key (K):** "What do I have to offer?" — what a word advertises about itself
- **Value (V):** "Here's my actual content." — the information a word carries

Every word creates all three (Q, K, and V) by multiplying its embedding with three separate learned weight matrices:

```
Q = embedding × W_Q
K = embedding × W_K
V = embedding × W_V
```

### The Attention Calculation

For each word:
1. **Compare** its Query against every other word's Key (dot product → similarity score)
2. **Scale** the scores (divide by √d_k to prevent extreme values — explained below)
3. **Softmax** → turn scores into probabilities (they sum to 1)
4. **Weighted sum** of all Values using those probabilities

```
Attention(Q, K, V) = softmax(Q · K^T / √d_k) × V
```

### Concrete Example

Sentence: "The cat sat on the mat"

When processing **"sat"**:
- "sat" creates a Query: "Who is relevant to me?"
- Every word has a Key. "cat" might score high (it's the subject doing the sitting), "mat" scores high (it's where the sitting happens), "the" scores low
- The scores become weights: cat=0.45, mat=0.30, on=0.10, the=0.08, the=0.07
- "sat" now pulls in a weighted mix of everyone's Values — it becomes a representation of "sat" that **knows about cat and mat**

This is what makes embeddings **contextual**. The same word "sat" would get different attention weights in "the baby sat quietly" vs "the board sat in session."

### Why Scale by √d_k?

The dot products between Q and K grow larger as the embedding dimension (d_k) increases. Large values push softmax into regions where gradients are tiny (everything rounds to 0 or 1), which makes learning extremely slow. Dividing by √d_k keeps the values in a healthy range.

If d_k = 64, you divide by √64 = 8. Simple normalization, big impact.

---

## 🎭 Multi-Head Attention — Looking for Multiple Things at Once

A single attention calculation captures **one type of relationship**. But words relate to each other in many ways simultaneously:

- **Syntactic:** "sat" → who's the subject? → "cat"
- **Spatial:** "sat" → where? → "mat"  
- **Temporal:** "sat" → when? → (contextual)

**Multi-head attention** runs multiple attention operations in parallel, each with its own Q, K, V weight matrices:

```
Head 1: learns syntactic relationships (subject-verb)
Head 2: learns spatial relationships (where things are)
Head 3: learns coreference (which "the" belongs to which noun)
Head 4: learns something else entirely (emergent)
...
```

Each head operates on a **smaller slice** of the embedding dimension. If your model has 768-dimensional embeddings and 12 heads, each head works with 768/12 = 64 dimensions.

After all heads compute their attention, the results are **concatenated** back together and passed through a linear layer:

```
MultiHead(Q, K, V) = Concat(head_1, head_2, ..., head_h) × W_O
```

**Key takeaway:** Multi-head attention is not just "more attention." Each head specializes in detecting different types of word relationships. Researchers have actually visualized this — some heads focus on adjacent words, others on syntactic dependencies across long distances.

---

## 🧱 Inside a Single Transformer Block

Each Transformer block has a consistent structure:

```
Input
  ↓
[Multi-Head Self-Attention]
  ↓ + Residual Connection
[Layer Normalization]
  ↓
[Feedforward Neural Network]  ← 2 linear layers with activation (ReLU or GELU)
  ↓ + Residual Connection
[Layer Normalization]
  ↓
Output (→ feeds into next block)
```

### Residual Connections — Why Deep Stacks Work

A residual connection means: **add the input back to the output of each sublayer.**

```
output = LayerNorm(sublayer(x) + x)
                                 ↑ this is the residual
```

Without residuals, passing through 96 layers would degrade the signal — like a game of telephone where the message gets garbled. The residual connection preserves the original information. Each layer only needs to learn **what to add**, not reconstruct everything from scratch.

Think of it like editing a document: the original is always there, each layer just annotates on top.

### Layer Normalization — Keeping Values Stable

After each sublayer, **layer norm** normalizes the values to have zero mean and unit variance. This prevents the numbers from exploding or vanishing as they pass through many layers, which keeps training stable.

### The Feedforward Network — Where Mixing Happens

After attention figures out **what to pay attention to**, the feedforward network (FFN) processes **what to do with that information**. It's two linear transformations with an activation function:

```
FFN(x) = Linear_2(GELU(Linear_1(x)))
```

The inner dimension is typically 4× the model dimension (e.g., 768 → 3072 → 768). Research suggests this is where the model stores **factual knowledge** — it's the "memory" complement to attention's "reasoning."

---

## 📊 Dimensions and Scale

To make the abstract concrete, here are real numbers:

| Model       | Layers | Heads | Embedding Dim | Head Dim | FFN Dim | Parameters |
|-------------|--------|-------|---------------|----------|---------|------------|
| BERT Base   | 12     | 12    | 768           | 64       | 3,072   | 110M       |
| GPT-2       | 12     | 12    | 768           | 64       | 3,072   | 117M       |
| GPT-3       | 96     | 96    | 12,288        | 128      | 49,152  | 175B       |
| LLaMA 2 7B  | 32     | 32    | 4,096         | 128      | 11,008  | 7B         |

Notice: BERT Base and GPT-2 are almost identical architecturally — the difference is encoder-only vs decoder-only and how they're trained.

---

## 🔗 How This Connects to Model Variants

This mechanism works the same across all three Transformer types (from the "Transformers and Attention" page), with one key difference:

| Variant          | What Changes in Attention                                    |
|------------------|--------------------------------------------------------------|
| **Encoder-only** (BERT)   | Bidirectional — every word attends to every other word       |
| **Decoder-only** (GPT)    | Masked — each word can only attend to words before it        |
| **Encoder-Decoder** (T5)  | Encoder is bidirectional, decoder is masked + cross-attention|

The **masking** in decoder models is implemented by setting future positions to -∞ before softmax, which forces those attention weights to zero.

---

## 🧪 Test Your Understanding

- Why can't a decoder-only model like GPT see future tokens during training?
- If a model has 16 attention heads and 1024-dim embeddings, what's each head's dimension?
- What would happen if you removed residual connections from a 96-layer model?
- Why does the same word get different embeddings in different sentences?
