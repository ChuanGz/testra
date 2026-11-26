---
name: root-cause-analysis
description: Investigate unclear or multi-layer frontend failures. Select relevant diagnostic skills, distinguish verified causes from hypotheses, and map the issue to source and regression scope.
---

# Root Cause Analysis

## Purpose

Identify the causal mechanism behind a reproduced failure and show how the evidence supports it.

## Triggers

The failure crosses browser, source, and API boundaries, has multiple plausible causes, or still has no verified explanation after initial triage.

## Inputs

Expected behavior, reproduction and baseline, browser evidence, and the matching source or build when available.

## Outputs

Symptom, verified facts, assumptions and hypotheses, cause with proof status and source references, affected consumers, and regression scope.

## Workflow

1. Choose the first evidence-gathering skill from the [routing guide](../../../docs/frontend-diagnostics.md#select-by-the-first-observable-failure). Start at the first point where actual behavior diverges from the required result.

2. Construct a short timeline from action to request, response, client state, and render as relevant. Label observations with their source. State hypotheses separately and identify what observation could rule each one out.

3. Collect the smallest discriminating check, such as comparing old and new builds, inspecting data before and after one boundary, or testing one suspected variable in an isolated reproduction. Trace the causal mechanism to the actual source when available.

4. Call a cause verified only when the evidence connects the mechanism to the symptom and rules out the plausible competing explanations. When evidence is missing, report it as unverified and state the specific next check.

5. List affected components and direct consumers of shared dependencies. Pass the confirmed cause, scope, and remaining gaps to [fix strategy](../fix-strategy/SKILL.md).

## Example

A reward panel stays stale after a save. The detail API returns the new title and the grid renders it. A source breakpoint shows that an open panel still reads its initial prop. Confirm that the affected panel instances share that path before proposing a change.

[Playwright Trace Viewer](https://playwright.dev/docs/trace-viewer)
