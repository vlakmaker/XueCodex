---
id: chapter-1-introduction
title: Introduction
tags: [books, Huyen, generative-ai, foundational models, AI engineering]
---

## 📘 *AI Engineering* – Chapter 1 Summary

**Title:** *Introduction to Building AI Applications with Foundation Models*

**Author:** Chip Huyen

**Chapter Goal:** Introduce the rise of AI engineering as a discipline, explain how foundation models have transformed AI development, and outline the core techniques and workflows for building AI-powered applications.

---

### 🚀 The Rise of AI Engineering

AI engineering has emerged as a distinct discipline thanks to the rise of foundation models. These powerful models have lowered the barriers to entry, making it possible for people without deep AI expertise to build advanced applications. While this growth feels new, it builds on decades of progress—from early language models in the 1950s to modern retrieval technologies that predate systems like RAG (Retrieval-Augmented Generation).

The **key difference today** is scale. Foundation models enable new applications and demand new engineering solutions.

---

### 🔁 From Language Models to Foundation Models

### 🧩 Language Models → Large Language Models (LLMs)

- Early models used simple statistics, like word frequencies.
- Core unit: the **token**—which can be a character, word, or subword.
- Autoregressive models (predicting the next token) power tasks like translation, summarization, and code generation.

### 🧠 LLMs → Foundation Models

- Shift from **supervised** to **self-supervised learning** eliminated the bottleneck of manually labeled data.
- Foundation models now include both:
    - **LLMs** (text-based)
    - **LMMs** (multimodal: image + text, etc.)
- Example: OpenAI’s **CLIP** trained on 400M image-text pairs with no manual labels, allowing generalization across tasks.

---

### 🛠️ AI Engineering Techniques

1. **Prompt Engineering**
    - Writing detailed instructions (with examples) to guide the model’s behavior.
    - Easiest and cheapest way to start—no training required.
2. **Retrieval-Augmented Generation (RAG)**
    - Connects a model to external data (e.g., documents, databases).
    - Reduces hallucinations and improves factual accuracy by supplementing the model’s internal knowledge.
3. **Finetuning**
    - Training an existing model on task-specific examples.
    - Improves performance, lowers latency and cost, and unlocks capabilities beyond prompt tuning.

Using existing models with these techniques is faster and more cost-effective than training models from scratch.

---

### 📈 Why AI Engineering Is Booming

1. **AI’s Expanding Capabilities**
    - Automates tasks that involve communication or content generation (emails, reports, images, videos, etc.).
    - Helps in high-impact areas like marketing, education, and customer support.
2. **Economic Incentives**
    - Companies mentioning “AI” in earnings calls often see stock price gains.
3. **Low Barrier to Entry**
    - Model-as-a-service (e.g., OpenAI APIs) simplifies development.
    - AI can now write code, making app building accessible even to non-engineers.
    - You can start in plain English.

---

### 📚 Common Use Cases for Foundation Models

### Consumer and Enterprise Use Cases:

| Area | Examples |
| --- | --- |
| **Coding** | Writing documentation, generating tests, commit messages. |
| **Image/Video** | Editing, ad creation, design, media generation. |
| **Writing** | Emails, social media posts, copywriting, internal reports. |
| **Education** | Tutoring, grading, personalized learning. |
| **Conversational Bots** | Chatbots, AI companions, customer support agents. |
| **Information Aggregation** | Summarizing meetings, research, or large documents. |
| **Data Organization** | Extracting structured data from contracts, receipts, etc. |
| **Workflow Automation** | Planning trips, scheduling, CRM updates, task automation. |

AI agents are especially useful in automating multi-step workflows by combining planning with tool usage.

---

### 🧠 Planning AI Applications

Before you build an AI application, you need to evaluate:

- **Use Case Fit**
    
    Is AI the right solution? Does it solve a real problem or create an advantage?
    
- **AI vs. Human Roles**
    - Will AI assist or automate?
    - Will it handle simple tasks or critical operations?
    - Use the **Crawl–Walk–Run** framework to scale safely from minimal to full automation.
- **Build vs. Buy**
    - APIs are fast and cheap, ideal for prototyping.
    - Self-hosting gives more transparency, control, and customization.
- **Define Success Clearly**
    - Key metrics: latency, cost per query, output quality (relevance, factual accuracy, safety).

---

### 🧱 The AI Engineering Stack

1. **Application Development**
    - The new frontier of differentiation.
    - Focus on interfaces, user experience, context injection, and prompts.
2. **Model Development**
    - Less about training from scratch; more about adapting and optimizing.
    - Key practices: tokenization, deduplication, safety filters, context retrieval.
3. **Infrastructure**
    - Managing large models efficiently (latency, memory, cost) is critical.

---

### 🔄 AI Engineering vs. ML Engineering

| Dimension | ML Engineering | AI Engineering |
| --- | --- | --- |
| Focus | Model training + feature engineering | Adapting pre-trained models (FMs) |
| Output Type | Predictive (closed-ended) | Generative (open-ended) |
| Evaluation | Accuracy, precision, recall | Relevance, factuality, safety |
| Infra Requirements | Modest compute | High compute, optimized inference needed |

---

### 👨‍💻 AI Engineering vs. Full-Stack Development

AI engineering is increasingly similar to full-stack development:

- Web, mobile, and browser-based AI tools are becoming the norm.
- JavaScript is joining Python as a key development language.
- Teams now prototype fast → iterate on real user feedback → optimize data/model later.
- The stack flips: product-first, model-later.

---

### 📌 Final Takeaways

- AI Engineering is distinct from classic ML and MLOps—it focuses on *building on top of* foundation models.
- It combines:
    - Application design
    - Prompt + context engineering
    - Smart integration of pre-trained models
- Success depends less on model invention and more on:
    - Understanding the tools
    - Defining the right use case
    - Iterating quickly with users
- A structured framework is key to building reliable, efficient, and impactful AI applications.