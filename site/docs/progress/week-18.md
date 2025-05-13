---
id: "week-18"
title: Week 18
sidebar_label: week 18
slug: "/progress/week-18"
---
# 📈 AI Learning Progress

This document tracks my day-to-day progress while building the **XueCodex** knowledge base and learning AI through a mix of structured courses and hands-on experimentation.

# 🌟 Vera's AI Learning Journey — Progress Log

![Vera's AI Learning Journey – Progress Log](/img/Vera_AI_Profile_Card.png)

Welcome to **Vera’s Quest Log** — a pixel-powered learning journal chronicling the hands-on adventures, challenges, and breakthroughs of an Alchemist on a mission to master AI.

---

## 🗕️ Weekly Goals

| Week | Focus Area                        | Status         | Notes                                                            |
| ---- | --------------------------------- | -------------- | ---------------------------------------------------------------- |
| 15   | BittyGPT Homepage Launch          | ✅ Done         | Launched [bittygpt.com](https://bittygpt.com) with multiple apps |
| 16   | MythosQuest Refactor + Deployment | ✅ Done         | Completed modular backend refactor and server deployment         |
| 17   | Scenario Engine + Sticky Memory   | 🟡 In Progress | Start Phase 4 and advanced gameplay mechanics                    |

---

## 🔥 Quest Challenges

| Quest 🛕                              | Type              | Status  | Reward 🏆             |
| ------------------------------------- | ----------------- | ------- | --------------------- |
| BittyGPT Homepage + Docker Deployment | DevOps + Creative | ✅ Done  | +6 Deployment Mastery |
| Spellweaver Grimoire MVP Launch       | Project           | ✅ Done  | +7 UX Ritualist XP    |
| MythosQuest Full Backend Refactor     | Project           | ✅ Done  | +8 Full-Stack Insight |
| MythosQuest Live Deployment           | Project           | ✅ Done  | +7 Worldbuilder XP    |
| MythosQuest CI/CD Setup               | DevOps            | ✅ Done  | +5 Automation Sage    |
| Secure API Key Management (Fernet)    | Security          | ✅ Done  | +4 Encryption Mastery |
| SQLAlchemy ORM Refactor               | Backend           | ✅ Done  | +4 DB Alchemy         |
| Scenario Engine Prototype             | Gameplay          | 🔜 Next | +6 Lorecrafter XP     |

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
| Classical AI Search (BFS, DFS, A\*) | ⭐⭐⭐⭐          |

---

## 🚀 Next Up

- 🔄 Merge Docker/CD configuration into `main`
- 🧙‍♂️ Start Phase 4: Scenario Engine and Character Creation UI
- 🧠 Implement sticky memory system
- 🗃️ Expand user database for session retention
- 🧩 Improve UX: settings layout, dynamic model dropdowns
- 🎨 Polish frontend styles for better immersion
- 📢 Share MythosQuest Phase 3 milestone on LinkedIn
- 🛠️ Continue AI learning: CS50 AI, DeepLearning.AI Week 4

---

## 🧙 Vera’s Learning Style

- Alchemist Learner 💡
- Experimental & visual
- Driven by curiosity and storycraft
- Loves coding by doing, worldbuilding challenges, and visual structure

---

# Log

## ✅ **April 28, 2025**

### 🧠 Added Knowledge Item: `Ml Project Success`
**Summary:**
- Created a comprehensive Markdown file detailing best practices for launching successful machine learning projects.
- Consolidated multiple key topics:
  - Why 87% of ML projects fail.
  - How to define the problem clearly.
  - When to use ML vs heuristics.
  - How to run experiments and validate solutions.
  - Business justification for ML (automation, prediction, personalization).
  - Technical feasibility, data quality, and predictive power.
  - Comparison between heuristic methods and ML approaches.
- Organized with clear sections, takeaway points, and examples for practical application.
- Tagged for future referencing in AI Product Development and ML Strategy categories.

**Linked Topics:**
- AI Product Thinking
- ML Strategy & Use Cases
- Heuristic vs ML Design Decisions
- Experimentation & Validation

**Next Steps:**
- Consider creating visual summary (flowchart or decision tree) for "Should We Use ML?"
- Build checklist or interactive prompt-based guide from this content for XueCodex UI.

## MythosQuest Devlog — April 29, 2025

Today was a strategic planning day for MythosQuest, focused on **data architecture**, **gameplay session structure**, and future-proofing the platform. The goal was not to build, but to architect — and we succeeded.

---

## ✅ What We Did

### 🧠 Structural Design

- Reviewed the core **user flow** and critiqued its structure as a product mentor.
- Identified issues with session handling, flow clarity, and ambiguous states.
- Reorganized the UX to reflect a cleaner loop:
    
    ```
    Login → Welcome → Select/Create Character → Choose Scenario → Play or Resume → End/Save Session
    ```
    

### 📊 Database Visualization

- Created a full Markdown-formatted explanation of the **MythosQuest database schema**, including current tables (`User`, `APIKey`, `Settings`) and upcoming ones (`Character`, `Scenario`, `Session`, `Turn`).
- Aligned all models with real use cases like memory, character persistence, and scalable prompts.

### 🎯 Planning for Character + Scenario Features

- Identified required vs optional fields for the **Character Creator**.
- Proposed schema for `Character`, including: `name`, `class`, `skills`, `flaw`, and optional `backstory`.
- Designed `Scenario` schema with `title`, `description`, `roles`, and optional `prompt_template`.
- Clarified how user actions like hitting "Play" trigger `Session` and `Turn` logic.

### 💬 Mentor Critique

- Audited the current UX flow and spotted:
    - Confusion between “Create” and “Select” character
    - Unclear session state tracking
    - Missing logic for auto-resume or failure cases
- Suggested creating a complete UX loop + fallback states for robust design.

---

## 💡 Key Takeaways

- ✅ A usable prototype is not the same as a **robust system**.
- 🔍 Planning database models now prevents costly rewrites later.
- 🧱 MVP-level memory must track turn history per user and support reloading.
- 🧭 Product clarity begins at the **flow + data level**, not in code.

---

## 🔜 Next Steps

1. **Design the Character Creation form** (fields, validation, default traits)
2. **Define Scenario templates** (at least 3 to start)
3. **Design the Session logic** (start → store → resume → end)
4. Begin implementing new models in SQLAlchemy
5. Build UI skeletons (e.g. character form, scenario selector dropdown)

## ✅ April 30, 2025

### Added Knowledge Items:

- 📌 **Word Embeddings & Sequence Models in NLP**
    
    Covers Word2Vec, CBOW, Skip-Gram, GloVe, Seq2Seq, RNNs, GRUs, LSTMs, and related concepts in NLP.
    
- 📌 **Encoder-Decoder RNN Models for Translation**
    
    Detailed overview of encoder-decoder architecture using RNNs, training techniques (teacher forcing), and PyTorch implementation notes.
    

### Reflections:

- 🔍 IBM/Duke courses are basic but effective for brushing up terminology and padding the CV.
- 🧠 Much of the math and architecture is clearer now after revisiting with structured notes.
- ⚙️ Next goal: Build a minimal PyTorch-based encoder-decoder model from scratch and test on toy translation data.

---

## 🧭 Next Steps

- Create visual reference sheets for embeddings and encoder-decoder flow
- Move into Transformer-based models and self-attention mechanisms
- Begin summarizing the GloVe + SkipGram + Seq2Seq labs from the IBM course