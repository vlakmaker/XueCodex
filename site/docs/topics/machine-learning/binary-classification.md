---
id: "binary-classification"
title: Binary Classification and Associated Concepts
tags: [machine-learning, classification, confusion matrix]
---
# Binary Classification and Associated Concepts

## Binary Classification

**Binary classification** is a type of machine learning task where the goal is to classify data into one of two distinct categories or classes. The model is trained to predict a label from two possible outcomes, such as:
- "Yes" or "No"
- "True" or "False"
- "1" or "0"

### Step-by-Step Process:

1. **Data Collection**: 
   - You need a dataset where each example (or data point) has a corresponding label that indicates which of the two classes it belongs to.
   - Example: A dataset of emails with labels indicating whether the email is spam ("1") or not spam ("0").

2. **Feature Extraction**:
   - The features (input variables) are used to predict the label.
   - Example: In spam email detection, features could include the frequency of certain words, the presence of specific characters, or the sender's email address.

3. **Model Training**:
   - Use a machine learning algorithm to learn the relationship between features and labels. Common algorithms used for binary classification include:
     - **Logistic Regression**: A statistical model that estimates the probability that a given input belongs to a particular class.
     - **Support Vector Machine (SVM)**: Finds a hyperplane that separates the data points of one class from another.
     - **Decision Trees**: A tree-like structure that splits the data into smaller subsets based on feature values.
     - **Random Forests**: An ensemble of decision trees, where the final prediction is based on the majority vote of all trees.

4. **Prediction**:
   - Once the model is trained, it can predict the class of new, unseen data points.
   - Example: In logistic regression, the model outputs a probability score (between 0 and 1) indicating how likely the input is to belong to the positive class. If the probability is greater than 0.5, it predicts the positive class ("1"), otherwise, it predicts the negative class ("0").

5. **Evaluation**:
   - The model's performance is measured using metrics like:
     - **Accuracy**: The proportion of correct predictions out of all predictions.
     - **Precision**: The proportion of true positives among all positive predictions.
     - **Recall (Sensitivity)**: The proportion of true positives among all actual positives.
     - **F1 Score**: The harmonic mean of precision and recall, used to balance both.
   
6. **Threshold Adjustment**:
   - You can adjust the decision threshold (e.g., changing from 0.5 to another value) to fine-tune the trade-off between precision and recall.

---

## Binary Classification Confusion Matrix

A **confusion matrix** is a tool used to evaluate the performance of a binary classification model. It compares predicted labels to actual labels and consists of four key components:

### Components:
1. **True Positives (TP)**: Correctly predicted positive cases.
2. **True Negatives (TN)**: Correctly predicted negative cases.
3. **False Positives (FP)**: Incorrectly predicted positive cases.
4. **False Negatives (FN)**: Incorrectly predicted negative cases.

### Confusion Matrix Layout:

|                      | Predicted Positive (1) | Predicted Negative (0) |
|----------------------|------------------------|------------------------|
| **Actual Positive (1)**  | True Positives (TP)     | False Negatives (FN)    |
| **Actual Negative (0)**  | False Positives (FP)    | True Negatives (TN)     |

### Key Metrics from the Confusion Matrix:
- **Accuracy**: Proportion of all correct predictions (TP + TN) out of all predictions.
- **Precision**: Proportion of true positives out of all predicted positives.
- **Recall (Sensitivity)**: Proportion of true positives out of all actual positives.
- **F1 Score**: Harmonic mean of precision and recall.
- **Specificity**: Proportion of true negatives out of all actual negatives.

---

## X Column and y Column in Machine Learning

In machine learning, **X** and **y** represent the **features** (inputs) and **labels** (outputs) of the dataset, respectively.

### X Column (Features or Input Data):
- Represents the **independent variables** or features.
- Each row in **X** contains input data for one sample.
- Example (for house price prediction):

| Size (sqft) | Rooms | Location |
|-------------|-------|----------|
| 1000        | 3     | A        |
| 1500        | 4     | B        |
| 800         | 2     | A        |

### y Column (Labels or Target Data):
- Represents the **dependent variable** or the label that the model is trying to predict.
- Example (for house price prediction):

| Price ($) |
|-----------|
| 200,000   |
| 300,000   |
| 150,000   |

### How It Works:
1. **Input the X columns** (features) into the model.
2. The model learns the relationship between **X** and **y** from the training data.
3. After training, when new data (**X**) is provided, the model predicts the corresponding **y** values.

### Example Code (Python with scikit-learn):

```python
from sklearn.model_selection import train_test_split

# X = features, y = target variable
X = data[['Size', 'Rooms', 'Location']]
y = data['Price']

# Splitting into training and testing datasets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

X_train and y_train are used to train the model.
X_test and y_test are used to evaluate the model's performance.