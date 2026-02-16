---
id: "binary-classification"
title: "Binary Classification: Yes or No, and How to Measure It"
tags: [machine-learning, classification, confusion-matrix, evaluation]
---

# Binary Classification: Yes or No, and How to Measure It

## What Is Binary Classification?

Binary classification is the simplest prediction task: given some input, decide between two outcomes. Spam or not spam. Cat or not cat. Fraudulent or legitimate.

It's the task that [logistic regression](./logistic-regression.md) was built for, and it's the building block for understanding all classification problems.

The model outputs a probability between 0 and 1. You pick a threshold (usually 0.5) — above it, predict the positive class; below it, predict the negative class.

---

## How It Works

1. **Input features ($X$)** — the data you're using to make the prediction (email word counts, pixel values, patient vitals)
2. **Model** — takes the features and produces a probability (logistic regression, neural network, decision tree)
3. **Threshold** — converts probability into a decision (if $\hat{y} > 0.5$, predict positive)
4. **Evaluation** — compare predictions against true labels to measure how well the model works

The interesting part isn't the prediction — it's measuring how well the model predicts. That's where most people get confused.

---

## The Confusion Matrix

A confusion matrix compares what the model predicted against what was actually true. Four possible outcomes:

```
                    Predicted
                 Positive  Negative
Actual Positive |   TP    |   FN    |
Actual Negative |   FP    |   TN    |
```

| Outcome | Name | Plain English |
|---------|------|---------------|
| TP (True Positive) | Hit | Model said yes, and it was right |
| TN (True Negative) | Correct rejection | Model said no, and it was right |
| FP (False Positive) | False alarm | Model said yes, but it was wrong |
| FN (False Negative) | Miss | Model said no, but it was wrong |

### Example: Spam Detection

Your model classifies 100 emails:

```
                    Predicted
                  Spam    Not Spam
Actual Spam    |   40    |   10    |   (50 actual spam)
Actual Not Spam|    5    |   45    |   (50 actual not-spam)
```

- 40 spam emails correctly caught (TP)
- 45 legitimate emails correctly passed through (TN)
- 5 legitimate emails wrongly marked as spam (FP) — annoying
- 10 spam emails that slipped through (FN) — also bad

---

## Metrics: What "Good" Means Depends on the Problem

### Accuracy

$$
\text{Accuracy} = \frac{TP + TN}{TP + TN + FP + FN}
$$

From the spam example: $(40 + 45) / 100 = 85\%$

Accuracy is intuitive but **misleading when classes are imbalanced**. If 99% of emails aren't spam, a model that always says "not spam" gets 99% accuracy while catching zero spam. Useless.

### Precision

$$
\text{Precision} = \frac{TP}{TP + FP}
$$

"Of everything the model flagged as positive, how many were actually positive?"

From the spam example: $40 / (40 + 5) = 88.9\%$

**High precision matters when false positives are costly.** If your spam filter sends important client emails to spam (FP), that's a serious problem. You want precision to be high.

### Recall (Sensitivity)

$$
\text{Recall} = \frac{TP}{TP + FN}
$$

"Of everything that was actually positive, how many did the model catch?"

From the spam example: $40 / (40 + 10) = 80\%$

**High recall matters when false negatives are costly.** In medical diagnosis, missing a disease (FN) can be life-threatening. You want recall to be high even if it means more false alarms.

### F1 Score

$$
F_1 = 2 \cdot \frac{\text{Precision} \cdot \text{Recall}}{\text{Precision} + \text{Recall}}
$$

The harmonic mean of precision and recall. It balances both. Use it when you care about both false positives and false negatives roughly equally.

From the spam example: $2 \cdot (0.889 \cdot 0.80) / (0.889 + 0.80) = 84.2\%$

---

## The Precision-Recall Trade-Off

You can adjust the decision threshold to shift between precision and recall:

| Threshold | Effect | Precision | Recall |
|-----------|--------|-----------|--------|
| High (0.9) | Model only predicts positive when very confident | Higher | Lower |
| Default (0.5) | Balanced | Moderate | Moderate |
| Low (0.1) | Model predicts positive aggressively | Lower | Higher |

There's no free lunch. Increasing one usually decreases the other. The right threshold depends on the cost of each type of error in your specific problem.

---

## Features ($X$) and Labels ($y$)

In code, the data is split into:

- **$X$** — the feature matrix (inputs). Each row is one sample, each column is one feature.
- **$y$** — the label vector (outputs). Each entry is 0 or 1.

```python
from sklearn.model_selection import train_test_split

# X = features, y = labels
X = data[['word_count', 'has_link', 'sender_reputation']]
y = data['is_spam']  # 0 or 1

# Split into train and test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)
```

The model learns the relationship between $X$ and $y$ from the training set, then you evaluate it on the test set to see if it generalizes.

---

## Where to Go Next

- [Logistic Regression](./logistic-regression.md) — the simplest binary classification model
- [Logistic Regression Cost Function](./logistic-regression-cost-function.md) — the loss function that trains it
- [Loss Functions](../../machine-learning/core-maths/loss-functions.md) — why cross-entropy is used for classification
