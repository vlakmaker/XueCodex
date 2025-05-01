---
id: "word-embeddings"
title: Word Embeddings & Sequence Models in NLP
tags: [embeddings, word2vec, neural networks]
---
# Word Embeddings & Sequence Models in NLP

## Word2Vec Overview

**Word2Vec** refers to a family of models that learns to represent words as dense, continuous vectors — capturing semantic relationships and meaning.

### 🔀 Two Architectures:

| Model | Input | Predicts | Ideal for |
| --- | --- | --- | --- |
| CBOW | Context words | Target word | Frequent words |
| Skip-Gram | Target word | Context words | Rare words |

Each uses a simple feedforward neural net:

- **Input**: One-hot encoded word
- **Hidden Layer**: Learns embeddings
- **Output Layer**: Predicts word via softmax (or approximated with negative sampling)

---

## CBOW (Continuous Bag of Words)

CBOW predicts a center word using its context. It averages the embeddings of context words and passes the result to a neural network to predict the target word.

- **Input**: Context words (e.g., `I ___ dogs` → "love")
- **Output**: Target word
- **Drawback**: Loses word order information

---

## Skip-Gram

Skip-Gram is the reverse of CBOW — it predicts context words given a target word.

- **Input**: One word (e.g., "love")
- **Output**: Multiple context words (e.g., "I", "dogs")
- **Advantage**: Performs well for rare words and small datasets

---

## GloVe (Global Vectors for Word Representation)

GloVe is a pretrained word embedding model trained on word co-occurrence statistics from large corpora.

- **Source**: Trained on datasets like Wikipedia, Common Crawl
- **Use Case**: Load into PyTorch for better initialization
- **Access**: `torchtext.vocab.GloVe`

---

## Sequence-to-Sequence (Seq2Seq) Models

Seq2Seq models handle variable-length inputs and outputs. They're widely used in:

- **Machine Translation**
- **Summarization**
- **Conversational Agents (Chatbots)**

### Structure:

1. **Encoder**: Converts input sequence to a context vector
2. **Decoder**: Generates output sequence from that vector

Supports:

- Sequence-to-sequence
- Sequence-to-label
- Label-to-sequence

---

## Recurrent Neural Networks (RNNs)

RNNs process sequences by maintaining a **hidden state** that evolves over time.

### Characteristics:

- Ideal for time series and language
- Each output depends on previous inputs

### Limitations:

- Struggles with long-term dependencies
- Suffers from vanishing gradients

---

## GRUs & LSTMs

### GRU (Gated Recurrent Unit):

- **Update Gate**: Controls how much past information to keep
- **Reset Gate**: Controls how much past info to forget

### LSTM (Long Short-Term Memory):

- **Forget Gate**: Decides what info to discard
- **Input Gate**: Controls what new info to add
- **Output Gate**: Decides what part of memory to output

Both improve long-term memory handling in sequence tasks.

---

## Additional Concepts Often Glossed Over

| Concept | Explanation |
| --- | --- |
| **Negative Sampling** | Trains softmax efficiently using a few negative examples |
| **Padding** | Used to batch sequences of different lengths |
| **Top-k Sampling** | More fluent generation than greedy decoding |
| **Attention** | Lets models focus on relevant input tokens (used in Transformers) |
| **Embeddings vs One-Hot** | Embeddings capture similarity and reduce dimensionality |

---

## Questions to Explore

1. Why does Skip-Gram outperform CBOW for rare words?
2. When should you use GloVe vs training your own embeddings?
3. How do Seq2Seq models generalize across languages or tasks?
4. What are the advantages of GRUs over LSTMs, and vice versa?
5. How can we visualize and interpret word vectors?

---

## Summary

- Word2Vec and GloVe are fundamental to word embeddings
- CBOW and Skip-Gram offer different trade-offs
- Seq2Seq models allow mapping inputs to outputs flexibly
- RNNs are enhanced by GRU and LSTM architectures for memory
- Pretrained embeddings like GloVe offer powerful starting points

This foundation is essential for deeper work with language models, transformers, and applied NLP systems.