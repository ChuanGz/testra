---
name: coverage-gap-analysis
description: "Use for finding missing or partial checks for important business behavior."
---

# Coverage Gap Analysis

## Purpose

Find important business behaviors that lack meaningful verification.

## Triggers

A flow changes, a defect escaped, or a team is reviewing regression coverage.

## Inputs

Business rules and risk, scenario inventory, runnable tests, and current assertion evidence.

## Outputs

Risk-ranked uncovered behaviors and recommended scenarios, with existing coverage linked where verified.

## Workflow

1. Map important rules and failure modes to their scenarios, test layers, and observable assertions. Read what the tests actually prove for the relevant role and data.

2. Separate missing checks, partial proof, flaky evidence, and tests that exist but have not run in the applicable context.

3. Recommend the smallest scenario that covers each important gap. Prioritize by impact and share approved additions with test scenario design.

## Example

The treasure-chest test proves only that a toast shows. Add a check that the reward history contains exactly one grant after the retry.

[Regression skills](../../../docs/regression-skills.md)
