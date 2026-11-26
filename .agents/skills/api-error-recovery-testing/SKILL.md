---
name: api-error-recovery-testing
description: "Use for testing retries, partial failures, and recovery after failed requests."
---

# API Error Recovery Testing

## Purpose

Verify how the application recovers after an API operation fails.

## Triggers

Timeouts, partial failures, or retries leave UI state wrong or repeat side effects.

## Inputs

Expected failure and recovery policy, affected operation, retry conditions, and starting data.

## Outputs

Evidence for the error state, retained data, recovery action, request sequence, and final side effects.

## Workflow

1. Establish the expected behavior on timeout, failed request, or partial failure. Use API error simulation to produce the specific failure deterministically.

2. Assert the visible error, preserved input or completed changes, and allowed retry. Recover through the real UI action or documented automatic retry and observe the following requests.

3. Verify the final result and any idempotency or duplicate-side-effect requirement. Keep the final state and the failure evidence as separate assertions.

## Example

The chest claim commits but the response drops. Retry the claim and check that the UI recovers and the reward history contains one grant.

[Regression skills](../../../docs/regression-skills.md)
