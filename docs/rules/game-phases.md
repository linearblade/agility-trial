# 🎲 Agility Trial Game Phase Table (Board Game Model)

This breakdown structures the agility trial simulation into **modular, sequential phases**, each of which can be executed independently or composed for full game runs. It reflects a hybrid **board-game + stat-driven simulation** model for clarity, testability, and design expansion.

---

## 1️⃣ Tile Generation & Placement

**Purpose**: Define the course boundaries and playfield.

| Component         | Description                                  |
|-------------------|----------------------------------------------|
| Grid Dimensions    | Use 24×24 hex grid (standard) [oai_citation:0‡agility trial dimensions.md](file-service://file-NzCuwQ8Z8MSvSb6uV22vvk)         |
| Tile Properties    | Terrain type, valid path, trigger zones      |
| Special Zones      | Start zone, finish line, out-of-bounds tiles |

---

## 2️⃣ Obstacle Generation & Placement

**Purpose**: Populate the map with obstacles using real-world specs.

| Component         | Description                                                  |
|-------------------|--------------------------------------------------------------|
| Obstacle Types     | Pulled from `agility_objects` table + legacy definitions [oai_citation:1‡agility trial objects.md](file-service://file-D64sTeotK1xXQuN35JNv3z) |
| Placement Logic    | Follow realistic spacing (6–7 tiles apart) [oai_citation:2‡agility trial dimensions.md](file-service://file-NzCuwQ8Z8MSvSb6uV22vvk)            |
| Orientation Rules  | Apply correct facing (e.g., tunnels, weaves, A-frame)       |
| Random/Prebuilt    | Option to use hand-built layouts or procedural templates    |

---

## 3️⃣ Map Review / Walkthrough

**Purpose**: Let the player preview the course before play starts.

| Component         | Description                                    |
|-------------------|------------------------------------------------|
| Lead-Out Setup     | Player reviews course and selects start tile  |
| Obstacle Preview   | Show obstacle names, layout, zones            |
| Planning Tools     | Optional: draw path, measure distance         |

---

## 4️⃣ Actor Placement

**Purpose**: Position the player and dog before simulation begins.

| Component         | Description                                        |
|-------------------|----------------------------------------------------|
| Handler Start Tile | Selected during lead-out phase                   |
| Dog Start Zone     | Within 3×3 start zone; must be behind start line [oai_citation:3‡agility trial dimensions.md](file-service://file-NzCuwQ8Z8MSvSb6uV22vvk) |
| Initial Orientation| Optional facing angle for dog                    |
| Readiness Check    | Validate starting states (e.g., dog focus level) |

---

## 5️⃣ Game Run (Simulation Phase)

**Purpose**: Player navigates, dog reacts, obstacles are triggered.

| Component             | Description                                                      |
|------------------------|------------------------------------------------------------------|
| Handler Movement        | Tile-by-tile (6-direction hex nav)                             |
| Dog Orbit Simulation    | Dog follows handler within dynamic radius [oai_citation:4‡agility trial synopsis.md](file-service://file-34YJWA98sE4mExtcJAURh5)               |
| Obstacle Trigger Logic  | Based on proximity, angle, stat thresholds                      |
| Obstacle Resolution     | Score per obstacle using stat-weighted functions [oai_citation:5‡agility trial synopsis.md](file-service://file-34YJWA98sE4mExtcJAURh5)         |
| Fault Checks            | Wrong obstacle, runout, refusal, off-course, early start         |
| Time Tracking           | Total elapsed time based on tile movement & delay events         |

---

## 6️⃣ Scoring & Results

**Purpose**: Summarize the run and assign score/placement.

| Component             | Description                                                  |
|------------------------|--------------------------------------------------------------|
| Time Scoring            | Total elapsed run time from start to finish                 |
| Fault Penalties         | Additive time or fault points (e.g., +5 sec per error)       |
| Obstacle Breakdown      | Show performance per obstacle (time, quality, faults)        |
| Final Rank/Score        | Based on normalized time + faults for leaderboard purposes   |

---

## 🚧 Optional Additional Phase: Review & Replay

**Purpose**: Offer post-run insight or ghost playback.

| Component             | Description                                                  |
|------------------------|--------------------------------------------------------------|
| Ghost Trail             | Replay route taken by handler and dog                       |
| Fault Highlighting      | Show where and why faults occurred                          |
| Retry Option            | Allow re-run of same course (optional for training mode)    |

---

## ✅ Summary Flow

```text
[1] Tile Generation
   ↓
[2] Obstacle Placement
   ↓
[3] Map Review
   ↓
[4] Actor Placement
   ↓
[5] Game Run
   ↓
[6] Scoring