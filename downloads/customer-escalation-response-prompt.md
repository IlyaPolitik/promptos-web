# A customer escalation response prompt with a human gate

Use this prompt when a customer needs a timely, accountable update but the investigation is incomplete. It creates an internal fact check and a draft response without inventing a fix, deadline, or policy exception.

## Create a verified case packet before drafting

An escalation reply can damage trust if it sounds decisive while the incident is still under investigation. Start with the customer's reported impact, what your team has reproduced, what is merely suspected, the owner of the next step, and the next update time. If a value is missing, leave it missing.

Include approved policy language and any commitments already made to this customer. Avoid feeding raw tickets, credentials, health information, or other sensitive material into a model without an approved processing path. The prompt works best with a short sanitized case packet whose facts have been checked by the case owner.

- Customer-visible impact and time window, with the source of each claim.
- Confirmed actions, open investigation, case owner, and a realistic next update time.
- Approved remedy or policy text, if one exists; otherwise mark remedy undecided.

## Separate the internal check from the customer draft

The first output is an internal claim ledger. It gives a reviewer a place to reject assumptions before a customer sees them. The second output is a plain-language reply: acknowledge the impact, state only confirmed work, give the next update, and identify what the customer should do now, if anything.

A precise update promise is different from a resolution promise. When timing is uncertain, commit to the next communication at an approved time rather than implying the issue will be fixed by then. Never promise credits, refunds, root cause, data safety, or a workaround unless the case packet authorizes that exact statement.

## Approve, send, then learn from the case

The human case owner should verify facts, tone, policy, and recipient before sending. For severe, regulated, security, or data-loss matters, follow the organization's incident or legal escalation path; this template cannot decide that path. Keep sending outside the prompt workflow.

After closure, review which instructions reduced factual corrections and where the draft caused confusion. Save a new prompt version and a clear reviewer rule for future cases. A useful workflow makes the next response easier to inspect, not merely faster to produce.

## Copy-ready prompt

You are assisting a human support case owner with an escalation response. Use only [VERIFIED_CASE_PACKET] and [APPROVED_POLICY_TEXT]. The customer-reported impact is [REPORTED_IMPACT]; the confirmed impact is [CONFIRMED_IMPACT_OR_UNKNOWN]. The next update time, including time zone, is [APPROVED_UPDATE_TIME_OR_UNKNOWN]. The case owner is [OWNER_ROLE]. Do not infer an incident severity, root cause, remedy, or resolution date.

First produce an INTERNAL REVIEW section with two lists: confirmed statements and statements that remain unknown or disputed. Attach the case-packet source to each confirmed statement. Highlight any conflict between the customer's report and internal observations without dismissing either. List any proposed sentence that would require a policy, engineering, legal, security, or incident-owner decision. If a required approval or update time is missing, stop and say what must be supplied before sending.

Then draft a customer reply of no more than 180 words. Use calm, direct language. Acknowledge the reported experience without assigning blame. State what has actually been confirmed, what the team is doing next, and when the customer will hear from the case owner again. Ask for additional information only if the packet says it is needed and explain why. Do not expose internal speculation, private notes, or another customer's data.

Finish with a SEND CHECK: recipient and channel to verify, claims to recheck, approved policy wording to match, and the person who must sign off. This is a draft for human review. Do not send, queue, or mark it approved. If the packet is insufficient, provide a short holding-response draft only when an update time and owner are approved.

## Fictional illustration

**Input:** Fictional illustration: Aster Desk reports that two agents cannot export a weekly report. Support reproduced one failed export in a test workspace; root cause is unknown. Case owner approved an update by 16:00 UTC. No credit or workaround has been approved.

**Output:** Fictional illustration: Internal review — confirmed: one export failed in a test workspace; unknown: cause and whether all customer exports are affected. Draft — 'Thanks for telling us about the export failures. We reproduced a failure in our test workspace and are investigating it. We cannot yet confirm the cause or a fix. Your case owner will update you by 16:00 UTC, even if the investigation is still open.' Send check — confirm recipient and case-owner approval.

## Human review checklist

- The customer's report and the team's confirmed observations are distinct.
- No fix date, root cause, credit, or workaround appears without approval.
- The next update has an owner, date, time, and time zone.
- A human checks recipient, facts, policy, and tone before sending.
- The saved prompt version reflects lessons from resolved cases.

Source: https://promptos.app/guides/customer-escalation-response-prompt/
