# The Lying, Confident Machine
### Teaching guide · Day 2 afternoon · 30 minutes
*Playful AI with IoT and Generative AI · University of Copenhagen*

---

## What this activity is

A deliberate-breakage exercise. Having just built a working p5.js sensor-to-LLM narration bridge ("Give your sensor a voice" — webcam brightness/motion or live microphone level, piped to Claude), participants now break it on purpose: feeding the model misleading context, or asking it to explain readings it cannot possibly know the cause of. The model answers anyway, in exactly the same confident register as when it was right. The activity manufactures the failure rather than waiting to stumble into it, so the room can study it calmly instead of being ambushed by it later, with students watching.

Runs immediately after "Give your sensor a voice" and depends on it: the p5.js bridge (webcam or mic reading → Claude proxy → narrated text on canvas) must already be working before it is worth breaking.

## Learning goals

By the end, participants can:
- Distinguish a model's *tone of confidence* from any actual measure of certainty
- Produce, on demand, a fluent and wrong AI output, and explain why the mechanism produced it
- Name at least two ways a hallucination can enter a classroom-facing device: an impossible question, or a misleading frame
- Connect this to the Discernment competency from the kickoff framework: judging output quality is a skill, not a hope

## Materials

- The working p5.js sensor bridge from the previous session, running in the browser (webcam-brightness variant or microphone-level variant, each already calling the Claude proxy)
- A visible "wall of lies" — flip chart or shared doc where groups post their best fabrications
- Sticky notes, two colours (one for "the machine invented this", one for "the machine got this right")

## Step-by-step

### Phase 1 — Ask the impossible (10 min)

1. Using the working p5.js bridge, groups edit the prompt sent to Claude to ask something the sensor reading cannot answer: *"Why did the brightness just drop?"* when nothing in the room actually changed, or *"How many people are in the room?"* from a microphone level alone.
2. The model answers anyway; fluently, specifically, and with no signal that it is guessing. Groups capture the exact wording rendered on the canvas.
3. Post the best ones to the wall of lies.

### Phase 2 — Mislead the frame (10 min)

4. Groups now edit the *system prompt* itself (the string sent alongside the sensor value to the Claude proxy) to plant a false premise: "You are monitoring a patient's vital signs" attached to an ordinary brightness reading, or "This device detects when someone is lying" attached to the microphone level.
5. Run the same sensor reading through the new frame. The narration on the canvas changes to fit the false premise completely — the model does not push back on the premise, it builds inside it.
6. This is the sharper failure: Phase 1 shows the model guessing when asked directly; Phase 2 shows it will construct an entire confident narrative around a frame nobody checked. Because the whole pipeline is a few lines of JavaScript, this edit takes seconds, which is itself worth noting: the barrier to reframing a model's authority is one string.

### Phase 3 — Sort the wall (5 min)

7. As a room, walk the wall of lies. For each entry, a sticky note: did the model invent this from nothing, or did it take a misleading frame and run with it? Two different failure shapes, worth telling apart.

### Phase 4 — Name what happened (5 min)

8. Quick debrief, tied explicitly back to the morning's language:
   - Nothing broke. The mechanism that wrote a beautiful haiku from dragged word-magnets is the same mechanism that just invented a patient's heart rate from a brightness value.
   - Confidence is a **register**, tuned by fine-tuning to sound helpful. It carries no information about whether the content is true.
   - This is Discernment's whole justification: if fluency and truth are independent, judging output is not optional, it is the job.

## Facilitation notes

- **Do not let groups feel embarrassed by their fabrications.** The instruction was to break it; a good fabrication is a successful execution of the task, not a mistake.
- **Push groups toward specificity in Phase 1.** A vague impossible question gets a vague answer, which is less instructive. "Why did the brightness just drop?" beats "what's happening?"
- **Phase 2 is more important than Phase 1 if time is short.** The false-premise failure is closer to how this goes wrong in real classroom tools, where nobody deliberately lies to the model, they just inherit an unexamined system prompt from a template. In a browser-based setup this is especially easy to demonstrate live: project one group's screen and edit the system prompt string in front of the room.
- **Watch for the model refusing or hedging.** Some prompts will produce a hedge ("I can't be certain, but...") rather than a clean fabrication. That is worth surfacing too: hedging is not the same as accuracy, and students may read a hedge as extra trustworthy when it is often just as unverified as the confident version.
- **No hardware failure points to manage.** Because this runs entirely in the browser, facilitation time goes to the content of the fabrications rather than troubleshooting a serial connection — worth using the reclaimed minutes to run a second round of Phase 2 with a bolder false premise.

## The transposition lens

What does this activity simplify? It isolates hallucination as something you can trigger reliably in 30 minutes, which is true, but real classroom failures are usually quieter: a plausible-sounding wrong date, a fabricated citation, a slightly-off explanation nobody double-checks because it read fine. The dramatic version here is a teaching device, not a claim that failures always look this obvious. Say this out loud in the debrief.

## Classroom transfer

- Works as a standalone 20-minute activity with any chat interface, no p5.js or sensors required: ask it about something it cannot know, then feed it a false premise and watch it comply
- The p5.js version transfers directly to a computer-science or media-studies classroom: students already familiar with `p5.js` from other units can build their own sensor-to-LLM toy and break it themselves
- Pairs naturally with a "fact-check the machine" follow-up: students verify one AI claim against a real source
- Connects directly to the AI Fluency Framework's Discernment competency, introduced at the workshop kickoff: this is that competency, made concrete and uncomfortable
- Related material: AI Unplugged (https://sites.northwestern.edu/aiunplugged/), Elements of AI (https://elementsofai.org)

## Known failure modes

- **The model happens to answer honestly** ("I don't have enough information to know that"). Increasingly common as models improve. If this happens, treat it as data too: ask the group what made this question resistant to fabrication, and try a harder or more specific impossible question.
- **Groups race to the most absurd fabrication** and skip the analysis. Time-box Phase 1 firmly and require the wall-of-lies posting before moving to Phase 2, so the collecting doesn't crowd out the sorting.
- **The false-premise trick stops working because the model pushes back on the frame.** This is worth celebrating openly: better models increasingly flag suspicious premises. Ask the group what wording still got past it, and what that tells them about where the guardrails currently sit.
- **The Claude proxy rate-limits or lags under 30 people hitting it at once.** Since every group is now a browser tab making live API calls rather than a physical device with its own pacing, stagger Phase 1 and Phase 2 starts by table, or cache a few pre-generated fabrications as backup material for the wall if the live connection stalls.
