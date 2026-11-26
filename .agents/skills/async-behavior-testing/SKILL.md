---
name: async-behavior-testing
description: "Use for request races, order, cancellation, and loading states."
---

# Async Behavior Testing

## Purpose

Verify loading, cancellation, ordering, and concurrent frontend requests.

## Triggers

Stale results win races, loading state hangs, or an action has overlapping requests.

## Inputs

Concurrent events, expected precedence or cancellation, controllable requests, and a stable completion marker.

## Outputs

Ordered request and result evidence, loading or cancellation behavior, and a deterministic reproducer.

## Workflow

1. Define the order that exposes the bug and which result should win. Control the release of specific Playwright routes or use the app's test hooks. Register interception before the triggering actions.

2. Assert loading, cancellation, or ignored stale results according to the requirement. Release each response in the intended order and assert the resulting view.

3. Always settle pending routes in fixture cleanup. Inspect the request or state owner when the app handles the sequence incorrectly.

## Example

Let Goblin Accountant finish before Goblin Guard. Release the old result and verify the accountant is still listed after both responses are handled.

[Regression skills](../../../docs/regression-skills.md)
