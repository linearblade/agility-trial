
# 🕒 Obstacle Timing Reference – Agility Trials

This document outlines the average time expectations for each official obstacle in the AlacritySim agility trial system, based on real-world data, research, and simulation modeling. It provides base values for use in game logic and scoring simulation.

---

## ⏱️ Average Obstacle Completion Times

| Obstacle           | Base Time (sec) | Min Time | Max Time | Penalty Time | Notes |
|--------------------|-----------------|----------|----------|---------------|-------|
| **Standard Jump**  | 1.0             | 0.8      | 1.2      | 2.0           | Fastest; basic jump |
| **Tire Jump**      | 1.2             | 1.0      | 1.4      | 2.0           | Circular frame, visual challenge |
| **Double Jump**    | 1.3             | 1.1      | 1.6      | 2.0           | Extra clearance |
| **Triple Jump**    | 1.4             | 1.2      | 1.7      | 2.0           | Requires extended stride |
| **Broad Jump**     | 1.5             | 1.2      | 1.8      | 2.5           | Penalizes landing inside |
| **Panel Jump**     | 1.1             | 0.9      | 1.4      | 2.0           | Visual variation of standard jump |
| **A-Frame**        | 2.5             | 2.0      | 3.2      | 3.0           | Requires contact zone hit |
| **Dog Walk**       | 3.2             | 2.5      | 4.0      | 3.5           | Precision balance required |
| **Teeter Totter**  | 2.8             | 2.4      | 3.5      | 4.0           | Includes tip delay |
| **Tunnel (Straight)** | 2.0         | 1.5      | 2.5      | 3.0           | Fast but blind entry |
| **Tunnel (Curved)**  | 2.5           | 2.0      | 3.0      | 3.5           | Reduced visibility |
| **Weave Poles (12)** | 5.0           | 3.8      | 8.0      | 5.0           | Most stat-dependent |
| **Pause Table**    | 5.0 (fixed)     | 5.0      | 5.0      | 5.0           | Standard 5s hold |
| **Chute (Legacy)** | 2.5             | 2.0      | 3.2      | 3.5           | Deprecated post-2016 |

---

## 🧠 Stat Weighting Guidelines

Use this to model how dog stats affect obstacle performance:

| Obstacle Type     | Key Stats                      |
|-------------------|--------------------------------|
| **Jumps**         | Agility (60%), Focus (40%)     |
| **Contact Zones** | Focus (40%), Obedience (30%), Agility (30%) |
| **Weaves**        | Focus (40%), Agility (40%), Obedience (20%) |
| **Tunnels**       | Agility (50%), Focus (50%)     |
| **Pause Table**   | Obedience (70%), Focus (30%)   |

---

## 📌 Usage

- `base_time` is used for scoring reference and simulation logic
- `min_time` reflects max-trained dog with ideal approach
- `max_time` includes hesitation or entry angle issues
- `penalty_time` is applied for faults or skipped execution

> These values are *guidelines* and should be adjusted for class difficulty or dog skill level modifiers.

