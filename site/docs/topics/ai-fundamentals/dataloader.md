---
id: "dataloader"
title: What Is a DataLoader in PyTorch
tags: [ai-fundamentals, definition, dataloader]
---
## 🧠 What Is a DataLoader in PyTorch (and Why It Matters)?

Imagine you’re training an AI model on tons of text — you can’t load everything into memory at once, right?

You need to feed your model the data in **small batches**, **shuffle it**, and **preprocess it efficiently**.

That’s exactly what a **DataLoader** helps you do.

---

### 🧰 Key Concepts

### 1. **Dataset**

- Think of this as a big list of samples (e.g., text sentences and their labels).
- You split it into:
    - **Training set** (to teach the model)
    - **Validation set** (to tune and check it)
    - **Test set** (to evaluate final performance)

### 2. **DataLoader**

- A PyTorch tool that:
    - Loads data in **batches** (faster training)
    - **Shuffles** data (helps generalization)
    - Can do **on-the-fly preprocessing** like tokenizing and padding

---

### 🏗️ How It Works (Example Setup)

### Step 1: Create a Custom Dataset Class

```python
python
CopyEdit
class CustomDataset(Dataset):
    def __init__(self, sentences):
        self.sentences = sentences

    def __len__(self):
        return len(self.sentences)

    def __getitem__(self, idx):
        return self.sentences[idx]

```

This class wraps a list of sentences and lets you access items by index — just like a list.

---

### Step 2: Load Data Using DataLoader

```python
python
CopyEdit
data_loader = DataLoader(dataset, batch_size=2, shuffle=True)

```

Now instead of returning one sentence at a time, you get batches of two.

Each time you call `next()`, you get the **next batch** — great for training loops.

---

### 🧪 Tokenization, Numericalization & Padding

Most NLP models can’t read text — they need **numbers**. So you do the following:

1. **Tokenize** – split text into tokens (words or subwords)
2. **Build a Vocabulary** – give each token a unique ID
3. **Numericalize** – turn each sentence into a list of numbers
4. **Pad** – ensure every sentence in a batch is the same length

Example using PyTorch:

```python
python
CopyEdit
tokenizer = get_tokenizer("basic_english")
vocab = build_vocab_from_iterator([...])
padded = pad_sequence([...], batch_first=True, padding_value=0)

```

---

### 🧩 Custom Collate Function

When you want all these transformations to happen *while loading the batch*, you can use a **collate function**:

```python
python
CopyEdit
def collate_fn(batch):
    tokenized = [tokenizer(x) for x in batch]
    numericalized = [torch.tensor([vocab[token] for token in tokens]) for tokens in tokenized]
    padded = pad_sequence(numericalized, batch_first=True, padding_value=0)
    return padded

```

Then use it in your DataLoader:

```python
python
CopyEdit
DataLoader(dataset, batch_size=2, shuffle=True, collate_fn=collate_fn)

```

Now every batch comes preprocessed, padded, and ready for the model.

---

## 🔁 Recap

| Concept | Purpose |
| --- | --- |
| **Dataset** | Holds raw samples (e.g., sentences) |
| **DataLoader** | Loads and batches them efficiently |
| **Collate Function** | Tokenizes, numericalizes, and pads samples in each batch |
| **Batch First** | Ensures batch is the first tensor dimension (`[batch, seq_len]`) |
| **Padding** | Makes all sequences the same length for matrix input |