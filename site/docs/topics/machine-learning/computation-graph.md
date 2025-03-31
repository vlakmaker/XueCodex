---
id: "computation-graph"
title: Computation Graphs – Visualizing How Functions Wor
tags: [machine-learning, logistic regression, deep learning]
---
# 🧮 Computation Graphs – Visualizing How Functions Work

## 🧠 What is a Computation Graph?

A **computation graph** is a visual way to break down complex math into smaller, easy-to-understand steps. Each step becomes a node in the graph. It helps us:

- See how data flows through a function
- Track dependencies between variables
- Prepare for **backpropagation** (learning!)

---

## 🧩 Example Function

We are given the function:

J(a,b,c)=3(a+bc)J(a, b, c) = 3(a + bc)

J(a,b,c)=3(a+bc)

We break this down into intermediate steps:

```
ini
CopyEdit
u = b × c
v = a + u
J = 3 × v

```

---

## 🧮 Given Values

- a=5a = 5a=5
- b=3b = 3b=3
- c=2c = 2c=2

### Step-by-Step Computation

| Step | Formula | Result |
| --- | --- | --- |
| 1 | u=bcu = bcu=bc | u=3×2=6u = 3 × 2 = 6u=3×2=6 |
| 2 | v=a+uv = a + uv=a+u | v=5+6=11v = 5 + 6 = 11v=5+6=11 |
| 3 | J=3vJ = 3vJ=3v | J=3×11=33J = 3 × 11 = 33J=3×11=33 |

---

## 📊 Computation Graph

Here’s how it looks visually:

```
text
CopyEdit
   a = 5     b = 3      c = 2
     │         │         │
     │         └──┬──────┘
     │            ▼
     │         [ u = b × c ] → u = 6
     │                │
     └────────────┐   ▼
                  ▼ [ v = a + u ] → v = 11
                       │
                       ▼
                  [ J = 3 × v ] → J = 33

```

Each box is a small computation. Together, they form a **chain of dependencies** from input to output.

---

## 💡 Why Use Computation Graphs?

- They simplify complex math
- They make it easy to trace and debug values
- They're essential for **automatic differentiation** in deep learning

---

## 🧠 Summary

| Concept | Explanation |
| --- | --- |
| **Computation Graph** | Visual map of how a function computes |
| **Nodes** | Each math operation (like `u = bc`) |
| **Flow** | Arrows show how values move from inputs to output |
| **Used For** | Forward pass, and later, backpropagation |