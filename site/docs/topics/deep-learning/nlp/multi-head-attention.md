---
id: "Multi-head attention"
title: "Multihead Attention"
tags: [transformers, nlp, neural networks]
---
## 🧠 1. What Is Scaled Dot-Product Attention?

At its core, attention is about:

> "How much should I focus on each word in the input?"
> 

The **scaled dot-product attention** formula is:

Attention(Q,K,V)=softmax(QKTdk)V\text{Attention}(Q, K, V) = \text{softmax}\left(\frac$QK^T${\sqrt$d_k$}\right)V

Attention(Q,K,V)=softmax(dk

QKT)V

### Meaning of terms:

- `Q` = Query: What we’re looking for
- `K` = Key: What each word offers
- `V` = Value: What each word "contains"
- `dₖ` = dimension of the key vector
- `softmax(...)` turns similarity scores into probabilities

The scaling by dk\sqrt$d_k$dk ensures that the dot products don’t get too large, which would make softmax overly peaky (one word gets nearly all attention).

---

## 🔁 2. What Is Multi-Head Attention?

> Instead of running just one attention mechanism, we run several in parallel.
> 

Each “head” gets its own Q, K, V matrices (via learned linear layers), allowing it to:

- Learn **different relationships** (e.g., syntax, grammar, position)
- Attend to **different tokens** in the same input

### Example:

Suppose your input embeddings are 4-dimensional, and you use 2 heads:

- Each head gets 2-dimensional Q, K, V vectors (split)
- Attention is computed separately in each head
- Outputs are **concatenated** and passed through a final linear layer

🧠 This gives the model more flexibility and a richer representation.

---

## 🏗️ 3. What’s a Transformer Encoder Layer?

Each **encoder layer** in a Transformer consists of:

1. **Multi-head self-attention**
    - Input goes through multiple attention heads
    - The output is context-aware embeddings
2. **Add & Norm**
    - Add the original input (residual connection)
    - Normalize the result (layer normalization)
3. **Feed-forward Network (FFN)**
    - A linear → activation → linear block applied to each position
    - Adds extra non-linearity
4. **Add & Norm again**
    - Another residual + normalization

You can **stack** multiple encoder layers to allow deeper understanding of patterns.

---

## 🧩 4. What About Transformers for Translation?

In **translation**, we use:

- **Encoder**: Processes the source sentence (e.g., French)
- **Decoder**: Generates the target sentence (e.g., English)

### Decoder Specialties:

- Uses **masked self-attention** to prevent cheating (no peeking at future words)
- Uses **cross-attention**: queries come from the decoder, but keys and values come from the encoder output

---

## 🔧 5. How Do You Build This in PyTorch?

### Multihead Attention

```python
python
CopyEdit
attention = nn.MultiheadAttention(embed_dim=4, num_heads=2, batch_first=False)
output, weights = attention(Q, K, V)

```

### Transformer Encoder

```python
python
CopyEdit
encoder_layer = nn.TransformerEncoderLayer(d_model=4, nhead=2)
transformer = nn.TransformerEncoder(encoder_layer, num_layers=2)

x = torch.rand(seq_len, batch_size, embed_dim)
out = transformer(x)

```

Each layer will apply:

- Multi-head attention
- Add & Norm
- Feedforward
- Add & Norm again

---

## 🎯 6. Recap

| Concept | Key Idea |
| --- | --- |
| **Attention** | Focuses on important words via dot-product |
| **Scaled Dot Product** | Softmax on similarity scores, scaled by √dₖ |
| **Multi-Head Attention** | Parallel attention heads learn different patterns |
| **Encoder** | Stacks attention + FFN with normalization |
| **Decoder** | Adds masking and cross-attention |
| **Transformers** | Stack layers → deeper representations |