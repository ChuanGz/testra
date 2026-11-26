---
name: api-error-simulation
description: Simulate API failure responses and timeouts to verify user-facing error handling and recovery. Use for known error paths in an application test environment.
---

# API Error Simulation

## Purpose

Make one known HTTP or network failure happen at a defined step.

## Triggers

A UI test needs a specific server error, transport failure, or client timeout.

## Inputs

Target request, failure mode, and the agreed behavior at that boundary.

## Outputs

Repeatable failure setup and evidence that the intended request encountered it.

## Workflow

1. Pick one failure mode from the requirement and route only the relevant request. Return the documented status and response shape with `route.fulfill()` for HTTP 400, 403, or 500. Use `route.abort()` when the outcome to simulate is a transport failure.

2. For an actual client deadline, hold the response in a controlled way and let the application's timeout reach its boundary. Advance the browser clock when the deadline is browser-timer based. Release or cancel the pending response in cleanup. Keep HTTP error, transport failure, and client timeout scenarios distinct.

3. Verify that the intended failure occurred. Use [API error recovery testing](../api-error-recovery-testing/SKILL.md) to check retries and final state, and integration tests to verify real backend errors.

## Example

Return the documented 403 for a restricted reward update. In a separate case, abort the request to exercise a transport failure.

[Playwright Route API](https://playwright.dev/docs/api/class-route) · [Playwright Clock](https://playwright.dev/docs/clock)
