---
id: f-b-propagation
title: Training a Neural Network: Forward and Backpropagation
tags: [machine-learning, logistic regression, deep learning]
---

# 🧠 Training a Neural Network: Forward and Backpropagation

## 🟢 Forward Propagation (Forward Pass)

**Forward propagation** is how a neural network takes input and produces an output by passing data through layers.

### 🔍 How it works:

1. Take input data (e.g., features like `a`, `b`, `c`)
2. Multiply each input by a weight, add a bias
3. Apply an **activation function** (like sigmoid, ReLU)
4. Pass the result forward to the next layer
5. At the final layer, output a prediction (like spam/not spam)

### 📦 Analogy:

> Think of it like a smoothie blender:
> 
> - Ingredients = input data
> - Blending = math through layers
> - Smoothie = output prediction

---

## 🔴 Backpropagation (Backward Pass)

**Backpropagation** is how the network learns from its mistakes. It works backward from the output to update the weights.

### 🔍 How it works:

1. After forward pass, compare the prediction with the correct label using a **loss function**
    
    Example: "The model predicted 0.8 but the real label was 1"
    
2. Compute the **error** (cost or loss)
3. Use **derivatives** to calculate how much each weight contributed to the error
4. Update the weights using **gradient descent** to reduce the error next time

### 📦 Analogy:

> Like throwing a ball at a target:
> 
> - You throw it (forward pass)
> - See where it landed (loss)
> - Adjust your aim (backpropagation)
> - Try again with improvement (gradient descent)

---

## 🔁 The Full Training Loop:

1. **Forward Propagation**: Make prediction
2. **Loss Function**: Measure how wrong it was
3. **Backpropagation**: Calculate how to fix weights
4. **Gradient Descent**: Update weights
5. **Repeat** until the model learns

---

## 🧠 Why It Matters

This loop — forward pass + backward pass — is how deep learning models learn over time.

- Forward pass is **inference**
- Backward pass is **learning**

Together, they train models to recognize patterns, minimize error, and improve performance.