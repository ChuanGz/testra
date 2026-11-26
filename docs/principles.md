# Design Principles

## 1. Clarify before acting

Confirm the goal, what must stay true, and how to check it. When a missing detail changes the outcome or scope, ask one short question. During browser work, read the heading, labels, and record identity before choosing an action.

## 2. Explain what the check proves

Name the requirement, why a failure matters, and what observable result would prove it. Keep browser evidence, assumptions, and confirmed causes separate. Propose the smallest repair before editing application code. Verify the original failure and any shared behavior the change affects.

## 3. Pick the simplest test that can see the result

Use API or integration tests for persistence and data rules. Use a component test for behavior confined to one component. Use Playwright for behavior that depends on the browser or spans views. Reuse fixtures and actions, and keep the important assertions visible. Error suppression, forced clicks, weaker assertions, and fixed sleeps undermine the result.

See [sample scenarios](samples.md) for examples and [frontend diagnostics](frontend-diagnostics.md) for investigating a failure.
