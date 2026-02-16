---
id: "search-problem"
title: Search Problem Summary
tags: [ai-fundamentals, search, beginner]
---
## 🧭 **Search Problem Summary**

A **search problem** in AI is defined by five key components:

1. **Initial State**
    - Where the agent begins (e.g. position A in a maze).
2. **Actions**
    - The set of choices the agent can take in each state.
    - Defined as `ACTIONS(s)` → returns all possible actions from state `s`.
3. **Transition Model**
    - Describes the result of an action.
    - Defined as `RESULT(s, a)` → gives the next state after applying action `a` in state `s`.
4. **Goal Test**
    - Checks if the current state satisfies the goal condition.
5. **Path Cost Function**
    - Assigns a numerical cost to each path — used to find the optimal solution.

---

## 🧠 Key Concepts

- **State**: A configuration of the agent and its environment.
- **State Space**: All possible states reachable from the initial state.
- **Solution**: A sequence of actions that gets the agent from the initial to a goal state.
- **Optimal Solution**: The path with the lowest total cost.

---

## 📦 Node Data Structure

Each **node** in the search process stores:

- The current **state**
- A **parent** (how you got here)
- The **action** taken from the parent
- The **path cost** so far

---

## 🔄 Basic Search Algorithm (Uninformed Search)

**Algorithm:**

```
1. Initialize frontier with the initial state.
2. Loop:
   a. If frontier is empty → no solution.
   b. Remove a node from the frontier.
   c. If it’s the goal state → return the solution.
   d. Else, expand node and add children to frontier.

```

---

## 🚨 Problem: Repeated States

Without handling duplicates, the agent can revisit the same state and get stuck (infinite loops, wasted time).

---

## ✅ Revised Search Approach (with Explored Set)

Adds an **explored set** to avoid revisiting:

**Improved Algorithm:**

```
1. Frontier ← initial state
2. Explored ← empty set
3. Loop:
   a. If frontier is empty → failure.
   b. Remove a node.
   c. If node is goal → return path.
   d. Add node to explored.
   e. Expand node.
   f. For each child:
        - If not in explored or frontier → add to frontier.

```

---

## 🧱 Data Structures

- **Stack (LIFO)**: Used in Depth-First Search (DFS)
- **Queue (FIFO)**: Used in Breadth-First Search (BFS)
- More will come soon in advanced strategies.

---

### 🌟 TL;DR Review List:

- Understand what defines a search problem.
- Know the five elements: initial state, actions, transition model, goal test, path cost.
- Use explored sets to avoid redundancy.
- Search is about *expanding states*, *tracking paths*, and *finding optimal solutions*.