---
marp: true
theme: gaia
paginate: true
---

<!-- _class: lead -->

# Generative AI: How It Works and Why It Fails

### Seminar 2 · Playful Programming and Artificial Intelligence

University of Copenhagen · Department of Computer Science

---

## You already ran the model this morning

In the storytelling game, you **were** the mechanism:

- One word at a time → **next-token prediction**
- Voting on the likeliest word → **probability distribution**
- The die roll → **temperature**
- Fluent nonsense about Greenland → **hallucination**

This hour connects your game to the real thing — and shows where the game was too kind.

---

<!-- _class: lead -->

# Part 1 · How it works
### Four ideas, no equations

---

## Idea 1 — Text becomes tokens

The model never sees words. It sees **tokens**: word fragments.

`fotosyntese` → `fo` `tos` `yn` `tese`

- Every token is just a number
- ~50,000–100,000 tokens cover most languages — unevenly
- Danish costs more tokens than English (worth knowing when tools behave worse in Danish)

**Correction to the game:** you predicted words; the model predicts fragments.

---

## Idea 2 — Meaning becomes geometry

Each token becomes a point in a space with thousands of dimensions.

- Similar meanings sit near each other
- Directions carry meaning: the classic *king − man + woman ≈ queen*
- Nobody designed this space — it **emerged** from prediction practice on enormous text

The model's "understanding" is location and distance. Nothing else is in there.

---

## Idea 3 — Attention decides what matters

For every token, the model asks: **which earlier tokens matter for predicting the next one?**

*"The trophy didn't fit in the suitcase because **it** was too big."*

To continue well, *it* must attend to *trophy*, not *suitcase*.

- This runs in parallel, across dozens of layers, for every token
- It is the reason output stays coherent across paragraphs
- **Correction to the game:** your voting used gut feeling; the model uses billions of learned attention patterns

---

## Idea 4 — Generation is repeated sampling

The full loop, and the only loop:

1. Read all tokens so far
2. Produce a probability for **every possible next token**
3. **Sample** one (temperature = how adventurous the sample is)
4. Append it. Go to 1.

There is no plan, no fact-check, no lookup, no "mind" holding the answer.
**A fluent paragraph is thousands of runs of this loop.**

---

## What training did (in one slide)

- **Pre-training:** predict the next token, across a large fraction of the written internet. This is where fluency and knowledge-shaped patterns come from.
- **Fine-tuning:** human feedback teaches it to be *helpful, harmless, polite* — this shapes the confident, agreeable tone.

Note the trade: fine-tuning rewards sounding right.
**Nothing in either phase rewards being right.**

---

<!-- _class: lead -->

# Part 2 · Why it fails
### Four failure modes that matter for your classroom

---

## Failure 1 — Hallucination is the mechanism

Not a bug. Not lying. **Prediction without a world.**

- Round 4 this morning: your room produced fluent fiction about Greenland, because plausibility was the only rule
- The model is in Round 4 **all the time**
- Most dangerous where text sounds most authoritative: citations, dates, numbers, quotes

**Classroom translation:** fluency is not evidence. Train the reflex to check.

---

## Failure 2 — Bias is inherited, then polished

The training data is the written internet: its perspectives, gaps, and stereotypes included.

- Under-represented in the data → poorly served by the model (languages, cultures, viewpoints)
- Fine-tuning smooths the surface — the bias returns in *which* examples, names, and defaults the model reaches for
- Danish gymnasium relevance: the model's "neutral" is anglophone

**Classroom translation:** ask *whose text taught it that?*

---

## Failure 3 — Opacity, even to its makers

We can inspect every number in the network and still not explain **why this answer**.

- Billions of parameters; no human-readable rules inside (your sticky-note tree was more transparent than GPT)
- Explanations the model gives for its own answers are **also generated text** — predictions of what an explanation sounds like

**Classroom translation:** "ask the AI why" does not do what students think it does.

---

## Failure 4 — Confidence is a style, not a signal

The model has no internal measure of certainty that reaches the words.

- Fine-tuning selected for the confident, helpful register
- Wrong answers arrive in the same tone as right ones
- Humans read confidence as competence — **that reflex is the vulnerability**

This afternoon's activity weaponises exactly this: *the lying, confident machine*.

---

## The four failures are one failure

| Surface | Underneath |
|---|---|
| Hallucination | prediction has no world to check against |
| Bias | prediction inherits its training text |
| Opacity | prediction is geometry, not rules |
| False confidence | prediction was tuned to please |

**One sentence for your students:**
*It predicts what an answer looks like.*
Everything on this slide follows from that sentence.

---

<!-- _class: lead -->

# Part 3 · So what do we teach?

---

## Honest simplifications that survive contact

Claims you can teach that stay true at every depth:

- "It predicts plausible next words, one at a time" ✓
- "It has read enormous amounts of text, unevenly" ✓
- "It cannot check facts; it can only sound checked" ✓
- "Confidence and correctness are independent" ✓

Claims that will need unlearning later:

- "It looks things up" ✗ · "It understands you" ✗ · "It knows when it's unsure" ✗

---

## This afternoon

You give a micro:bit's sensor data to a language model and ask it to narrate.

Then you make it fail — on purpose, with a misleading system prompt.

Bring the four failure modes with you.
**You will meet all of them before 15:00.**

