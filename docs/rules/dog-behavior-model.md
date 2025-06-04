# 🐾 Handler Stopping vs. Dog Advancing: Real-World Behavior and Game Simulation

This document explores whether a dog in an agility trial would move ahead of the handler when the handler stops — and under what conditions such behavior is realistic, desirable, or fault-worthy. It also provides in-game logic modeling based on real-world agility trial practices.

---

## ✅ Can a Dog Move Ahead of a Handler?

Yes — but only under specific, controlled conditions.

---

## 🧭 Real-World Agility: When Dogs Move Ahead

| Scenario                              | Description                                                       | Dog Behavior |
|---------------------------------------|-------------------------------------------------------------------|--------------|
| **Forward Send ("Go")**               | Handler cues dog to take next obstacle from a distance            | Dog advances confidently |
| **Obstacle Commitment + Momentum**    | Dog already committed when handler stopped                        | Dog finishes obstacle |
| **Lead-Out Push (start-line)**        | Dog is released from start line                                   | Dog surges ahead |
| **Distance Handling (Gamblers)**      | Dog is trained to work far from handler                           | Dog runs ahead autonomously |

---

## 🛑 When Dogs Do Not Move Ahead

| Situation                            | Description                                           | Dog Behavior     |
|-------------------------------------|-------------------------------------------------------|------------------|
| **Handler stops, no cue given**     | Dog waits or orbits, uncertain                       | Stops or checks in |
| **Handler freezes mid-course**      | Dog becomes confused or hesitant                     | Slows or stalls |
| **Course complexity increases**     | Dog lacks confidence without clear guidance          | Waits or looks back |
| **Low focus or bond**               | Dog becomes distracted, checks handler excessively   | Does not move ahead |

---

## 🎮 In-Game Simulation

### 📏 Default Rule:
> **Dogs do not move ahead of the handler unless cued, committed, or extremely confident.**

---

### 🧠 Stat-Based Movement Conditions

| Stat Factors                | Game Behavior                                                   |
|-----------------------------|------------------------------------------------------------------|
| High **Training + Focus**    | Dog may move forward if path is obvious and handler paused briefly |
| High **Bond + Responsiveness** | Dog waits for handler unless explicitly cued forward              |
| Low **Focus**, High **Energy** | Dog might surge or false-start if handler is imprecise             |
| Handler Stopped Abruptly     | Dog reverts to orbit or idle posture                            |

---

### 🧪 Sample Movement Logic

```pseudo
if dog.in_commitment or dog.was_just_cued_forward:
    dog.can_pass_handler = true
elif handler.speed == 0 and dog.in_orbit:
    dog.state = "wait_and_watch"
else:
    dog.orbit_around(handler)
