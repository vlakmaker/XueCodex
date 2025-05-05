---
id: "encoder-decoder"
title: Encoders, Decoders, and Attention
tags: [encoder, decoder, neural networks]
---
# 🧠 Encoders, Decoders, and Attention 

---

## 🔄 What Are Encoders and Decoders?

Encoders and decoders are the **core building blocks** in many modern neural network architectures, especially for tasks involving sequences — like translation, summarization, or text generation.

> Think of them as a two-part system:
>
> - 🧠 The **encoder** reads and understands the input.
> - 🗣️ The **decoder** generates the output based on that understanding.

They first appeared together in **Sequence-to-Sequence (Seq2Seq)** models, and are foundational to **transformers**, **BERT**, **GPT**, **T5**, and more.

---

## 🔍 What Does an Encoder Do?

The **encoder** takes the input sequence and compresses it into a **meaningful representation** (often called a "context vector" or "embedding").

### Example:
Input: `"The cat sat on the mat."`

The encoder:
- Tokenizes the sentence
- Embeds each token (word → vector)
- Processes the vectors using layers (like RNNs or transformers)
- Outputs a **sequence of context-rich vectors** that summarize the input

> 💡 In transformers, the encoder outputs a **vector per input token**, all infused with contextual relationships.

---

## 📤 What Does a Decoder Do?

The **decoder** generates the output **one token at a time**, using the encoded input and previously generated tokens.

### Example:
Task: Translate `"The cat sat on the mat."` to French

Decoder starts with:
- [`<sos>`] (start of sentence token)
- Predicts "Le"
- Feeds "Le" back in, predicts "chat"

> 🔁 It’s **autoregressive**: each output depends on previous outputs + the encoded input.

---

## 🧠 Why Is Attention So Important?

Attention solves a key problem: 
> 🧱 **Not all words in a sentence are equally important.**

Traditional models (like LSTMs) squish everything into one final vector, which loses detail. Attention lets the model **focus on different parts of the input** when generating each output token.

### Example:
To translate “The cat sat on the mat,” the word “sat” in French depends most on “cat” and “sat” — not “the.”

Attention lets the decoder **dynamically attend** to the relevant parts of the input.

---

## 🧲 How Attention Works (Simplified)

Each word in the input gets turned into three vectors:
- **Query (Q)** – What am I looking for?
- **Key (K)** – What do I have?
- **Value (V)** – What can I use if there’s a match?

The model compares the **query** to all the **keys** (via dot products) to get attention **scores**, then uses those scores to weight the **values**.

> Output = weighted sum of values (with most attention paid to the relevant inputs)

This is the magic that lets transformers understand complex relationships — like subject/verb links or nested clauses — in a single step.

---

## 🏗️ Encoder-Decoder Architectures in Practice

### 🧾 Classic Seq2Seq (RNN-based)
- Encoder = LSTM/GRU processes input
- Decoder = LSTM/GRU generates output
- Problem: bottleneck in final encoder state

### 🔥 Transformer (like T5, BART)
- Encoder: multiple layers of self-attention
- Decoder: layers with self-attention **+ encoder-decoder attention**
- More parallelizable, more accurate

### 🧙‍♂️ GPT (Decoder-only Transformer)
- No encoder – only decoder with masked self-attention
- Great for generation tasks (chat, stories, code)

### 🧱 BERT (Encoder-only Transformer)
- Only the encoder stack
- Great for understanding tasks (classification, QA, embeddings)

---

## 💡 Summary

| Component | Role | Used In |
|----------|------|---------|
| **Encoder** | Encodes input into context vectors | BERT, T5, translation models |
| **Decoder** | Autoregressively generates output | GPT, T5, BART |
| **Attention** | Lets model focus on relevant input parts | All modern transformers |

---

## 🚀 Why This Matters

Understanding encoders, decoders, and attention unlocks your ability to:
- Read and build transformer architectures
- Understand how models like GPT or BERT work under the hood
- Design your own LLM workflows (e.g. RAG, fine-tuning, prompt chaining)