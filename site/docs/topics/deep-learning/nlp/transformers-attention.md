---
id: "transformer-attention"
title: "Transformers and Attention — Explained with Visuals"
tags: [transformers, nlp, neural networks]
related: [transformer-core-mechanism, transformer-architecture]
---
# 🤖 Transformers and Attention — Explained with Visuals

> **Reading order:**  
> 1. **This page** → overview, history, and model variants  
> 2. **"Transformer Core Mechanism"** → how attention actually works (Q/K/V, multi-head, positional encoding)  
> 3. **"Transformer Architecture"** → the full pipeline from prompt to output

---

## 📜 The Road to Transformers — A Brief History

Transformers didn't appear from nowhere. Each generation solved the previous one's biggest limitation:

### 1. Bag of Words (BoW)
The simplest approach: throw away word order, just count which words appear.  
`"The cat sat on the mat" → {the: 2, cat: 1, sat: 1, on: 1, mat: 1}`

- ✅ Works for basic classification (spam detection, sentiment)
- ❌ No word order — "dog bites man" and "man bites dog" are identical
- ❌ No meaning — every word is just a label

### 2. Word2Vec (2013)
First big leap: words become **vectors** in a geometric space, where relationships have meaning.

Famous result: `king - man + woman ≈ queen`

Words that appear in similar contexts end up near each other. "Happy" and "joyful" cluster together.

- ✅ Words have meaning and relationships
- ❌ **One fixed vector per word** regardless of context — "bank" (river) and "bank" (financial) get the same embedding

### 3. Seq2Seq with RNNs (2014)
Architecture for handling **whole sequences**. An RNN encoder reads the input word by word, compresses it into a single context vector, then an RNN decoder generates output from that vector. Powered early Google Translate.

- ✅ Handles full sentences, input-to-output
- ❌ **Bottleneck** — the entire input is squeezed into one fixed-size vector. Long sentences lose information, especially early words

### 4. Seq2Seq + Attention (2015)
The fix for the bottleneck: instead of one compressed vector, the decoder can **look back at every encoder state** and decide which words matter for the current output. This was still within RNNs.

- ✅ No more information bottleneck
- ❌ Still processes words **sequentially** — can't parallelize, slow to train

### 5. Transformers (2017)
The "Attention Is All You Need" insight: if attention is doing the heavy lifting, **drop the RNN entirely**. Use only attention (plus feedforward layers). Process all words at once.

- ✅ Fully parallelizable (massive speedup)
- ✅ Captures global context
- ✅ Scales with data and compute
- This is what powers every modern LLM

**The lineage:** BoW (no order, no meaning) → Word2Vec (meaning but no context) → Seq2Seq (context but bottlenecked) → + Attention (bottleneck solved but sequential) → **Transformers** (attention only, fully parallel)

> **Key insight:** Word2Vec embeddings were **static** (one vector per word). Transformer embeddings are **contextual** (the same word gets different vectors depending on the sentence). That's the fundamental upgrade.

---

## 🧠 Why Were Transformers Created?

Before transformers, sequence models like **RNNs** and **LSTMs** were used to process language. But they had limitations:

- 🐌 **Slow**: RNNs process one word at a time (no parallelism)
- 🧠 **Memory bottlenecks**: They struggle with long-range dependencies — by the time the model reaches word 50, it's mostly forgotten word 3
- 🏗️ **Hard to scale**: Sequential processing means you can't just throw more GPUs at it

Then came the **Transformer** architecture (Vaswani et al., 2017):

> **"Attention is All You Need"**

Instead of processing tokens sequentially, transformers use **self-attention** to process the entire input at once, capturing dependencies across the full sequence regardless of distance.

---

## 🔍 What Is Attention? (Intuition)

Attention is the idea that:
> **Some parts of the input are more relevant to each output than others.**

Instead of compressing everything into a single fixed vector, attention lets each word "look around" at other words and weigh them by relevance.

> "The cat sat on the **mat**" → to understand "sat," the model attends to "cat" (who's sitting) and "mat" (where).

The word "sat" ends up with an embedding that **encodes its relationships** — it's not just "sat" in isolation but "the thing the cat did on the mat."

> For the full mechanics of how attention works (Q, K, V, multi-head, positional encoding), see **"Transformer Core Mechanism."**

---

## ⚙️ Anatomy of a Transformer

### Encoder Side (Understanding Input)
Input: `"I love llamas"`

Each word is embedded, position-encoded, and passed into multiple **encoder layers**, each with:
- 🔍 **Self-Attention** — each word attends to **all** other words in the sentence (bidirectional)
- ⚙️ **Feedforward Network** — transforms and mixes the attended information
- 🔗 **Residual connections + Layer Norm** — keeps the signal stable through many layers

This creates **contextualized embeddings**: "love" now carries information about "I" and "llamas."

### Decoder Side (Generating Output)
The decoder takes:
- Previously generated words → e.g. "Ik", "hou" (Dutch for "I love")
- Plus encoded context (from the encoder)

And generates the next word — "van."

The decoder includes:
- 🕶️ **Masked Self-Attention** — can only look at words generated so far (no peeking ahead)
- 🔄 **Encoder-Decoder (Cross) Attention** — attends to the encoder's output to pull in source meaning
- ⚙️ **Feedforward NN** + residuals + layer norm

---

## 🕶️ What Is Masked Self-Attention?

> You don't want a model to "cheat" by looking at future words during generation.

**Masked self-attention** prevents the model from peeking ahead. When generating the third word, it only sees the first two.

| Generating Word | Can Attend To       |
|------------------|---------------------|
| 1st              | [Start token]       |
| 2nd              | [Start, 1st]        |
| 3rd              | [Start, 1st, 2nd]   |

**How it works technically:** Future positions are set to -∞ before the softmax step, which forces their attention weights to zero. The information is there in the matrix, but the mask makes it invisible.

This is how **autoregressive** models like GPT maintain left-to-right generation — they predict one token at a time, each time only seeing what came before.

---

## 🧱 Encoder-Only vs Decoder-Only vs Encoder-Decoder

### 🟢 Encoder-Only → BERT (Representation Model)
- Task: **Understand** text (classification, search, embeddings)
- Uses **bidirectional self-attention** (sees left + right context simultaneously)
- Trained with **masked language modeling**:
  - Randomly mask 15% of words
  - Predict the missing words using full surrounding context
  - Example: "I [MASK] llamas" → "love"
- **Not generative** — BERT doesn't produce text, it produces rich representations

**Fine-tuned** for downstream tasks:
- Sentiment classification (is this review positive?)
- Named entity recognition (which words are names, places, dates?)
- Sentence similarity and search (are these two sentences about the same thing?)
- Retrieval and embeddings for RAG systems

### 🔴 Decoder-Only → GPT (Generative Model)
- Task: **Generate** text (completion, conversation, reasoning)
- Uses **masked self-attention** only (left-to-right, no peeking ahead)
- No encoder — the input prompt is just the beginning of the sequence the decoder continues
- Trained with **next token prediction**: given all previous tokens, predict the next one

This is what powers ChatGPT, Claude, Gemini, LLaMA, etc.

### 🔷 Encoder-Decoder → T5, BART, Translation models
- Input goes through the encoder (bidirectional understanding)
- Decoder generates outputs using **cross-attention** over the encoder's representations
- Used for: **translation, summarization, question answering** — tasks where input and output are clearly distinct

---

## 🤹 Summary Table

| Model Type       | Uses Encoder | Uses Decoder | Attention Type              | Training Objective     | Example Models |
|------------------|--------------|--------------|------------------------------|------------------------|----------------|
| Encoder-Only     | ✅ Yes       | ❌ No        | Bidirectional Self-Attention | Masked Language Model  | BERT, RoBERTa  |
| Decoder-Only     | ❌ No        | ✅ Yes       | Masked Self-Attention        | Next Token Prediction  | GPT, LLaMA, Claude |
| Encoder-Decoder  | ✅ Yes       | ✅ Yes       | Self + Cross-Attention       | Varies (seq2seq)       | T5, BART, MT5  |

---

## 🔥 Why Transformers Win

- ✅ **Parallelizable** — processes all tokens at once (not step-by-step like RNNs)
- ✅ **Scales** with data and compute (more layers, more heads, more data → better)
- ✅ **Global context** — every word can attend to every other word regardless of distance
- ✅ **Contextual embeddings** — same word gets different representations in different sentences
- ✅ Foundation of all modern LLMs: GPT, Claude, Gemini, LLaMA, Mistral, etc.
