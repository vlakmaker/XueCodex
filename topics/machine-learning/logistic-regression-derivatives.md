---
id: logistic-regression-derivatives
title: Logistic Regression Derivatives (Simple Explanation)
tags: [machine-learning, logistic regression, derivatives]
---

# Logistic Regression Derivatives (Simple Explanation)

This page explains how to compute derivatives in logistic regression using a computation graph, broken down into easy-to-understand steps.

---

## 🧬 Goal

We want to find out how to **adjust the weights and bias** in a logistic regression model so it gets better at making predictions. We use something called **derivatives** (slopes) to guide the learning process.

---

## 🔄 Forward Pass (Prediction)

### 1. Compute the score `z`:

```
z = w_1 x_1 + w_2 x_2 + b
```

This is a **weighted sum** of the inputs.

### 2. Apply the sigmoid function:

```
a = \sigma(z) = \frac{1}{1 + e^{-z}}
```

This turns the score into a probability `a` (e.g., how likely is this email to be spam?).

### 3. Compute the loss:

```
\mathcal{L}(a, y)
```

This tells us **how wrong** our prediction `a` is, compared to the true label `y`.

---

## 🔄 Backward Pass (Learning)

We now work **backwards** to calculate how much each part contributed to the error.

### Step 1: From Loss to Sigmoid Output

```
\frac{\partial \mathcal{L}}{\partial a} = -\frac{y}{a} + \frac{1 - y}{1 - a}
```

This tells us how much the loss changes when `a` changes.

### Step 2: From Sigmoid Output to z

```
\frac{\partial a}{\partial z} = a(1 - a)
```

This is the derivative of the sigmoid function. So:

```
\frac{\partial \mathcal{L}}{\partial z} = \frac{\partial \mathcal{L}}{\partial a} \cdot \frac{\partial a}{\partial z}
```

### Step 3: From z to Weights and Bias

Since `z = w_1 x_1 + w_2 x_2 + b`, we have:

```
\frac{\partial z}{\partial w_1} = x_1\qquad
\frac{\partial z}{\partial w_2} = x_2\qquad
\frac{\partial z}{\partial b} = 1
```

So:

```
\frac{\partial \mathcal{L}}{\partial w_1} = \frac{\partial \mathcal{L}}{\partial z} \cdot x_1
\frac{\partial \mathcal{L}}{\partial w_2} = \frac{\partial \mathcal{L}}{\partial z} \cdot x_2
\frac{\partial \mathcal{L}}{\partial b} = \frac{\partial \mathcal{L}}{\partial z}
```

---

## 🎓 Gradient Descent Update

We update our weights and bias using these gradients:

```
w_1 := w_1 - \alpha \cdot \frac{\partial \mathcal{L}}{\partial w_1}
```

```
w_2 := w_2 - \alpha \cdot \frac{\partial \mathcal{L}}{\partial w_2}
```

```
b := b - \alpha \cdot \frac{\partial \mathcal{L}}{\partial b}
```

Where `\alpha` is the **learning rate** (controls the step size).

---

## ✅ Summary

- **Forward pass**: Make a prediction using weights and sigmoid.
- **Loss**: Measure how wrong the prediction was.
- **Backward pass**: Compute how much each weight and bias contributed to the error.
- **Update**: Adjust weights and bias to reduce future errors.

This is the heart of training a logistic regression model using **derivatives** and **gradient descent**.