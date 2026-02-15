---
id: "training-loop"
title: "The Training Loop from the Inside"
tags: [ai-fundamentals, training, backpropagation, gradient-descent, core-concept]
---
### 🔄 **The Training Loop from the Inside**

> The training loop is the heartbeat of every AI model. It's the cycle of predict → measure → trace → nudge → repeat that turns random weights into useful knowledge.

Most explanations describe training as an abstract process. This page walks through what **actually happens** inside a training step — mechanically, concretely, using a real example.

---

### 🎯 **The Setup: Training a MicroGPT on Names**

We have:
- **32,000 baby names** (emma, olivia, ava, sophia, ...)
- **27 tokens** (a–z + a special BOS token for "start/end of name")
- **4,192 weights** — all starting as random numbers
- **1,000 training steps**

The model's job: given the letters so far, predict the next letter.

---

### 📍 **Step 1: Pick a Name and Tokenize It**

The model picks one name per step. Let's say: `"emma"`

Tokenize it — turn letters into numbers and wrap with BOS:

```
[BOS, 4, 12, 12, 0, BOS]
  ↑    e   m   m  a   ↑
start              end
```

Now the model has a sequence of numbers to work with.

**📌 BOS on both sides tells the model where names begin and end.**

---

### 📍 **Step 2: Forward Pass — Make Predictions**

The model processes the name one letter at a time, each time predicting what comes next:

| Input | Target | Model's Job |
| --- | --- | --- |
| `BOS` | `e` | "What letter do names start with?" |
| `e` | `m` | "After 'e', what comes next?" |
| `m` | `m` | "After 'e-m', what comes next?" |
| `m` | `a` | "After 'e-m-m', what comes next?" |
| `a` | `BOS` | "Is the name done?" |

For each input, the model:

1. **Looks up the embedding** — finds the letter's position on the chessboard (16 numbers)
2. **Adds the position embedding** — "this is position 0" or "this is position 3"
3. **Runs attention** — looks at all previous letters through four lenses to decide who's relevant
4. **Runs the MLP** — processes what it learned from attention
5. **Outputs scores for every letter** — "a = 0.2, b = -1.5, m = 3.8, z = -2.1, ..."
6. **Softmax** — turns scores into probabilities: "a = 5%, m = 78%, z = 0.1%, ..."

All of these operations use **Value objects** — numbers that remember where they came from. Every multiply, every add builds the computation graph.

**📌 The forward pass builds a trail of breadcrumbs through thousands of calculations.**

---

### 📍 **Step 3: Calculate the Loss**

The model predicted probabilities for every possible next letter. The loss measures: **how confident was the model about the correct answer?**

Example — predicting what comes after `e`:

```
Model's probabilities:
  a: 5%    ← not this
  m: 78%   ← THIS was correct
  q: 2%    ← not this
  z: 0.1%  ← not this
  ...
```

If the model was very confident about `m` → **low loss** (good!)

If the model spread its confidence evenly or picked `q` → **high loss** (bad!)

The formula is simple: `-log(probability of the correct answer)`

```python
loss = -log(0.78)  # = 0.25 (low loss, model was right)
loss = -log(0.02)  # = 3.91 (high loss, model was wrong)
```

Each letter prediction gives a loss. Average them all for the name:

```python
total_loss = average(loss_BOS→e, loss_e→m, loss_m→m, loss_m→a, loss_a→BOS)
```

One number. "For the name 'emma', you were THIS wrong overall."

**📌 The loss is a single number that captures the model's total wrongness for one training example.**

---

### 📍 **Step 4: Backward Pass — Trace the Breadcrumbs**

Now the critical part. The loss is a Value. It remembers every calculation that created it. Call `loss.backward()` and it traces the entire path in reverse.

**The process:**

1. Sort all Values in the right order (topological sort)
2. Start at the loss: "I affect myself by 1.0"
3. Walk backward through every operation:
   - "This multiply contributed X to the error"
   - "This add contributed Y to the error"
   - "This embedding lookup contributed Z to the error"
4. Every weight gets a **gradient** — a number saying "move me this much in this direction"

**What the chain rule does in practice:**

```
loss
  ↓ traces back through...
softmax probabilities
  ↓
raw prediction scores
  ↓
MLP processing
  ↓
attention combinations
  ↓
query/key/value transformations
  ↓
embedding lookups
  ↓
THE ACTUAL WEIGHTS ← these get gradients
```

After backward, every single weight in the model knows: "I contributed this much to the error."

**📌 Backward doesn't change anything yet. It just figures out who's responsible and by how much.**

---

### 📍 **Step 5: Optimize — Nudge the Weights**

Now the optimizer (Adam) goes through every weight and adjusts it:

```python
for each weight in model:
    weight = weight - learning_rate * gradient
```

In practice, Adam is smarter than this:
- It tracks **direction memory** (have I been going this way for a while?)
- It tracks **steepness memory** (how steep has the hill been?)
- It uses **learning rate decay** (big steps early, small steps late)

The learning rate shrinks over training:

| Step | Learning Rate | Why |
| --- | --- | --- |
| Step 1 | 0.01 (full) | Model is clueless, big nudges are fine |
| Step 500 | 0.005 (half) | Getting better, be more careful |
| Step 999 | 0.00001 (tiny) | Almost trained, precision matters |

After updating, **reset all gradients to zero**. Clean slate for the next name.

**📌 The optimizer is the mechanic. Gradients tell it what's broken. The learning rate controls how aggressively it fixes things.**

---

### 📍 **Step 6: Repeat**

Pick the next name. Do it all again. 1,000 times.

```
step    1 / 1000 | loss 3.3660  ← random guessing
step   50 / 1000 | loss 2.4050  ← starting to learn
step  100 / 1000 | loss 2.0333  ← real patterns emerging
step  500 / 1000 | loss 1.8241  ← getting good
step 1000 / 1000 | loss 1.5102  ← trained
```

The loss goes down. The chessboard reorganizes. The model learns.

---

### 🔬 **Autograd: The Engine That Makes It Possible**

The backward pass needs to trace through thousands of calculations. Doing this by hand would be impossible. That's why models use **autograd** — automatic gradient computation.

In Karpathy's MicroGPT, autograd is the `Value` class. Every number is a Value that:

| Property | Purpose |
| --- | --- |
| `.data` | The actual number |
| `.grad` | How much this number contributed to the error |
| `._children` | What numbers were used to create this one |
| `._local_grads` | The derivative of the operation (breadcrumb instructions) |

Every `+`, `*`, `exp`, `log` creates a new Value that remembers its parents. That's the computation graph building automatically.

Call `.backward()` and it walks the graph in reverse, multiplying gradients along the way. That multiplication is the **chain rule** — the fundamental math behind backpropagation.

**📌 Autograd = automatic breadcrumbs. You do math normally, and it secretly records everything so backward can trace the path.**

---

### 📊 **The Full Picture**

```
   DATA (names)
       ↓
   TOKENIZE (letters → numbers)
       ↓
   ┌─────────────── TRAINING LOOP (repeat 1000x) ───────────────┐
   │                                                              │
   │  FORWARD PASS → build computation graph, get prediction      │
   │       ↓                                                      │
   │  LOSS → single number: how wrong?                            │
   │       ↓                                                      │
   │  BACKWARD PASS → trace breadcrumbs, compute gradients        │
   │       ↓                                                      │
   │  OPTIMIZER → nudge every weight, reset gradients             │
   │                                                              │
   └──────────────────────────────────────────────────────────────┘
       ↓
   INFERENCE (generate new names)
```

---

### 🎯 **Why It Matters to You**

- This exact loop runs inside every model training — from MicroGPT to GPT-4, from image classifiers to your AIropa classifier
- When training fails, the loss tells you: not going down? Something's wrong with the loop. Going down then back up? Overfitting. Bouncing wildly? Learning rate too high.
- When you fine-tune a model, you're running this loop on your own data to adjust existing weights
- Understanding this loop is the difference between "I called an API" and "I know what happened inside"

---

### ✨ Bitty Bonus Recap Spell

> "Predict. Measure. Trace. Nudge. Repeat. That's not just how models learn — it's how anything learns. The model just does it with numbers, gradients, and a really good memory for breadcrumbs."
