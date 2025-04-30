---
id: "training-document-classifier"
title: "Training a Document Classifier"
tags: [deep learning, neural networks, document classifier]
---
## **Training a Document Classifier**

---

### 🧠 **1. Neural Networks Learn Through Parameters (θ)**

- A **neural network** is just a stack of mathematical operations using *parameters* (called **θ**, theta).
- These parameters = weights that are learned and adjusted during training.
- The goal is to tweak θ so your predictions (ŷ) get closer to the actual labels (y).

---

### 📉 **2. What Is a Loss Function? (Hint: It Measures Mistakes)**

- A **loss function** measures how far off the model is from the correct answer.
- Think of it like this:
    
    → **High loss** = bad predictions 😖
    
    → **Low loss** = model doing well 😎
    
- We don’t manually teach the model what's wrong — the **loss function** tells it where it messed up.

---

### 🎯 **3. Enter Cross-Entropy Loss**

- Used for **classification tasks**, especially when you want the model to pick between multiple categories.
- Based on comparing:
    - **True distribution (y):** The correct class (e.g., “sports”)
    - **Predicted distribution (ŷ):** The probabilities the model assigns to each class after **softmax**

### 🔸 How it works:

1. Your model spits out **logits** (raw scores for each class).
2. Apply **softmax**: turns logits into a probability distribution (all values between 0–1 and sum to 1).
3. Cross-entropy loss measures how well your predicted distribution matches the correct class.
4. It punishes confident wrong answers more than unsure ones.

### 📌 Formula-wise (simplified):

```
pgsql
CopyEdit
Cross-Entropy = -log(P(correct class))

```

If the model is 90% sure the answer is correct: low loss.

If it’s 10% sure or confident in the wrong class: high loss.

---

### 📚 **4. Monte Carlo Sampling**

- Fancy phrase for: **"When we don’t know the full distribution, just average over examples."**
- It’s how we approximate the “true” loss across a batch of training samples.

---

### 🛠️ **5. Optimization: How the Model Learns**

The way we **minimize the loss** is through:

### 🔁 **Gradient Descent**

- Iteratively update parameters to reduce loss:

```python
python
CopyEdit
θ ← θ - η * ∇Loss

```

- θ = current weights
- η = learning rate (how big a step to take)
- ∇Loss = gradient (slope of the loss function)

### ✅ Steps in Practice:

1. **Forward pass:** Run inputs through the model → get predictions → compute loss.
2. **Backward pass:** Calculate gradients using `.backward()`.
3. **Update parameters:** Use an **optimizer** like `SGD` to move θ in the right direction.
4. **Repeat.**

---

### 🧮 **6. Logits → Softmax → Argmax**

- Logits = raw model output per class
- Softmax = converts logits to probabilities
- Argmax = picks the class with the highest probability

---

### 🔄 **7. Learning Rate Schedulers & Gradient Clipping**

- **Scheduler:** Reduces the learning rate after each epoch (to fine-tune learning).
- **Gradient clipping:** Prevents gradients from exploding (literally very large values that destabilize learning).

---

### 🧪 **8. Train / Validation / Test Sets**

- **Train:** Used to *learn* parameters
- **Validation:** Used to *tune* hyperparameters (like learning rate, # of neurons, etc.)
- **Test:** Final evaluation to check real-world performance

---

## ✅ **Recap – Bitty Style**

| Concept | What It Means in Simple Terms |
| --- | --- |
| **θ (parameters)** | The knobs the model turns to improve itself |
| **Loss function** | Tells the model how bad it did |
| **Cross-entropy** | Measures how far off the prediction is from the truth |
| **Softmax** | Turns scores into probabilities |
| **Argmax** | Picks the class with the highest probability |
| **Gradient descent** | The step-by-step update method to reduce errors |
| **Optimizer (SGD)** | Applies those updates in practice |
| **Learning rate** | Controls how fast you update the weights |
| **Gradient clipping** | Keeps things stable when learning gets wild |
| **Train/Val/Test** | Each has its job in helping the model grow & generalize |
| **Monte Carlo sampling** | Averaging over samples to estimate things we can’t measure exactly |