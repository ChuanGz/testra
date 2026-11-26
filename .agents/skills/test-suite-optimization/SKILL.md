---
name: test-suite-optimization
description: "Use for reducing test runtime without weakening coverage or repeatability."
---

# Test Suite Optimization

## Purpose

Reduce test execution time while preserving required coverage and reliability.

## Triggers

A regression suite is slow, wastes setup, or loses throughput under parallel load.

## Inputs

Run durations and retry reports, suite structure, required gates, coverage map, and isolated data options.

## Outputs

Measured bottlenecks, proposed optimization, protected coverage, and comparable before-and-after results.

## Workflow

1. Measure representative runs. Identify setup, navigation, slow specs, retries, or infrastructure as the largest contributors before changing the suite.

2. Reuse safe authenticated state and fixtures, reduce redundant UI setup, or parallelize truly independent records with existing runner features. Keep required gates and risk coverage in place.

3. Measure the same suite before and after under comparable conditions. Check first-run outcomes and coverage, and record any trade-offs.

## Example

Reuse an approved sign-in state and seed rewards through fixtures for independent scenarios. Compare suite time and first-run outcomes before adopting the change.

[Regression skills](../../../docs/regression-skills.md)
