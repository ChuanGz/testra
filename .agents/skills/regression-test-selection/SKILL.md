---
name: regression-test-selection
description: "Use for mapping change impact to a focused run list."
---

# Regression Test Selection

## Purpose

Choose a justified, focused set of checks for a specific change.

## Triggers

An impact assessment is available and the team needs a run list for local verification or CI.

## Inputs

Changed behaviors and risks, mapped specs, known coverage gaps, runtime data if available, and existing release gates.

## Outputs

Selected tests and commands, reasons, uncovered risks, and conditions that call for a broader run.

## Workflow

1. Map affected behaviors and shared consumers to exact test names or stable tags. Select the fastest check that proves each risk and retain an end-to-end check for changed critical paths.

2. Keep repository-required suites and add broader checks when a shared dependency, uncertain mapping, or high-impact boundary warrants them.

3. Verify the selector resolves to the intended tests before running. Report the scope actually executed and any gap requiring a new scenario.

## Example

A reward search refactor needs search filtering, cache separation, and the affected catalog smoke flow. Keep required CI tests and leave unrelated upload cases outside this focused run.

[Regression skills](../../../docs/regression-skills.md)
