# Playful Programming and Artificial Intelligence
### A 5-Day Workshop for High School Teachers — Detailed Programme
**University of Copenhagen · Department of Computer Science · Centre for Digital Education**
24–27 August 2026 + 5–6 October 2026 · Universitetsparken 1, 2100 Copenhagen Ø

---

## Overview

**Playful Programming and Artificial Intelligence** is a workshop for high school teachers who are curious about artificial intelligence and want space to explore it seriously, on their own terms. Rather than offering a fixed syllabus of AI facts to absorb, the workshop treats AI as something worth arguing about, building with, and getting wrong in productive ways.

The workshop is organised around the principle of didactic transposition: the idea that moving from scholarly knowledge to teachable content is not a matter of simplification alone, but of careful reconstruction. Participants encounter AI concepts first as learners, through physical activity, hands-on tinkering, and deliberate confusion, and then begin the harder work of asking what those concepts would need to become to make sense in their own classrooms.

The August block works through sensing, classification, and generative AI across two days, then gives participants a half-day to start developing something of their own. Between August and October, participants try ideas with their students and bring back what they found. The October block is built around that experience: what happened, what changed, and what is still unresolved.

No prior AI background is assumed. The aim is not to produce finished materials but to develop a set of ideas, questions, and practical approaches that participants can keep working with after the course ends.

---

## Programme Structure

| Block | Dates | Focus |
|---|---|---|
| August Day 1 | Mon 24 August | Physical AI: sensing, classification, unplugged |
| August Day 2 | Tue 25 August | Generative AI: LLMs, prompting, sensor + language |
| August Day 3 | Thu 27 August | Project work: design, build, and present |
| October Day 4 | Mon 5 October | Classroom feedback: what happened, what changed |
| October Day 5 | Tue 6 October | Consolidation: refine, share, and publish |

## Daily Agenda Format

| Time | Format | Purpose |
|---|---|---|
| 09:00–10:30 | **Work** | Hands-on activity or project session |
| 10:30–11:00 | **Discuss** | Debrief: what did you notice, what broke, what surprised you? |
| 11:00–12:00 | **Seminar** | Conceptual input: theory, research context, or UCPH researcher presentation |
| 12:00–13:00 | Lunch | |
| 13:00–14:30 | **Work** | Hands-on activity or project session (continued) |
| 14:30–15:00 | **Discuss** | Reflection: what would this look like in your classroom? |

---

# August Block — Exploring Ideas and Building Skills

---

## Day 1 — Waking Up the Machine: From Ideas to Connected Things
**Monday 24 August**

### 09:00–10:30 · Work

**"Is this AI?" (45 min)**
Participants receive a deck of cards naming everyday objects and behaviours: a thermostat, Spotify's recommendations, a smoke detector, autocomplete, a pocket calculator, a chess engine, a washing machine with a "smart" cycle, a traffic light, a spam filter. In groups of four, they sort the cards into AI / not AI / it depends, then defend their sorting to another group. Disagreement is the material; the facilitator's job is to keep it alive, not resolve it.

- Full card deck and facilitation notes: see accompanying file *Is_this_AI_card_deck.md*
- Based on: AI4K12-style "What is AI?" openers and the AI Unplugged collection: https://sites.northwestern.edu/aiunplugged/
- Related: CS Unplugged pedagogy overview: https://www.csunplugged.org/en/
- Facilitation note: end by asking each group to write their working definition of AI on the wall. These definitions stay up all five days and get revised.

**The world as data: sensor blind tasting (45 min)** *(updated — now p5.js, no hardware required)*
Each table opens the `webcam-sensor` prototype in a browser: p5.js reads the laptop's own webcam in real time — average brightness, dominant colour, motion between frames — and streams that reading to Claude, which narrates what it thinks the room is like, in a persona the team picks (nervous houseplant, weather forecaster, detective on a stakeout). Teams rotate the laptop into mystery setups prepared in advance: face it at a dark corner, wave a hand in front of it, cover the lens, point it out a sunny window. They read only Claude's narration and guess what's happening — then design a mystery scenario for another team to guess from the narration alone. No flashing, no wiring, nothing to break before the activity even starts.

- Prototype and source: `dev/web_prototypes/static/webcam-sensor/` in this course's repository, or the p5.js Web Editor collection: https://editor.p5js.org/spikol/collections/kKChPpmyf
- Runs from a laptop's own webcam via `p5.Video`/`loadPixels()`; Claude is reached through a small shared proxy (or a personal, spend-capped API key) — see the prototype's README for both setups.
- Facilitators do not need to explain the code; the activity works the same "blind tasting" way as the original, with the machine's *narration* standing in for the raw sensor reading.

### 10:30–11:00 · Discuss
What counts as sensing? Where did the data mislead you, and why? The machine "saw" a number; you saw a sunny windowsill. What happened in between? This gap between measurement and meaning becomes a recurring theme.

### 11:00–12:00 · Seminar
**Didactic transposition and AI literacy** (UCPH researcher)
Introduction to didactic transposition as developed in the French didactics tradition (Chevallard) and its use in mathematics and science education research at UCPH. How does scholarly knowledge about machine learning differ from what appears in textbooks, media, and policy documents? What is gained and lost at each step? The framework participants will use all week to examine their own activity designs.

- Background reading (optional, distributed in advance): Winsløw and colleagues on didactic transposition as a research programme, https://researchprofiles.ku.dk/en/publications/didactic-transposition-from-theoretical-notion-to-research-progra/

### 13:00–14:30 · Work

**Word-magnet haiku (45 min)** *(updated — replaces the original circuit-building activity)*
A fridge-magnet-style bank of ~90 words sits on a p5.js canvas (concrete nouns, sensory adjectives, verbs). Participants drag 5–7 words into a tray and click Generate; Claude writes a haiku using only, or mostly, those words, and the result appears next to the selection. Low-stakes and immediate — no wiring, no flashing, nothing to install. The direct payoff: participants watch their own constrained input get transformed by the model, which previews Day 2's "Art of the Prompt" a day early — the constraint, not an open text box, is doing the creative work.

Goal: everyone produces at least one haiku they're willing to read aloud. Odd or broken results (haikus that ignore the syllable count, or lean on just two of the seven words) are shared as readily as clean ones — they're a natural opening for "why did it do that?"

- Prototype and source: `dev/web_prototypes/static/word-magnet/` (server-hosted) or `word-magnet-standalone/` (paste-into-p5-editor, bring your own API key) in this course's repository
- p5.js Web Editor collection: https://editor.p5js.org/spikol/collections/kKChPpmyf

**Teach a machine with sticky notes (45 min)** — *full teaching guide: Teach_a_machine_with_sticky_notes.md*
Unplugged classification. Each table receives a pile of data cards (for example, images of animals, or short text snippets) and builds a paper decision tree by voting on which questions best split the pile. Then a held-out test set arrives, and the classifier fails in interesting ways: overfitting, ambiguous cases, missing features.

- Directly adaptable: CS Unplugged classic activities on classification and decision-making, https://classic.csunplugged.org/activities/
- Human interface design activity (used here as a warm-up variant): https://classic.csunplugged.org/activities/human-interface-design/
- Teaching London Computing unplugged collection: https://teachinglondoncomputing.org/unplugged-computing/
- Machine Learning for Kids offers a plugged follow-up for classrooms: https://machinelearningforkids.co.uk/

### 14:30–15:00 · Discuss
When does a thermostat become intelligent? Return to the wall definitions from the morning. Which ones survived the day? What has been simplified in each activity, and did the simplification help or mislead? First explicit use of the transposition lens on the day's own activities.

---

## Day 2 — Talking to the Machine: Generative AI in the Wild
**Tuesday 25 August**

### 09:00–10:30 · Work

**LLMs in plain language: the storytelling game (40 min)** — *full teaching guide: LLMs_in_plain_language_storytelling_game.md*
The group builds a story one word at a time. First round: each person adds whatever word they like. Second round: each person must add the *most probable* next word, with the group voting. Third round: introduce a "temperature" dial where a die roll occasionally forces an improbable word. The felt difference between the rounds carries the core concepts: next-token prediction, probability distributions, sampling, and why hallucinations are not malfunctions but the mechanism working as designed.

- Concept background for facilitators: AI Unplugged activities on language models, https://sites.northwestern.edu/aiunplugged/
- Classroom-ready variant to point teachers to afterwards: "What next?" style word-prediction games from the unplugged tradition

**The art of the prompt (50 min)** — *full teaching guide: The_art_of_the_prompt.md*
All participants receive the same starting task (for example: get the model to explain photosynthesis to a specific, difficult audience) and 20 minutes to produce the most surprising, useful, or absurd result. Results go on the wall; the group reverse-engineers what made the strong prompts work: role, constraints, examples, audience, iteration.

- Any chat interface works; the workshop provides shared access so no participant needs a personal account.

### 10:30–11:00 · Discuss
What does prompting share with writing a good exam question or a clear lab instruction? Where does the analogy break down? Teachers already possess most of the relevant craft; the discussion makes that transfer explicit.

### 11:00–12:00 · Seminar
**Generative AI: how it works and why it fails** (UCPH researcher)
Conceptual (not mathematical) walkthrough of the transformer pipeline: tokens, embeddings, attention as "which words matter for this word", and generation as repeated sampling. Then the failure modes that matter for classrooms: hallucination, bias in training data, opacity, and confident wrongness. Connects directly back to the morning's storytelling game.

### 13:00–14:30 · Work

**Give your sensor a voice (60 min)** *(updated — now trained live in-browser, no serial bridge)*
The centrepiece. Participants train a live webcam gesture or pose classifier directly in the browser (ml5.js `featureExtractor` + `KNNClassifier`, no export step, no round trip through the Teachable Machine website):

1. Open the `teachable-classifier` prototype and click "Add example" a few times per class while posing (e.g. neutral / hands up / arms crossed) — no training run to wait on, classification starts immediately.
2. The classifier runs continuously against the live webcam feed; each time its top class changes, that label and confidence score are sent to Claude with a system prompt.
3. The creative move: rewrite the persona. "You are a nervous houseplant." "You are a detective describing a crime scene." "You are a nature documentary narrator." The same classifier output, radically different narration.

- Prototype and source: `dev/web_prototypes/static/teachable-classifier/` in this course's repository
- Everything runs in one browser tab — no pip installs, no serial port, no USB stick
- Same two-stage pipeline as the original activity (classifier → language model), just without the micro:bit + Python bridge in between

**The lying, confident machine (30 min)**
Participants deliberately break their setup: give Claude a misleading persona, or ask it to explain a classification it cannot possibly know the cause of. It confidently narrates fiction. Groups collect the best examples of confident wrongness for the wall — this can build directly on the classifier trained an hour earlier.

### 14:30–15:00 · Discuss
What would you actually show your students, and in what order? What would you warn about, and what would you let them discover? What does honest AI literacy look like at gymnasium level, given what you watched the machine do this afternoon?

---

## Day 3 — Your Turn: Design, Build, and Present
**Thursday 27 August**

### 09:00–10:30 · Work
**Classroom activity design sprint (start)**
In pairs or small groups, participants begin developing an IoT + AI activity for their own teaching context, using either track from the workshop (browser-based, or micro:bit). Constraints: cheap (a laptop and a browser, or under 200 DKK in materials for the hardware track), safe to fail, and genuinely playful. Groups start from a provided design canvas: target class and subject, core concept, what students do, what could go wrong, and what the activity deliberately simplifies.

Idea starters available in the room:
- Teachable Machine image/audio/pose projects: https://teachablemachine.withgoogle.com/
- Machine Learning for Kids project worksheets: https://machinelearningforkids.co.uk/
- micro:bit AI collection: https://microbit.org/ai/
- micro:bit CreateAI (movement-based ML on the device itself): https://microbit.org/get-started/user-guide/microbit-createai/
- Voice-activated micro:bit with Edge Impulse: https://www.edgeimpulse.com/blog/voice-activated-microbit/
- Cardboard robotics with Teachable Machine: https://cardboard.lofirobot.com/teachable-microbit-app-info/ and https://makeairobots.com/
- The Claude sensor-narration bridge from Day 2, remixable with any system prompt

### 10:30–11:00 · Discuss
Standing progress round: each group states in one minute what they are building, what they are stuck on, and what they need. Facilitators and peers offer resources, not solutions.

### 11:00–12:00 · Seminar
**From one-off activity to teaching sequence** (UCPH researcher)
How does a single playful activity become part of a sustained STEM teaching plan? Research perspectives on computational thinking integration, study and research paths, and what Danish and international experience says about the difference between a memorable workshop moment and durable classroom practice. Includes concrete examples from UCPH projects with schools.

### 13:00–14:30 · Work
**Design sprint (finish) and playtest (45 + 45 min)**
Groups finish a runnable version of their activity, then swap: each group runs another group's activity while role-playing the target students, including the awkward ones. Feedback follows a fixed format: one thing that worked, one thing that confused, one question a real student would ask.

### 14:30–15:00 · Discuss
**Into the interim period.** Each participant states: one activity or fragment they will try with students before October, what they expect to happen, and what they will pay attention to. Expectations are written down and sealed; they get opened again on Day 4.

*August block closes. Before October, participants try at least one idea with their students and note what they observe.*

---

# October Block — Feedback, Reflection, and Consolidation

---

## Day 4 — Back from the Classroom: What Actually Happened?
**Monday 5 October**

### 09:00–10:30 · Work
**Classroom experience reports**
Structured rounds of eight minutes per participant: what was tried, what happened, one artefact or anecdote from students. The sealed August expectations are opened and compared with reality. Failures carry equal status with successes; the facilitator models this by leading with a failure of their own.

### 10:30–11:00 · Discuss
Pattern hunting across reports: what worked across very different school contexts, and what failed consistently? Where did the workshop version of an activity and the classroom version diverge, and what does that divergence say about the transposition?

### 11:00–12:00 · Seminar
**AI in education: current research and open questions** (UCPH researcher)
Where the field stands now: what research says about AI literacy interventions, what teachers nationally and internationally are reporting, and which questions remain genuinely open. The group's own classroom experiments are positioned as small contributions to exactly these questions.

### 13:00–14:30 · Work
**Activity revision sprint**
Participants rework their activity in light of classroom evidence. New constraint: the revised version must be documented well enough that a colleague who never attended the workshop could run it. This forces the final act of transposition, from personal know-how to shareable form.

### 14:30–15:00 · Discuss
What changed between August and now: in the activity, in your understanding of AI, or in how you think about teaching it? Which of the wall definitions from Day 1 would you now defend?

---

## Day 5 — Consolidation: Refine, Share, and Publish
**Tuesday 6 October**

### 09:00–10:30 · Work
**Final documentation**
Each activity is completed in a shared template: learning goals, subject connection, materials list, step-by-step facilitation notes, timing, and at least one known failure mode with advice for handling it. Screenshots, code snippets, and prompt texts are included where relevant.

### 10:30–11:00 · Discuss
Peer review round: participants read one another's documentation cold and mark every place where they would get stuck. Each author receives one concrete, actionable improvement.

### 11:00–12:00 · Seminar
**Critical AI literacy as an ongoing practice** (UCPH researcher)
Closing perspective: teaching AI is a moving target, and no five-day course settles it. What communities, resources, and habits support continued development? Includes pointers to Danish and Nordic networks, relevant UCPH activity, and how this group can stay connected.

### 13:00–14:30 · Work
**Share-out and collective resource**
The revised activities are gathered into a shared collection for the whole group. Each participant presents in three minutes: what it is, what it explores, and what to watch out for. The collection belongs to the participants and travels with them.

### 14:30–15:00 · Discuss
**Closing reflection.** Three prompts for every participant:
- One thing that shifted, in understanding or in how you think about teaching AI.
- One thing you want to keep exploring.
- One question you are taking with you.

The workshop does not resolve the question of how to teach AI well. It tries to make that question more interesting, more concrete, and more worth pursuing.

---

## Hardware and Programming

*(updated section — the workshop's Day 1–2 default has shifted from micro:bit hardware to browser-based p5.js + Claude; micro:bit remains available as an optional track.)*

**Primary approach: browser-based, p5.js + Claude.** No flashing, no wiring, no serial bridge — the Day 1–2 hands-on activities above run entirely in a laptop browser. p5.js reads the webcam (or mouse/microphone) as a "sensor," ml5.js trains a live classifier in-browser, and Claude does the narrating, either through a small shared server-side proxy or a personal, spend-capped API key entered directly in the page. Working prototypes and facilitator notes live in `dev/web_prototypes/` in the course repository.

**Optional hardware track:** BBC micro:bit V2 (built-in temperature, light, accelerometer, and sound sensors; browser-based MakeCode programming) remains available for groups who want a physical-sensor version of the activities, or for Day 3 project work. Arduino remains available for participants with prior experience who want a higher ceiling.

**Programming tracks (self-selected on Day 1):**
- Browser-based (default): drag, click, watch — no programming required for Word-magnet haiku or the webcam-sensor/classifier activities
- No-code hardware: MakeCode blocks, https://makecode.microbit.org/, plus Teachable Machine via Web Bluetooth
- Light Python (hardware): MicroPython on the device (Thonny or the micro:bit Python Editor) plus short bridge scripts on the laptop (10–40 lines, provided and modified rather than written from scratch)

**The technical patterns used in the workshop** (full code in `dev/web_prototypes/` and the accompanying technical guide):
1. **Browser sensor to Claude, direct:** p5.js reads the webcam/mouse/mic in-browser and calls Claude via a small server-side proxy, or directly from the browser with a personal API key (`anthropic-dangerous-direct-browser-access`). Used in "The world as data" and "Word-magnet haiku."
2. **In-browser classifier to Claude:** ml5.js `featureExtractor` + `KNNClassifier` trains a live webcam classifier with no export step; class changes are sent to Claude for narration. Used in "Give your sensor a voice."
3. **Optional — sensor to LLM bridge (hardware track):** micro:bit streams telemetry over USB serial; a Python script (pyserial) forwards it to the Claude API and returns the response to the device's display.
4. **Optional — Web Bluetooth, no code (hardware track):** Teachable Machine connected to the micro:bit through browser-based blocks over Bluetooth.

**Practical notes:** API access is provided either through a shared workshop proxy or a personal, spend-capped key — no participant needs a production account either way. Hardware-track installs (`pip install anthropic pyserial`, plus TensorFlow and OpenCV for the local-Teachable-Machine pattern) are prepared in advance or available offline.

---

## Key Resources

**Browser-based track (primary)**
- p5.js: https://p5js.org/
- p5.js Web Editor: https://editor.p5js.org/
- ml5.js: https://ml5js.org/
- Claude (Anthropic) API docs: https://platform.claude.com/
- This course's prototypes: `dev/web_prototypes/` in the repository, or https://editor.p5js.org/spikol/collections/kKChPpmyf

**Unplugged foundations**
- CS Unplugged: https://www.csunplugged.org/en/ and classic activities: https://classic.csunplugged.org/activities/
- AI Unplugged (Northwestern): https://sites.northwestern.edu/aiunplugged/
- Teaching London Computing: https://teachinglondoncomputing.org/unplugged-computing/

**Hardware track (optional) and plugged tools for classrooms**
- Teachable Machine: https://teachablemachine.withgoogle.com/
- Machine Learning for Kids: https://machinelearningforkids.co.uk/
- micro:bit AI: https://microbit.org/ai/ and CreateAI: https://microbit.org/get-started/user-guide/microbit-createai/
- Edge Impulse (voice-activated micro:bit): https://www.edgeimpulse.com/blog/voice-activated-microbit/
- Cardboard robots: https://cardboard.lofirobot.com/teachable-microbit-app-info/ and https://makeairobots.com/

**Background**
- Didactic transposition at UCPH: https://researchprofiles.ku.dk/en/publications/didactic-transposition-from-theoretical-notion-to-research-progra/
- micro:bit sensors: https://microbit.org/get-started/features/sensors/
- Hugging Face Hub (for extended bridge experiments): https://huggingface.co/
