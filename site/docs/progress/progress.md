
---
id: progress
title: Progress Tracker
sidebar_label: Progress
slug: /progress/progress
---
# 📈 AI Learning Progress

This document tracks my day-to-day progress while building the **XueCodex** knowledge base and learning AI through a mix of structured courses and hands-on experimentation.

# 🌟 Vera's AI Learning Journey — Progress Log

![Vera's AI Learning Journey – Progress Log](/img/Vera_AI_Profile_Card.png)

Welcome to **Vera’s Quest Log** — a pixel-powered learning journal chronicling the hands-on adventures, challenges, and breakthroughs of an Alchemist on a mission to master AI.

---

## 🗕️ Weekly Goals

| Week | Focus Area                           | Status         | Notes                                                                 |
| ---- | ------------------------------------ | -------------- | --------------------------------------------------------------------- |
| 15   | BittyGPT Homepage Launch             | ✅ Done         | Launched [bittygpt.com](https://bittygpt.com) with multiple apps      |
| 16   | MythosQuest Refactor + Deployment    | ✅ Done         | Completed modular backend refactor and server deployment              |
| 17   | Scenario Engine + Sticky Memory      | 🟡 In Progress | Start Phase 4 and advanced gameplay mechanics                         |
| 19   | RAG Deployment + IBM Course Refresh  | 🟡 In Progress | Finalize RAG UI for XueCodex, resume IBM AI course, restart momentum |

---

## 🔥 Quest Challenges
## 🔥 Quest Challenges

| Quest 🛕                                   | Type              | Status         | Reward 🏆               |
|-------------------------------------------|-------------------|----------------|-------------------------|
| BittyGPT Homepage + Docker Deployment     | DevOps + Creative | ✅ Done         | +6 Deployment Mastery   |
| Spellweaver Grimoire MVP Launch           | Project           | ✅ Done         | +7 UX Ritualist XP      |
| MythosQuest Full Backend Refactor         | Project           | ✅ Done         | +8 Full-Stack Insight   |
| MythosQuest Live Deployment               | Project           | ✅ Done         | +7 Worldbuilder XP      |
| MythosQuest CI/CD Setup                   | DevOps            | ✅ Done         | +5 Automation Sage      |
| Secure API Key Management (Fernet)        | Security          | ✅ Done         | +4 Encryption Mastery   |
| SQLAlchemy ORM Refactor                   | Backend           | ✅ Done         | +4 DB Alchemy           |
| Scenario Engine Prototype                 | Gameplay          | 🔜 Next         | +6 Lorecrafter XP       |
| XueCodex RAG Deployment                   | Project           | 🟡 In Progress  | +6 Retrieval Sage XP    |
| IBM Course Reboot                         | Learning           | 🟡 In Progress  | +5 Resilience XP        |
| Publish RAG Milestone Post (LinkedIn/Blog)| Visibility         | 🔜 Next         | +4 Signal Beacon XP     |
| Translate CV (Dutch → English)            | Career             | 🔜 Next         | +3 Multilingual Clarity |
| Build Your First `n8n` Flow (LLM + Webhook)| Dev Tooling       | 🔜 Optional     | +5 Automation Sorcery   |
| Add Concept Chain to XueCodex (IBM-related)| Knowledge Base    | 🔜 Next         | +4 Integration XP       |
| Master RAG Systems (Packt Coursera)     | Learning           | 🔜 This Week     | +6 Retrieval Engineer XP |


---

## 🧠 Concept Mastery

| Topic                               | Confidence 🌟 |
| ----------------------------------- | ------------- |
| Flask Modular Design                | ⭐⭐⭐⭐          |
| Docker & Traefik Deployment         | ⭐⭐⭐⭐          |
| SQLAlchemy ORM                      | ⭐⭐⭐⭐          |
| Secure API Key Handling             | ⭐⭐⭐⭐          |
| Streaming AI Responses              | ⭐⭐⭐           |
| Prompt Engineering                  | ⭐⭐⭐⭐          |
| Classical AI Search (BFS, DFS, A*)  | ⭐⭐⭐⭐          |

---


---

## 🧙 Vera’s Learning Style

- Alchemist Learner 💡
- Experimental & visual
- Driven by curiosity and storycraft
- Loves coding by doing, worldbuilding challenges, and visual structure

---

# Log

### 🗓️ Progress Log — 12 May 2025

### 🎯 Focus Areas

- ✅ Reviewed **Attention Mechanism** and **Self-Attention**
- ✅ Deep dive into **Transformer Encoder Architecture**
- ✅ Clarified **Multi-Head Attention**, `QKV` flows, and Softmax
- ✅ Completed transcription walkthroughs for:
    - Positional Encoding
    - Attention → Transformers
    - Transformers for Classification (Encoder-based)
- ✅ Consolidated confusion around **dot product, transpose, softmax, and scaling**
- ✅ Created or updated Knowledge Items:
    - Attention Mechanism
    - Self-Attention (Expanded)
    - From Attention to Transformers
    - Transformer Encoders for Classification

### 🧠 Key Realizations

- **Self-attention** made more sense once broken down step-by-step from raw Q, K, V projections to final token output.
- **Transpose** became clearer after understanding it as a matrix shape realignment for compatibility in dot products.
- **Softmax** plays a crucial role in normalizing attention weights.
- **Multi-head attention** = parallel perspectives on context.
- Still feel a bit wobbly around LSTMs, but more confident with attention-based models.

### 🧱 Building Blocks Added to XueCodex

- `/nlp/attention-mechanism`
- `/nlp/self-attention` (rewritten & expanded)
- `/nlp/from-attention-to-transformers`
- `/nlp/transformers-for-classification`

### 🧪 What's Next?

- Implementing attention layers in PyTorch
- Begin RAG search bar integration into XueCodex frontend
- Optional revisit: LSTM & GRU concepts in simpler code-level terms
- Continue course: *Generative AI with Transformers*

### 🗓️ 2025-05-13 — Full API Integration & Deployment Pipeline Stabilization

**Milestone:** The RAG search system for XuéCodex is now fully operational and deployed via containerized API at `https://api.xuecodex.tech`, with automated deployment pipelines in place.

### ✅ Key Highlights:

- **Created a dedicated FastAPI backend** with:
    - Live semantic search powered by FAISS and `bge-small-en-v1.5` embeddings
    - RetrievalQA pipeline using OpenRouter + Mistral 7B
    - Support for real-time document embedding from `site/docs`
- **Resolved major blockers**, including:
    - Missing optional dependencies (`unstructured[md]`, `libmagic`) for Markdown parsing
    - Container import errors with outdated `langchain_community` components
    - TLS cert issues via Traefik + Docker labels
    - Missing `openai` dependency (required internally even with OpenRouter)
- **Reorganized GitHub workflows** into:
    - `deploy-api.yml`: Handles backend container deployment via Traefik
    - `deploy-docs.yml`: Separately builds and publishes the Docusaurus site to GitHub Pages

### 🔁 Next Steps:

- Fine-tune UX for search result presentation on the frontend
- Extend context chunking support and memory options in the backend
- Add more test cases to validate API reliability and document coverage

---

## 🧭 Next Steps

- ✅ Update `progress.md` with new May goals and log
- 🔄 Finalize RAG search UI in XueCodex (API key input, navbar placement)
- 📚 Rehash and resume IBM GenAI course (1–2 chapters/day)
- 🧠 Begin knowledge item on LLM-based RAG systems
- ✍️ Translate Dutch CV updates into English
- 📢 Share RAG milestone or MythosQuest update on LinkedIn
- 🏋️ Continue Vi Warrior Training: strength, mobility, habit stacking
- 🎻 Daily double bass practice (3x10 min)
- 🗃️ Expand XueCodex with one concept chain based on IBM learnings
- 📔 Auto-log new progress this Sunday

