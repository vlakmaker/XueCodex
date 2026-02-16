---
id: "computation-graph"
title: "Computation Graphs: Forward and Backward"
tags: [machine-learning, calculus, backpropagation, core-maths]
---

# Computation Graphs: Forward and Backward

## What is a Computation Graph?

A **computation graph** is a way to break complex math into small, traceable steps. Each step becomes a node. It helps us:

- See how data flows through a function (forward pass)
- Trace how gradients flow back through the function (backward pass)
- Understand **backpropagation** — the algorithm that trains neural networks

Every neural network framework (PyTorch, TensorFlow) builds a computation graph behind the scenes. When you call `.backward()` in PyTorch, it's walking backward through this graph.

---

## Example Function

$$
J(a, b, c) = 3(a + bc)
$$

We break this into intermediate steps:

```
u = b * c
v = a + u
J = 3 * v
```

Each line is one node in the graph. The output of one feeds into the next.

---

## Forward Pass: Computing the Output

Given: $a = 5$, $b = 3$, $c = 2$

| Step | Formula | Result |
|------|---------|--------|
| 1 | $u = b \times c$ | $u = 3 \times 2 = 6$ |
| 2 | $v = a + u$ | $v = 5 + 6 = 11$ |
| 3 | $J = 3 \times v$ | $J = 3 \times 11 = 33$ |

The graph looks like this:

```
   a = 5     b = 3      c = 2
     |          |          |
     |          +----+-----+
     |               |
     |          [ u = b * c ] --> u = 6
     |               |
     +-------+-------+
             |
        [ v = a + u ] --> v = 11
             |
        [ J = 3 * v ] --> J = 33
```

The forward pass computes the output. But by itself, it doesn't help the model learn. For that, we need the backward pass.

---

## Backward Pass: Computing Gradients

The backward pass answers: **"If I change each input a little, how much does $J$ change?"**

This is exactly what [derivatives](./derivatives.md) measure. The backward pass computes them efficiently using the **chain rule** — working from the output back to the inputs.

### Step 1: How does $J$ change with $v$?

$J = 3v$, so $\frac{\partial J}{\partial v} = 3$

> If $v$ increases by 1, $J$ increases by 3.

### Step 2: How does $J$ change with $a$?

$v = a + u$, so $\frac{\partial v}{\partial a} = 1$

By the chain rule: $\frac{\partial J}{\partial a} = \frac{\partial J}{\partial v} \cdot \frac{\partial v}{\partial a} = 3 \times 1 = 3$

### Step 3: How does $J$ change with $u$?

$v = a + u$, so $\frac{\partial v}{\partial u} = 1$

$\frac{\partial J}{\partial u} = \frac{\partial J}{\partial v} \cdot \frac{\partial v}{\partial u} = 3 \times 1 = 3$

### Step 4: How does $J$ change with $b$?

$u = bc$, so $\frac{\partial u}{\partial b} = c = 2$

$\frac{\partial J}{\partial b} = \frac{\partial J}{\partial u} \cdot \frac{\partial u}{\partial b} = 3 \times 2 = 6$

### Step 5: How does $J$ change with $c$?

$u = bc$, so $\frac{\partial u}{\partial c} = b = 3$

$\frac{\partial J}{\partial c} = \frac{\partial J}{\partial u} \cdot \frac{\partial u}{\partial c} = 3 \times 3 = 9$

---

## The Full Picture

```
FORWARD (left to right):
   a=5  b=3  c=2  -->  u=6  -->  v=11  -->  J=33

BACKWARD (right to left):
   dJ/da=3  dJ/db=6  dJ/dc=9  <--  dJ/du=3  <--  dJ/dv=3  <--  dJ/dJ=1
```

| Variable | Gradient ($\frac{\partial J}{\partial \cdot}$) | Meaning |
|----------|-------|---------|
| $v$ | 3 | Increasing $v$ by 1 increases $J$ by 3 |
| $a$ | 3 | Increasing $a$ by 1 increases $J$ by 3 |
| $u$ | 3 | Increasing $u$ by 1 increases $J$ by 3 |
| $b$ | 6 | Increasing $b$ by 1 increases $J$ by 6 |
| $c$ | 9 | Increasing $c$ by 1 increases $J$ by 9 |

$c$ has the largest gradient, meaning $J$ is most sensitive to changes in $c$. If these were model weights and $J$ were a loss function, gradient descent would adjust $c$ the most.

---

## Why This Matters for Neural Networks

In a real neural network:

- **$J$ is the loss function** (how wrong the model is)
- **$a$, $b$, $c$ are weights and biases** (the parameters being learned)
- The **forward pass** computes the prediction and loss
- The **backward pass** computes the gradient of the loss with respect to every weight
- **Gradient descent** uses those gradients to update the weights: $w_{\text{new}} = w_{\text{old}} - \alpha \cdot \frac{\partial J}{\partial w}$

This is what people mean when they say "backpropagation" — it's just the chain rule applied to a computation graph, one node at a time, from output back to inputs.

---

## Summary

| Concept | What it does |
|---------|-------------|
| **Computation graph** | Breaks a function into small steps (nodes) |
| **Forward pass** | Computes the output by walking left-to-right |
| **Backward pass** | Computes gradients by walking right-to-left using the chain rule |
| **Chain rule** | Multiplies local derivatives along the path from output to input |
| **Why it matters** | This is how every neural network learns — compute loss forward, compute gradients backward, update weights |

---

## Where to Go Next

- [Computing Derivatives with Computation Graphs](./computation-derivatives.md) — a more complex example with the chain rule
- [Derivatives](./derivatives.md) — if you need a refresher on what slopes and derivatives are
- [The Training Loop](../../ai-fundamentals/training-loop.md) — see the forward/backward pass in a real training cycle
