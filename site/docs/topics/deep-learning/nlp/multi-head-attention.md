---
id: "Multi-head attention"
title: "Multihead Attention"
tags: [transformers, nlp, neural networks] # Ensure this is standard YAML list format
---

## 🧠 1. What Is Scaled Dot-Product Attention?

At its core, attention is about:

> "How much should I focus on each word in the input?"

The **scaled dot-product attention** formula is:

$$
\text{Attention}(Q, K, V) = \text{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V
$$

<!-- The line below seems like a duplicate or typo, I'm commenting it out. If it was intentional and different, uncomment and fix its LaTeX. -->
<!-- Attention(Q,K,V)=softmax(dkQKT)V -->

### Meaning of terms:

- `K` = Key: What each word offers
- `V` = Value: What each word "contains"
- $d_k$ = dimension of the key vector  <!-- Changed dₖ to d_k for simplicity and used $ for inline math -->
- `softmax(...)` turns similarity scores into probabilities

The scaling by $\sqrt{d_k}$ ensures that the dot products don’t get too large, which would make softmax overly peaky (one word gets nearly all attention). <!-- Changed to $...$ -->

---

## 🔁 2. What Is Multi-Head Attention?

> Instead of running just one attention mechanism, we run several in parallel.

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

# Removed "python CopyEdit" as it's not part of the code
attention = nn.MultiheadAttention(embed_dim=4, num_heads=2, batch_first=False)
output, weights = attention(Q, K, V)

# Removed "python CopyEdit"
encoder_layer = nn.TransformerEncoderLayer(d_model=4, nhead=2)
transformer = nn.TransformerEncoder(encoder_layer, num_layers=2)

x = torch.rand(seq_len, batch_size, embed_dim) # Assuming these vars are defined elsewhere
out = transformer(x)


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