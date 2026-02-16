---
id: "activation-functions"
title: "Activation Functions: Sigmoid, Tanh, and ReLU"
tags: [deep-learning, activation-functions, sigmoid, tanh, relu]
---

# Activation Functions: Sigmoid, Tanh, and ReLU

## What Are Activation Functions?

Activation functions are what make neural networks *non-linear* and capable of learning complex patterns. They control whether a neuron "fires" and *how strong* its output signal is, based on the weighted input.

> Think of them like dimmer switches for your brain cells — deciding how much light (signal) should come through.

In technical terms:
Given an input value $z$, the activation function transforms it to produce the neuron's output $a(z)$.

---

## What Role Do They Play in Training?

Activation functions are used during **forward propagation** after computing the weighted sum:

$$
z = w^T x + b
$$

Then the activation is applied:

$$
a = g(z)
$$

Where $g$ is the activation function.

Without activation functions, stacking multiple layers would collapse into a single linear transformation — no matter how many layers you add, the network could only learn straight lines. Activation functions break this linearity and allow the network to learn curves, boundaries, and complex patterns.

They also enable **gradient descent** to work during backpropagation, because they provide differentiable, non-linear surfaces for gradients to flow through.

---

## Refresher: What is Gradient Descent?

Gradient descent is how neural networks learn. Imagine you're walking downhill in fog trying to find the lowest point (lowest error).

Steps:

1. Compute how steep the slope is (gradient)
2. Take a small step downhill
3. Repeat

If the slope (gradient) is near-zero, your steps get smaller — that's the **vanishing gradient** problem. The choice of activation function directly affects how severe this problem is.

---

## Comparing Activation Functions

### 1. Sigmoid

$$
\sigma(z) = \frac{1}{1 + e^{-z}}
$$

- **Output range:** 0 to 1
- **Shape:** S-curve
- **Used for:** Output layer in binary classification (where you need a probability)

**Pros:**
- Gives probability-like outputs
- Intuitive interpretation

**Cons:**
- **Not zero-centered** — gradients can zigzag during optimization
- **Vanishing gradient** for very large or very small $z$ — the curve flattens, so the derivative approaches zero

> *Veer Notes:* "If we move the weight to the right, the slope increases, but the change is so minimal in extremes that it becomes bad for lots of calculations."

---

### 2. Tanh (Hyperbolic Tangent)

$$
\tanh(z) = \frac{e^z - e^{-z}}{e^z + e^{-z}}
$$

- **Output range:** -1 to 1
- **Shape:** S-curve, centered at zero
- **Used for:** Hidden layers in classic networks

**Pros:**
- **Zero-centered** — makes learning faster because gradients don't all push in the same direction
- Stronger gradients than sigmoid

**Cons:**
- Still suffers from vanishing gradients (though less than sigmoid)

> *Veer Notes:* "Since it goes from -1 to 1 we get a more detailed view of success vs. failure. It's useful in hidden layers."

---

### 3. ReLU (Rectified Linear Unit)

$$
\text{ReLU}(z) = \max(0, z)
$$

- **Output range:** 0 to infinity
- **Shape:** Flat at zero for negative inputs, identity for positive
- **Used for:** Hidden layers in modern deep networks (the default choice)

**Pros:**
- **Fast to compute** — just a threshold
- **No vanishing gradient** for positive values — the derivative is always 1
- Works well in **deep networks** where sigmoid/tanh would cause gradients to vanish

**Cons:**
- **Dying ReLU problem:** if a neuron's input is always negative, its output is permanently 0 and it stops learning entirely

> *Veer Notes:* "It doesn't respond when results are negative, but if they're positive, it just keeps going. That's why it's strong — but it can die."

---

### 4. Leaky ReLU

$$
\text{LeakyReLU}(z) = \begin{cases} z & \text{if } z > 0 \\ 0.01z & \text{if } z \leq 0 \end{cases}
$$

- Same as ReLU, but negative inputs get a small slope (0.01) instead of flat zero.

**Pros:**
- **Fixes dying ReLU** — neurons can still learn even with negative inputs
- Lets gradient flow even for negative $z$

> *Veer Notes:* "So that's why you use Leaky ReLU — it keeps neurons alive that would otherwise die when they get negative inputs."

---

## Summary Table

| Function | Output Range | Zero-Centered | Vanishing Gradient? | Best Used For |
|----------|-------------|---------------|-------------------|---------------|
| Sigmoid | (0, 1) | No | Yes | Output layer (binary classification) |
| Tanh | (-1, 1) | Yes | Sometimes | Hidden layers (classic networks) |
| ReLU | (0, infinity) | No | Rarely | Hidden layers (modern deep nets) |
| Leaky ReLU | (-infinity, infinity) | No | No | Deep nets with risk of dying ReLUs |

---

## Which One Should You Use?

- **Output layer for binary classification:** Sigmoid (you need a probability between 0 and 1)
- **Output layer for multi-class:** Softmax (covered in the [attention mechanism](../nlp/attention-mechanism.md) page — deserves its own page)
- **Hidden layers:** Start with ReLU. If neurons are dying, try Leaky ReLU.
- **RNNs/LSTMs:** Tanh is still common in gating mechanisms

Modern architectures like transformers use variants like **GELU** (Gaussian Error Linear Unit), which is a smooth approximation of ReLU. But understanding ReLU first gives you the foundation.

---

## Final Analogy

- **Sigmoid** = deciding how much you agree (0 = no, 1 = yes)
- **Tanh** = saying how strongly you agree or disagree (-1 = no way, +1 = absolutely)
- **ReLU** = only listening to good news. Bad input? Silent. Good input? Amplify it.
- **Leaky ReLU** = having a tiny backup mic for when the good news gets too quiet.

---

## Where to Go Next

- [Derivatives](../../machine-learning/core-maths/derivatives.md) — understand the slopes that gradients are based on
- [Neural Network Forward Pass](../neural-networks/neural-network-forward-pass.md) — see activation functions in context
- [Weight Initialization](../neural-networks/weight-initialization.md) — initialization interacts with activation function choice
