---
id: "tokenization"
title: What is Tokenization?
tags: [ai-fundamentals, definition, tokenization]
---
### 🔍 **What is Tokenization?**

> The process of breaking text into smaller parts (tokens) so a model can understand and process it.
> 

Example:

`"IBM taught me tokenization"` → `["IBM", "taught", "me", "tokenization"]`

---

### 🛠️ **Types of Tokenization**

| Type | Description | Pros | Cons |
| --- | --- | --- | --- |
| **Word-based** | Splits text into individual words | Preserves meaning | Big vocabulary → memory-heavy |
| **Character-based** | Splits into single characters | Tiny vocab | Context loss, inefficient |
| **Subword-based** | Breaks rare words into chunks, leaves common words whole | Balance between size & context | More complex implementation |

---

### 🧪 **Subword Tokenization Methods**

| Method | Description |
| --- | --- |
| **WordPiece** | Merges or splits symbols based on usefulness; used in **BERT** |
| **Unigram** | Starts with many possible tokens, narrows down based on frequency |
| **SentencePiece** | Breaks raw text without needing pre-tokenization; assigns unique IDs |

Examples:

- `"token##ization"` → **WordPiece**
- `"_token" "ization"` → **Unigram/SentencePiece** (Underscore = new word after space)

### Tokenization concepts

### 🟩 **Padding** ✅

**What it is:**

Padding is the process of **making all sequences the same length** by adding a special token (e.g., `0`) to the end (or beginning) of shorter sequences.

**Why it matters:**

Neural networks like LSTMs, Transformers, or CNNs expect inputs to be in **fixed-sized tensors**. Without padding, variable-length inputs will cause shape mismatch errors.

**📌 You use padding to fix unequal lengths between sequences in a batch.**

---

### 🔄 **Shuffling**

**What it is:**

Shuffling randomly rearranges the order of data samples in your dataset during training.

**Why it matters:**

If the data is fed in the same order every epoch (e.g., all positive reviews, then all negative), the model may learn spurious patterns from the **order** rather than the **content**.

**📌 Use shuffling to improve generalization and avoid learning order-based biases.**

---

### 🔁 **Iteration**

**What it is:**

Iteration refers to the process of **looping through your dataset** using an iterator (like a Python `for` loop). In PyTorch, `DataLoader` objects are iterators.

**Why it matters:**

While it's necessary for data loading, **iteration itself doesn’t solve any issues** like length mismatches or overfitting — it's just the mechanism for going through the data.

**📌 Iteration is how you read data, not how you preprocess or adjust it.**

---

### 🧩 **Batching**

**What it is:**

Batching groups multiple samples into a single batch before feeding it into the model, instead of one sample at a time.

**Why it matters:**

Batching speeds up training (parallelism) and helps with convergence, but **it doesn’t solve sequence length differences** — it assumes the input sequences are already aligned in shape.

**📌 You still need padding before batching works correctly.**

## Data loader creations

---

## 🧱 1. **Batching**

**What it is:**

Grouping multiple samples into a single batch so they can be processed **in parallel**.

**Why it's used:**

- Improves training speed by leveraging vectorized operations
- Reduces memory usage per update (compared to processing all samples at once)
- Stabilizes gradient updates

**Example:**
If your dataset has 1000 samples and your batch size is 32, the model trains on 32 samples at a time, updating weights after each batch.

---

## 🧩 2. **Padding**

**What it is:**

Making sequences **equal length** by adding special padding tokens (e.g., zeros) at the end of shorter sequences.

**Why it's used:**

Neural networks require fixed-size tensors. If your sentences are different lengths (which they usually are), you need to **pad** them so they can be batched together.

**Example:**

```python
python
CopyEdit
[
  [1, 2, 3],
  [4, 5]
]

```

→ Padded:

```python
python
CopyEdit
[
  [1, 2, 3],
  [4, 5, 0]
]

```

**In PyTorch:**

```python
python
CopyEdit
from torch.nn.utils.rnn import pad_sequence

```

---

## 🔀 3. **Shuffling**

**What it is:**

Randomly changing the order of your dataset for each epoch.

**Why it's used:**

- Prevents the model from **memorizing order-based patterns**
- Improves generalization
- Helps **avoid bias** introduced by grouped data (e.g., positive reviews followed by negative ones)

**Code example:**

```python
python
CopyEdit
DataLoader(dataset, shuffle=True)

```

---

## 🔁 4. **Iteration**

**What it is:**

Looping through your dataset one sample or batch at a time, typically with a `for` loop or iterator.

**Why it's important:**

It's how the model consumes the data during training.

**Example:**

```python
python
CopyEdit
for batch in dataloader:
    model(batch)

```

---

## Summary Table

| Concept | Purpose | Solves |
| --- | --- | --- |
| **Batching** | Efficient parallel processing | Speed, memory |
| **Padding** | Makes input tensors the same length | Varying sequence lengths |
| **Shuffling** | Prevents learning dataset order | Bias/generalization |
| **Iteration** | Loads data sample-by-sample or batch-by-batch | Accessing data |

---

### ✅ So in summary:

| Concept | Purpose | Solves Varying Length? |
| --- | --- | --- |
| **Padding** | Makes sequences equal length with filler tokens | ✅ Yes |
| **Shuffling** | Prevents overfitting to input order | ❌ No |
| **Iteration** | Loops through dataset | ❌ No |
| **Batching** | Feeds multiple samples at once | ❌ No (needs padding) |

---

### 🧰 **Tokenization in PyTorch (torchtext)**

- `get_tokenizer()` – applies tokenizer (e.g., word or subword)
- `build_vocab_from_iterator()` – builds vocab and maps tokens to indices
- `vocab[token]` – returns token’s index
- Special tokens: `BOS`, `EOS`, `PAD`, `UNK` → added for sentence marking and padding

---

### 🎯 **Why It Matters to You**

- If you’re using **Hugging Face**, these methods are what sit underneath your tokenizer magic
- In **MythosQuest** or **Spellweaver**, if you do custom embeddings or want to fine-tune, understanding tokenization helps you prepare your data properly
- Especially important when designing prompt structure or pre/post-processing layers

---

### ✨ Bitty Bonus Recap Spell

> “Tokenization is the spell that breaks language into its component runes. Choose your rune-style wisely: words for clarity, characters for precision, subwords for balance.”
>