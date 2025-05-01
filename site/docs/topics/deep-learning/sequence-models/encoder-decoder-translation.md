---
id: "encoder-decoder-translation"
title: "Encoder-Decoder RNN Models for Translation"
tags: [deep learning, encoder, decoder]
---
# 🔄 Encoder-Decoder RNN Models for Translation

## 🧠 Overview

The **Encoder-Decoder RNN architecture** is used in **sequence-to-sequence (Seq2Seq)** tasks — like **machine translation** — where an **input sequence** (e.g., a sentence in English) is transformed into a **target sequence** (e.g., the same sentence in French). The input and output sequences can have different lengths.

---

## 🧩 Components

### 🔹 Encoder:

- A stack of **RNNs or LSTMs** that processes the input sequence token by token.
- At each timestep, the input token is passed through:
    1. **Embedding Layer** → creates a dense representation.
    2. **RNN cell (e.g., LSTM)** → processes the embedding and updates the hidden & cell states.
- **Only the final hidden (and cell) states** are retained.
- The encoder does **not output** a sequence — its job is to **encode** the input.

### 🔹 Decoder:

- Also a stack of **RNNs or LSTMs**.
- **Starts from the encoder's final hidden and cell states.**
- Takes in a start token and generates **one word at a time** using:
    1. Previous hidden/cell state
    2. Previous predicted token (or ground truth during training with **teacher forcing**)
- Each RNN step predicts one token.

### 🔹 Teacher Forcing (Training Technique):

- Feeds the actual target token (ground truth) as input for the next timestep instead of the model's previous prediction.
- **Improves convergence** by preventing early-stage compounding errors.

---

## 🛠️ PyTorch Implementation Summary

### 🏗️ Encoder Class:

- Inherits from `torch.nn.Module`
- Layers:
    - `nn.Embedding`: Converts tokens to vectors
    - `nn.LSTM`: Processes sequences and returns `(hidden_state, cell_state)`
    - Optional `Dropout`
- **Returns:** Final `hidden` and `cell` states (not the full output sequence)

### 🏗️ Decoder Class:

- Layers:
    - `nn.Embedding`
    - `nn.LSTM`
    - `nn.Linear`: Maps output to vocabulary size
    - `Softmax`: Converts to probability distribution
- At each timestep, decoder generates **one token**

### 🔁 Seq2Seq Wrapper Class:

- Combines Encoder & Decoder
- Handles **teacher forcing**
- Tracks batch size, output dimensions
- Loop over target sequence:
    1. Predict next token
    2. Use teacher forcing or argmax

---

## 🔍 Recap

| Component | Role |
| --- | --- |
| Encoder | Processes input sequence, encodes into context vector (hidden states) |
| Decoder | Generates output sequence one token at a time using encoder context |
| LSTM | Adds memory capabilities to handle long sequences |
| Teacher Forcing | Trains decoder with ground truth instead of its own past predictions |

---

## ✅ Key Takeaways

- Encoder-Decoder RNNs are foundational for NLP tasks like translation.
- Input/output lengths can vary.
- The hidden state carries the context from encoder to decoder.
- Teacher forcing improves training but is only used during training.

This architecture is often replaced today by **Transformers**, but remains critical to understanding modern NLP.