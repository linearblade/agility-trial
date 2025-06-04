# 🐾 Official Agility Obstacles Reference (with Dimensions & Tile Suggestions)

This document outlines all standard obstacles used in dog agility trials circa **2008**, including any that have since been deprecated. It includes **real-world size estimates** and **suggested hex tile sizes** for use in a tile-based simulation like AlacritySim.

---

## 📋 Obstacle List with Dimensions

| Obstacle Name     | Category     | Description                                                                 | Real-World Size (ft)        | Suggested Tile Size | Still Used? | Notes                                                             |
|-------------------|--------------|-----------------------------------------------------------------------------|-----------------------------|----------------------|-------------|-------------------------------------------------------------------|
| **A-Frame**        | Contact      | Two wide ramps forming an “A” shape; dog ascends/descends.                 | 9 ft high x 3 ft wide panels| 2 tiles wide x 3 long| ✅ Yes      | Requires contact zones at bottom of each side                    |
| **Dog Walk**       | Contact      | Elevated narrow plank with two ramps.                                      | 12 ft long x 12" wide        | 1 tile wide x 4 long | ✅ Yes      | Each ramp ~4 ft; center ~4 ft                                    |
| **Teeter Totter**  | Contact      | Pivot plank that tilts under dog's weight.                                 | 12 ft long x 12" wide        | 1 tile wide x 3 long | ✅ Yes      | Center pivot should be marked visually                           |
| **Tunnel**         | Tunnel       | Open flexible tunnel; can be curved.                                       | 10–20 ft long x 24" diameter | 2–4 tiles curved     | ✅ Yes      | Use curved placement for gameplay variation                      |
| **Chute**          | Tunnel (Legacy) | Rigid entry with collapsed fabric exit.                                  | 3 ft entry + 8–12 ft fabric  | 2 tiles straight      | ❌ No       | Phased out after 2016; safe to use for legacy/fantasy events     |
| **Jumps**          | Jump (Generic)| Standard vertical jump — includes bars, double, triple.                   | ~4 ft wide, 24–30" height    | 1 tile                | ✅ Yes      | Used as generic jump representation                              |
| **Tire Jump**      | Jump         | Circular tire mounted in a frame.                                          | 24" inner diameter           | 1 tile                | ✅ Yes      | May animate dog jump through center                              |
| **Broad Jump**     | Jump         | Low, wide boards spaced apart for long jump.                              | 4–5 ft long x 36" wide       | 2–3 tiles long x 1 wide | ✅ Yes   | Dog must not land inside jump area                               |
| **Panel Jump**     | Jump         | Vertical jump with solid panels instead of bars.                          | Same as bar jump             | 1 tile                | ✅ Yes      | Visually distinct; functionally similar to standard jump         |
| **Pause Table**    | Table        | Dog jumps on, then sits or lies for 5 sec.                                | 36" x 36" square, 24" high    | 2 x 2 tiles           | ✅ Yes      | Use visible countdown / sound to simulate hold duration          |
| **Weave Poles**    | Weave        | 6–12 vertical poles in a straight line; dog weaves side-to-side           | 24" spacing, total ~12–24 ft | 6–8 tiles linear      | ✅ Yes      | Often one of the hardest obstacles to master                     |

---

## 🧠 Tile Size Assumptions

- Each **hex tile ≈ 3 ft** across (flat-to-flat diameter)
- Designed for moderate dog stride spacing and obstacle footprint
- Most contact and tunnel obstacles span multiple tiles for realism
- Jump-type obstacles usually take 1 tile unless specialized (e.g., Broad Jump)

---

## 🔄 Optional Subtypes (Expandable)

| Sub-Obstacle       | Parent Type | Real Size (ft)        | Suggested Tile Size      | Notes |
|--------------------|-------------|------------------------|---------------------------|-------|
| Double Jump        | Jumps       | ~4–5 ft wide           | 1 tile                    | Represented with stacked bars |
| Triple Jump        | Jumps       | ~5–6 ft wide           | 1–2 tiles visually only   | Higher clearance |
| Wall Jump (FCI)    | Jumps       | Varies                 | 1 tile                    | For stylized themes |
| Serpentine Jumps   | Jumps       | Placed in curved line  | 3–4 tiles total (angled)  | Sequence layout challenge |

---

## 🕒 Historical Context

The **Chute** was still legal and in active use during **2008**, when AlacritySim was first developed. It was commonly seen in:
- AKC
- USDAA
- UKI
- Local training clubs

By **2016**, most major organizations phased it out for safety reasons. It can still be used in:
- **Legacy trials**
- **Fantasy maps**
- **Custom player-built courses**

---

## ✅ Summary

- ✅ Your original table covers nearly all major obstacle types in 2008
- 🔼 Suggested additions: **Broad Jump**, **Panel Jump**
- 📏 Tile sizes map well to realistic obstacle proportions
- 🛠️ Chute should remain supported, with flag as "legacy"

This expanded list supports both accurate real-world simulation and flexible, game-friendly implementation.