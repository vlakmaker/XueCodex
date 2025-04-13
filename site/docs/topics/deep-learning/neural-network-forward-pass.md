---
id: neural-network-forward-pass
title: Neural Network Forward Pass
tags: [neural-networks, forward-propagation, vectorization, beginner]
---

# 🧠 Neural Network Forward Propagation

## 🔁 Quick Recap: What is a Neural Network?

A **neural network** is a machine learning model inspired by the brain, built from layers of interconnected "neurons." It transforms input data step by step through a chain of computations to make predictions.

Think of it like stacking multiple **logistic regressions**, each feeding into the next. Instead of making a decision based on raw input directly (as in logistic regression), a neural network builds **layers of understanding**, where each layer learns to represent the data differently.

---

## ⚖️ Neural Network vs. Logistic Regression

| Feature               | Logistic Regression                  | Neural Network                                |
|-----------------------|--------------------------------------|------------------------------------------------|
| Structure             | Single layer (input → output)       | Multiple layers (input → hidden → output)     |
| Weights               | One weight vector                   | Multiple weight matrices                      |
| Complexity            | Linear decision boundary            | Non-linear decision boundaries                |
| Expressiveness        | Limited                             | Very flexible and powerful                    |
| Computation           | One step                            | Layer-by-layer computation (forward pass)     |

---

## 🧠 Logistic Regression Refresher

In logistic regression, you:

- Take inputs \( x_1, x_2, x_3 \)
- Multiply them by weights \( w \)
- Add a bias \( b \)
- Pass it through a **sigmoid** function to get a probability \( \hat{y} \)

**Formula:**

\[
z = w^T x + b \\
a = \sigma(z)
\]

Then compare \( a \) with the label \( y \) using a loss function \( \mathcal{L}(a, y) \), and adjust \( w, b \) with backpropagation.

---

## 🔍 What Is Forward Propagation?

Forward propagation is the process by which a neural network **calculates predictions**.

It's like passing your ingredients (inputs) through a magical kitchen (layers of neurons), mixing everything together with weights and biases, and applying secret sauces (activation functions) until you get a tasty final dish: a prediction \( \hat{y} \).

If you've studied **logistic regression**, you're already halfway there: forward propagation is just logistic regression done **many times in parallel**, layer by layer.

---

## 🤖 Key Concepts

- **Input layer**: Takes input features \( x_1, x_2, x_3 \)
- **Hidden layer(s)**: Neurons that apply transformations
- **Output layer**: Final prediction \( \hat{y} \)

**Notation:**

- \( a^{[0]} = x \): Input vector  
- \( W^{[l]} \): Weight matrix for layer \( l \)  
- \( b^{[l]} \): Bias vector for layer \( l \)  
- \( z^{[l]} = W^{[l]} a^{[l-1]} + b^{[l]} \): Linear combination  
- \( a^{[l]} = \sigma(z^{[l]}) \): Activation function

---

## 🧠 Mathematical Breakdown

Let’s say we have 3 inputs and 1 hidden layer with 4 neurons.

### Step 1: Hidden Layer

Each neuron behaves like logistic regression:

\[
z_i^{[1]} = w_i^{[1]T} x + b_i^{[1]} \\
a_i^{[1]} = \sigma(z_i^{[1]})
\]

Vectorized:

\[
z^{[1]} = W^{[1]} x + b^{[1]} \\
a^{[1]} = \sigma(z^{[1]})
\]

Where:

- \( W^{[1]} \in \mathbb{R}^{4 \times 3} \)  
- \( x \in \mathbb{R}^{3 \times 1} \)  
- \( b^{[1]} \in \mathbb{R}^{4 \times 1} \)

### Step 2: Output Layer

\[
z^{[2]} = W^{[2]} a^{[1]} + b^{[2]} \\
a^{[2]} = \hat{y} = \sigma(z^{[2]})
\]

Where:

- \( W^{[2]} \in \mathbb{R}^{1 \times 4} \)  
- \( a^{[1]} \in \mathbb{R}^{4 \times 1} \)  
- \( b^{[2]} \in \mathbb{R}^{1 \times 1} \)

---

## 🧮 What Does the Matrix *Do*?

A matrix is just a **collection of variables**:

- \( W^{[1]} \): weights for all neurons
- \( a^{[1]} \): activations of all neurons
- Output of one layer becomes input to the next

Matrix math lets you skip the loop. Instead of making one sandwich at a time (loop 🥪), you're doing a full lunch spread at once (matrix 🍱).

---

## ⚙️ What is Vectorization?

Vectorization = replacing manual loops with fast matrix operations.

You said it best:

> 2² = 4 is the same as 1 + 1 + 1 + 1 — same result, but one is way faster.

Just like **Ramanujan** found shortcuts while **Hardy** stuck to slow, careful math. Vectorization is your Ramanujan move.

---

## 🧠 Summary (Your Polished Words)

> In logistic regression, we calculate a probability using a weighted sum of inputs passed through a sigmoid function. Neural networks extend this idea by stacking layers of these computations. Each layer transforms and mixes the inputs more deeply, creating a more powerful model that can learn complex patterns. Just like the brain, neurons in a neural network pass information to each other, and the entire network learns through forward and backward propagation.

---

## 🔜 Next Step

Get ready for **Backpropagation** — how a neural network *learns* and adjusts itself over time like a master chef perfecting their recipe!

---
