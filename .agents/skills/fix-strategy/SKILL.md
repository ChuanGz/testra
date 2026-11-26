---
name: fix-strategy
description: Propose the smallest correct frontend fix from verified evidence, identify shared impact, and plan targeted regression checks before application code changes.
---

# Fix Strategy

## Purpose

Translate a diagnosis into an explicit, low-risk repair and verification plan.

## Triggers

A likely or verified cause needs a fix proposal, an authorized patch, or a plan to verify a proposed change.

## Inputs

Expected behavior, diagnosis and confidence, source location, shared consumers, and available regression tests.

## Outputs

Fix proposal with rationale, named source and impact, verification scope, results, and a reusable lesson.

## Workflow

1. Check that the evidence supports changing the identified source. If the cause is uncertain, propose the discriminating check first and keep the suspected fix conditional.

2. Present the fix proposal before editing application code. State the exact behavior to restore, smallest source change, affected callers, and checks that would prove correctness. Prefer the existing component or API contract and a local change unless the root cause is shared.

3. After presenting the proposal, edit only when implementation is already within the requested scope. Preserve expected behavior, normal interactions, explicit assertions, and observable readiness conditions. Error suppression, weaker assertions, forced actions, and arbitrary waits invalidate the result.

4. Run the targeted scenario and relevant shared-consumer checks. Record the failing baseline when available, the post-fix results, and any verification limits. Retain the reusable scenario, supporting evidence, and verified lesson in the project's existing artifacts.

## Example

If a panel uses a stale initial prop while the shared detail query is already fresh, propose binding the panel to current query data. Verify the originally failing reload and a second consumer of the shared panel before expanding the fix.

[Frontend skills](../../../docs/frontend-diagnostics.md)
