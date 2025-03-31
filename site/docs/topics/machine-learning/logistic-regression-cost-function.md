---
id: "logistic-regression-cost-function"
title: Logistic Regression Cost Function
tags: [machine-learning, classification, supervised-learning]
---
# Logistic Regression Cost Function

## What is this about?

This image shows the **cost function** used in **logistic regression**, which is a method for predicting **binary outcomes** (e.g., yes/no, spam/not spam).

In logistic regression, we are trying to predict the **probability** that a given example belongs to one of two classes, based on its features (input data). The cost function helps us measure how well our model is performing.

## Key Terms:

### Predicted Output ($\hat{y}$):
- The model predicts the probability that a given input $x^{(i)}$ belongs to the **positive class** (usually class 1).
- This is calculated using the **sigmoid function** ($\sigma(z)$) which outputs a probability between **0** and **1**.
  
$$
\hat{y} = \sigma(w^T x^{(i)} + b)
$$

Where $w^T x^{(i)} + b$ is the weighted sum of the features (input data).

### True Output ($y^{(i)}$):
- This is the **actual value** from the data. For binary classification, $y^{(i)}$ is either **0** or **1**.

### Loss Function:
- The **loss function** calculates how far the predicted value ($\hat{y}$) is from the actual value ($y$).
- The loss function for logistic regression is **log loss** or **binary cross-entropy**. The formula is:

$$
L(\hat{y}, y) = - [ y \log(\hat{y}) + (1 - y) \log(1 - \hat{y}) ]
$$

- If $y = 1$ (the true class is 1), we want to **maximize** $\hat{y}$ (i.e., make the model confident in predicting 1). So, the loss is calculated as $-\log(\hat{y})$.
- If $y = 0$ (the true class is 0), we want to **minimize** $\hat{y}$ (i.e., make the model confident in predicting 0). So, the loss is calculated as $-\log(1 - \hat{y})$.

### Cost Function:
- The **cost function** is the average loss over all the examples in the dataset. It tells us how well the model is performing over the entire dataset.
- The cost function is:

$$
J(w, b) = \frac{1}{m} \sum_{i=1}^{m} L(\hat{y}^{(i)}, y^{(i)})
$$

Where:
- $m$ is the total number of examples.
- $L(\hat{y}^{(i)}, y^{(i)})$ is the loss for each example $i$.

## Breaking it Down:

### Predicted Output ($\hat{y}$) is calculated using the sigmoid function:
- The **sigmoid function** squashes any number into a value between **0** and **1**, which is perfect for probabilities. It’s written as:

$$
\sigma(z) = \frac{1}{1 + e^{-z}}
$$

Where $z = w^T x + b$ is the weighted sum of the features.

### Loss Function:

#### When $y = 1$ (the true label is 1):
- We want $\hat{y}$ to be large (close to **1**).
- The loss is $-\log(\hat{y})$. If $\hat{y}$ is close to 1, the loss will be small, meaning the prediction is correct.

#### When $y = 0$ (the true label is 0):
- We want $\hat{y}$ to be small (close to **0**).
- The loss is $-\log(1 - \hat{y})$. If $\hat{y}$ is close to 0, the loss will be small, meaning the prediction is correct.

### Cost Function:
- The **cost function** averages the loss over all examples. The goal is to **minimize the cost**, meaning we want to reduce the difference between the predicted values ($\hat{y}$) and the actual values ($y$).

## Intuition:
- If the model predicts the **correct outcome** (e.g., predicts 1 for a positive example), the loss will be small.
- If the model predicts the **wrong outcome** (e.g., predicts 0 for a positive example), the loss will be large.
- The **cost function** is the average of these losses, and the goal of training is to **minimize the cost**, improving the model’s performance.

## Summary:
- The **cost function** measures how well the model’s predictions match the actual outcomes.
- **Logistic regression** uses **log loss** (binary cross-entropy) to calculate how far off the predicted probabilities ($\hat{y}$) are from the actual labels ($y$).
- The **cost function** helps guide the optimization process (e.g., using **gradient descent**) to find the optimal model parameters ($w$ and $b$) that minimize the error.
- This is the mathematical foundation for how **logistic regression** learns from data and improves its predictions.

---

## Example 1: Email Spam Detection (Binary Classification)

Imagine you are building a logistic regression model to predict whether an email is spam (1) or not spam (0).

Let’s assume the model has a single feature: the number of times the word "offer" appears in the email.

### Step 1: Predicted Probability ($\hat{y}$)
For each email, the model will give a probability that the email is spam. For example, let’s say:
- For email 1, the model predicts the probability of being spam is **0.8** (80% chance).
- For email 2, the model predicts the probability of being spam is **0.2** (20% chance).

### Step 2: True Labels ($y$)
Next, we look at the actual labels (what we know to be true about the emails):
- Email 1: True label is **1** (spam).
- Email 2: True label is **0** (not spam).

### Step 3: Loss Function
Now, let’s calculate the loss for each email using the **log loss** formula:

$$
L(\hat{y}, y) = - [ y \log(\hat{y}) + (1 - y) \log(1 - \hat{y}) ]
$$

#### For Email 1 (True label $y = 1$):
$$
L(0.8, 1) = - \log(0.8) \approx 0.2231
$$

So, the **loss** for email 1 is approximately **0.2231**.

#### For Email 2 (True label $y = 0$):
$$
L(0.2, 0) = - \log(0.8) \approx 0.2231
$$

So, the **loss** for email 2 is also **0.2231**.

### Step 4: Cost Function (Average Loss)
The **cost function** is the average loss across all examples. In this case, we have two emails, so we calculate the average of the two losses:

$$
J(w, b) = \frac{1}{2} \left( 0.2231 + 0.2231 \right) = 0.2231
$$

---

## Example 2: A Clear Misclassification

Let’s consider another example where the model performs poorly.

- **Email 1**: Predicted probability $\hat{y} = 0.9$ (predicted as spam with 90% certainty), but the true label is **0** (not spam).
- **Email 2**: Predicted probability $\hat{y} = 0.1$ (predicted as not spam with 10% certainty), but the true label is **1** (spam).

#### For Email 1 (True label $y = 0$):
$$
L(0.9, 0) = - \log(0.1) \approx 2.3026
$$

#### For Email 2 (True label $y = 1$):
$$
L(0.1, 1) = - \log(0.1) \approx 2.3026
$$

### Step 5: Cost Function (Average Loss)
The **cost function** for these two emails is:

$$
J(w, b) = \frac{1}{2} \left( 2.3026 + 2.3026 \right) = 2.3026
$$

---

## Key Takeaways:
- **Log Loss** penalizes the model when it is confident and wrong (e.g., predicting spam with 90% confidence when it's actually not spam).
- The **cost function** is the average of these losses, and the goal during training is to **minimize** the cost to improve the model's accuracy.
- In the first example, the model did well with relatively low loss. In the second example, the model made incorrect predictions with high loss.

This is how the **logistic regression cost function** works to guide the model towards making better predictions.
