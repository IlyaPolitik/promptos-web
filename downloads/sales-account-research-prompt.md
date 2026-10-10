# A sales account research prompt you can actually review

Use this prompt to prepare a short discovery brief from information your team is allowed to use. It separates verified observations from hypotheses, gives the seller questions to ask, and keeps every claim traceable to an input.

## Start with a specific meeting, not a company profile

An account brief earns its place when it changes what the seller asks. Name the meeting goal, buyer role, and the decision due after the call. A generic company summary often sounds informed while leaving the seller without a useful question.

Use only approved CRM notes, the prospect's public material, and dated documents you can cite. Record the source title or URL and observation date beside each fact. If a page is inaccessible or older than the buying cycle, mark the point unverified. Do not paste private customer data into an AI tool unless your team's policy permits that use.

- Meeting context: account, buyer role, stage, objective, and known stakeholder questions.
- Evidence packet: source title, date, excerpt or approved note, and link where available.
- Constraints: excluded sources, sensitive data, and claims the seller must not make.

## Ask for a brief that exposes uncertainty

The prompt below asks for a compact table of observations, possible implications, confidence, and citations. That structure makes review faster: a manager can spot a thin inference without rereading the entire research packet. Missing revenue, headcount, technology, or purchasing intent should stay unknown.

Treat the suggested discovery questions as hypotheses. A public hiring post may indicate a team priority, but it does not prove budget or pain. The opening line should be a question the buyer can correct, never a claim that the seller knows the buyer's internal problem.

## Turn the draft into a repeatable review

After the call, compare the brief with what the buyer confirmed. Keep the useful question, remove unsupported assumptions, and save a new version of the prompt with its input rules. For a team workflow, define who reviews factual claims and what evidence is required before a brief is marked approved.

A reviewed brief can support a human sales conversation; it should not trigger an automated email or CRM update. Track whether the same prompt produces fewer corrections across several accounts, and retire instructions that repeatedly yield speculation.

## Copy-ready prompt

You are preparing an internal discovery brief for a human seller. Use only the material in [APPROVED_SOURCE_PACKET]. The meeting is with [ACCOUNT] and [BUYER_ROLE] on [MEETING_DATE]; the seller's goal is [MEETING_OBJECTIVE]. The offer context is [OUR_RELEVANT_CAPABILITY], but do not assume fit or write a pitch.

First, list up to five observations that matter to this meeting. For each, quote or closely paraphrase the supplied evidence, name its source and date, and explain why it might matter. Distinguish a direct fact from an inference. If two sources disagree, show the conflict. If the packet lacks a current source, say so. Do not use general model knowledge to fill gaps.

Next, write three possible discovery questions in priority order. Each question should test one uncertainty, sound natural when spoken, and avoid implying that the buyer has already confirmed a problem. Add one sentence describing what an answer would change in the seller's next step.

Then produce a 100-word maximum opening brief: meeting goal, strongest sourced signal, largest unknown, and one respectful opening question. Include a short 'Do not claim' list for unsupported revenue, budget, headcount, buying intent, competitive use, or timelines.

Finally, provide a source checklist for the human reviewer. Flag any sensitive or stale material and any statement that needs confirmation. If evidence is too thin for a useful brief, return 'Insufficient evidence' and list the two most useful missing inputs. Do not contact the account, update a CRM, or label this output approved.

## Fictional illustration

**Input:** Fictional illustration: Northstar Tools, an operations software prospect. Approved packet: a dated public careers page mentions two customer onboarding roles; an internal call note says the buyer asked about handoff consistency, with permission to use the note internally. Meeting objective: learn how handoffs are reviewed.

**Output:** Fictional illustration: Observation — Northstar Tools advertised two onboarding roles (careers page, 2026-09-18). Possible implication — onboarding capacity may be changing; this does not establish a budget or process problem. Unknown — how handoffs are checked today. Opening question — 'You mentioned handoff consistency last time. Where do reviews currently slow down, if at all?' Do not claim hiring proves a purchase plan.

## Human review checklist

- Every account fact points to an allowed, dated source.
- Inferences and unknowns are visibly separate from observations.
- Discovery questions test assumptions without inventing a pain or budget.
- A human reviews the brief before using it in a customer conversation.
- The prompt version and reviewer decision are retained for the next account.

Source: https://promptos.app/guides/sales-account-research-prompt/
