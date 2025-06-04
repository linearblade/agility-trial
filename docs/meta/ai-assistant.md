---
id: ai-assistant
title: Assistant Integration Notes
sidebar_label: AI Assistant
---

# 🤖 AI Assistant Integration Guide

This document exists to orient the AI assistant (ChatGPT) to the structure and access points of this wiki project.

---

## 🔗 Wiki Base Path

- **Local Dev**: `http://localhost:3000/`
- **GitHub Repo**: [linearblade/agility-trial](https://github.com/linearblade/agility-trial)
- **Edit URL Base**: `https://github.com/linearblade/agility-trial/edit/master/`

---

## 📂 Key Sections

| Section       | Path in Repo                | Access URL |
|---------------|-----------------------------|------------|
| Overview      | `docs/overview.md`          | `/docs/overview` |
| Rules         | `docs/rules/*.md`           | `/docs/rules/*` |
| Obstacles     | `docs/obstacles/obstacles.md` | `/docs/obstacles/obstacles` |
| Tree (Map)    | `docs/tree.md`              | `/docs/tree` |
| Meta/Notes    | `docs/meta/ai-assistant.md` | `/docs/meta/ai-assistant` (this doc) |

---

## 🧠 Indexing Strategy

- Each document should include a `title`, `id`, and `sidebar_label` in frontmatter.
- AI references can use **file paths**, **IDs**, or **sidebar labels** for disambiguation.
- Category folders (`rules/`, `obstacles/`) act as logical groupings, not required for navigation.

---

## 📌 Notes for AI Use

- If a file exists under `docs/`, it can be referenced by `/docs/<path without .md>`.
- Any new design spec, obstacle, or phase should be added as its own `.md` under an appropriate category.
- I can fetch, cross-reference, or summarize any Markdown file by name or path.
- Feel free to instruct:  
  > “Pull data from `rules/synopsis.md`”  
  > “Update the obstacle index”  
  > “Generate cross-links for everything in `rules/`”

---

## 🛠️ Tasks I Can Do Here

- Generate sidebar files from structure
- Build new `.md` files from specs, CSV, JSON, or lists
- Clean, format, or rewrite docs for clarity or tagging
- Help create index pages, cards, TOCs, or landing pages
- Deploy or debug the Docusaurus config
