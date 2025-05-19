---
id: week-20
title: Week 20
sidebar_label: Week 20
slug: /progress/week-20
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
| XueCodex RAG Deployment                   | Project           | ✅ Done  | +6 Retrieval Sage XP    |
| IBM Course Reboot                         | Learning           | 🟡 In Progress  | +5 Resilience XP        |
| Publish RAG Milestone Post (LinkedIn/Blog)| Visibility         | ✅ Done         | +4 Signal Beacon XP     |
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

### Progress Log — 14 May 2025

### 🎯 Focus Areas

- ✅ Integrated **live semantic search** into XueCodex
- ✅ Deployed **RAG backend** with FAISS + OpenRouter (Mistral 7B)
- ✅ Implemented and tested full **RetrievalQA pipeline** via FastAPI
- ✅ Added `/rag-search` UI entry on the homepage (temporary API key input)
- ✅ Solved **Docusaurus build bug** caused by a sneaky whitespace in YAML frontmatter
- ✅ Automated frontmatter + LaTeX cleanup across all docs to prevent future issues
- ✅ Published new milestone post on **LinkedIn**

### 🔧 Tech Stack Used

- FastAPI, LangChain, FAISS, OpenRouter
- Docker, Traefik
- GitHub Actions (split into frontend and backend deploy workflows)
- Docusaurus 3.7

### 🧠 Key Learnings

- Even one invisible whitespace in YAML can take down an entire build 😅
- Writing automation scripts (LaTeX cleanup, MDX sanitizer) saved massive debugging time
- Keeping CI/CD clean with split workflows adds clarity and faster recovery
- RAG pipelines are powerful and surprisingly approachable when broken down step-by-step

### 🧱 Building Blocks Added to XueCodex

- `/rag-search` UI link on homepage
- Auto-healing script for LaTeX + frontmatter issues
- RAG backend now live at: `https://api.xuecodex.tech`
- LinkedIn post archive: `milestones/2025-05-15-rag-launch.md` (optional future addition)

### 🧪 What's Next?

- Add API key input to the frontend search bar
- UX polish for search result display
- Improve chunking and fallback handling in RetrievalQA
- Begin writing a Knowledge Item: **How RAG Systems Work (End to End)**

### 🔁 Next Steps:

- Fine-tune UX for search result presentation on the frontend
- Extend context chunking support and memory options in the backend
- Add more test cases to validate API reliability and document coverage

---

### ✅ **Friday Highlights (May 17)**

- Completed **OpenAI Agentic AI PDF #1**
- Wrote the **BittyScout project outline by hand** and uploaded it
- Discussed **AI adoption, multi-agent structure**, and project phases
- Confirmed we’ll build BittyScout as a real Docker project hosted under `bittygpt.com`
- Set up a GitHub repo and did early environment prep
- Used your new **Lamy pen** for writing (and loved it!)

### ✅ **Saturday Highlights (May 18)**

- Completed the **second OpenAI Agents paper**
- Had a **killer Vi Warrior workout**
- Took a break to **reflect on AGI, job disruption, and AI ethics**
- Had a strong philosophical chat about **AI as reflection vs manipulation**
- Agreed to use **`books/` and `topics/` dual structure** for XueCodex
- Decided to turn *Prediction Machines* into full notes
- Started working on **consultant positioning and reflection writing**

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

