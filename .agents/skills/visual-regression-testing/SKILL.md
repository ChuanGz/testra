---
name: visual-regression-testing
description: Capture and compare stable UI screenshots against approved visual baselines. Use for unexpected appearance changes and reviewing intentional visual updates.
---

# Visual Regression Testing

## Purpose

Prove whether an observable rendering change matches the approved visual expectation.

## Triggers

A screenshot diff appears, a visual contract needs regression coverage, or an intentional design change requires baseline review.

## Inputs

Approved baseline or reference, browser and viewport, theme and fonts, fixture data, and the UI state to compare.

## Outputs

Expected, actual, and diff artifacts, affected region and states, and the baseline decision supported by evidence.

## Workflow

1. Reproduce the same browser, viewport, scale, theme, fonts, and fixture data as the reference. Use an explicit readiness assertion before taking a screenshot. Choose a page or component capture that fits the contract.

2. Start with Playwright `toHaveScreenshot()`. Stabilize legitimate nondeterminism first. Mask a region only when its content is deliberately variable and outside the behavior under review.

3. Review expected, actual, and diff images together. Hand a real geometry problem to [CSS layout diagnostics](../css-layout-diagnostics/SKILL.md). Update a baseline only after the visual change is confirmed as intended and reviewed.

4. Keep the baseline and targeted scenario. Use functional assertions for user actions and state alongside visual comparisons when both matter.

## Example

Compare the reward detail panel while it shows a known reward. A clipped panel footer is an actionable diff. Confirm its cause before updating the reference.

[Playwright visual comparisons](https://playwright.dev/docs/test-snapshots)

[Frontend skills](../../../docs/frontend-diagnostics.md)
