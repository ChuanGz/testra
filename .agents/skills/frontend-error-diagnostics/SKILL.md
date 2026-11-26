---
name: frontend-error-diagnostics
description: Capture and correlate frontend runtime errors, failed requests, console messages, and UI error states with the triggering browser action.
---

# Frontend Error Diagnostics

## Purpose

Build a reliable failure timeline and identify the earliest relevant error.

## Triggers

A blank screen, unhandled exception, error banner, failed request, or unexplained interruption blocks a frontend flow.

## Inputs

Reproduction, browser and build, expected outcome, and available console, trace, and network evidence.

## Outputs

Timestamped symptom and first failure, request or stack evidence, likely ownership boundary, and a focused next check.

## Workflow

1. Register Playwright listeners before navigation or the trigger. Collect `pageerror`, relevant console messages, `requestfailed`, and HTTP error responses. Keep transport failures distinct from HTTP responses with 4xx or 5xx status.

2. Correlate the action and visible state with the first relevant failure in the trace. Separate the original failure from retries, duplicate reports, and follow-on warnings.

3. Map a JavaScript stack to source with [component tracing](../component-tracing/SKILL.md). For an API issue, capture the actual operation and response shape with [network interception](../../../.agents/skills/network-interception/SKILL.md). Summarize the evidence with sensitive values removed.

4. Pass confirmed facts and unresolved alternatives to [root-cause analysis](../root-cause-analysis/SKILL.md) when the error boundary or causal mechanism is unclear.

## Example

Saving a reward displays an error banner. The trace shows a 403 response followed by a generic console warning. Report the 403 and the exact save request as facts, then inspect the handling and permission contract before assigning a cause.

[Playwright Page events](https://playwright.dev/docs/api/class-page#events) · [Playwright network events](https://playwright.dev/docs/network#network-events)

[Frontend skills](../../../docs/frontend-diagnostics.md)
