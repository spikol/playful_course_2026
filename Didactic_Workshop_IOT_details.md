# Playful Programming and Artificial Intelligence
#### Playful Programming og Kunstig intelligens i gymnasiets STEM-fag

### A 5-Day Workshop for High School Teachers

23-08-26

<img src="images/happy_cyborgs_moon.png" alt="happy_cyborgs_moon 75%" style="zoom:50%;" />

**University of Copenhagen · Centre for Digital Education**
24–27 August 2026 + 5–6 October 2026

https://novonordiskfonden.dk/kursusliste2026-27/playful-programming-og-kunstig-intelligens-i-gymnasiets-stem-fag/

Course provider
University of Copenhagen, Department of Computer Science

## Overview

**Playful Programming and Artificial Intelligence** is a workshop for high school teachers who are curious about artificial intelligence and want space to explore it seriously, on their own terms. Rather than offering a fixed syllabus of AI facts to absorb, the workshop treats AI as something worth arguing about, building with, and getting wrong in productive ways.

The workshop is organised around the principle of didactic transposition: the idea that moving from scholarly knowledge to teachable content is not a matter of simplification alone, but of careful reconstruction. Participants first encounter AI concepts as learners through physical activity, hands-on tinkering, and deliberate confusion, and then begin the harder work of asking what those concepts would need to become to make sense in their own classrooms.

The August block covers sensing, classification, and generative AI over two and a half days, then gives participants a half-day to start developing something of their own. Between August and October, participants try ideas with their students and bring back what they found. The October block builds on that experience: what happened, what changed, and what is still unresolved.

No prior AI background is assumed. The aim is not to produce finished materials but to develop a set of ideas, questions, and practical approaches that participants can keep working with after the course ends.

**[Course Overview & Intended Learning Outcomes (PDF)](https://spikol.github.io/playful_course_2026/Course_Overview_and_Learning_Outcomes.pdf)** — a one-slide-deck summary of the above.

---

## Programme Structure

| Block | Dates | Time | Focus |
|---|---|---|---|
| August Day 1 | Mon 24 August | 9 to 15 | Physical AI: sensing, classification, unplugged |
| August Day 2 | Tue 25 August | 9 to 15 | Generative AI: LLMs, prompting, sensor + language |
| August Day 3A | Weds 26 August | 9 to 14 | Project: design, build, and present |
| August Day 3B | Thu 27 August | 9 to 14 | Project: design, build, and present |
|---|---|---|  |
| October Day 4 | Mon 5 October | 9 to 15 | Classroom feedback: what happened, what changed |
| October Day 5 | Tue 6 October | 9 to 15 | Consolidation: refine, share, and publish |

---

## Rough Daily Agenda Format*

| Time | Format | Purpose |
|---|---|---|
| 09:00–9:30 | **Morning Standup** | Hands-on activity or project session |
| 9:30–11:00 | **Hands-On** | Hands-on activity or project session |
| 11:00–11:10 | **Break** |  |
| 11:10–11:40 | **Discussion** | Debrief: What did you notice, what broke, what surprised you? |
| 11:40–12:10 | **Seminar** | Work: What would this look like in your classroom?           |
| 12:10–12:00 | **Lunch** |  |
| 13:00-13:50 | **Hands-On** | Work: What would this look like in your classroom? |
| 13:50-14:05 | **Break** |  |
| 14:05:15:00 | **Reflection** | Building on our ideas |

*subject to change :-)

---

## August Block — Building Knowledge and Skills

---

### Day 1 — Waking Up the Machine: From Ideas to Connected Things
**Monday 24 August**

**09:00–10:30 · Work**
**"Is this AI?"** — A provocative CS Unplugged opener where teachers sort everyday objects and behaviours into AI / not AI, argue their case, and discover how slippery the concept really is. The first act of didactic transposition: what do we actually mean by this idea, and how would we explain it to someone who has never heard the term?

**The world as data** — p5.js reads the laptop's own webcam in real time (brightness, colour, motion between frames) and streams it to Claude, which narrates what it thinks the room is like, in a persona teams pick themselves. Teams do a "blind tasting": guess what's happening in another team's room from the data stream alone. No flashing, no wiring — just the laptop already in front of them.

**10:30–11:00 · Discuss**
What counts as sensing? What counts as intelligence? Where did participants disagree, and why does that disagreement matter for teaching?

**11:00–12:00 · Seminar**
*Didactic transposition and AI literacy* — Conceptual introduction to the framework running through the whole workshop. How do we move from scholarly AI knowledge to something genuinely teachable? Research context from UCPH.

**13:00–14:30 · Work**
**Word-magnet haiku** — A fridge-magnet-style word bank on a p5.js canvas. Drag 5–7 words into a tray and Claude writes a haiku using (almost) only your selection — participants see their own constrained input transformed by the model, which sets up Day 2's "Art of the Prompt" a day early.

**Teach a machine with sticky notes** — Participants physically label, sort, and vote on data points to train a paper classifier, then watch it fail in interesting ways. A deliberate transposition tool: stripping away technical scaffolding to expose the underlying idea in a form anyone can reason about.

**14:30–15:00 · Discuss**
When does a thermostat become intelligent? A guided philosophical provocation using everyday objects to interrogate what "sensing", "deciding", and "learning" actually mean. Participants begin asking not only what AI is, but what has been simplified and what has been lost in translation.

---

### Day 2 — Talking to the Machine: Generative AI in the Wild
**Tuesday 25 August**

**09:00–10:30 · Work**
**LLMs in plain language** — Tokens, probabilities, and hallucinations explained through a group storytelling game where participants predict the next word. Encountering the concept as a learner first, before asking how to teach it.

**The art of the prompt** — A creative prompting challenge: who can get the most surprising, useful, or absurd response from the same starting sentence? Participants discover how much craft and creativity the right instruction requires.

**10:30–11:00 · Discuss**
What makes a good prompt? What does prompting have in common with asking a good research question or writing a clear exam task? Where does the analogy break down?

**11:00–12:00 · Seminar**
*Generative AI: how it works and why it fails* — Research-grounded introduction to large language models, their architecture at a conceptual level, and the specific failure modes (hallucination, bias, opacity) that teachers need to understand before bringing these tools into the classroom.

**13:00–14:30 · Work**
**Give your sensor a voice** — Train a live webcam gesture or pose classifier directly in the browser (no export step, no round trip through the Teachable Machine website); each time the top class changes, Claude narrates what it's "seeing," in character. Same classifier → language model pipeline as the original activity, minus the micro:bit + Python serial bridge — everything runs in one browser tab.

**The lying, confident machine** — A critical AI literacy activity exploring bias, hallucination, and opacity through deliberately broken or misleading LLM outputs. Participants confront what a responsible transposition of AI into the high school classroom must honestly include.

**14:30–15:00 · Discuss**
What would you actually show your students? What would you hide, warn about, or save for later? What does responsible AI literacy look like at gymnasium level?

---

### Day 3 — Your Turn: Design, Build, and Present (Slightly Shorter)
**Wednesday 26 or Thursday 27 of August**

**09:00–10:30 · Work**
**Classroom activity design sprint** — In small groups, participants apply didactic transposition directly: taking something they have learned across the first two days and rebuilding it into a playful IoT + GenAI activity for their own students. Constraints: it must be cheap, safe to fail, and genuinely fun.

**10:30–11:00 · Discuss**
Progress check: what are groups building, where are they stuck, what do they need?

**11:00–12:00 · Seminar**
*From classroom activity to curriculum sequence* — How do one-off activities become sustained learning? Research perspectives on embedding computational thinking and AI literacy across STEM subjects, with examples from UCPH projects.

**13:00–14:00 · Work**
**Playtest and steal** — Groups swap activities, try each other's ideas, and give feedback as if they were the students. Testing whether the transposition actually works in practice.

Final sprint: participants revise their activity based on feedback and prepare a short classroom-ready description.
**What do we take into the interim period?** Each participant names: one activity they will try before October, one question they are still sitting with, and one thing they want to report back on.

*August block closes. Before October, participants try at least one idea with their students and note what they observe.*

---

## October Block — Feedback, Reflection, and Consolidation

---

### Day 4 — Back from the Classroom: What Actually Happened?
**Monday 5 October**

**09:00–10:00 · Work**
**Classroom experience reports** — Structured show-and-tell: each participant shares what they tried, what happened, and what surprised them. Failures are as welcome as successes.

**10:15–11:00 · Discuss**
Patterns across the group: what worked across different school contexts? What failed consistently? What do the failures tell us about the gap between workshop and classroom?

**11:00–12:00 · Seminar**
*AI in education: current research and open questions* — Updated perspectives from UCPH on where the field is moving, what teachers are reporting nationally and internationally, and how the classroom experiments from this group connect to larger trends.

**13:00–14:30 · Work**
**Activity revision sprint** — Participants rework their August activity in light of what they learned from trying it. New constraints: it must now be something a colleague with no workshop background could pick up and run.

**14:30–15:00 · Discuss**
What changed between August and now — in the activity, in your understanding, or in how you think about teaching AI?

---

### Day 5 — Consolidation: Refine, Share, and Publish
**Tuesday 6 October**

**09:00–10:30 · Work**
**Final activity polish** — Participants complete their classroom-ready activity documentation: learning objectives, materials list, step-by-step facilitation notes, and at least one known failure mode with advice on handling it.

**10:30–11:00 · Discuss**
Peer-review round: participants read each other's documentation and provide one concrete suggestion for improvement.

**11:00–12:00 · Seminar**
*Critical AI literacy as a long-term project* — Closing research perspective: what does it mean to keep developing as a teacher of AI? What communities, resources, and practices support that? Where does this workshop fit in a longer arc?

**13:00–14:30 · Work**
**Share-out and collective resource** — Activities are gathered into a shared collection. Participants present their final version to the group in a three-minute format: what it is, what it teaches, and what to watch out for.

**14:30–15:00 · Discuss**
**Closing reflection.** Three prompts for every participant:
- One thing that shifted — in understanding, or in how you think about teaching AI.
- One thing you want to keep exploring.
- One question you are taking with you.

The workshop does not resolve the question of how to teach AI well. It tries to make that question more interesting, more concrete, and more worth pursuing.

---

## Hardware and Programming

**Primary approach: browser-based, p5.js + Claude.** No flashing, no wiring, no serial bridge — the Day 1–2 hands-on activities above run entirely in a laptop browser. p5.js reads the webcam (or mouse/microphone) as a "sensor," ml5.js trains a live classifier in-browser, and Claude does the narrating, either through a small shared server-side proxy or a personal, spend-capped API key entered directly in the page.

**Optional hardware track:** Micro:bit (browser-based MakeCode, built-in sensors, native AI tools at microbit.org/ai) remains available for groups who want a physical-sensor version of the activities, or for Day 3 project work. The micro:bit's processor can't run large models directly, so sensor data still bridges to an LLM via a Python serial script on a laptop; Edge Impulse can be used to flash small ML models directly onto the device.

**Programming level:** The browser-based activities need zero programming from participants — drag, click, watch. A light-Python track remains available on the hardware path (10–20 line scripts, API calls) for participants who want to look under the hood or run the micro:bit option. Participants self-select on Day 1.

---

## Key Resources

#### p5.js view samples
[Word-Magnet](https://editor.p5js.org/spikol/full/Ieencj3kH)

[Webcam-sensor](https://editor.p5js.org/spikol/full/Ieencj3kH)

[Teachable_classifier_vid](https://editor.p5js.org/spikol/full/2KQ6Z9yU6)

**Browser-based track (primary):**
- p5.js: [p5js.org](https://p5js.org)
- p5.js Web Editor: [editor.p5js.org](https://editor.p5js.org)
- This course's p5.js prototype collection for editing: [editor.p5js.org/spikol/collections/kKChPpmyf](https://editor.p5js.org/spikol/collections/kKChPpmyf)
- ml5.js: [ml5js.org](https://ml5js.org)
- Claude (Anthropic) API docs: [platform.claude.com](https://platform.claude.com)

**Hardware track (optional) and general AI literacy:**
- CS Unplugged: [csunplugged.org](https://csunplugged.org)
- AI Unplugged (Northwestern): [sites.northwestern.edu/aiunplugged](https://sites.northwestern.edu/aiunplugged)
- Teachable Machine: [teachablemachine.withgoogle.com](https://teachablemachine.withgoogle.com)
- Machine Learning for Kids: [machinelearningforkids.co.uk](https://machinelearningforkids.co.uk)
- Micro:bit AI tools: [microbit.org/ai](https://microbit.org/ai), [microbit.org/get-started/user-guide/microbit-createai](https://microbit.org/get-started/user-guide/microbit-createai)
- Edge Impulse: [edgeimpulse.com](https://edgeimpulse.com)
- Make AI Robots: [makeairobots.com](https://makeairobots.com)
- Elements of AI: [elementsofai.org](https://elementsofai.org)

