# 🧮 Scoring Rules for Agility Trials

This document outlines the official scoring system used in AlacritySim's agility trials. It mirrors real-world competition logic (e.g., AKC, USDAA) while supporting game logic with time-based fault penalties.

---

## 🎯 Objective

Players aim to guide their dog through the course **as quickly and cleanly as possible**. Scores are determined by:

1. **Elapsed Run Time**
2. **Fault Penalties**
3. **Time Allowed (SCT - Standard Course Time)**

---

## 🕒 Time Tracking

- A run begins when the dog crosses the **start line**
- The run ends when the dog crosses the **finish line**
- Run time is measured in **seconds with decimals** (e.g., `38.52s`)
- Each course has a predefined **Standard Course Time (SCT)**

> Dogs that finish **over SCT** receive **+1 second per excess second**

---

## ⚠️ Faults and Penalties

| Fault Type         | Description                                                       | Penalty           |
|--------------------|-------------------------------------------------------------------|-------------------|
| **Knockdown**       | Jump bar or obstacle element falls                                | +5 seconds        |
| **Refusal**         | Dog stops, turns away, or hesitates near an obstacle              | +5 seconds        |
| **Runout**          | Dog bypasses an obstacle it was clearly approaching               | +5 seconds        |
| **Missed Contact**  | Dog fails to touch the contact zone on A-Frame, Dog Walk, Teeter  | +5 seconds        |
| **Wrong Course**    | Dog takes an obstacle out of order                                | ❌ NQ (Eliminated) |
| **Backjump**        | Dog retakes an obstacle in reverse direction                      | ❌ NQ (Eliminated) |
| **Handler Fault**   | Touching dog/obstacle, crossing prohibited line, etc.             | +5 seconds or NQ  |
| **Over Time (SCT)** | Run time exceeds the course's allowed time                        | +1 sec per second |

> ❌ **NQ (Non-Qualifying)**: The run is invalid for ranking or qualification.

---

## 🏁 Final Score Calculation

```text
Final Score = Run Time + Fault Time Penalties
```

### Example:

| Run Time | SCT  | Faults       | Fault Time | Final Score |
|----------|------|---------------|-------------|--------------|
| 42.4s    | 45s  | Knock + Refusal | 10s       | **52.4s**     |
| 47.2s    | 45s  | Clean Run     | 2.2s OT     | **49.4s**     |
| 38.6s    | 45s  | Clean Run     | 0           | **38.6s**     |

---

## 🧠 Rankings and Qualification

- Only **clean or minimally faulted runs** under SCT may qualify
- Rankings are determined by **lowest final score**
- Ties are broken by **raw run time**

> A clean, fast run will always outperform a slow or faulted run.

---

## 🎖️ Awards and Progression

Players may receive:
- **Clear Round Badge**: No faults, under SCT
- **Fastest in Class**: Best final score in division
- **Title Points**: Awarded based on qualifying clean runs

---

## 📏 Notes

- Faults are automatically tracked by the simulation engine
- SCT is dynamically calculated based on course size and complexity
- Some specialty courses (e.g., Time 2 Beat) may use modified rules

For full simulation logic, see [Game Phases](/docs/rules/game-phase-table.md) and [Obstacle Logic](/docs/rules/obstacle-handling.md).

---
