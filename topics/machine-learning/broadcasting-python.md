---
id: broadcasting-python
title: Broadcasting in Python and Deep Learning
tags: [machine-learning, logistic regression, maths]
---

# Broadcasting in Python and Deep Learning

Broadcasting is a powerful feature in NumPy (and many deep learning libraries) that lets you perform operations on arrays of **different shapes** without writing explicit `for` loops. This makes your code simpler, faster, and more readable.

---

## 🍎 Broadcasting Example: Calories Matrix

We have a matrix `A` of calories from **Carbs, Proteins, and Fats** in different foods:

```
         Apples   Beef   Eggs   Potatoes
Carbs     56.0     0.0    4.4     68.0
Protein    1.2   104.0   52.0      8.0
Fat        1.8   135.0   99.0      0.9
```

Each **column** is a food. Each **row** is a macronutrient.

### Task:

> Calculate the percentage of calories in each food that comes from Carbs, Protein, Fat — without using a loop.
> 

---

## ✅ Vectorized Solution (No for-loop)

```
import numpy as np

A = np.array([[56.0,   0.0,  4.4, 68.0],
              [ 1.2, 104.0, 52.0,  8.0],
              [ 1.8, 135.0, 99.0,  0.9]])

cal = A.sum(axis=0)  # Total calories per column (food)
percentage = 100 * A / cal  # Broadcasting divides each column by its total
```

- `axis=0` tells NumPy to sum **down the rows** for each column (i.e., per food).
- Broadcasting handles the division of a `(3,4)` matrix by a `(1,4)` vector — applies elementwise!

---

## 🤹 General Principle of Broadcasting

NumPy automatically adjusts dimensions during operations. These rules apply:

- `(m, n)` + `(1, n)` -> result is `(m, n)`
- `(m, n)` * `(m, 1)` -> result is `(m, n)`

### Scalar Broadcasting Examples:

```
np.array([[1], [2], [3]]) + 100
# Output: [[101], [102], [103]]

np.array([1, 2, 3]) + 100
# Output: [101, 102, 103]
```

---

## 🧠 Why It Matters in Deep Learning

Broadcasting lets us:

- Add biases to all training examples at once.
- Subtract labels from predictions in logistic regression.
- Perform matrix-based calculations for forward and backward propagation without explicit loops.

For example, in logistic regression:

```
Z = np.dot(w.T, X) + b  # Broadcasting b across all examples
```

Without broadcasting, you’d need a loop to add `b` to each column of `Z`. 😅

---

## Summary

| Concept | Meaning |
| --- | --- |
| Broadcasting | Applying operations across mismatched shapes |
| `axis=0` in sum | Sum over rows (per column) |
| Avoid for-loops | Vectorized ops are faster and more readable |
| Used in | Neural nets, regression, backprop, numpy tricks |

---

## 🧪 Challenge

Recreate the example using your own `3x4` matrix — try using different `axis` values and observe the results.