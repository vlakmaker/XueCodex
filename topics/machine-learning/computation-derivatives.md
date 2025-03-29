---
id: computation-derivatives
title: Computing Derivatives with a Computation Graph
tags: [machine-learning, logistic regression, maths]
---

# 📊 Computing Derivatives with a Computation Graph

This notebook explains how to compute **derivatives** using a **computation graph**, following the example from Andrew Ng's neural networks course. It breaks down a simple function into smaller steps and shows how to apply the **chain rule** to calculate how changes in inputs affect the final output.

---

## 🧠 The Function

We are given:

\[
J = 3(a + bc)
\]

Let’s break it into smaller steps:

- \( u = b \times c \)
- \( v = a + u \)
- \( J = 3 \times v \)

---

## ✅ Forward Pass

Given values:

- \( a = 5 \)
- \( b = 3 \)
- \( c = 2 \)

We compute:

- \( u = 3 \times 2 = 6 \)
- \( v = 5 + 6 = 11 \)
- \( J = 3 \times 11 = 33 \)

---

## 🔁 Backward Pass (Derivatives)

We use the **chain rule** to compute how much changing each input affects the output \( J \).

### Step 1: \( \frac{dJ}{dv} = 3 \)
Because:
\[ J = 3v \Rightarrow \text{If } v \uparrow 1, J \uparrow 3 \]

### Step 2: \( \frac{dv}{du} = 1 \)
Because:
\[ v = a + u \Rightarrow \text{If } u \uparrow 1, v \uparrow 1 \]

### Step 3: \( \frac{dJ}{du} = \frac{dJ}{dv} \times \frac{dv}{du} = 3 \times 1 = 3 \)

---

## 📦 Derivatives with Respect to Inputs

### 1. \( \frac{dJ}{da} \)
- \( v = a + u \Rightarrow \frac{dv}{da} = 1 \)
- \( \frac{dJ}{da} = \frac{dJ}{dv} \times \frac{dv}{da} = 3 \times 1 = 3 \)

### 2. \( \frac{dJ}{db} \)
- \( u = b \times c \Rightarrow \frac{du}{db} = c = 2 \)
- \( \frac{dJ}{db} = \frac{dJ}{du} \times \frac{du}{db} = 3 \times 2 = 6 \)

### 3. \( \frac{dJ}{dc} \)
- \( u = b \times c \Rightarrow \frac{du}{dc} = b = 3 \)
- \( \frac{dJ}{dc} = \frac{dJ}{du} \times \frac{du}{dc} = 3 \times 3 = 9 \)

---

## ✅ Final Summary Table

| Variable | Derivative       |
|----------|------------------|
| \( a \)   | \( \frac{dJ}{da} = 3 \) |
| \( b \)   | \( \frac{dJ}{db} = 6 \) |
| \( c \)   | \( \frac{dJ}{dc} = 9 \) |

This tells us how much each input influences the final output \( J \) using **derivatives** and **chain rule** in a **computation graph**.
