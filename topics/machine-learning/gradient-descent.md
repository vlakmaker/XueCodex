---
id: gradient-descent
title: Gradient Descent and Its Role in Logistic Regression
tags: [machine-learning, logistic regression, cost function]
---

# Gradient Descent and Its Role in Logistic Regression

## What is Gradient Descent?

**Gradient Descent** is a method used in machine learning to find the **optimal parameters** (weights \( w \) and bias \( b \)) of a model that minimize the **cost** (or error) function. It’s like a trial-and-error approach, but more efficient. The algorithm works by iteratively updating the parameters in such a way that the model’s predictions improve over time.

### What is the Cost Function?

In logistic regression, the **cost function** measures how wrong the model's predictions are compared to the actual labels. In simpler terms, it's a way to calculate the "error" of the model’s predictions. 

For logistic regression, the **logistic loss** (also called **log loss**) is used as the cost function. It penalizes the model more when it makes a bigger mistake (for example, predicting "not spam" with 90% confidence when the email is actually spam). The formula looks like this:

\[
J(w, b) = \frac{1}{m} \sum_{i=1}^{m} \left[ y^{(i)} \log(\hat{y}^{(i)}) + (1 - y^{(i)}) \log(1 - \hat{y}^{(i)}) \right]
\]

Where:
- \( J(w, b) \) is the cost (how wrong the model is).
- \( m \) is the number of data points (emails in our case).
- \( y^{(i)} \) is the true label (whether an email is spam or not).
- \( \hat{y}^{(i)} \) is the predicted probability that the email is spam (between 0 and 1).

### How Does Gradient Descent Work?

Now, the goal is to **minimize this cost function** so that our model gets better at predicting the correct class (spam or not spam). Gradient Descent helps us adjust the **weights** \( w \) and **bias** \( b \) to reduce the error.

1. **Start with random values**:
   We begin by initializing \( w \) and \( b \) with random values. Initially, the model might make terrible predictions, but that’s okay—it’s the starting point.

2. **Calculate predictions**:
   For each email in the dataset, we use the current values of \( w \) and \( b \) to calculate the model's predictions. In logistic regression, the prediction is calculated using the **sigmoid function**:

   \[
   \hat{y} = \sigma(w \cdot x + b) = \frac{1}{1 + e^{-(w \cdot x + b)}}
   \]

   Where:
   - \( w \) is the weight, which determines how much influence each feature (like the presence of keywords) has on the prediction.
   - \( x \) is the feature of the input (e.g., the occurrence of a keyword like "free").
   - \( b \) is the bias (it helps adjust the output up or down).
   - \( \hat{y} \) is the predicted probability (between 0 and 1), showing how likely the email is spam.

3. **Compute the cost**:
   After calculating the predictions, we compute the **cost** using the formula above. The cost function gives us an idea of how wrong the model is. If the predictions are far off from the true labels, the cost will be high.

4. **Compute the gradients**:
   Gradient descent uses the **gradient** (or slope) of the cost function to decide how to update \( w \) and \( b \). The gradient tells us in which direction to adjust the parameters to decrease the cost. 

   - The gradient with respect to \( w \) is denoted as:
   
     \[
     \frac{\partial J(w,b)}{\partial w}
     \]

   - The gradient with respect to \( b \) is denoted as:
   
     \[
     \frac{\partial J(w,b)}{\partial b}
     \]

   The gradients are calculated by taking the **partial derivatives** of the cost function with respect to \( w \) and \( b \).

5. **Update the parameters**:
   Gradient descent then updates the weights and bias by subtracting the gradients from them. The formula for updating the parameters is:

   \[
   w := w - \alpha \cdot \frac{\partial J(w,b)}{\partial w}
   \]

   \[
   b := b - \alpha \cdot \frac{\partial J(w,b)}{\partial b}
   \]

   Where:
   - \( \alpha \) is the **learning rate**, which controls how big the steps are when updating \( w \) and \( b \).
   - \( \frac{\partial J(w,b)}{\partial w} \) and \( \frac{\partial J(w,b)}{\partial b} \) are the gradients, showing the direction and size of the updates.

   The learning rate ensures we don’t make steps that are too big (which could make us skip the best values) or too small (which could make the training take forever).

6. **Repeat**:
   This process is repeated for many iterations. In each iteration, the model’s parameters \( w \) and \( b \) are adjusted slightly to reduce the cost. Over time, the model improves and becomes better at making predictions.

---

### Example: Spam Detection

1. **Initial Setup**:
   Start with random weights and bias for our model. The model will make random predictions initially.

2. **Prediction**:
   The model predicts whether an email is spam using the initial values of \( w \) and \( b \).

3. **Calculate the Error (Cost)**:
   The model compares its predictions to the actual labels (spam or not spam) and calculates how wrong it is using the cost function.

4. **Adjust the Parameters**:
   The model updates the weights \( w \) and bias \( b \) to reduce the error. For example, if the model is predicting "not spam" too often, it will adjust the weight for the "free" keyword to be higher.

5. **Repeat**:
   This process continues, and after many iterations, the model makes better predictions as the weights and bias approach their optimal values.

---

## Conclusion

- **Gradient Descent** is an optimization algorithm that helps us adjust the weights and bias of a logistic regression model to minimize the error (cost).
- By using the gradient (slope) of the cost function, gradient descent iteratively **updates the parameters** in the direction that reduces the cost.
- Over time, the model becomes more accurate, predicting things like whether an email is spam or not with higher precision.

This iterative process of minimizing the cost allows logistic regression to **learn** from the data and improve over time, making it a powerful tool for classification tasks like spam detection.

---

### Summary of Gradient Descent in Logistic Regression:
- **Goal**: Minimize the cost (error) of the model by updating \( w \) and \( b \).
- **How**: Use the gradient (slope) to adjust \( w \) and \( b \) iteratively.
- **Result**: Over time, the model learns from the data and makes better predictions.

Let me know if you need any more explanations or if there's anything else you'd like to add to XueCodex! 
