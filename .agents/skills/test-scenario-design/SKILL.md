---
name: test-scenario-design
description: "Use for creating risk-based test scenarios from agreed behavior."
---

# Test Scenario Design

## Purpose

Turn a requirement into an executable scenario that can prove the intended behavior.

## Triggers

A new behavior needs coverage, a rule is unclear, or an incident needs a regression scenario.

## Inputs

Agreed rule or acceptance criteria, risk, normal user path, and available data and test layers.

## Outputs

Scenario card with rule, setup, action, observable result, evidence, chosen layer, and open questions.

## Workflow

1. Identify the behavior and consequence if it fails. Ask one focused question if an important expected result is still ambiguous.

2. Find existing scenarios before designing a new one. Add only risk-relevant success, boundary, or failure variations. Give each scenario an observable result and an appropriate fixture.

3. Choose the lowest layer that can observe the requirement. Explain what a pass proves and where evidence is still missing.

## Example

When Free Hats is removed, Emergency Lasers must remain. Make the fresh API result and rendered tree separate checks for that rule.

[Regression skills](../../../docs/regression-skills.md)
