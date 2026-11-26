---
name: http-record-replay
description: Record, sanitize, and replay HTTP traffic with Playwright HAR files to verify frontend flows independently of the recorded backend. Use for stable API interactions that should become reusable regression fixtures.
---

# HTTP Record Replay

## Purpose

Capture the API interactions from a verified flow once and reuse them to run a deterministic frontend regression without the live backend for those dependencies. This reduces environment setup and keeps the expected API responses available as test assets.

## Triggers

A repeatable frontend flow depends on known API responses.

## Inputs

Verified baseline, test account and data, relevant URLs, and expected UI result.

## Outputs

Sanitized HAR, replay result, and evidence that the recorded endpoints were served without a live API.

## Workflow

1. Identify the API dependencies of the scenario, including the requests the app makes during reload. Confirm the expected UI behavior with a known baseline and synthetic test data.
2. Record the verified flow with Playwright `recordHar` or `routeFromHAR()` in update mode. Restrict capture to the relevant URLs and close the context to flush the recording.
3. Sanitize sensitive information and normalize unstable values that the scenario does not depend on. Preserve replay keys and relationships, including URL, method, and matching POST bodies. Inspect embedded and attached payloads. Use [sensitive-data-sanitization](../sensitive-data-sanitization/SKILL.md) before the artifact leaves scratch storage.
4. Store the sanitized HAR and the matching fixtures with the scenario. Record the source environment or build, operation, and expected result so another person can review a future change.
5. Replay before triggering the requests. Use `routeFromHAR()` with `update: false`, a URL scope, and `notFound: 'abort'` for dependencies expected to come from the HAR. Show that the replayed endpoints receive no live upstream traffic. Use `route()` and `fulfill()` for small, deliberate overrides.
6. Assert expected UI behavior. For a reward edit, verify that both the grid and detail panel show the updated title after reload. Use [fixture-drift-detection](../fixture-drift-detection/SKILL.md) for unmatched requests or outdated data.
7. Refresh recordings only after the behavior or contract change has been verified. Compare the sanitized diff and rerun with updates disabled.

## When to use stateful mocking

Start with native Playwright capture and replay. Use [stateful-api-mocking](../stateful-api-mocking/SKILL.md) when the response must follow prior writes or branch on runtime inputs that fixed recordings cannot reliably distinguish. For example, identical tree reads before and after a delete need different results based on which node was deleted.

## Example

Record the reward list for a festival that has ended. Run the same frontend check with the captured endpoint replayed while the live endpoint is unavailable.

[Playwright HAR mocking](https://playwright.dev/docs/mock#mocking-with-har-files) · [BrowserContext.routeFromHAR](https://playwright.dev/docs/api/class-browsercontext#browser-context-route-from-har)
