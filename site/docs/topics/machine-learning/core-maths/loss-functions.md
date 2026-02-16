---
id: "loss-functions"
title: "Loss Functions: How Models Know They're Wrong"
tags: [machine-learning, loss-functions, training, core-maths]
---

# Loss Functions: How Models Know They're Wrong

## What Is a Loss Function?

A loss function (also called a cost function or objective function) is a formula that measures **how wrong the model's prediction is** compared to the true answer. It produces a single number: higher means worse, lower means better.

> The entire point of training is to make this number as small as possible.

Without a loss function, gradient descent has nothing to optimize. The loss function defines *what "better" means* for your model.

---

## The Core Idea

Every training step follows this loop:

1. **Predict** — the model produces an output
2. **Measure** — the loss function compares the prediction to the true label
3. **Trace** — backpropagation computes how each weight contributed to the error
4. **Nudge** — gradient descent adjusts the weights to reduce the loss

The loss function is step 2. It's the signal that drives everything else.

---

## Loss vs. Cost vs. Objective

These terms are often used interchangeably, but there's a technical distinction:

| Term | Scope |
|------|-------|
| **Loss** | Error for a single training example |
| **Cost** | Average loss across the entire training set (or a batch) |
| **Objective** | The thing being optimized — usually the cost, sometimes with regularization added |

In practice, people say "loss function" to mean all three. Don't worry about the distinction unless you're reading a paper that's being precise.

---

## Mean Squared Error (MSE) — For Regression

When the model predicts a continuous number (a price, a temperature, a score), MSE is the standard loss:

$$
\text{MSE} = \frac{1}{m} \sum_{i=1}^{m} (\hat{y}^{(i)} - y^{(i)})^2
$$

- $\hat{y}$ is the prediction
- $y$ is the true value
- $m$ is the number of examples
- The squaring ensures errors are always positive and penalizes large errors more than small ones

**Example:** Predicting house prices.

| True Price | Predicted Price | Error | Squared Error |
|-----------|----------------|-------|--------------|
| 300,000 | 310,000 | 10,000 | 100,000,000 |
| 200,000 | 195,000 | -5,000 | 25,000,000 |
| 400,000 | 420,000 | 20,000 | 400,000,000 |

MSE = (100M + 25M + 400M) / 3 = 175,000,000

The large error on the third house dominates. That's by design — MSE punishes big mistakes heavily, which is usually what you want.

**When to use MSE:** Regression tasks where you want to penalize outlier predictions heavily.

---

## Binary Cross-Entropy (Log Loss) — For Binary Classification

When the model predicts a probability between 0 and 1 (spam or not, cat or not), cross-entropy is the standard loss:

$$
L(\hat{y}, y) = -[y \log(\hat{y}) + (1 - y) \log(1 - \hat{y})]
$$

This is the loss function used in [logistic regression](../logistic-regression/logistic-regression-cost-function.md).

### Why logarithms?

The key insight is that $-\log(p)$ has a useful shape:

| Predicted probability $\hat{y}$ | True label $y = 1$ | Loss $-\log(\hat{y})$ |
|---------|------------|------|
| 0.99 | 1 | 0.01 (very small — model is right and confident) |
| 0.7 | 1 | 0.36 (moderate — model is right but unsure) |
| 0.5 | 1 | 0.69 (high — model is guessing) |
| 0.1 | 1 | 2.30 (very high — model is confidently wrong) |
| 0.01 | 1 | 4.61 (enormous — model is extremely wrong) |

The log creates an **asymmetric penalty**: being confidently wrong is punished far more than being uncertain. This is exactly the behavior you want — a model that says "99% not spam" about a spam email should be penalized harshly.

### Why not just use MSE for classification?

You could compute $(1 - 0.1)^2 = 0.81$ for a wrong prediction, but MSE creates a non-convex loss surface for sigmoid outputs, meaning gradient descent can get stuck in local minima. Cross-entropy gives a convex surface, so gradient descent reliably finds the optimum.

---

## Categorical Cross-Entropy — For Multi-Class Classification

When the model predicts one of $K$ classes (not just two), cross-entropy generalizes to:

$$
L = -\sum_{k=1}^{K} y_k \log(\hat{y}_k)
$$

Where:
- $y_k$ is 1 for the correct class, 0 for all others (one-hot encoding)
- $\hat{y}_k$ is the model's predicted probability for class $k$ (from softmax)

Since only one $y_k$ is 1, this simplifies to: $L = -\log(\hat{y}_{\text{correct class}})$

**Example:** Image classification with 3 classes (cat, dog, bird).

Model predicts: `[0.7, 0.2, 0.1]` (70% cat, 20% dog, 10% bird)
True label: cat (class 0)

Loss = $-\log(0.7) = 0.36$

If the model had predicted `[0.1, 0.8, 0.1]` (80% dog, true label cat):

Loss = $-\log(0.1) = 2.30$ — much higher, as it should be.

**When to use:** Multi-class classification (image classification, language modeling, next-token prediction in transformers).

---

## How Loss Functions Connect to Training

The loss function defines the landscape that gradient descent navigates. Think of it as a hilly terrain:

- The **height** at any point is the loss value
- The **slope** at any point is the gradient
- Gradient descent walks downhill, step by step

Different loss functions create different landscapes. Cross-entropy creates smooth, convex hills for classification. MSE creates smooth parabolas for regression. Choosing the wrong loss function can create a landscape that's impossible to navigate (flat regions, local minima, unstable gradients).

```
Loss
  |
  | \                      Wrong loss function:
  |  \    /\               bumpy, local minima
  |   \  /  \__/
  |    \/
  |________________________ weights

Loss
  |
  | \                      Right loss function:
  |  \                     smooth, single minimum
  |   \
  |    \___/
  |________________________ weights
```

---

## Summary

| Loss Function | Use Case | Output Type | Formula |
|--------------|----------|-------------|---------|
| MSE | Regression | Continuous number | $\frac{1}{m}\sum(\hat{y} - y)^2$ |
| Binary Cross-Entropy | Binary classification | Probability (0 to 1) | $-[y\log(\hat{y}) + (1-y)\log(1-\hat{y})]$ |
| Categorical Cross-Entropy | Multi-class classification | Probability distribution | $-\sum y_k \log(\hat{y}_k)$ |

**Rule of thumb:** If your model outputs a probability, use cross-entropy. If it outputs a number, use MSE. More advanced losses exist (Huber, focal, contrastive) but these three cover the vast majority of cases.

---

## Where to Go Next

- [Logistic Regression Cost Function](../logistic-regression/logistic-regression-cost-function.md) — binary cross-entropy applied step by step with worked examples
- [Derivatives](./derivatives.md) — how the slope of the loss surface guides learning
- [The Training Loop](../../ai-fundamentals/training-loop.md) — see loss in action during a real training cycle
- [Computation Graphs](./computation-graph.md) — how the loss gradient flows backward through the network
