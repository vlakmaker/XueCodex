---
id: "transformer-architecture"
title: "Transformer Architecture — The Full Pipeline"
tags: [transformers, nlp, neural networks]
related: [transformer-attention, transformer-core-mechanism]
---
# 🏗️ Transformer Architecture — The Full Pipeline

> **Reading order:**  
> 1. **"Transformers and Attention"** → overview, history, and model variants  
> 2. **"Transformer Core Mechanism"** → how attention works (Q/K/V, multi-head, positional encoding)  
> 3. **This page** → the complete pipeline from text input to generated output

---

## 🎯 Objective: What Does a Transformer LLM Do?

A Transformer-based Large Language Model (LLM) takes a natural language input (like a question or instruction) and generates meaningful output (a word, phrase, sentence, or full story).

> Example Input: _"Write an email apologizing to Sarah for the tragic gardening mishap."_

> Output: _"Dear Sarah, I'm so sorry..."_

This process is powered by **five major stages**:

1. **Tokenizer** — text to token IDs
2. **Token Embeddings** — IDs to vectors
3. **Positional Encoding** — adding word order
4. **Transformer Blocks** — the core brain (attention + feedforward, stacked)
5. **LM Head** — vectors back to word predictions

---

## 🔤 Step 1: Tokenizer — Turning Text into Tokens

The **tokenizer** breaks raw text into chunks the model can process — usually **subword tokens**, not whole words.

> Input: _"Explain how it happened."_

Tokenized as:
```
["Explain", "how", "it", "happen", "##ed", "."]
```

**Why subwords instead of whole words?** Three reasons:
- **Handles rare/unseen words:** "gardener" → "garden" + "##er" — the model knows both pieces even if it's never seen "gardener" as a single token
- **Manageable vocabulary size:** Full-word vocabularies would need millions of entries. Subword vocabularies are typically 30,000–100,000 tokens
- **Balances granularity:** Character-level would be too fine-grained (slow), word-level too coarse (can't handle new words)

Common tokenization algorithms: **BPE** (Byte Pair Encoding, used by GPT), **WordPiece** (used by BERT), **SentencePiece** (used by T5, LLaMA).

The tokenizer maps tokens to **IDs** using a fixed **token vocabulary** — a lookup table that assigns each token a number.

```
"Explain" → 18254
"how"     → 2437
"it"      → 340
"happen"  → 5765
"##ed"    → 1032
"."       → 13
```

---

## 🔢 Step 2: Token Embeddings — IDs Become Vectors

Each token ID is mapped to a **learned vector** (called a token embedding). This is a simple lookup in an embedding table — no computation, just retrieval.

- Vocabulary: 30,000–100,000+ tokens
- Embedding size: typically 768, 1024, 4096, or 12,288 depending on model size

So the sentence becomes a matrix of token embeddings:
```
"Explain" → [0.56, -0.12, ..., 0.77]   (768 dimensions)
"how"     → [0.21,  0.43, ..., -0.18]
"it"      → [-0.33, 0.88, ..., 0.05]
...
```

These embeddings are **learned during training** — the model discovers that similar words should have similar vectors. But at this stage they're still **static** — the same word always gets the same vector. Context comes in the next steps.

---

## 📍 Step 3: Positional Encoding — Adding Word Order

Since Transformers process all tokens in parallel (not sequentially), they have **no inherent sense of word order**. Without this step, "dog bites man" and "man bites dog" would look identical.

**Positional encoding** adds a position signal to each embedding:

```
Final input = Token Embedding + Positional Encoding
```

Approaches:
- **Sinusoidal** (original paper): Uses sine and cosine functions at different frequencies. Each position gets a unique pattern. Fixed, not learned.
- **Learned positional embeddings** (GPT-2, BERT): A separate embedding table for positions, learned during training.
- **Rotary Position Embeddings / RoPE** (LLaMA, modern models): Encodes relative positions by rotating vectors. More flexible for variable-length inputs.

> For deeper explanation, see **"Transformer Core Mechanism"** → Positional Encoding section.

---

## 🧠 Step 4: Stack of Transformer Blocks

This is where the model "thinks."

Each block contains:
- **Multi-Head Self-Attention** — every token attends to relevant other tokens across the sequence
- **Feedforward Neural Network (FFN)** — two linear layers with activation, processes each token independently
- **Residual Connections** — each sublayer adds its output to its input, preserving the original signal
- **Layer Normalization** — stabilizes values to prevent exploding/vanishing numbers

The blocks are stacked **N times**:
- BERT Base: 12 layers
- GPT-2: 12 layers
- LLaMA 2 7B: 32 layers
- GPT-3: 96 layers

Each block refines the understanding. Early layers tend to learn syntax and local patterns; middle layers learn phrases and relationships; later layers capture abstract meaning, intent, and tone.

> For the full breakdown of attention mechanics (Q/K/V, multi-head, scaling, residuals), see **"Transformer Core Mechanism."**

---

## 🧠 How Attention Works Inside Blocks (Summary)

Every token looks at every other token and **weighs them** using the Query-Key-Value mechanism:

1. Each token creates a Query ("what am I looking for?"), Key ("what do I offer?"), and Value ("here's my content")
2. Queries are compared against all Keys via dot product → relevance scores
3. Scores are scaled and passed through softmax → attention weights
4. Weighted sum of Values → the new, contextualized representation

For example, when processing _"it"_:
- Might attend strongly to _"happen"_ and _"Explain"_ (relevant context)
- Attends weakly to _"."_ and function words
- The resulting representation of "it" now encodes what "it" refers to in this specific sentence

**Multi-head attention** runs this process multiple times in parallel, each head learning a different type of relationship (syntactic, semantic, spatial, etc.).

---

## 🎯 Step 5: Language Modeling Head (LM Head)

After processing through all Transformer blocks, the model has a rich, contextualized representation for each token position. Now it needs to **predict the next token**.

The LM Head is:
1. A **linear layer** that projects the final hidden state to vocabulary size (e.g., 4096-dim → 50,000-dim)
2. **Softmax** to convert to probabilities

```
Hidden state [4096 dims] → Linear → [50,000 scores] → Softmax → [50,000 probabilities]
```

The model now has a probability for every token in its vocabulary. "Dear" might be 0.23, "I" might be 0.18, "Sarah" might be 0.09, etc.

### How Is the Next Token Selected?

The probabilities go through a **decoding strategy** — the model doesn't always just pick the highest:

- **Greedy decoding:** Always pick the highest probability token. Fast but repetitive.
- **Temperature sampling:** Scale the probabilities to control randomness. Low temperature (0.1) → nearly greedy, high temperature (1.5) → more creative/random.
- **Top-k sampling:** Only consider the top k most probable tokens, then sample from those.
- **Top-p (nucleus) sampling:** Consider the smallest set of tokens whose probabilities sum to p (e.g., 0.9). More adaptive than top-k.

> This is why the same prompt can give different outputs — and why temperature/top-p are parameters you can tune in API calls.

---

## 🔄 Full Pipeline: From Prompt to Response

```
1. Text prompt → Tokenizer → Token IDs
2. Token IDs → Embedding table lookup → Token Embeddings
3. Token Embeddings + Positional Encoding → Input Representations
4. Input → Transformer Block 1 → Block 2 → ... → Block N → Final Hidden States
5. Final Hidden State (last position) → LM Head → Probability distribution over vocabulary
6. Decoding strategy → Selected token
7. Append selected token to sequence → Go back to step 1
```

This loop repeats until the model generates a stop token or hits a length limit. Each iteration, the entire sequence (prompt + generated tokens so far) is re-processed through the full stack.

> **Note:** In practice, models use **KV caching** to avoid recomputing attention for tokens they've already processed. Only the new token's attention needs to be calculated each step.

---

## 🧩 Summary: Component Reference

| Component              | Function                                           | Where to Learn More                  |
|------------------------|----------------------------------------------------|--------------------------------------|
| Tokenizer              | Breaks text into subword tokens and maps to IDs    | —                                    |
| Token Embeddings       | Converts token IDs to dense vectors                | —                                    |
| Positional Encoding    | Adds word order information                        | Core Mechanism page                  |
| Multi-Head Attention   | Each token attends to relevant context             | Core Mechanism page (Q/K/V detail)   |
| Feedforward Network    | Processes and transforms attended information       | Core Mechanism page (FFN section)    |
| Residual Connections   | Preserves signal through deep stacks               | Core Mechanism page                  |
| Layer Normalization    | Stabilizes training across many layers             | Core Mechanism page                  |
| LM Head                | Projects hidden states to vocabulary probabilities | —                                    |
| Decoding Strategy      | Selects next token from probability distribution   | —                                    |

---

## 🧪 Test Your Understanding

- What's the difference between token embeddings (step 2) and the output of Transformer blocks (step 4)?
- Why does the model need to re-run the full sequence each generation step? (And what optimization avoids most of this cost?)
- If you increase temperature from 0.2 to 1.5, what changes about the output?
- Why use subword tokenization instead of full words?
