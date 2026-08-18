# LLMs in Plain Language: The Storytelling Game
### Teaching guide · Day 2 morning · 40 minutes
*Playful Programming and Artificial Intelligence · University of Copenhagen*

---

## What this activity is

A whole-group word game that carries the core mechanics of a large language model: next-token prediction, probability distributions, sampling temperature, and why hallucination is the mechanism working as designed rather than a malfunction. Participants become the model. No screens until the final five minutes.

## Learning goals

By the end, participants can:
- Describe an LLM as a system that repeatedly predicts a plausible next word, nothing more and nothing less
- Explain why the same prompt can produce different outputs (sampling)
- Explain temperature as a dial between predictable and surprising
- Explain hallucination as fluent prediction without any check against reality
- Anticipate the misconception their students will bring: that the model "knows" or "looks things up"

## Materials

- A visible writing surface (whiteboard or large paper) for the growing sentence
- One six-sided die
- Voting cards or just hands
- Optional for the final round: one laptop with a chat interface on the projector

## Step-by-step

### Round 1 — Free story (5 min)

1. Write an opening fragment on the board, for example: *"The last teacher on Earth opened the classroom door and..."*
2. Go around the room. Each person adds exactly one word, any word they like.
3. The result is usually surreal and funny. Leave it on the board.

### Round 2 — The probable story (10 min)

4. New opening fragment. New rule: each person must propose the **most likely** next word, and the room votes between the top two proposals. Majority wins; the word is added.
5. The story becomes grammatical, coherent, and noticeably boring. Someone will say so out loud. That observation is the payload: *most-likely-next-word produces fluent, safe, average text.*
6. Point at both stories on the board. Round 1 was high temperature; Round 2 was temperature zero. You have not defined temperature yet; the room already understands it.

### Round 3 — The temperature dial (10 min)

7. New fragment. Same voting rule, with one change: before each word, roll the die. On 1–4, take the majority word. On 5, take the second-place word. On 6, the person whose turn it is may pick any word at all.
8. The story stays mostly coherent but takes occasional surprising turns, and sometimes recovers gracefully, and sometimes derails completely.
9. Name it now: the die is the **temperature** setting. Chat interfaces run somewhere around a die roll of 4–5. There is no "correct" setting, only trade-offs between reliability and surprise.

### Round 4 — The confident lie (10 min)

10. Final fragment, and this one contains a factual hook: *"The capital of Greenland is famous for its..."*
11. Same probable-word rules. The room will produce something fluent about Nuuk that is partly or wholly invented, because the game rewards plausibility, not truth. Nobody in the game ever checked a fact; there was nowhere to check.
12. Name it: **hallucination**. The mechanism did not break in Round 4. It did exactly what it did in Rounds 2 and 3. Fluency and truth are simply different properties.

### Optional Round 5 — Meet the real one (5 min)

13. On the projector, give a chat model one of the same opening fragments three times and compare outputs. Then ask it something obscure enough to produce a hallucination. The room now reads the output differently than they would have 40 minutes ago.

## Facilitation notes

- **Keep the pace brisk.** One word per person, no speeches. The game dies if word selection becomes a seminar.
- **Do not correct "wrong" votes.** If the room picks an odd word in Round 2, the story bends and recovers, which is itself how models behave.
- **The boredom of Round 2 is a feature.** Do not apologise for it or cut it short; the contrast with Round 1 does the teaching.
- **Vocabulary discipline:** introduce each term (temperature, sampling, hallucination) only *after* the room has experienced the phenomenon, and attach it explicitly to the moment they experienced.
- **Watch for the anthropomorphism reflex** ("the model wants...", "it's trying to..."). Gently reformulate in prediction language each time. This models the linguistic care teachers will need with students.

## What this activity deliberately simplifies

Be honest with the group afterwards, in keeping with the workshop's transposition lens:
- Real models predict **tokens** (word fragments), not whole words
- Real models weigh thousands of probability-ranked candidates, not two proposals
- The "voting" in a real model is a learned function of the entire preceding text, not a democratic show of hands
- Context windows, embeddings, and attention are entirely absent here

None of these simplifications damage the core insight, but a student could wrongly conclude that models choose between two options or that prediction is democratic. Worth a sentence in class.

## Classroom transfer

- Works from age ~13 upward with no changes; the fragments can be tuned to any subject (a history fragment, a chemistry fragment)
- Language teachers can run Round 2 in the target language, which doubles as grammar practice
- Plugged follow-up: the same experiment in a real interface with temperature visible, e.g. via an API playground
- Related material: AI Unplugged (https://sites.northwestern.edu/aiunplugged/) and the CS Unplugged tradition (https://www.csunplugged.org/en/)

## Known failure modes

- **A participant already knows the theory and narrates ahead.** Recruit them as scribe or die-roller; their job becomes keeping the mechanism honest, not explaining it.
- **Round 4 produces something true by accident.** Run one more fragment with a more obscure hook ("The 1954 Copenhagen tram strike began because..."). Obscurity guarantees invention.
- **The group is too large for one-word-per-person.** Split into two parallel stories and compare outputs at the end, which conveniently demonstrates sampling variance.
