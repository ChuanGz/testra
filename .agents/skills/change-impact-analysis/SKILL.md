---
name: change-impact-analysis
description: "Use for assessing what a code change can affect before selecting tests."
---

# Change Impact Analysis

## Purpose

Map a code change to the business behavior and shared consumers it can affect.

## Triggers

Reviewing a diff, refactor, config change, dependency update, or migration before choosing tests.

## Inputs

Base and candidate revisions, diff, existing requirements, and affected source and test files.

## Outputs

Risk-ranked behaviors and consumers, source evidence, and unresolved dependencies for test selection.

## Workflow

1. Read the complete diff. For each meaningful hunk, identify the route, component, state, API contract, configuration, or persistence behavior that can change.

2. Follow callers and consumers across shared hooks, services, schemas, flags, and data boundaries. Tie each affected flow to a source reference or mark it as a hypothesis.

3. State whether the change is direct, indirect, or uncertain. Prioritize by user impact and hand the resulting scope to regression test selection.

## Example

Changing the reward query key can affect list refresh and detail updates even if neither screen changed directly. Trace both consumers before choosing tests.

[Regression skills](../../../docs/regression-skills.md)
