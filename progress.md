# 📈 AI Learning Progress

This document tracks my day-to-day progress while building the **AICodex** knowledge base and learning AI through a mix of structured courses and hands-on experimentation.

# 🌟 Vera's AI Learning Journey — Progress Log

![Vera - The AI Alchemist](/img/Vera_AI_Profile_Card.png)

Welcome to **Vera’s Quest Log** — a pixel-powered learning journal chronicling the hands-on adventures, challenges, and breakthroughs of an Alchemist on a mission to master AI.

---

## 📅 Weekly Goals

| Week | Focus Area                         | Status     | Notes                         |
|------|------------------------------------|------------|-------------------------------|
| 1    | Deep Learning Foundations          | ✅ Done     | Finished logistic regression + spam detector mini-project |
| 2    | Neural Networks + Python for AI    | 🚧 Ongoing | Starting Python AI course     |
| 3    | TBD                                | ⏳ Planned |                               |

---

## 🔥 Quest Challenges

| Quest 🧭                        | Type      | Status   | Reward 🏆           |
|-------------------------------|-----------|----------|---------------------|
| Logistic Regression Mini-Lab  | Hands-on  | ✅ Done   | +3 Coding Intuition |
| Spam Detector Classifier      | Project   | ✅ Done   | +4 Data Alchemy     |
| Pixel Art Avatar              | Creative  | ✅ Done   | +5 Identity Boost   |
| AI Notebook Refactor          | Practice  | ✅ Done | +2 Organizational Wisdom |
| AI Progress Tracker           | Meta      | ✅ Done   | +1 Self-Awareness XP |

---

## 🧠 Concept Mastery

| Topic                     | Confidence 🌟 |
|--------------------------|----------------|
| Supervised Learning      | ⭐⭐⭐           |
| Logistic Regression      | ⭐⭐            |
| Numpy & Matplotlib       | ⭐⭐⭐⭐          |
| Model Evaluation Metrics | ⭐⭐            |
| Prompt Engineering       | ⭐⭐⭐⭐          |

---

## 🚀 Next Up

- [ ] Finish Week 2 of DeepLearning.AI (Neural Nets)
- [ ] Work through Python for AI (parallel course)
- [ ] Add YAML frontmatter to all topic markdown files
- [ ] Design a Quest Challenge board (Docusaurus compatible)

---

## 🧙 Vera’s Learning Style

- Alchemist Learner 💡
- Experimental & visual
- Driven by curiosity and "seeing it work"
- Loves coding by doing, story-based challenges, and visual structure

---

# Log**

## 🗓️ Week of March 25, 2025

### Monday
- ✅ Reorganized Notion export structure into GitHub-friendly folders (topic-first).
- ✅ Built a working Notion → Markdown pipeline.
- ✅ Created the new `AICodex` repository and initial file structure.
- ✅ Converted early notes (on ML foundations, limitations, classification vs regression) into Markdown.
- ✅ Set up README and clarified long-term purpose.

### Tuesday
- ✅ Completed "Logistic Regression as a Neural Network" in DeepLearning.AI.
- ✅ Created hands-on spam classifier mini-project.
- ✅ Organized notebooks under `playground/practice`, added CSVs under `playground/resources`.
- ✅ Added YAML frontmatter to topic Markdown files.
- ✅ Refined folder structure: topics split from playground, theory vs practice split added.
- ✅ 🧠 DeepLearning.AI - Python for AI Developers. Completed: Lessons 1–6. 📝 Why I like it: Practical, not bloated, explains concepts clearly and at a nice pace.

### Thursday
🎉 After weeks of iteration, testing, and Docker wrangling, **MythosQuest** is officially live on my Oracle Cloud instance — now powered by the **CosmosRP API** instead of local models.

### 🔄 Key Changes Today
- 🚀 Replaced self-hosted Mistral with the faster CosmosRP API to improve response speed and reduce memory usage
- 🔧 Simplified the Flask app (`ai_dm.py`) to remove login, memory, and RAG features for faster iteration
- 🔑 Switched to `.env`-based API key loading and verified that it works both locally and on the Oracle server
- 🐳 Verified that the Docker container runs the new version correctly
- 🔐 Temporarily secured the app by rotating the API key to prevent external misuse

### 🌐 Deployment Status
- ✅ Live at `localhost:5000` (and Oracle IP)
- ✅ cURL and browser responses working as expected
- ⏳ Login system planned for tomorrow to secure usage and prep for multi-user support

### 🧙 2025-03-28 — MythosQuest MVP: Login & Streaming

- Built full user **registration/login/logout** system with hashed passwords
- Implemented **Flask sessions** to protect access to gameplay
- Fixed **streaming duplication bug** on the frontend (chunk handling)
- Streaming now yields proper readable paragraphs, not individual characters
- Reached a solid **MVP** milestone: MythosQuest is now testable & playable

## 🧠 March 30, 2025 — Weekend Math Warrior

- ✅ Finished all Week 2 videos of the DeepLearning.AI course  
- ✅ Successfully understood computation graphs, forward & backward propagation  
- ✅ Explored vectorization deeply and reviewed multiple examples  
- ✅ Understood broadcasting with confidence and added a Broadcasting KI to the XueCodex  
- ✅ Planned future labs and confirmed understanding of MNIST 0 vs 1 classifier  
- 💬 Reflected on learning style: prefers code to abstract math, enjoys intuition-first learning  
- 🌟 Key insight: I don’t need to master formulas to understand what’s happening  
- 🛏️ Going to sleep happy — I studied math on a weekend and it actually felt empowering

Next up:  
- Gradient descent visualization lab  
- MNIST binary classification with logistic regression  
- Maybe a fun Codex summary of “math without fear” 🔧

---

## 📌 In Progress

- Continuing **Week 2** of the [DeepLearning.AI course](https://www.coursera.org/learn/neural-networks-deep-learning).
- Continue with Lessons 7–10 this week
- Expanding theory and practice sections with visual guides and more notebooks.
- Planning Docusaurus integration for publishing.

---

## 🛠️ Next Steps

- Build a login system for MythosQuest.
- Explore prompt engineering and AI storytelling experiments.
- Add concept index and tags for cross-referencing.
- Write up blog reflections for Thursday.

