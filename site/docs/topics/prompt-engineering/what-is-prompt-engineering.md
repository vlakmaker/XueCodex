---
id: "what-is-prompt-engineering"
title: "What is Prompt Engineering?"
tags: [AI, prompt-engineering, LLM, practical]
---

# What is Prompt Engineering?

**Prompt engineering** is the practice of designing effective natural language instructions (prompts) to guide large language models (LLMs) to produce useful, accurate, and targeted responses.

Unlike traditional programming, you're not writing code — you're writing instructions in plain language. But the precision matters just as much. A vague prompt gets vague output. A structured prompt gets structured output.

---

## Why Does It Matter?

Prompt engineering lets you:

- **Get better results** without retraining or fine-tuning the model
- **Control output format** — JSON, tables, bullet points, code
- **Unlock reasoning** for complex problems (math, logic, analysis)
- **Prototype fast** — test ideas without building infrastructure
- **Set behavior and constraints** — tone, persona, safety guardrails

It's the cheapest, fastest way to improve AI output. Before you consider fine-tuning, RAG, or custom models, try better prompts.

---

## Core Techniques

### Zero-Shot Prompting

Ask the model to do something with no examples. Works for straightforward tasks.

```
Classify the following review as POSITIVE or NEGATIVE.

Review: "The battery life is terrible but the screen is gorgeous."

Classification:
```

The model relies entirely on its training to figure out what you want.

### Few-Shot Prompting

Provide a few examples so the model learns the pattern you want:

```
Classify each review as POSITIVE or NEGATIVE.

Review: "Amazing sound quality, worth every penny."
Classification: POSITIVE

Review: "Broke after two weeks. Complete waste of money."
Classification: NEGATIVE

Review: "The battery life is terrible but the screen is gorgeous."
Classification:
```

Few-shot is more reliable than zero-shot for tasks where the desired format or judgment isn't obvious.

### Chain-of-Thought (CoT)

Ask the model to reason step by step before answering. This dramatically improves accuracy on math, logic, and complex analysis:

```
Q: A store has 45 apples. They sell 12 in the morning and receive
a shipment of 30 in the afternoon. How many apples do they have?

Let's think step by step:
1. Start with 45 apples
2. Sell 12: 45 - 12 = 33
3. Receive 30: 33 + 30 = 63

Answer: 63 apples
```

Without "let's think step by step," models often jump to wrong answers on multi-step problems.

### System Prompts / Role Setting

Define who the model is and how it should behave:

```
System: You are a senior Python developer reviewing code.
Be concise. Focus on bugs and security issues.
Ignore style preferences.

User: Review this function:
def login(username, password):
    query = f"SELECT * FROM users WHERE name='{username}' AND pass='{password}'"
    return db.execute(query)
```

The system prompt constrains the model's behavior across the entire conversation. It's where you set tone, expertise level, and guardrails.

---

## Structural Techniques

### Delimiters

Use clear markers to separate instructions from content:

```
Summarize the text between the triple backticks in 2 sentences.

Text: ```
The transformer architecture was introduced in 2017 by Vaswani et al.
in the paper "Attention Is All You Need." It replaced recurrent neural
networks with self-attention mechanisms, enabling parallel processing
of sequences and dramatically improving training efficiency.
```
```

Delimiters prevent **prompt injection** — where the input text could be mistaken for instructions.

### Output Format Specification

Tell the model exactly what format you want:

```
Extract the following from each job posting and return as JSON:
- title
- company
- location
- salary_range (null if not listed)
- remote (true/false)

Job posting: "Senior ML Engineer at Acme Corp, Amsterdam.
€85-110k. Hybrid, 2 days office."
```

### Structured Decomposition

Break complex tasks into explicit steps:

```
Analyze this dataset description and:
1. List the 3 most important features for prediction
2. Recommend a model type (regression/classification/clustering)
3. Identify potential data quality issues
4. Suggest a validation strategy
```

---

## Common Mistakes

| Mistake | Problem | Better Approach |
|---------|---------|-----------------|
| "Write something good" | Too vague | "Write a 200-word summary focusing on technical implementation details" |
| Putting instructions after content | Model may ignore late instructions | Instructions first, content second |
| No format specification | Model guesses the format | "Return as a numbered list" or "Return as JSON" |
| Asking for too much at once | Output quality drops | Break into smaller prompts, chain the outputs |
| No examples for ambiguous tasks | Model interprets differently than you expect | Add 2-3 examples of desired input/output |

---

## Temperature and Sampling

Most APIs let you control **temperature** — how "creative" vs. "deterministic" the output is:

| Temperature | Behavior | Use For |
|------------|----------|---------|
| 0.0 | Always picks the most likely token | Code generation, factual Q&A, classification |
| 0.3-0.7 | Mostly predictable with some variation | General writing, summarization |
| 0.8-1.0 | More creative, less predictable | Brainstorming, creative writing, exploration |

Temperature doesn't change *what the model knows* — it changes how it samples from its probability distribution.

---

## Where Prompt Engineering Fits in the AI Stack

```
Most control, most effort:    Train a custom model
                              Fine-tune an existing model
                              RAG (retrieval-augmented generation)
                              Prompt engineering          ← you are here
Least control, least effort:  Use a model with default prompts
```

Prompt engineering is the first tool you should reach for. If prompting can't solve it, consider [RAG](../deep-learning/nlp/rag-introduction.md). If RAG can't solve it, consider fine-tuning.

---

## Where to Go Next

- [Prompt Categories](./prompt-engineering-categories.md) — taxonomy of prompt types
- [Prompt Structuring](./prompt-structure.md) — detailed frameworks for structuring prompts
- [Introduction to RAG](../deep-learning/nlp/rag-introduction.md) — when prompting isn't enough and you need external knowledge
