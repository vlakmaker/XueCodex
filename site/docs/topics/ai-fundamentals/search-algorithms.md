---
title: Search Algorithms in AI
id: search-algorithms
tags: [ai-fundamentals, search, planning, heuristics, games, pathfinding]
summary: A detailed overview of uninformed and heuristic-based search strategies used in classical AI, with practical comparisons and use cases.
---

# 🧭 Search Algorithms in AI

This knowledge item covers foundational search algorithms used in classical AI. These algorithms guide intelligent agents in navigating problem spaces, finding optimal paths, or making strategic decisions in games.

---

## 🔍 Uninformed Search Strategies

These algorithms explore the search space without any domain-specific knowledge. They do not use heuristics and treat all paths equally.

---

### 🌊 Breadth-First Search (BFS)

**Strategy**: Explores the search tree level-by-level, starting at the root. It expands all nodes at a given depth before moving deeper.

- **Data Structure**: FIFO queue
- **Optimal**: ✅ Yes (if step costs are equal)
- **Complete**: ✅ Yes
- **Memory Usage**: ❌ High (stores all nodes at each level)

**Use When**:
- You want the **shortest-path solution**
- The goal is **close to the root**
- The tree is **not too deep**

**Real-Life Analogy**:  
Navigating a city to find the nearest coffee shop — checking all the closest ones first.

---

### 🌌 Depth-First Search (DFS)

**Strategy**: Explores as deep as possible along each branch before backtracking.

- **Data Structure**: LIFO stack (can be implemented recursively)
- **Optimal**: ❌ No
- **Complete**: ❌ No (can get stuck in infinite paths)
- **Memory Usage**: ✅ Low (only stores nodes on the current path)

**Use When**:
- The solution is **likely deep**
- You have **memory constraints**
- You can tolerate **non-optimal answers**

**Real-Life Analogy**:  
Exploring a maze by always turning left until hitting a wall, then backtracking.

---

### 📊 BFS vs DFS Comparison

| Feature        | BFS               | DFS                |
|----------------|-------------------|--------------------|
| Data Structure | Queue (FIFO)      | Stack (LIFO)       |
| Memory         | High              | Low                |
| Complete       | ✅ Yes            | ❌ Not always       |
| Optimal        | ✅ Yes (equal cost)| ❌ No               |
| Best For       | Shallow search    | Deep solutions     |

---

## 🧠 Heuristic (Informed) Search Strategies

These use additional information (heuristics) to make better decisions about which path to explore next.

---

### ⚡ Greedy Best-First Search

**Strategy**: Always selects the node that appears **closest to the goal**, based only on a heuristic function `h(n)`.

- **f(n) = h(n)**
- **Data Structure**: Priority Queue
- **Optimal**: ❌ No
- **Complete**: ❌ No
- **Fast?** ✅ Yes, in large spaces

**Heuristic Example**:  
Straight-line distance from a city to the destination.

**Use When**:
- Speed matters more than correctness
- The heuristic is generally reliable
- The search space is vast (e.g., open-world maps)

**Drawbacks**:
- Easily **misled by poor heuristics**
- May **miss shorter/cheaper paths**

---

### 🌟 A\* Search

**Strategy**: Balances actual cost (`g(n)`) and estimated cost to goal (`h(n)`) using:

```python
f(n) = g(n) + h(n)

- **Optimal**: ✅ Yes (if `h(n)` is admissible)
- **Complete**: ✅ Yes
- **Data Structure**: Priority Queue

**Use When**:

- You want the **shortest or cheapest path**
- You have a **good heuristic**
- You're solving **maps, puzzles, or planning tasks**

**Example**:

Finding the shortest path from City A to City B, combining distance traveled (`g(n)`) and estimated distance left (`h(n)`).

**Watch out**:

- High memory usage in large graphs
- Slows down with poor heuristics

---

### 🔁 Summary Table

| Algorithm | Uses Cost? | Uses Heuristic? | Optimal? | Complete? |
| --- | --- | --- | --- | --- |
| **BFS** | ✅ Yes | ❌ No | ✅ | ✅ |
| **DFS** | ❌ No | ❌ No | ❌ | ❌ |
| **Greedy Best-First** | ❌ No | ✅ Yes | ❌ | ❌ |
| **A*** | ✅ Yes | ✅ Yes | ✅ | ✅ |

---

## ♟️ Adversarial Search (Two-Player Games)

Used when the agent competes against another opponent.

---

### 🎮 Minimax Search

**Strategy**: Simulates a turn-based game where one player tries to **maximize** score and the other tries to **minimize** it.

- **Used In**: Chess, Checkers, Tic-Tac-Toe
- **Assumes**: Perfect play from both players
- **Optimal**: ✅ Yes (for perfect information games)
- **Problem**: Explores the full game tree = **exponential complexity**

**Example**:
You're X in Tic-Tac-Toe. You simulate all your moves, all your opponent's responses, and choose the move that gives you the best worst-case scenario.

---

### ✂️ Alpha-Beta Pruning

**Improvement** over Minimax that **cuts off** parts of the tree that don't influence the final decision.

- **Result**: Same outcome, much faster
- **Tracks**:
    - `α`: Best score that MAX can guarantee
    - `β`: Best score that MIN can guarantee

**Why it matters**:

- Makes Minimax **scalable**
- Can **double the depth** you can search in the same time

---

### ⏳ Depth-Limited Minimax

**Problem**: Real game trees (e.g. Chess) are too deep to search fully

**Solution**: Set a depth limit and use an **evaluation function** to guess the value of non-terminal states

**Example**:
In Chess:

> “White has a queen, black doesn’t → score = +9”
> 

**Use When**:

- Game trees are large
- You need fast, *reasonably* good decisions (e.g. in real-time games)

---

## 🧠 Takeaways

- **BFS/DFS** are useful for exploring without prior knowledge
- **Greedy and A*** use heuristics to improve speed or optimality
- **Minimax and Alpha-Beta** are critical for game AI
- Evaluation functions and pruning are key to real-time game performance