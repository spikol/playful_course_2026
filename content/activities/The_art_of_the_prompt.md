# The Art of the Prompt
### Teaching guide · Day 2 morning · 50 minutes
*Playful Programming and Artificial Intelligence · University of Copenhagen*

---

## What this activity is

A creative prompting challenge. Everyone receives the same task and the same starting sentence; the results diverge wildly, and the group reverse-engineers what made the strong prompts work. The activity treats prompting not as a bag of tricks but as a craft that teachers largely already possess: it is the craft of writing a good exam question, a clear lab instruction, or a well-scaffolded assignment, pointed at a new kind of reader.

Runs immediately after the storytelling game, and depends on it: participants now know the machine is predicting plausible continuations, which is exactly why the framing of the prompt matters so much.

**[Printable facilitation card (PDF)](prompt_art.pdf)**

## Learning goals

By the end, participants can:
- Identify the working parts of an effective prompt: role, audience, constraints, examples, format, and iteration
- Explain *why* these parts work, in prediction terms (they shift what continuations are plausible)
- Improve a weak prompt systematically rather than by trial and error
- Connect prompting to assessment craft they already have, and spot where the analogy breaks

## Materials

- One shared chat interface per pair (shared workshop access; no personal accounts needed)
- The challenge card (identical for all pairs)
- Wall space and printouts or sticky notes for posting results
- A visible timer

## The challenge

All pairs get the same card:

> **Task:** Get the model to explain *photosynthesis* to this audience: **a bored 15-year-old who loves football and thinks biology is pointless.**
> **Rules:** You may prompt as many times as you like within 20 minutes. Submit your single best output, printed or copied to the wall, along with the prompt that produced it.
> **Judging:** The room votes in three categories: most likely to actually work on that student, most surprising, most absurd.

The specific topic can be swapped for the group's subject mix; what matters is the sharply drawn, difficult audience.

## Step-by-step

### Phase 1 — First naive attempt (5 min)

1. Before any discussion, every pair sends one quick prompt and keeps the output. Most will write some version of "explain photosynthesis simply". The outputs will be competent, generic, and nothing like something a bored 15-year-old would read.
2. These first outputs matter: they are the baseline everyone will be measured against, including by themselves.

### Phase 2 — The challenge proper (20 min)

3. Start the timer. Pairs iterate freely. No guidance yet; the discovery is the activity.
4. Circulate and listen. Note the moves pairs invent independently: giving the model a role, demanding a format, feeding it an example, telling it what *not* to do, asking it to ask questions first. You will name these moves in Phase 4 using the room's own examples.

### Phase 3 — Gallery and vote (10 min)

5. Best outputs go on the wall next to the prompts that produced them.
6. Silent gallery walk, then the three-category vote. The pairing of output *with* prompt is essential: the room should be reading prompts as much as outputs.

### Phase 4 — Reverse-engineering (15 min)

7. Take the two or three winning entries and dissect them publicly. What is doing the work in this prompt? Extract the moves onto the board as the room finds them. Typical harvest:
   - **Role** ("you are a football commentator") — shifts the whole probability landscape of the continuation
   - **Audience made concrete** ("he supports Brøndby, he checks his phone every 40 seconds") — specificity beats adjectives
   - **Constraints** ("under 100 words", "no scientific terms without a football comparison") — constraints are creative fuel, exactly as in any writing assignment
   - **Examples** ("here is a sentence in the tone I want") — one example outperforms three adjectives
   - **Iteration** ("that was too childish, keep the jokes but respect his intelligence") — prompting is a dialogue, not a spell
8. Close with the connection to the previous activity: every one of these moves works by changing which continuations are *plausible*. There is no magic; there is framing.

## Facilitation notes

- **Do not teach prompt patterns up front.** The generic first attempt in Phase 1 followed by independent discovery in Phase 2 is what makes the Phase 4 vocabulary stick. A pattern handout at the start would flatten the whole session.
- **Keep the audience difficult.** A prompt challenge with an easy audience ("explain photosynthesis to a curious student") produces nothing to learn from. The resistance is the teacher.
- **The absurd category is load-bearing.** It licenses play, and the absurd entries often demonstrate the strongest technique. Playfulness and craft are not opposites here; that is a theme of the whole workshop.
- **Watch for pairs who over-iterate** and have twelve mediocre outputs at minute 18. Two-minute warning: pick one, improve it once, submit.
- **The teacher analogy will surface on its own.** Someone will say "this is just writing a good assignment". Agree, then push: where does the analogy fail? (The model never gets tired, never takes offence, has no memory of yesterday, and will comply with a bad brief instead of asking about it. Students, thankfully, push back.)

## What this activity deliberately simplifies

- One-shot chat prompting only: no system prompts, no API parameters, no tool use. Day 2 afternoon ("Give your sensor a voice") introduces system prompts through the sensor bridge, so the progression is deliberate.
- The judging rewards a single polished output, whereas classroom use usually cares about reliability across many runs. Worth one sentence in the debrief: "would your winning prompt work tomorrow, on a different model, for a different student?"

## Classroom transfer

- The activity format transfers directly to students from age ~14: same structure, subject-relevant topic, audience cards drawn from a hat ("explain to a grandparent", "explain to a sceptical alien", "explain to someone who only speaks in questions")
- As assessment literacy in reverse: students who learn to write prompts with role, audience, and constraints are practising exactly the moves of good expository writing
- Follow-up for teachers: keep a shared "prompt patterns" document with the class, built only from moves the students discover themselves, mirroring Phase 4
- The workshop's technical guide shows the next step: the same craft applied to *system* prompts in the micro:bit sensor bridge, where "you are a nervous houseplant" reframes identical sensor data

## Known failure modes

- **Everyone converges on the same joke.** (Football metaphors for chloroplasts, invariably.) Fine: convergence itself is teachable. The model rewards the obvious framing because the obvious framing is the most probable one.
- **A pair strikes gold in Phase 1 by accident.** Celebrate it, then ask them to reproduce the quality on a new topic in Phase 2. Reproducibility is the difference between luck and craft.
- **Outputs are all mediocre and the vote falls flat.** Usually means the timebox was too generous and pairs settled early, or the audience card was too easy. Tighten both and run a 5-minute lightning second round; the improvement is its own lesson.
- **A participant objects that this teaches students to outsource writing.** Do not deflect; this is the serious question, and it belongs in the room. Park it visibly and carry it into the afternoon discussion on responsible classroom use, where "The lying, confident machine" gives it sharper teeth.
