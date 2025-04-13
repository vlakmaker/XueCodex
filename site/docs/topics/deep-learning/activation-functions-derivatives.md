---
id: "activation-functions-derivatives"
title: "Activation Functions & Derivatives"
tags: [deep learning, activation sfunctions, sigmoid, tahn, relu]
---

# 🧠 Activation Functions & Derivatives

Activation functions are what make neural networks more than just glorified linear regressions. They add non-linearity — which gives neural networks their superpower: the ability to learn complex patterns and behaviors. Their derivatives are critical for training the network effectively through **backpropagation**.

---

## 🔁 Why Do We Use Activation Functions?

Neurons in a network receive inputs and combine them using weighted sums. But if we just kept doing weighted sums from layer to layer — the whole network would collapse into one big linear transformation. That’s boring!

Activation functions inject **non-linearity** into the mix, letting networks:

- Learn curves and twists
- Make more nuanced decisions
- Model reality more effectively

## 🔍 Common Activation Functions

Let’s break them down with intuitive visuals, math, and practical insights.

---

### 1. 🌀 Sigmoid Function

- **Formula**:
- **Output range**: (0, 1)

It looks like an S-curve — softly squashing large negative or positive values toward 0 or 1.

### ✅ Use Case:

Perfect for binary classification — the output behaves like a probability: “how likely is it a cat?”

### ❌ Limitations:

- **Vanishing gradient problem**: at extreme values, the slope becomes nearly 0, so the network stops learning efficiently.
- **Not zero-centered**: everything is always positive, so updates can zigzag inefficiently.

### 🧮 Derivative:

- Max slope is at , where , and slope = 0.25
- At or , slope ~ 0 ➝ slow learning

---

### 2. 🧿 Tanh Function

- **Formula**:
- **Output range**: (-1, 1)

Similar shape to sigmoid, but centered around 0, so outputs can be negative too.

### ✅ Use Case:

Hidden layers in older architectures, especially when zero-centering helps optimization.

### ❌ Limitations:

- Still suffers from **vanishing gradients** at the extremes.

### 🧮 Derivative:

- Max slope = 1 at
- At , ,
- Still fades at extremes, but performs better than sigmoid.

---

### 3. ⚡ ReLU (Rectified Linear Unit)

- **Formula**:
- **Output range**: [0, ∞)

ReLU is the tough love coach of activation functions — if you’re below 0, it gives you nothing. If you’re above 0, it lets you grow.

### ✅ Use Case:

Most popular choice for hidden layers in modern neural nets (especially deep learning)

### ❌ Limitations:

- **Dying ReLU problem**: once a neuron gets stuck with negative inputs, it may stop updating.

### 🧮 Derivative:

Fast and simple, but non-zero only when

---

### 4. 💧 Leaky ReLU

- **Formula**:

A soft ReLU variant that lets a small gradient flow when

### ✅ Use Case:

Prevents "dead neurons" in ReLU networks. Great if you want stability but don’t want to sacrifice performance.

### 🧮 Derivative:

Always has a small slope — it never completely shuts down.

---

### 5. 🔁 Linear Activation

- **Formula**:
- **Output range**: (−∞, ∞)

### ✅ Use Case:

Only for output layers in **regression** problems (e.g., predicting house prices).

### ❌ Don’t Use In Hidden Layers:

If you stack layers with no activation, it’s just matrix multiplication ➝ collapses into one linear transformation:

So your entire network becomes as dumb as a linear regression. No thanks.

---

## 🔁 Why Derivatives Matter (Backpropagation)

Backpropagation uses derivatives to **figure out how wrong each weight is**. That’s how the network learns!

- A **steep slope** → big correction
- A **flat slope** → tiny or no learning

That’s why ReLU and Leaky ReLU are preferred — they don’t suffer from tiny derivatives.

---

## ⚖️ Summary Table: Activation Functions & Their Derivatives

| Function | Output Range | Derivative | Zero-Centered | Vanishing Gradient | Notes |
| --- | --- | --- | --- | --- | --- |
| Sigmoid | (0, 1) |  | ❌ No | ✅ Yes | Good for binary output, slow to train |
| Tanh | (-1, 1) |  | ✅ Yes | ✅ Yes (less) | Better gradient flow than sigmoid |
| ReLU | [0, ∞) | 0 if , 1 if | ❌ No | ❌ No (but can die) | Fast, most commonly used |
| Leaky ReLU | [~0, ∞) | 0.01 or 1 | ❌ No | ❌ No | Solves ReLU dying problem |
| Linear (ID) | (−∞, ∞) | 1 | ✅ Yes | ❌ No | Only use for regression output layer |

---

## 🧠 TL;DR:

- Activation functions add **non-linearity** — without them, you can’t learn complex patterns.
- Their **derivatives** are what fuel learning during backpropagation.
- Each function behaves differently:
    - **Sigmoid**: slow, but probabilistic
    - **Tanh**: better gradient flow
    - **ReLU**: fast, sparse, simple
    - **Leaky ReLU**: robust against dead neurons
    - **Linear**: useful in output layer for continuous prediction

👉 Think of it like this:

> "Use ReLU to think, use linear to speak." 🧠🗣️
>