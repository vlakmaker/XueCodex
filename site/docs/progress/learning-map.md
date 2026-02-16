---
id: learning-map
title: "Learning Map & Gap Analysis"
sidebar_label: Learning Map
tags: [index, meta, learning-path, planning]
---

# Learning Map and Gap Analysis

> This is the internal planning version of the codex map. It tracks what exists,
> what's partial, and what's missing. Update it as you build new pages.
>
> **Legend:** ✅ = page exists | 🟡 = partial/needs update | ❌ = gap to fill
>
> The clean public version of this map lives at the [docs index](../intro.md).

---

## Level 0: Foundations — What Is All This?

The absolute basics. What is ML, what kinds are there, what does "learning" mean?

| Topic | Status | Page |
|-------|--------|------|
| What is AI? | ✅ | [What is AI?](../topics/ai-fundamentals/what-is-ai.md) |
| Types of AI (Narrow, General, Super) | ✅ | [Types of AI](../topics/ai-fundamentals/types-of-ai.md) |
| What is General AI? | ✅ | [General AI](../topics/ai-fundamentals/general-ai.md) |
| What is Narrow AI? | ✅ | [Narrow AI](../topics/ai-fundamentals/narrow-ai.md) |
| What is Superintelligence? | ✅ | [Superintelligence](../topics/ai-fundamentals/superintelligence.md) |
| AI vs ML vs Deep Learning | ✅ | [AI vs ML vs DL](../topics/ai-fundamentals/ai-dl-ml.md) |
| What is Machine Learning? | ✅ | [What is ML?](../topics/ai-fundamentals/what-is-machine-learning.md) |
| Supervised vs Unsupervised vs Reinforcement Learning | ❌ | — |
| Key ML Algorithms Overview (decision trees, SVMs, k-means, random forests) | ❌ | — |
| What Does "Training" Actually Mean? | ✅ | [How Models Learn](../topics/ai-fundamentals/how-models-learn.md) |
| What is Data? (Types, Formats, Terminology) | ✅ | [What is Data?](../topics/ai-fundamentals/data.md) |
| Importance of Data Quality | ✅ | [Data Quality](../topics/ai-fundamentals/data-quality.md) |
| Tokenization | ✅ | [Tokenization](../topics/ai-fundamentals/tokenization.md) |
| Overview of Key Generative AI Models | ✅ | [Generative AI Models](../topics/ai-fundamentals/gen-ai-models.md) |

**Gap:** There is no page explaining the *categories* of ML (supervised, unsupervised, reinforcement) and which algorithms belong where. The codex jumps from "what is ML" straight into loss functions and derivatives. This is the most important missing foundational page.

---

## Level 1: How Machines Learn — The Math That Matters

Loss functions, gradients, computation graphs, and why training works.

| Topic | Status | Page |
|-------|--------|------|
| Understanding Derivatives | ✅ | [Derivatives](../topics/machine-learning/core-maths/derivatives.md) |
| Computation Graphs | ✅ | [Computation Graphs](../topics/machine-learning/core-maths/computation-graph.md) |
| Computing Derivatives with a Computation Graph | ✅ | [Computation Derivatives](../topics/machine-learning/core-maths/computation-derivatives.md) |
| Broadcasting in Python | ✅ | [Broadcasting](../topics/machine-learning/core-maths/broadcasting-python.md) |
| The Training Loop from the Ground Up | ✅ | [Training Loop](../topics/ai-fundamentals/training-loop.md) |
| Loss Functions (MSE, Cross-Entropy) | ✅ | [Loss Functions](../topics/machine-learning/core-maths/loss-functions.md) |
| Visualizing Functions / Sigmoid Curve | ❌ | — |

**Status:** Mostly covered from course notes. These will become more meaningful after building Karpathy's micrograd. A dedicated loss functions page would strengthen this level.

---

## Level 2: Logistic Regression — Your First "Model"

| Topic | Status | Page |
|-------|--------|------|
| Logistic Regression | ✅ | [Logistic Regression](../topics/machine-learning/logistic-regression/logistic-regression.md) |
| Logistic Regression (Simple Explanation) | ✅ | [LR Derivatives](../topics/machine-learning/logistic-regression/logistic-regression-derivatives.md) |
| Binary Classification | ✅ | [Binary Classification](../topics/machine-learning/logistic-regression/binary-classification.md) |
| Logistic Regression Cost Function | ✅ | [LR Cost](../topics/machine-learning/logistic-regression/logistic-regression-cost-function.md) |
| Vectorizing Logistic Regression | ✅ | [Vectorization](../topics/machine-learning/logistic-regression/vectorizing-logistic-regression.md) |

**Status:** Complete.

---

## Level 3: Neural Networks

| Topic | Status | Page |
|-------|--------|------|
| What Are Neural Networks? | ✅ | [Neural Networks](../topics/deep-learning/neural-networks/what-are-neural-networks.md) |
| Neural Network Forward Pass | ✅ | [Forward Pass](../topics/deep-learning/neural-networks/neural-network-forward-pass.md) |
| Training: Forward and Backpropagation | ✅ | [Backpropagation](../topics/machine-learning/training-practices/f-b-propagation.md) |
| Understanding the Training Process | ✅ | [Training Process](../topics/machine-learning/training-practices/training-process-of-ml.md) |
| Activation Functions (Sigmoid, Tanh, ReLU) | ✅ | [Activation Functions](../topics/deep-learning/activation-functions/activation-functions.md) |
| Activation Functions and Derivatives | ✅ | [Activation Derivatives](../topics/deep-learning/activation-functions/activation-functions-derivatives.md) |
| Weight Initialization | ✅ | [Weight Init](../topics/deep-learning/neural-networks/weight-initialization.md) |
| DataLoader in PyTorch | ✅ | [DataLoader](../topics/ai-fundamentals/dataloader.md) |
| Deep Neural Networks — Why Depth Matters | ❌ | — |
| Overfitting, Underfitting, and Regularization | ❌ | — |
| Optimizers (SGD, Adam) — How Models Update Weights | ❌ | — |

**Gap:** The pieces exist (forward pass, backprop, activations) but there is no page tying them into "here is the full picture of how a deep neural network learns end to end." The Karpathy micrograd build will fill this naturally.

---

## Level 4: Sequence Models and NLP Foundations

| Topic | Status | Page |
|-------|--------|------|
| Language as a Bag of Words | ✅ | [Bag of Words](../topics/deep-learning/nlp/bag-of-words.md) |
| Converting Words to Features | ✅ | [Words to Features](../topics/deep-learning/nlp/convert-words-featured.md) |
| Word Embeddings and Sequence Models | ✅ | [Word Embeddings](../topics/deep-learning/nlp/word-embeddings.md) |
| Language AI Tasks (NLP Overview) | ✅ | [NLP Tasks](../topics/deep-learning/nlp/language-ai-tasks.md) |
| Encoder-Decoder RNN Models | ✅ | [Encoder-Decoder RNN](../topics/deep-learning/sequence-models/encoder-decoder-translation.md) |
| Language Modeling: N-Grams and NNs | ✅ | [N-Grams and NNs](../topics/deep-learning/sequence-models/llm-ngram-nn.md) |
| Seq2Seq, Word2Vec, and the Road to Transformers | ❌ | — |

**Gap:** The historical lineage (BoW to Word2Vec to Seq2Seq to Attention to Transformers) is not in a dedicated page. The updated "Transformers and Attention" page covers some of this, but a standalone "NLP Evolution" page could make it cleaner.

---

## Level 5: Transformers

| Topic | Status | Page |
|-------|--------|------|
| Transformers and Attention — Overview | ✅ | [Transformers Overview](../topics/deep-learning/nlp/transformers-attention.md) |
| Transformer Core Mechanism (Q/K/V, Multi-Head) | ✅ | [Core Mechanism](../topics/deep-learning/nlp/transformer-core-mechanism.md) |
| Transformer Architecture — Full Pipeline | ✅ | [Full Architecture](../topics/deep-learning/nlp/transformer-architecture.md) |
| What is Self-Attention? | ✅ | [Self-Attention](../topics/deep-learning/nlp/self-attention.md) |
| Multihead Attention | ✅ | [Multihead Attention](../topics/deep-learning/nlp/multi-head-attention.md) |
| Positional Encoding | 🟡 | [Positional Encoding](../topics/deep-learning/nlp/positional-encoding.md) — **file is empty** |
| Attention Mechanism Deep Dive | ✅ | [Attention Deep Dive](../topics/deep-learning/nlp/attention-mechanism.md) |
| Encoders, Decoders, and Attention | ✅ | [Encoders and Decoders](../topics/deep-learning/nlp/encoder-decoder.md) |

**Status:** Strong. Some older pages (self-attention, multihead attention) may overlap with the newer core mechanism page. Review later and consolidate. The positional encoding file is currently empty and needs content.

---

## Level 6: Embeddings (Cross-Cutting)

| Topic | Status | Page |
|-------|--------|------|
| What Are Embeddings? (Fundamentals) | ✅ | [Embeddings](../topics/ai-fundamentals/embeddings.md) |
| Embeddings in NLP: Static to Contextual | ✅ | [Embeddings NLP](../topics/deep-learning/nlp/embeddings.md) |
| Embeddings in Search and RAG | ❌ | — |
| Embedding Similarity and Distance Metrics | ❌ | — |

**Gap:** The "what" is covered but not the "how to use them in practice" — directly relevant to RAG work.

---

## Level 7: Applied AI and Engineering

| Topic | Status | Page |
|-------|--------|------|
| Search Algorithms in AI | ✅ | [Search Algorithms](../topics/ai-fundamentals/search-algorithms.md) |
| Search Problems | ✅ | [Search Problems](../topics/ai-fundamentals/search-problem.md) |
| AI Applications Across Industries | ✅ | [AI Across Industries](../topics/ai-fundamentals/ai-across-industries.md) |
| Introduction to RAG | ✅ | [RAG Intro](../topics/deep-learning/nlp/rag-introduction.md) |
| ML Limitations | ✅ | [ML Limitations](../topics/machine-learning/context/machine-learning-limitations.md) |
| Object Detection and Data Augmentation | ✅ | [Object Detection](../topics/deep-learning/vision/object-detection-data-augmentation.md) |
| Fine-tuning vs RAG | 🟡 | In AI Engineering README, not a proper page |
| Evaluation and Metrics for AI Systems | ❌ | — |
| Model Selection (when to use what) | ❌ | — |
| RAG Architecture (end-to-end) | ❌ | — |
| Quantization and Model Compression | ❌ | — |
| Prompt Engineering | ✅ | [Prompt Engineering](../topics/prompt-engineering/what-is-prompt-engineering.md) |

**Gap:** This is where Chip Huyen's book will generate the most pages. Evaluation, model selection, RAG architecture — build these as you read.

---

## Housekeeping Issues

These are not content gaps but data quality issues in existing files:

| Issue | File | Detail |
|-------|------|--------|
| ~~Typo in id~~ | ~~`deep-learning/nlp/attention-mechanism.md`~~ | ~~FIXED: id corrected to `attention-mechanism`~~ |
| ~~Truncated title~~ | ~~`machine-learning/core-maths/computation-graph.md`~~ | ~~FIXED: page fully rewritten~~ |
| ~~Duplicate id~~ | ~~`deep-learning/nlp/embeddings.md`~~ | ~~FIXED: id changed to `nlp-embeddings`~~ |
| ~~CopyEdit artifacts~~ | ~~9 files~~ | ~~FIXED: removed from all affected files~~ |
| Typo in id | `deep-learning/sequence-models/llm-ngram-nn.md` | id is `llm-ngam-nn` (should be `llm-ngram-nn`) |
| Inconsistent id casing | `ai-fundamentals/superintelligence.md` | id is `Superintelligence` (should be lowercase) |
| Empty file | `deep-learning/nlp/positional-encoding.md` | No content at all |
| Duplicate id | `chapter-1` used by both `galileo-rag/chapter-1.md` and `prediction-machines/chapter-1.md` |
| Wrong id on project | `projects/spellweavers-grimoire.md` | id is `prompt-engineering-categories` (copy-paste from another file) |
| Mismatched title | `deep-learning/training/document-categorization-prediction.md` | Title says "Converting Words to Features in NLP" but content is about document categorization |
| Missing frontmatter | 9 files have no YAML frontmatter at all |

---

## How To Use This Map

**If you're working through Karpathy (building):**
Fill gaps in Levels 1-3 as you go. Write the page after you build the thing.

**If you're reading Chip Huyen (studying):**
Fill gaps in Levels 5-7. Write the page after the chapter clicks.

**General rule:**
Don't write pages preemptively. Build or read something, notice you can now explain it, write the page, check it off here.

---

*Last updated: February 16, 2026*
