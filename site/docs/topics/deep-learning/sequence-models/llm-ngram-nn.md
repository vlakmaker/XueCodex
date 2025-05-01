---
id: "llm-ngam-nn"
title: "Language Modeling with N-Grams and Neural Networks"
tags: [deep learning, n-gram, neural networks]
---
# Language Modeling with N-Grams and Neural Networks

## 🧠 Overview

This KI explains the core concepts of language modeling using **n-grams**, including **bi-gram** and **tri-gram** models, and their evolution into **neural network-based language models**. It also covers limitations of traditional n-grams and how neural models using **embeddings** and **softmax** improve predictive performance.

---

## 📚 What Is Language Modeling?

**Language modeling** is the task of predicting the next word in a sequence, given the previous word(s). It is foundational in many NLP tasks, including:

- Text generation
- Speech recognition
- Machine translation

---

## 🔢 N-Grams: The Basics

### ➤ Definition:

An **n-gram** is a contiguous sequence of `n` words from a given sample of text.

- **Unigram (n=1)**: Uses no context.
- **Bigram (n=2)**: Predicts based on the previous one word.
- **Trigram (n=3)**: Predicts based on the previous two words.

### ➤ Bi-Gram Example:

"I like vacations" and "I hate surgery"

- Context: `I like` → Predict `vacations`
- Context: `I hate` → Predict `surgery`

Bi-gram model estimates:

```
P(vacations | like) = 1
P(surgery | like) = 0
```

Context window size = 1

---

## 🔂 Tri-Gram Model

Tri-gram considers two previous words:

- Context: `surgeons like` → Predict `surgery`
- Context: `I like` → Predict `vacations`

Now the probability depends on **two words**, increasing specificity:

```
P(surgery | surgeons, like) = 1
P(surgery | I, like) = 0
```

Context window size = 2

---

## ⚙️ General N-Gram Model

N-gram models generalize this further:

- Context window = `n - 1`
- Predict next word `w_t` given: `w_{t-n+1}, ..., w_{t-1}`

**Limitation**: As `n` increases:

- Memory and computation cost grow
- Training data becomes sparse

---

## 🧱 Transition to Neural Language Models

To overcome sparsity and context limitations, we use **neural networks**:

### 🔸 One-Hot to Embedding

Words are no longer one-hot encoded. Instead:

- Each word is mapped to a dense vector (embedding)
- These embeddings capture semantic similarity

### 🔸 Input Vector

If context size = 2 and vocabulary size = 6:

- You concatenate embeddings: `embedding(w_{t-2}) + embedding(w_{t-1})`
- Resulting input size = `2 × embedding_dim`

### 🔸 Architecture

A simple **feedforward neural network** with:

- Input: Concatenated context embeddings
- Hidden layer(s): With ReLU or similar activations
- Output layer: One neuron per word in vocabulary
- Activation: **Softmax** to turn scores into probabilities

### 🔸 Prediction

Predict the word `w_t` by choosing:

```
argmax(P(w_t | context))
```

---

## 🚫 Limitations of Basic Neural N-Gram Models

- **Fixed context window**: Can't model dependencies outside it
- **No sequence awareness**: Doesn’t know position/timing
- **No memory**: Doesn’t track prior information like RNNs or transformers

---

## ✅ Recap

| Concept | Description |
| --- | --- |
| N-Gram | Predicts next word from last `n-1` words |
| Bi-Gram | Context = 1 previous word |
| Tri-Gram | Context = 2 previous words |
| Neural N-Gram | Learns prediction using embeddings + feedforward NN |
| Softmax | Converts raw scores to probabilities |
| Limitation | Cannot capture long-range or sequential dependencies |