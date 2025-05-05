---
id: "transformer-attention"
title: "Transformers and Attention – Explained with Visuals"
tags: [transformers, nlp, neural networks]
---
# 🤖 Transformers and Attention – Explained with Visuals

---

## 🧠 Why Were Transformers Created?

Before transformers, sequence models like **RNNs** and **LSTMs** were used to process language. But they had limitations:

- 🐌 **Slow**: RNNs process one word at a time (no parallelism)
- 🧠 **Memory bottlenecks**: They struggle with long-range dependencies
- 🏗️ **Hard to scale**

Then came the **Transformer** architecture (Vaswani et al., 2017), with its famous tagline:

> **"Attention is All You Need"**

Instead of processing tokens sequentially, transformers use **self-attention** to process the entire input at once, capturing dependencies across the sequence.

---

## 🔍 What Is Attention? (Recap)

Attention is the idea that:
> **Some parts of the input are more relevant to each output than others.**

Instead of compressing everything into a single fixed vector, attention lets each word “look around” at other words and weigh them.

> “The cat sat on the **mat**” → to understand “sat,” the model attends to “cat.”

---

## ⚙️ Anatomy of a Transformer (Slide 1–2)

### Encoder Side (Understanding Input)
Input: `"I love llamas"`

Each word is embedded and passed into multiple **encoder layers**, each with:
- 🔍 **Self-Attention** – each word attends to all other words in the sentence
- ⚙️ **Feedforward Network** – learns complex representations

This creates **contextualized embeddings**: “love” knows it relates to “I” and “llamas.”

### Decoder Side (Generating Output)
The decoder takes:
- Previously generated words → e.g. “Ik”, “hou” (Dutch for "I love")
- Plus encoded context (from the encoder)

And generates the next word — “van.”

The decoder includes:
- 🕶️ **Masked Self-Attention** (explained next)
- 🔄 **Encoder-Decoder Attention** (uses encoder output)
- ⚙️ **Feedforward NN**

---

## 🕶️ What Is Masked Self-Attention? (Slide 2)

> You don’t want a model to “cheat” by looking at future words during generation.

**Masked self-attention** prevents the model from peeking ahead. When generating the third word, it only sees the first two:

| Generating Word | Can Attend To |
|------------------|------------------|
| 1st              | [Start token]    |
| 2nd              | [1st]            |
| 3rd              | [1st, 2nd]       |

It’s how **autoregressive** models like GPT maintain left-to-right generation.

---

## 🧱 Encoder-Only vs Decoder-Only vs Encoder-Decoder (Slide 3–6)

### 🟢 **Encoder-Only** → BERT (Representation Model)
- Task: **Understand** text (classification, QA, embeddings)
- Uses **bidirectional self-attention** (sees left + right context)
- Trained with **masked language modeling** (Slide 4):
  - Randomly mask a word
  - Predict the missing word (e.g., "I [MASK] llamas" → "am")

**Fine-tuned** for downstream tasks (Slide 5):
- Sentiment classification
- Named entity recognition
- Sentence similarity

### 🔴 **Decoder-Only** → GPT (Generative Model)
- Task: **Generate** text (completion, stories, chat)
- Uses **masked self-attention** only (left-to-right)
- No encoder at all

### 🔷 **Encoder-Decoder** → T5, BART, Translation models
- Input goes through the encoder
- Decoder generates outputs using attention over the encoder
- Used for: **translation, summarization, question answering**

---

## 🤹 Summary Table

| Model Type       | Uses Encoder | Uses Decoder | Attention Type              | Example Models |
|------------------|--------------|--------------|------------------------------|----------------|
| Encoder-Only     | ✅ Yes       | ❌ No        | Bidirectional Self-Attention | BERT, RoBERTa  |
| Decoder-Only     | ❌ No        | ✅ Yes       | Masked Self-Attention        | GPT, GPT-2/3/4 |
| Encoder-Decoder  | ✅ Yes       | ✅ Yes       | Self-Attn + Encoder-Dec Attn | T5, BART, MT5  |

---

## 🔥 Why Transformers Win

- ✅ Parallelizable (not step-by-step like RNNs)
- ✅ Scales well with data and compute
- ✅ Captures **global context** with attention
- ✅ Foundation of LLMs like GPT, BERT, Claude, Gemini, etc.
