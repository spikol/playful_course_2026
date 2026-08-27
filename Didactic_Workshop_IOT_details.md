# Playful Programming and Artificial Intelligence
#### Playful Programming og Kunstig intelligens i gymnasiets STEM-fag

### A 5-Day Workshop for High School Teachers

**[Course Padlet](https://padlet.com/ds341/playful-ai-and-programming-wd600grcsznigdb3)** — the shared board for this workshop

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

### [Day 1 — Waking Up the Machine: From Ideas to Connected Things](/day_1/)
**Monday 24 August**

---

### [Day 2 — Talking to the Machine: Generative AI in the Wild](/day_2/)
**Tuesday 25 August**

---

### [Day 3 — Your Turn: Design, Build, and Present (Slightly Shorter)](/day_3/)
**Wednesday 26 or Thursday 27 of August**

---

## October Block — Feedback, Reflection, and Consolidation

---

### [Day 4 — Back from the Classroom: What Actually Happened?](/day_4/)
**Monday 5 October**

---

### [Day 5 — Consolidation: Refine, Share, and Publish](/day_5/)
**Tuesday 6 October**

---

## Hardware and Programming

**Primary approach: browser-based, p5.js + Claude.** No flashing, no wiring, no serial bridge — the Day 1–2 hands-on activities above run entirely in a laptop browser. p5.js reads the webcam (or mouse/microphone) as a "sensor," ml5.js trains a live classifier in-browser, and Claude does the narrating, either through a small shared server-side proxy or a personal, spend-capped API key entered directly in the page.

**Optional hardware track:** Micro:bit (browser-based MakeCode, built-in sensors, native AI tools at microbit.org/ai) remains available for groups who want a physical-sensor version of the activities, or for Day 3 project work. The micro:bit's processor can't run large models directly, so sensor data still bridges to an LLM via a Python serial script on a laptop; Edge Impulse can be used to flash small ML models directly onto the device.

**Programming level:** The browser-based activities need zero programming from participants — drag, click, watch. A light-Python track remains available on the hardware path (10–20 line scripts, API calls) for participants who want to look under the hood or run the micro:bit option. Participants self-select on Day 1.

---

## Key Resources

**[Course Padlet](https://padlet.com/ds341/playful-ai-and-programming-wd600grcsznigdb3)** — the shared board for this workshop

#### p5.js view samples
[Word-Magnet](https://editor.p5js.org/spikol/full/Ieencj3kH)

[Webcam-sensor](https://editor.p5js.org/spikol/full/PZv1AgE79)

[Teachable_classifier_vid](https://editor.p5js.org/spikol/full/2KQ6Z9yU6)

[The Confident Liar](https://editor.p5js.org/spikol/full/cwWborjH7)

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

