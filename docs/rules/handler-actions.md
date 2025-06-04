
# 🧍‍♂️ Handler Actions in Agility Trials

This document outlines the actions and behaviors a handler can take in an agility trial, divided into **active** and **passive** categories. These are essential for simulating realistic handler control in the AlacritySim agility system.

---

## 🔹 Active Handler Actions
> *“What the handler **does** to shape the run.”*

These are intentional, visible actions requiring movement or signaling.

| Action                     | Description |
|----------------------------|-------------|
| **Movement (Run/Walk)**    | Navigating the course to control pacing, pathing, and pressure zones |
| **Front Cross**            | Switches dog from one side to the other **before** obstacle, by moving in front |
| **Rear Cross**             | Switches sides **after** the obstacle by cutting behind the dog’s path |
| **Blind Cross**            | Side switch done quickly and without eye contact during fast movement |
| **Lead-Out**               | Placing oneself ahead of the dog at the start to pre-position |
| **Directional Cueing**     | Turning shoulders, feet, or gesturing to indicate path or obstacle |
| **Verbal Cues**            | Saying “Tunnel!”, “Go!”, “Left!”, etc. to direct the dog intentionally |
| **Stop and Send**          | Coming to a halt and cueing the dog forward into a distant obstacle |
| **Acceleration/Deceleration** | Changing speed to manage momentum and cue urgency or caution |

---

## 🔸 Passive Handler Behaviors
> *“What the handler **is** that affects the run.”*

These are non-actions that still convey meaningful cues to the dog.

| Behavior                  | Description |
|---------------------------|-------------|
| **Standing Still**         | Signals "wait" or "watch me"; used to halt or control momentum |
| **Body Orientation**       | Facing direction indicates future motion to the dog |
| **Distance/Proximity**     | Affects pressure on lines and obstacles; can unintentionally cue |
| **Line Pressure**          | Handler presence near an obstacle can "push" the dog toward or away |
| **Eye Contact/Attention**  | Dogs read focus and emotional tone from handler attention |
| **Energy/Tension**         | Hesitation, tension, or uncertainty can cause the dog to falter |
| **Posture (open/closed)**  | Open posture invites motion; closed posture redirects |
| **Consistency**            | Predictable behavior builds dog confidence; erratic motion confuses |

---

## 🧠 Application to Game Simulation

- **Active actions** should be player-driven inputs (e.g., movement, cross initiations).
- **Passive behaviors** emerge naturally from positioning, facing, timing, and pacing.

Example behaviors:
- **Stopping near a jump** → may trigger an early jump if the dog is eager or misreads pressure.
- **Facing the wrong direction** → may cause a dog to spin or hesitate.
- **Running past a tunnel** → may cause a refusal if the dog isn’t sure what to take.

---

## ✅ Summary

| Type        | Examples                                             | Purpose                                     |
|-------------|------------------------------------------------------|---------------------------------------------|
| **Active**  | Movement, crosses, verbal cues, send-outs            | Direct, explicit control                    |
| **Passive** | Stillness, body angle, line pressure, consistency     | Implicit influence on dog behavior          |

---

These concepts form the core of the handler’s influence in both real-world agility and your simulation. Implementing both types of control will give players nuanced control while preserving realistic dog behavior.
