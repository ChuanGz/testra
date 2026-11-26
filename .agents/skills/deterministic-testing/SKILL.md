---
name: deterministic-testing
description: Make regression tests reproducible by controlling time, random values, and dynamic data at the layer that produces them. Use for flaky or time-sensitive scenarios with variable inputs.
---

# Deterministic Testing

## Purpose

Control the input that causes a result to vary.

## Triggers

Time, random data, generated values, or a browser setting affects the expected result.

## Inputs

Test scenario, source of the variable input, and expected result.

## Outputs

Explicit inputs, controlled conditions, and repeatable results.

## Workflow

1. Identify the source of variance before changing the test. Fix browser-visible dates with `page.clock.setFixedTime()`. For browser timers, install the clock before the app starts and advance it to the meaningful boundary. For server time or Node-side timers, use the project's clock or fixture at that layer.

2. Use explicit sample values or a seeded generator for data that affects the expected result. Keep mutable records unique across concurrent tests. If the application generates an ID, assert its format or the relationship between records unless the actual value is part of the requirement.

3. Set the relevant locale, timezone, and baseline data when they affect the result. Wait for an observable outcome instead of adding an arbitrary delay. Repeat the scenario from equivalent starting states and record the inputs that explain the verdict.

## Example

Set the clock just before a limited-time reward expires. Advance to the boundary and verify its expired state.

[Playwright Clock](https://playwright.dev/docs/clock) · [Web-first assertions](https://playwright.dev/docs/best-practices#use-web-first-assertions)
