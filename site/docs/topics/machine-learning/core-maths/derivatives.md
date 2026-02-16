---
id: derivatives
title: "Understanding Derivatives: The Slope That Trains Your Model"
tags: [machine-learning, calculus, gradient-descent, core-maths]
---

# Understanding Derivatives: The Slope That Trains Your Model

## The Function: $f(x) = x^2$

This is a classic curve in math and machine learning. It simply says: "Take x and square it."

Example points:

- $f(0) = 0$
- $f(1) = 1$
- $f(2) = 4$
- $f(3) = 9$

This creates a **U-shaped curve** (a parabola) that gets steeper as $x$ moves away from zero.

```
     |
  9  |                         * (3, 9)
  4  |                * (2, 4)
  1  |       * (1, 1)
  0  |* (0, 0)
 -1  |_____________________________
     0   1   2   3   4   5   6   x
```

---

## What Is a Derivative?

A derivative answers one question:

> "If I nudge $x$ a tiny bit, how much does $f(x)$ change?"

This is the **slope** of the function at a specific point. Unlike a straight line, a curve like $f(x) = x^2$ has a different slope at every point.

You can think of it like standing on a hill:

- If it's steep, the slope (derivative) is large
- If it's flat, the slope is near zero
- If you're going downhill, the slope is negative
- The derivative tells you how steep your "hill" is at that exact spot

---

## Let's Zoom in on $x = 2$

We want to know how steep the function is at $x = 2$.

- $f(2) = 4$
- $f(2.001) = 4.004001$

Change in height = $4.004001 - 4 = 0.004001$

Change in width = $2.001 - 2 = 0.001$

### Slope (Derivative at $x = 2$):

$$
\text{slope} = \frac{0.004001}{0.001} \approx 4
$$

> This tells us that at $x = 2$, the curve is going up at a rate of about 4 units for every 1 unit you move to the right.

The general derivative of $f(x) = x^2$ is $f'(x) = 2x$, so at $x = 2$: $f'(2) = 4$. Our approximation matches.

---

## Try Other Points

### At $x = 0$:
- $f'(0) = 2 \times 0 = 0$
- Flat bottom of the curve. The slope is zero.

### At $x = 3$:
- $f(3) = 9$
- $f'(3) = 2 \times 3 = 6$
- Steeper than at $x = 2$

> The curve gets steeper as you move away from the center. The derivative increases with $x$.

---

## Common Derivative Rules

| Function | Derivative | At $x = 2$ |
|----------|-----------|-------------|
| $f(x) = x^2$ | $f'(x) = 2x$ | Slope = 4 |
| $f(x) = x^3$ | $f'(x) = 3x^2$ | Slope = 12 |
| $f(x) = \ln(x)$ | $f'(x) = \frac{1}{x}$ | Slope = 0.5 |

The natural log derivative ($\frac{1}{x}$) means the curve flattens as $x$ gets bigger. This matters because log-loss (cross-entropy) uses $\ln$ — its gradient is strong when the model is confidently wrong and weak when it's close to correct.

---

## Why Derivatives Matter for Machine Learning

This is the whole reason you're learning this. Here's the connection:

**During training, the model has a loss function** — a curve that measures how wrong the predictions are. The goal is to find the lowest point on that curve (minimum loss = best model).

The derivative of the loss with respect to each weight tells you:
- **Which direction** to adjust the weight (sign of the derivative)
- **How much** to adjust it (magnitude of the derivative)

This is **gradient descent**:

$$
w_{\text{new}} = w_{\text{old}} - \alpha \cdot \frac{\partial L}{\partial w}
$$

Where:
- $w$ is a weight in the model
- $\alpha$ is the learning rate (step size)
- $\frac{\partial L}{\partial w}$ is the derivative of the loss with respect to that weight

If the slope is positive, the weight is too high — decrease it.
If the slope is negative, the weight is too low — increase it.
If the slope is near zero, you're close to the optimum.

```
Loss
 |
 |  \
 |   \        Slope is negative here → increase w
 |    \
 |     \___/   ← minimum (slope = 0, goal!)
 |        /
 |       /    Slope is positive here → decrease w
 |      /
 |___________________ w
```

> Every time you hear "the model computes gradients" or "backpropagation calculates derivatives," this is what's happening: measuring slopes, then nudging weights downhill.

---

## Logs vs Roots (Bonus)

You can think of **logarithms** as doing the opposite of exponentiation, just like **square roots** undo squaring:

| Concept | Forward | Reverse |
|---------|---------|---------|
| Squaring | $3^2 = 9$ | $\sqrt{9} = 3$ |
| Exponentiation | $e^2 \approx 7.39$ | $\ln(7.39) \approx 2$ |

In machine learning, we use the natural log ($\ln$, base $e$) extensively — particularly in cross-entropy loss, where $-\ln(p)$ penalizes wrong predictions heavily.

---

## Where to Go Next

- [Computation Graphs](./computation-graph.md) — visualize how derivatives chain together
- [Computing Derivatives with Computation Graphs](./computation-derivatives.md) — the backward pass in detail
- [The Training Loop](../../ai-fundamentals/training-loop.md) — see derivatives in action during real training
