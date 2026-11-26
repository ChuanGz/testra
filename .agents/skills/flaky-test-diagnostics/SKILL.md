---
name: flaky-test-diagnostics
description: "Use for intermittent test failures, retry evidence, and cause isolation."
---

# Flaky Test Diagnostics

## Purpose

Identify why an automated check changes verdict across equivalent runs.

## Triggers

The same test passes on retry, fails intermittently in CI, or changes outcome under parallel execution.

## Inputs

First failure and retry artifacts, environment, revision, fixture identifiers, and comparable run settings.

## Outputs

Evidence-supported classification of app, test, data, or environment issue and a targeted next check.

## Workflow

1. Keep the first failure trace. Reproduce the same scenario on the same build and starting data before changing one variable, such as worker count or response ordering.

2. Compare the earliest divergent step and evidence across runs. Distinguish shared data, missing readiness, app races, and environment changes.

3. Link the likely mechanism to source or test setup. Use root-cause analysis if uncertainty remains and keep the test reported as flaky until the underlying issue is verified.

## Example

A reward edit fails only with parallel workers. Compare seeded IDs across traces and reproduce with independent records before attributing it to a UI timing bug.

[Regression skills](../../../docs/regression-skills.md)
