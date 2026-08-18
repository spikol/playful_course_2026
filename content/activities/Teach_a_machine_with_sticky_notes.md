# Teach a Machine with Sticky Notes
### Teaching guide · Day 1 afternoon · 45 minutes
*Playful Programming and Artificial Intelligence · University of Copenhagen*

---

## What this activity is

An unplugged classification exercise. Participants build a decision tree by hand, using data cards, sticky notes, and voting, then watch their classifier fail on new data. No computers, no code. The activity strips the technical scaffolding away from machine learning to expose the underlying idea: a classifier is a set of questions learned from examples, and it is only as good as the examples it saw.

## Learning goals

By the end, participants can:
- Explain classification as asking a sequence of questions that split data
- Describe training and testing as separate phases with separate data
- Recognise overfitting from direct experience: a classifier that memorises its training pile and stumbles on new cases
- Identify how feature choice (which questions you are allowed to ask) shapes what a classifier can and cannot see

## Materials

Per table of 4–6 participants:
- One **training set**: 20 data cards (see "Choosing a dataset" below)
- One **test set**: 10 data cards, kept in a sealed envelope until Phase 3
- Sticky notes in two colours (questions and labels)
- A large sheet of paper or whiteboard space for the tree
- Markers

## Choosing a dataset

Any set of items that can be classified into two or three categories works. Good options:

- **Animal cards** (classify: mammal / not mammal, or pet / wild). Easy entry, familiar features.
- **Mushroom cards** (edible / poisonous, invented data). High stakes make the testing phase dramatic.
- **Short text snippets** (spam / not spam, or formal / informal). Closest to real NLP classification and best for language-subject teachers.
- **Weather data rows** (play outside / stay in). Closest to sensor data and connects forward to the IoT activities.

Prepare the test set deliberately: include at least two ambiguous cases, one case that contradicts a pattern in the training set, and one case with a missing feature. The failures these produce are the point of the activity.

## Step-by-step

### Phase 1 — Train (15 min)

1. Each table spreads out its 20 training cards, labels visible.
2. The task: build a tree of yes/no questions that correctly sorts every training card into its category. Questions go on sticky notes; each question splits the pile into two smaller piles.
3. The rule: questions may only refer to visible features on the cards. The group votes when they disagree about which question to add next.
4. Groups keep going until every training card is correctly classified. Most trees end up deeper and messier than groups expect. Let that happen; do not intervene.

### Phase 2 — Predict (5 min)

5. Tables swap trees (not cards). Each table now holds another group's tree.
6. Quick check: can you follow this tree without its authors explaining it? Trees that need interpretation get a sticky note flagging where.

### Phase 3 — Test (15 min)

7. Open the sealed envelope. Run all 10 test cards through the tree you received, strictly following its questions. No improvising, no "well, obviously they meant...".
8. Record the score: how many test cards were classified correctly?
9. The reliable result: trees that achieved 100% on training data score noticeably worse on the test set. Some cards get stuck (missing feature), some get confidently misclassified (the contradicting case).

### Phase 4 — Name what happened (10 min)

10. Whole-room debrief. Collect the failure stories, then attach the vocabulary to them:
    - "Our tree had a question that only mattered for one weird training card" → **overfitting**
    - "The test card did not have the feature our question asked about" → **missing data / feature mismatch**
    - "The tree was 100% confident and 100% wrong" → foreshadows Day 2's *lying, confident machine*
    - "We could have built a completely different tree from the same cards" → model choice is a human decision

## Facilitation notes

- **Do not pre-teach the vocabulary.** The words land far better when attached to something the group just experienced. The activity generates the phenomena; the debrief names them.
- **Resist rescuing trees during testing.** The temptation to bend the rules ("they obviously meant fur, not hair") is itself teachable: real classifiers cannot bend rules either.
- **If a group finishes training early**, hand them three extra training cards that contradict their tree and watch the repair work. This previews retraining.
- **Time pressure is your friend in Phase 1.** A slightly rushed tree fails more interestingly than a careful one.

## The transposition lens

After the debrief, step back with the group: what did this activity simplify away? (Numbers, probability, thousands of features, gradient descent, everything continuous.) Was the simplification honest? What could a student wrongly conclude from it? (For example: that classifiers ask human-readable questions, which deep networks do not.) This ten-second honesty check is the habit the workshop is trying to build.

## Classroom transfer

- Works from age ~12 upward; scales to gymnasium level by using richer datasets (real weather data, text snippets in the subject language)
- Plugged follow-up: rebuild the same classification task in Machine Learning for Kids (https://machinelearningforkids.co.uk/) or Teachable Machine (https://teachablemachine.withgoogle.com/) and compare the hand-built tree with the trained model
- Related unplugged material: CS Unplugged classic activities (https://classic.csunplugged.org/activities/) and AI Unplugged (https://sites.northwestern.edu/aiunplugged/)

## Known failure modes

- **A group builds a perfect, shallow tree** because the training set was too clean. Fix: the prepared ambiguous and contradictory cards in the test set still produce failures; if not, ask them which question they would remove and what breaks.
- **Arguments about card interpretation stall Phase 1.** Good sign, badly timed. Park the argument on a sticky note labelled "ambiguity" and return to it in the debrief: real datasets contain exactly these fights, resolved by underpaid annotators.
- **The debrief becomes a lecture.** Keep it to naming things the room already saw. If nobody experienced overfitting, do not explain it; ask instead why every tree got worse on new data.
