---
id: "gradient-descent"
title: Gradient Descent and Its Role in Logistic Regression
tags: [machine-learning, logistic regression, cost function]
---

# Gradient Descent and Its Role in Logistic Regression

## What is Gradient Descent?

**Gradient Descent** is a method used in machine learning to find the **optimal parameters** (weights \( w \) and bias \( b \)) of a model that minimize the **cost** (or error) function. It’s like a trial-and-error approach, but more efficient. The algorithm works by iteratively updating the parameters in such a way that the model’s predictions improve over time.

### What is the Cost Function?

In logistic regression, the **cost function** measures how wrong the model's predictions are compared to the actual labels. In simpler terms, it's a way to calculate the "error" of the model’s predictions.

For logistic regression, the **logistic loss** (also called **log loss**) is used as the cost function. It penalizes the model more when it makes a bigger mistake (for example, predicting "not spam" with 90% confidence when the email is actually spam). The formula looks like this:

$$
J(w, b) = \frac{1}{m} \sum_{i=1}^{m} \left[ y^{(i)} \log(\hat{y}^{(i)}) + (1 - y^{(i)}) \log(1 - \hat{y}^{(i)}) \right]
$$

Where:
- \( J(w, b) \) is the cost (how wrong the model is).
- \( m \) is the number of data points (emails in our case).
- \( y^{(i)} \) is the true label (whether an email is spam or not).
- \( \hat{y}^{(i)} \) is the predicted probability that the email is spam (between 0 and 1).

### How Does Gradient Descent Work?

Now, the goal is to **minimize this cost function** so that our model gets better at predicting the correct class (spam or not spam). Gradient Descent helps us adjust the **weights** \( w \) and **bias** \( b \) to reduce the error.

1. **Start with random values**  
   We begin by initializing \( w \) and \( b \) with random values. Initially, the model might make terrible predictions, but that’s okay—it’s the starting point.

2. **Calculate predictions**  
   For each email in the dataset, we use the current values of \( w \) and \( b \) to calculate the model's predictions. In logistic regression, the prediction is calculated using the **sigmoid function**:

   $$
   \hat{y} = \sigma(w \cdot x + b) = \frac{1}{1 + e^{-(w \cdot x + b)}}
   $$

   Where:
   - \( w \) is the weight (influence of a keyword or feature).
   - \( x \) is the input (e.g., presence of the keyword "free").
   - \( b \) is the bias (adjusts output threshold).
   - \( \hat{y} \) is the predicted probability (0 to 1).

3. **Compute the cost**  
   We use the logistic loss cost function to measure prediction error.

4. **Compute the gradients**  
   The **gradient** tells us how to adjust the weights and bias to minimize cost.

   - Gradient with respect to \( w \):

     $$
     \frac{\partial J(w,b)}{\partial w}
     $$

   - Gradient with respect to \( b \):

     $$
     \frac{\partial J(w,b)}{\partial b}
     $$

5. **Update the parameters**  
   We update \( w \) and \( b \) in the direction that reduces the cost:

   $$
   w = w - \alpha \cdot \frac{\partial J(w,b)}{\partial w}
   $$

   $$
   b = b - \alpha \cdot \frac{\partial J(w,b)}{\partial b}
   $$

   Where \( \alpha \) is the learning rate (step size).

6. **Repeat**  
   We repeat this process until the cost stops decreasing or we reach the max iterations.

---

## Example: Spam Detection

1. **Start** with random values for \( w \) and \( b \).  
2. **Predict** whether emails are spam using current weights.  
3. **Calculate cost** based on prediction errors.  
4. **Adjust** weights and bias to reduce the cost.  
5. **Repeat** this process until performance is good enough.

---

## Conclusion

- **Gradient Descent** is an optimization algorithm for minimizing error.
- It works by updating model parameters using the gradients (partial derivatives).
- The model learns over time by gradually improving its predictions.

---

### Summary of Gradient Descent in Logistic Regression

- 🎯 **Goal**: Minimize the cost (prediction error)
- 🔁 **How**: Update \( w \) and \( b \) using gradients
- 📈 **Result**: Improved predictions after multiple iterations

---
