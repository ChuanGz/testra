---
name: frontend-performance-diagnostics
description: Investigate slow frontend loading, interactions, or rendering. Measure the user-visible delay and link network or browser runtime evidence to the responsible source path.
---

# Frontend Performance Diagnostics

## Purpose

Locate the dominant contributor to a repeatable frontend delay and make before-and-after checks comparable.

## Triggers

A page, transition, or interaction feels slow, jank appears, or a measured frontend performance regression needs diagnosis.

## Inputs

Interaction and completion marker or agreed metric, baseline build, fixture data, browser, and cache, network, and CPU conditions.

## Outputs

Measurement and conditions, timing breakdown, suspected or verified bottleneck with source references, impacted users or consumers, and a focused recheck.

## Workflow

1. Define the interval from a real action to its observable completion. Use equivalent environments, comparable warm or cold cache, and repeat enough times to distinguish a regression from run-to-run variance.

2. Use the native Playwright trace and browser performance entries for action and network timing. Use the browser performance profiler for main-thread, rendering, and script attribution when deeper evidence is needed.

3. Separate time waiting for data from script execution, rendering, and paint. Trace the dominant request, task, or frame back to the API caller or source component. Treat correlations from a single profile as hypotheses.

4. Recommend a narrowly scoped change through [fix strategy](../fix-strategy/SKILL.md). Recheck the same scenario with the same conditions and apply numeric thresholds only where the project has a meaningful budget.

## Example

Updating a reward is slow. The response arrives quickly, but the browser profile shows a long grid render after the response. Trace that render to its source and remeasure the same fixture and action after the proposed fix.

[Playwright Trace Viewer](https://playwright.dev/docs/trace-viewer) · [Chrome runtime performance profiling](https://developer.chrome.com/docs/devtools/performance/)

[Frontend skills](../../../docs/frontend-diagnostics.md)
