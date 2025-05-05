---
id: "transformer-architecture"
title: "Transformer Architecture "
tags: [transformers, nlp, neural networks]
---

#  Transformer Architecture 

---

## 🎯 Objective: What Does a Transformer LLM Do?

A Transformer-based Large Language Model (LLM) takes a natural language input (like a question or instruction) and generates meaningful output (a word, phrase, sentence, or full story). 

> Example Input: _"Write an email apologizing to Sarah for the tragic gardening mishap. Explain how it happened."_

> Output: _"Dear Sarah, I’m so sorry..."_

This process is powered by **three major components**:

- **Tokenizer**
- **Transformer Blocks** (the core brain)
- **LM Head** (for word prediction)


---

## 🔤 Step 1: Tokenizer – Turning Text into Tokens

The **tokenizer** is the first step. It breaks raw text into chunks the model can understand — usually **subword tokens**.

> Input: _"Explain how it happened."_

Tokenized as:
```
["Explain", "how", "it", "happen", "##ed", "."]
```

Why subwords? Because it helps handle rare or unseen words (e.g., "gardener" → "garden" + "##er").

The tokenizer also maps tokens to **IDs** using a **token vocabulary** — like a dictionary that assigns each token a number.


---

## 🔢 Step 2: Token Embeddings – IDs Become Vectors

Each token ID is mapped to a **learned vector** (called a token embedding).

- Vocabulary: 50,000+ tokens
- Embedding size: typically 768, 1024, etc.

So the sentence becomes a matrix of token embeddings:
```
["Explain"] → [0.56, -0.12, ..., 0.77]
["how"]     → [...]
...
```
These embeddings are now **fed into the Transformer Blocks**.

---

## 🧠 Step 3: Stack of Transformer Blocks

This is where the model “thinks.”

Each block contains:
- **Self-Attention Layer** – lets each word attend to others
- **Feedforward Neural Network** – transforms and mixes information
- **Layer Norm + Residual Connections** – stabilize and preserve input/output flow

The blocks are stacked **N times** (e.g., 12 in BERT base, 96 in GPT-4). Each block refines the understanding of the sentence.

> Think of it as passing the message through N layers of wise interpreters.

*(Slide 3)*

---

## 🧠 How Attention Works Inside Blocks

Every token looks at every other token and **weighs them** using dot products (Q · K). It gets back a score and combines the values (V).

For example:
- Token: _"it"_ 
- Might attend more to: _"happen"_ and _"Explain"_ than _"Write"_

This lets the model understand syntax, subject-object relationships, and even tone.

---

## 🧠 Step 4: Language Modeling Head (LM Head)

After processing, the model needs to predict the **next token**.

- It uses a **linear layer** to project the final hidden states back to the vocabulary size (e.g., 50,000)
- Then applies **softmax** to get probabilities for each possible token

> Highest score → output token (e.g., "Dear")



This process repeats token-by-token during generation.

---

## 🔄 Full Pipeline: From Prompt to Response

1. Text prompt → Tokenizer → Tokens (IDs)
2. Token IDs → Embedding lookup
3. Embeddings → Transformer blocks (with attention)
4. Output → LM head → next word
5. Feed generated word back in → repeat

---

## 🧩 Summary Diagram Components

| Component         | Function                              |
|------------------|----------------------------------------|
| Tokenizer         | Breaks input text into tokens/IDs      |
| Token Vocabulary  | Maps tokens to IDs                     |
| Token Embeddings  | Turns token IDs into dense vectors     |
| Transformer Blocks| Contextualize and transform input      |
| LM Head           | Predicts next word/token               |

---

Would you like me to add an illustrated cheat sheet or printable study card for this as well?
