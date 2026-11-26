---
name: test-knowledge-curation
description: "Use for retaining verified testing knowledge and retiring stale assets."
---

# Test Knowledge Curation

## Purpose

Keep reusable test knowledge accurate and discoverable after verified work.

## Triggers

A regression is resolved, a contract changes, or an existing scenario, fixture, or lesson may be stale.

## Inputs

Rule, scenario and spec references, verified evidence, accepted changes, and the project knowledge structure.

## Outputs

Updated scenario or lesson, asset links, stale or superseded entries, and remaining gaps.

## Workflow

1. Identify what the run proved. Keep the rule or scenario ID, meaningful evidence, build or contract context, and the smallest reusable lesson.

2. Update the existing source of truth and link the spec, fixture, trace, or replay data. Sanitize artifacts and keep assumptions or open findings identified as such.

3. Mark stale entries as superseded when a reliable replacement exists. Preserve the rationale and route any coverage gap back to scenario design.

## Example

Keep the goblin race fixture and note why the older request must finish before the final assertion. A future test can reuse both.

[Regression skills](../../../docs/regression-skills.md)
