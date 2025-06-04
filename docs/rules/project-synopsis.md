# 📄 Project Synopsis: Agility Trials Redesign for AlacritySim

## 🐾 Purpose

This project is a **complete reimagining of agility trials** for the game *AlacritySim*, aiming to transform trials from passive stat checks into an **interactive, handler-driven simulation** that stays faithful to real-world dog agility competitions.

It will replace the legacy deterministic model with a **tile-based hex grid system** where the **player actively navigates the course** as the handler, and the **dog reacts based on its training and stats**. This brings realism, replayability, and strategic depth to a core mechanic of the game — while preserving its charm and accessibility.

---

## 🎯 Core Goals

- **Design an interactive agility trial system** that mirrors real-world dog agility:
  - Lead-outs
  - Obstacle sequences
  - Handling maneuvers (front/rear/blind crosses)
  - Stat-governed dog behavior

- **Preserve realism**:
  - Dogs are autonomous but orbit the handler as a center of control
  - Obstacles are arranged in real-world course patterns
  - Scores reflect time + faults like wrong obstacle, missed contact, early starts, etc.

- **Represent handler skill** through player-controlled tile movement
  - Course efficiency, timing, and movement strategy affect performance
  - Mistakes are possible (poor positioning, late cues, etc.)

- **Use real-world data and practices** to drive obstacle types, spacing, and logic
  - Official obstacles from AKC/USDAA/FCI circa 2008+
  - Realistic field sizes and lead-out mechanics
  - Support legacy elements like the Chute (phased out after 2016)

- **Integrate seamlessly with AlacritySim's architecture**:
  - Built on PHP 5.4.5 MVC backend
  - Frontend in JavaScript, minimal graphics but functional UI
  - Database-driven map/object definitions

---

## 🧱 Technical Principles

- **Hex-grid navigation engine** used for course interaction
- **Dog 'orbiting' system** reflects proximity and responsiveness to handler
- **Tile-based obstacle triggers** invoke stat-based scoring logic per object
- **Time and scoring system** tracks total time, faults, and execution quality
- **Obstacle placement engine** based on official course guidelines
- **Modular MVC structure** to preserve clean backend logic

---

## 🕒 Historical Context

- AlacritySim was originally designed in 2008.
- Its agility trial system was passive: dogs were scored automatically once the trial filled.
- Obstacles were stored in the `agility_objects` table with skill mappings, anticipating future use.
- The Chute was in legal use at the time and remains supported for legacy/fantasy trials.

---

## 🧠 Guiding Philosophy

- **The player is the handler. The dog is the performer.**
- Dog behavior is reactive, not controlled — reflecting real agility teamwork.
- The game focuses on **stat-based simulation**, not reflex-based action.
- The design respects the realism of the sport while being engaging to play.

---

## 📌 Project Identity

This document preserves the *intent and goals* of the agility trial system so future instantiations of the AI assistant understand:

- The **design model** (simulation with interactive control)
- The **source game context** (AlacritySim)
- The **real-world sport** being modeled (agility trials, circa 2008)
- The **technical environment** (PHP MVC, JS frontend)

> 🧬 This project aims to give Alacrity's agility trials the soul they always deserved.