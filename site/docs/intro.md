---
id: intro
title: "XueCodex — The Map"
slug: /
---

# XueCodex — The Map

> This page is the spine of the codex. It shows how everything connects and provides
> a guided path through the material — from foundations to applied engineering.

---

## Level 0: Foundations — What Is All This?

The absolute basics. What is ML, what kinds are there, what does "learning" mean?

| Topic | Page |
|-------|------|
| What is AI? | [What is AI?](topics/ai-fundamentals/what-is-ai.md) |
| Types of AI: Narrow, General, Superintelligence | [Types of AI](topics/ai-fundamentals/types-of-ai.md) |
| What is General AI? | [What is General AI?](topics/ai-fundamentals/general-ai.md) |
| What is Narrow AI? | [What is Narrow AI?](topics/ai-fundamentals/narrow-ai.md) |
| What is Superintelligence? | [Superintelligence](topics/ai-fundamentals/superintelligence.md) |
| AI vs ML vs Deep Learning | [AI vs ML vs DL](topics/ai-fundamentals/ai-dl-ml.md) |
| What is Machine Learning? | [What is ML?](topics/ai-fundamentals/what-is-machine-learning.md) |
| What Does "Training" Actually Mean? | [How Models Learn](topics/ai-fundamentals/how-models-learn.md) |
| What is Data? (Types, Formats, Terminology) | [What is Data?](topics/ai-fundamentals/data.md) |
| Importance of Data Quality | [Data Quality](topics/ai-fundamentals/data-quality.md) |
| Overview of Key Generative AI Models | [Generative AI Models](topics/ai-fundamentals/gen-ai-models.md) |
| What is Tokenization? | [Tokenization](topics/ai-fundamentals/tokenization.md) |

---

## Level 1: How Machines Learn — The Math That Matters

Loss functions, gradients, computation graphs, and why training works.

| Topic | Page |
|-------|------|
| Loss Functions (MSE, Cross-Entropy) | [Loss Functions](topics/machine-learning/core-maths/loss-functions.md) |
| Understanding Derivatives | [Derivatives](topics/machine-learning/core-maths/derivatives.md) |
| Computation Graphs | [Computation Graphs](topics/machine-learning/core-maths/computation-graph.md) |
| Computing Derivatives with a Computation Graph | [Computation Derivatives](topics/machine-learning/core-maths/computation-derivatives.md) |
| Broadcasting in Python | [Broadcasting](topics/machine-learning/core-maths/broadcasting-python.md) |
| The Training Loop from the Ground Up | [Training Loop](topics/ai-fundamentals/training-loop.md) |

---

## Level 2: Logistic Regression — Your First "Model"

Logistic regression is the bridge between math concepts and an actual ML model. It is essentially a single neuron.

| Topic | Page |
|-------|------|
| Logistic Regression | [Logistic Regression](topics/machine-learning/logistic-regression/logistic-regression.md) |
| Logistic Regression (Simple Explanation) | [LR Derivatives](topics/machine-learning/logistic-regression/logistic-regression-derivatives.md) |
| Binary Classification | [Binary Classification](topics/machine-learning/logistic-regression/binary-classification.md) |
| Logistic Regression Cost Function | [LR Cost Function](topics/machine-learning/logistic-regression/logistic-regression-cost-function.md) |
| Vectorizing Logistic Regression | [Vectorization](topics/machine-learning/logistic-regression/vectorizing-logistic-regression.md) |

---

## Level 3: Neural Networks

Stacking logistic regression units into layers. How forward pass, backpropagation, and activation functions work.

| Topic | Page |
|-------|------|
| What Are Neural Networks? | [Neural Networks](topics/deep-learning/neural-networks/what-are-neural-networks.md) |
| Neural Network Forward Pass | [Forward Pass](topics/deep-learning/neural-networks/neural-network-forward-pass.md) |
| Training: Forward and Backpropagation | [Backpropagation](topics/machine-learning/training-practices/f-b-propagation.md) |
| Understanding the Training Process | [Training Process](topics/machine-learning/training-practices/training-process-of-ml.md) |
| Activation Functions (Sigmoid, Tanh, ReLU) | [Activation Functions](topics/deep-learning/activation-functions/activation-functions.md) |
| Activation Functions and Derivatives | [Activation Derivatives](topics/deep-learning/activation-functions/activation-functions-derivatives.md) |
| Weight Initialization | [Weight Init](topics/deep-learning/neural-networks/weight-initialization.md) |
| DataLoader in PyTorch | [DataLoader](topics/ai-fundamentals/dataloader.md) |

---

## Level 4: Sequence Models and NLP Foundations

How language went from bags of words to contextual understanding — the road to transformers.

| Topic | Page |
|-------|------|
| Language as a Bag of Words | [Bag of Words](topics/deep-learning/nlp/bag-of-words.md) |
| Converting Words to Features | [Words to Features](topics/deep-learning/nlp/convert-words-featured.md) |
| Word Embeddings and Sequence Models | [Word Embeddings](topics/deep-learning/nlp/word-embeddings.md) |
| Language AI Tasks (NLP Overview) | [NLP Tasks](topics/deep-learning/nlp/language-ai-tasks.md) |
| Encoder-Decoder RNN Models | [Encoder-Decoder RNN](topics/deep-learning/sequence-models/encoder-decoder-translation.md) |
| Language Modeling with N-Grams and Neural Networks | [N-Grams and NNs](topics/deep-learning/sequence-models/llm-ngram-nn.md) |
| Document Categorization | [Doc Categorization](topics/deep-learning/training/document-categorization-prediction.md) |
| Training a Document Classifier | [Doc Classifier](topics/deep-learning/training/training-document-classifier.md) |

---

## Level 5: Transformers

The architecture that powers everything modern.

| Topic | Page |
|-------|------|
| Transformers and Attention — Overview | [Transformers Overview](topics/deep-learning/nlp/transformers-attention.md) |
| Transformer Core Mechanism (Q/K/V, Multi-Head) | [Core Mechanism](topics/deep-learning/nlp/transformer-core-mechanism.md) |
| Transformer Architecture — Full Pipeline | [Full Architecture](topics/deep-learning/nlp/transformer-architecture.md) |
| What is Self-Attention? | [Self-Attention](topics/deep-learning/nlp/self-attention.md) |
| Multihead Attention | [Multihead Attention](topics/deep-learning/nlp/multi-head-attention.md) |
| Attention Mechanism Deep Dive | [Attention Deep Dive](topics/deep-learning/nlp/attention-mechanism.md) |
| Encoders, Decoders, and Attention | [Encoders and Decoders](topics/deep-learning/nlp/encoder-decoder.md) |

---

## Level 6: Embeddings (Cross-Cutting)

Embeddings show up everywhere — word2vec, transformers, RAG, search.

| Topic | Page |
|-------|------|
| What Are Embeddings? | [Embeddings (Fundamentals)](topics/ai-fundamentals/embeddings.md) |
| Embeddings in NLP: Static to Contextual | [Embeddings (NLP)](topics/deep-learning/nlp/embeddings.md) |

---

## Level 7: Applied AI and Engineering

Where foundations meet real products.

| Topic | Page |
|-------|------|
| Search Algorithms in AI | [Search Algorithms](topics/ai-fundamentals/search-algorithms.md) |
| Search Problems | [Search Problems](topics/ai-fundamentals/search-problem.md) |
| AI Applications Across Industries | [AI Across Industries](topics/ai-fundamentals/ai-across-industries.md) |
| Introduction to RAG | [RAG Intro](topics/deep-learning/nlp/rag-introduction.md) |
| Machine Learning Limitations | [ML Limitations](topics/machine-learning/context/machine-learning-limitations.md) |
| Object Detection and Data Augmentation | [Object Detection](topics/deep-learning/vision/object-detection-data-augmentation.md) |
| Prompt Engineering | [Prompt Engineering](topics/prompt-engineering/what-is-prompt-engineering.md) |
| Prompt Categories | [Prompt Categories](topics/prompt-engineering/prompt-engineering-categories.md) |
| Prompt Structuring | [Prompt Structuring](topics/prompt-engineering/prompt-structure.md) |

---

## Product Management and Strategy

| Topic | Page |
|-------|------|
| How AI Is Transforming Product Management | [AI PM Overview](topics/product-management/overview-ai-product-management.md) |
| Product Management Lifecycle | [PM Lifecycle](topics/product-management/ai-pm-lifecycle.md) |
| Adapting Software with AI | [Adapting Software](topics/product-management/adapting-software-with-ai.md) |
| ML Project Success | [ML Project Success](topics/product-management/ml-project-success.md) |
| Product-Led Growth | [PLG](topics/product-management/product-led-growth.md) |
| The Drivetrain Approach | [Drivetrain](topics/strategy/drivetrain-approach.md) |

---

## Book Notes

### AI Engineering (Chip Huyen)
| Chapter | Page |
|---------|------|
| Chapter 1: Introduction | [Introduction](books/ai-engineering/chapter-1-introduction.md) |

### Co-Intelligence (Ethan Mollick)
| Chapter | Page |
|---------|------|
| Chapter 1: Creating Alien Minds | [Alien Minds](books/co-intelligence/chapter-1-creating-alien-minds.md) |
| Chapter 2: Aligning the Alien | [Aligning the Alien](books/co-intelligence/chapter-2-aligning-the-alien.md) |
| Chapter 3: Four Rules | [Four Rules](books/co-intelligence/chapter-3-four-rules.md) |

### Mastering RAG (Galileo)
| Chapter | Page |
|---------|------|
| Chapter 1: Foundations | [RAG Foundations](books/galileo-rag/chapter-1.md) |
| Advanced RAG Summary | [RAG Advanced](books/galileo-rag/rag-advanced.md) |

### Prediction Machines
| Chapter | Page |
|---------|------|
| Chapter 1: Simple Economics of AI | [Economics of AI](books/prediction-machines/chapter-1.md) |
| Chapter 2: Prediction and Decision Architecture | [Prediction Architecture](books/prediction-machines/chapter-2-prediction-and-decision-architecture.md) |
| Chapter 4: To Decide or Not to Decide | [Decision Making](books/prediction-machines/chapter-4-decision-making-vs-rules.md) |

---

## Projects

| Project | Page |
|---------|------|
| XueCodex | [XueCodex](projects/xuecodex.md) |
| BittyScout | [BittyScout](projects/bitty-scout.md) |
| Spellweaver's Grimoire | [Grimoire](projects/spellweavers-grimoire.md) |

---

## Progress and Planning

- [Progress Tracker](progress/progress.md)
- [Learning Map and Gap Analysis](progress/learning-map.md) — what's covered, what's missing, and what to build next
