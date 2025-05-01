---
id: "vectorizing-logistic-regression"
title: Vectorizing Logistic Regression
tags: [machine-learning, logistic regression, derivatives]
---
# Vectorizing Logistic Regression

This knowledge item (KI) explains how we move from a loop-based implementation of logistic regression to a clean, fast, vectorized version using NumPy.

---

## 📌 Goal

We want to:

1. Predict probabilities using logistic regression
2. Compute the cost and gradients
3. Update parameters (weights `w` and bias `b`)
4. Make this fast using **vectorization**

---

## ⚙️ Logistic Regression Prediction

For a single training example:

For multiple examples:

Where:

- `X` is the input matrix (n_features x m_examples)
- `w` is the weight vector (n_features x 1)
- `b` is the bias (scalar)
- `Z` is the linear combination (1 x m)
- `A` is the activation/prediction (1 x m)

---

## 🧮 Loop-Based vs. Vectorized

### 🔁 Loop-Based:

```
for i in range(m):
    z[i] = np.dot(w.T, x[i]) + b
    a[i] = sigmoid(z[i])
    dz[i] = a[i] - y[i]
    dw += x[i] * dz[i]
    db += dz[i]
```

---

### ⚡ Vectorized:

```
Z = np.dot(w.T, X) + b     # shape: (1, m)
A = sigmoid(Z)             # shape: (1, m)
dZ = A - Y                 # shape: (1, m)
dw = (1/m) * np.dot(X, dZ.T)
db = (1/m) * np.sum(dZ)
```

Broadcasting takes care of adding `b` to each column in `Z`.

---

## 🔄 Gradient Descent Update

```
w = w - alpha * dw
b = b - alpha * db
```

This step is repeated over many iterations until the model converges.

---

## 📊 Shapes Recap

| Variable | Shape |
| --- | --- |
| `X` | (n_features, m) |
| `w` | (n_features, 1) |
| `Z` | (1, m) |
| `A` | (1, m) |
| `Y` | (1, m) |
| `dZ` | (1, m) |
| `dw` | (n_features, 1) |
| `db` | scalar |

---

## ✅ Summary

| Concept | Loop Version | Vectorized Version |
| --- | --- | --- |
| Prediction | `a[i] = sigmoid(z[i])` | `A = sigmoid(Z)` |
| Gradients | `dw1 += x1[i] * dz[i]` | `dw = X.dot(dZ.T)/m` |
| Bias | `db += dz[i]` | `db = sum(dZ)/m` |

---

