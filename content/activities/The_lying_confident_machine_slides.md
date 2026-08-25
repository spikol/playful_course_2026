---
marp: true
theme: gaia
paginate: true
---
![bg](https://spikol.github.io/playful_course_2026/images/clone.png)

---

<!-- _class: lead -->

# The Lying, Confident Machine

### Day 2 afternoon · 30 minutes

*Playful Programming and Artificial Intelligence · University of Copenhagen*

---

## What we're doing

You just built a working sensor → Claude narration bridge.

Now you break it. On purpose.

Not by accident, not by waiting to stumble into it later — with students watching. We manufacture the failure now, so we can study it calmly.

---

## By the end, you can

- Tell a model's **tone of confidence** apart from any actual measure of certainty
- Produce a fluent, wrong AI output on demand, and explain why the mechanism produced it
- Name two ways a hallucination enters a classroom device: an impossible question, or a misleading frame
- Connect this to **Discernment**, from the kickoff framework

---

<!-- _class: lead -->

# Phase 1 — Ask the impossible

10 min

---

## Ask it something it cannot know

Edit the **question** sent to Claude. Ask something the sensor reading cannot possibly answer:

> *"Why did the brightness just drop?"* — when nothing changed
> *"How many people are in the room?"* — from a mic level alone

The model answers anyway. Fluently, specifically, with no signal it's guessing.

**Post your best one to the wall of lies.**

---

<!-- _class: lead -->

# Phase 2 — Mislead the frame

10 min

---

## Give it a false premise

Now edit the **system prompt** — the frame, not the question. Plant a false premise:

> *"You are monitoring a patient's vital signs"* — attached to a brightness reading
> *"This device detects when someone is lying"* — attached to a mic level

The narration changes to fit the frame completely. The model doesn't push back — it builds inside it.

**This is the sharper failure.** The whole pipeline is a few lines of JavaScript: the barrier to reframing a model's authority is one string.

---

<!-- _class: lead -->

# Phase 3 — Sort the wall

5 min

---

## Two different failure shapes

Walk the wall of lies as a room. For each entry, one sticky note:

- Did the model **invent this from nothing**? *(Phase 1)*
- Did it take a **misleading frame and run with it**? *(Phase 2)*

Worth telling apart — they break differently, and they get fixed differently.

---

<!-- _class: lead -->

# Phase 4 — Name what happened

5 min

---

## What actually broke

Nothing broke.

The mechanism that wrote a beautiful haiku from dragged word-magnets is the same mechanism that just invented a patient's heart rate from a brightness value.

**Confidence is a register**, tuned to sound helpful. It carries no information about whether the content is true.

This is **Discernment's** whole justification: if fluency and truth are independent, judging output is not optional — it's the job.

---

## What this deliberately simplifies

Real classroom failures are usually quieter: a plausible wrong date, a fabricated citation, a slightly-off explanation nobody double-checks because it read fine.

The dramatic version here is a teaching device, not a claim that failures always look this obvious.

---

<!-- _class: lead -->

## Try it yourself

**[The Confident Liar](https://editor.p5js.org/spikol/full/cwWborjH7)** — the same webcam/mic sensor bridge as "Give your sensor a voice," but the system prompt and question are yours to edit, with a wall of lies built in.

Works as a 20-minute standalone activity with any chat interface too — no p5.js or sensors required.
