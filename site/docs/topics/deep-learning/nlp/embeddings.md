---
id: "nlp-embeddings"
title: "Embeddings in NLP: From Static to Contextual"
tags: [embeddings, word2vec, transformers, nlp]
---

# Embeddings in NLP: From Static to Contextual

> For the general introduction to embeddings (what they are, how they work, similarity metrics, vector databases), see [What Are Embeddings?](../../ai-fundamentals/embeddings.md).
>
> This page covers how embeddings evolved specifically in NLP — from fixed word vectors to the contextual representations that power modern language models.

---

## The Problem: Words Have Multiple Meanings

Consider the word "bank":

- "I sat by the river **bank**." (edge of a river)
- "I deposited money at the **bank**." (financial institution)
- "The plane began to **bank** left." (to tilt/turn)

Any embedding system that gives "bank" a single, fixed vector is going to get at least two of these wrong. This is the fundamental limitation that the field spent a decade solving.

---

## Generation 1: One-Hot Encoding (No Similarity)

The simplest approach: every word gets a vector with a single 1 and all other positions 0.

```
"cat"  = [1, 0, 0, 0, 0]
"dog"  = [0, 1, 0, 0, 0]
"fish" = [0, 0, 1, 0, 0]
```

Problems:
- **No similarity information** — "cat" and "dog" are as different as "cat" and "economics"
- **Huge, sparse vectors** — vocabulary of 50,000 words means 50,000-dimensional vectors that are 99.998% zeros
- **No learning** — these are hand-coded, not trained

One-hot encoding is still used as the *input* format (looking up a token in an embedding table), but it's never used as the *representation* itself.

---

## Generation 2: Static Embeddings (Word2Vec, GloVe)

**Word2Vec** (2013, Mikolov et al.) and **GloVe** (2014, Pennington et al.) were breakthroughs: they trained dense, low-dimensional vectors where similar words cluster together.

**How Word2Vec works (Skip-gram version):**
- Take a word from a sentence (e.g., "sat")
- Train a model to predict its neighbors ("the", "cat", "on", "the", "mat")
- The hidden layer weights *become* the word embeddings
- Words that appear in similar contexts get similar vectors

This is where the famous arithmetic works: `king - man + woman = queen`.

**Limitations:**
- Each word gets **one vector, forever**. "bank" has the same embedding whether it means money or rivers.
- No understanding of word order — "dog bites man" and "man bites dog" have the same word vectors
- The embeddings are frozen after training — they don't adapt to new contexts

---

## Generation 3: Contextual Embeddings (ELMo, BERT, GPT)

The breakthrough came from computing embeddings **at inference time**, using the surrounding context.

**ELMo** (2018): Ran a bidirectional LSTM over the sentence and used the hidden states as embeddings. Same word, different embeddings depending on context.

**BERT** (2018): Used a transformer encoder to produce contextual embeddings. "Bank" in "river bank" gets a different vector than "bank" in "savings bank" because the self-attention mechanism looks at all surrounding words.

**GPT** (2018-present): Uses a transformer decoder. Each token's embedding is contextual — shaped by everything that came before it.

### The key difference:

| Property | Static (Word2Vec) | Contextual (BERT/GPT) |
|----------|-------------------|----------------------|
| One vector per word? | Yes — fixed forever | No — different every time |
| Handles polysemy ("bank")? | No | Yes |
| Considers word order? | No | Yes |
| Requires running a model? | No — just look up the vector | Yes — must do a forward pass |
| Trainable dimensions | 100-300 | 768-12,288 |

> This is the fundamental upgrade that made modern language models possible. Static embeddings give you a dictionary. Contextual embeddings give you a reader who understands the sentence.

---

## How Contextual Embeddings Work in Transformers

In a transformer, the embedding process has two stages:

**Stage 1: Token + Position Lookup (static)**

Each token gets a token embedding and a positional embedding, which are added together. At this point, "bank" always starts with the same vector.

**Stage 2: Self-Attention Layers (contextual)**

As the vector passes through each transformer layer, [self-attention](./self-attention.md) mixes information from surrounding tokens. After a few layers, the vector for "bank" in "river bank" has been pulled toward water/nature concepts, while "bank" in "savings bank" has been pulled toward finance concepts.

By the final layer, the embedding is fully contextual — it represents not just the word, but the word *in this specific sentence*.

---

## Sentence and Document Embeddings

Sometimes you need a single vector for an entire sentence or document, not just individual tokens:

| Approach | How It Works | Used For |
|----------|-------------|----------|
| Average pooling | Average all token embeddings | Simple, fast, decent for search |
| CLS token | Use the special classification token's embedding (BERT) | Classification tasks |
| Sentence transformers | Models trained specifically to produce good sentence vectors | Semantic search, RAG |

This is what powers XueCodex's RAG search: each knowledge item is embedded as a single vector, and your query is embedded the same way. The closest vectors are the most relevant results.

---

## Summary: The NLP Embeddings Timeline

```
1990s     One-hot encoding         No similarity, no learning
  |
2013      Word2Vec                 Learned similarity, but static
2014      GloVe                    Same idea, different training
  |
2018      ELMo                     Context-aware (LSTM-based)
2018      BERT                     Context-aware (transformer encoder)
2018      GPT                      Context-aware (transformer decoder)
  |
2020+     Sentence Transformers    Full-sentence embeddings for search/RAG
```

Each generation solved the limitations of the previous one. The progression from static to contextual embeddings is one of the most important developments in modern AI.

---

## Where to Go Next

- [What Are Embeddings?](../../ai-fundamentals/embeddings.md) — the general concept, similarity metrics, vector databases
- [Word Embeddings and Sequence Models](./word-embeddings.md) — deeper dive into Word2Vec and how it led to sequence models
- [Self-Attention](./self-attention.md) — the mechanism that makes contextual embeddings possible
- [Transformers and Attention](./transformers-attention.md) — the architecture overview
