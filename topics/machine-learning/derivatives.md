---
id: derivatives
title: Understanding Derivatives Visually: The Curve of f(x) = x^2
tags: [machine-learning, logistic regression, cost maths]
---

# 📘 Understanding Derivatives Visually: The Curve of f(x) = x^2

## 🌈 The Function: f(x) = x^2

This is a classic curve in math and machine learning. It simply says:

> "Take x and square it."
> 

Example points:

- 
- 
- 

This creates a **U-shaped curve** that gets steeper as x increases.

```
     |
  9  |                         ● (3, 9)
  4  |                ● (2, 4)
  1  |       ● (1, 1)
  0  |● (0, 0)
 -1  |_____________________________
     0   1   2   3   4   5   6   x
```

---

## 🧠 What Is a Derivative?

A derivative answers:

> "If I nudge x a little, how much does f(x) change?"
> 

This is the **slope** of the function at a specific point. Unlike a straight line, a curve like  has a different slope at every point.

You can think of it like standing on a hill:

- If it’s steep, the slope is high
- If it’s flat, the slope is near zero
- The derivative tells you how steep your “hill” (function) is at that exact spot

---

## 🔍 Let's Zoom in on x = 2

We want to know how steep the function is at .

- 
- 

Change in height =

Change in width =

### Slope (Derivative at x=2):

> 🔑 This tells us that at x = 2, the curve is going up at a rate of about 4 units for every 1 unit you move forward.
> 

---

## 🎢 Try Other Points:

### At x = 0:

- Flat bottom of the curve.
- Derivative is ~0.

### At x = 3:

- ,
- Derivative

> 🧭 The curve gets steeper as you move right. The derivative increases with x.
> 

---

## 📚 Extra Examples from Other Functions

- Derivative:
- At : Slope = 4
- Derivative:
- At : Slope = 3 × 4 = 12
- Derivative:
- At : Slope = 0.5
- This means the natural log curve flattens as a gets bigger

---

## 🔄 Logs vs Roots (Bonus Insight!)

You can think of **logarithms** as doing the opposite of exponentiation, just like **square roots** do the opposite of squaring:

| Concept | Forward | Reverse (Undo) |
| --- | --- | --- |
| Squaring |  |  |
| Exponentiation |  |  |

So yes! You can think of log as “what power do I need to raise a number to, to get this result?”

And in machine learning, we usually use the natural log (ln), which is just a special version with base .