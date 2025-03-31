---
id: "training-process-of-ml"
title: Understanding the Training Process of a Machine Learning Model
tags: [machine-learning, keyconcepts, training]
---
# Understanding the Training Process of a Machine Learning Model

## Overview of Model Training

Training a machine learning model involves feeding it data, allowing it to make predictions, evaluating how well it performs, and adjusting it until it achieves a high level of accuracy. In this case, we trained a neural network to classify images of cats and dogs using the **FastAI** library.

## Step-by-Step Breakdown of the Training Process

### 1. **Preparing the Data**

Before the model can learn, we need to provide it with labeled data. In our example, we used the **Oxford-IIIT Pets dataset**, which contains images of cats and dogs.

- **Downloading the dataset:**
    
    ```python
    path = untar_data(URLs.PETS)/'images'
    ```

    This line downloads and extracts the dataset into a directory.
    
- **Defining labels:**
    
    ```python
    def is_cat(x): return x[0].isupper()
    ```

    The dataset follows a naming convention where cat names start with an uppercase letter and dog names start with a lowercase letter. This function helps label the images correctly.
    
- **Loading images and splitting data:**
    
    ```python
    dls = ImageDataLoaders.from_name_func(
        path, get_image_files(path), valid_pct=0.2, seed=42,
        label_func=is_cat, item_tfms=Resize(224))
    ```

    Here, we:
    
    - Load all images from the dataset
    - Split them into training (80%) and validation (20%) sets
    - Apply a preprocessing step that resizes all images to 224x224 pixels

### 2. **Creating the Model**

The model we use is a **ResNet-34** convolutional neural network (CNN), a well-known architecture for image classification.

- **Defining the learner:**
    
    ```python
    learn = vision_learner(dls, resnet34, metrics=error_rate)
    ```

    - `vision_learner` sets up the model with the dataset.
    - `resnet34` is the pre-trained model being used as a starting point.
    - `metrics=error_rate` tells FastAI to track how many images are misclassified.

### 3. **Training the Model**

Once the model is set up, we **fine-tune** it using pre-trained weights and adjust them based on our dataset.

- **Fine-tuning the model:**
    
    ```python
    learn.fine_tune(1)
    ```

    - Fine-tuning starts with a pre-trained model and updates it to adapt to our specific dataset.
    - The model learns patterns in the data by adjusting the weights using **Stochastic Gradient Descent (SGD)**.
    - Training improves the weights so that the model makes better predictions over time.

### 4. **Evaluating the Model**

After training, we analyze how well the model performs on new, unseen data.

- **Error Rate:** This metric shows the proportion of misclassified images. A lower error rate means the model is performing better.
- **Loss Function:** Measures how far off the model’s predictions are from the correct answers. During training, this value is minimized.

### 5. **Making Predictions**

Once the model is trained, it can classify new images:

```python
img = PILImage.create('new_image.jpg')
is_cat,_,probs = learn.predict(img)
print(f"Is this a cat?: {is_cat}")
print(f"Probability it's a cat: {probs[1].item():.6f}")

```

## Summary of the Model Training Process**
- **Step 1:** Data Preparation – Download and label images.
- **Step 2:** Model Creation – Use a pre-trained neural network (ResNet-34).
- **Step 3:** Training – Fine-tune the model on our dataset.
- **Step 4:** Evaluation – Measure performance using the error rate.
- **Step 5:** Prediction – Classify new images based on learned patterns.

### Final Analogy: Training Like Learning a New Skill**
Think of training a neural network like learning to recognize dog breeds:
- You start with a basic understanding (pre-trained model).
- You look at many examples (training data).
- You compare your guesses to correct answers (loss function).
- You adjust your thinking to improve (gradient descent updates weights).
- You get better over time (fine-tuning improves accuracy).

Through this process, the model becomes increasingly skilled at recognizing cats and dogs, just like a person would! This structured approach allows for powerful AI models that can classify and recognize images with high accuracy.