# A QBR summary prompt that keeps evidence and promises clear

Use this prompt to turn approved account notes and metrics into a customer review draft. It makes measurement windows visible, separates observed outcomes from interpretation, and leaves commitments for human approval.

## Agree on the review window and decision

A quarterly business review should help both sides decide what to continue, change, or investigate. Define the reporting window, the customer's stated goal, the people attending, and the decision expected from the meeting. Gather only metrics whose definitions and sources are known.

For each figure, include its date range, denominator where relevant, and source. Keep customer-approved qualitative feedback separate from measured usage or outcomes. A rise in activity is not automatically an improvement in business results, and missing baseline data cannot support a percentage gain.

- Customer goal and prior commitments, with an owner for each.
- Metric name, definition, source, reporting period, and known data gaps.
- Open risks, unresolved requests, and proposed next decisions.

## Build a readable narrative without manufacturing success

The prompt starts with a factual scorecard, then asks for a short narrative about progress toward the customer's goal. Each claim should point to a supplied number or approved note. If results are mixed, show the tradeoff. If the data cannot answer the customer's original question, say what would make the next review more useful.

Keep next steps as proposals until the customer and internal owner agree. A draft QBR should never quietly turn a product idea into a delivery commitment or assert renewal likelihood from usage alone. The example below uses fictional numbers only to show how the output is structured.

## Make the review repeatable

Ask a human account owner to verify metric definitions and customer-sensitive wording before sharing the draft. Record what the customer corrected during the meeting. For the next quarter, version the prompt, keep the same metric definitions where they still fit, and make the approval rule explicit.

Compare successive drafts for missing citations, disputed outcomes, and unowned actions. That quality check gives a team a reason to reuse a governed workflow: the next review starts from a known standard while still leaving room for customer context.

## Copy-ready prompt

You are drafting a quarterly business review for a human account owner. Use only [APPROVED_ACCOUNT_PACKET] for [CUSTOMER] during [REPORTING_PERIOD]. The customer's stated goal is [CUSTOMER_GOAL]. The meeting decision is [DECISION_TO_MAKE]. Each supplied metric must include its definition, source, time window, and denominator where applicable. Do not fetch outside information or infer revenue, savings, renewal intent, or causal impact.

Begin with an INTERNAL EVIDENCE TABLE: metric or observation, value, period, source, limitation, and whether it is measured, customer-reported, or inferred. Identify conflicting figures, missing baselines, changing definitions, and incomplete periods. If a proposed comparison uses unequal windows or denominators, reject it and state the correction needed.

Next draft a customer-facing summary of no more than 220 words: the agreed goal, two or three supported observations, one unresolved risk, and the decision to discuss. Use numbers only as provided. For every outcome claim, point to its evidence. Where the packet supports activity but not business impact, describe activity plainly. Do not call an unapproved proposal a commitment.

Then give three discussion questions that invite the customer to correct the interpretation. Suggest at most three next actions, each with a proposed owner, evidence needed, and decision date; label them 'Proposed' until agreed. State what should be measured before the next review.

Finish with a REVIEW CHECK for the account owner: verify metric definitions, reporting period, customer permission, commitments, and any sensitive details before presentation. This is a draft; do not send slides, update the account, or mark the review approved. If the packet is too thin, produce a missing-data outline instead of a success story.

## Fictional illustration

**Input:** Fictional illustration: Cedarline Software wants faster onboarding. Approved packet: 18 of 24 invited users completed setup in April–June; the prior quarter has no comparable setup definition. An account note says the customer still sees delays for larger teams. Meeting decision: choose one onboarding improvement to test.

**Output:** Fictional illustration: Scorecard — 18/24 invited users completed setup in April–June (approved usage export). A quarter-over-quarter improvement is unknown because the earlier definition differs. Summary — 'Most invited users completed setup this quarter, while the customer reports delays for larger teams. We should decide which onboarding step to test next.' Proposed action — account owner and customer select a test step by the agreed meeting date.

## Human review checklist

- Every number has a definition, source, window, and denominator where needed.
- The draft separates usage, customer feedback, and inferred business impact.
- Comparisons use equivalent periods and definitions or are marked unavailable.
- Actions remain proposed until owners and customer agree.
- A human reviews the draft and saves corrections in the next prompt version.

Source: https://promptos.app/guides/qbr-summary-prompt/
