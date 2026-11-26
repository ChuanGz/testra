---
name: test-maintainability-review
description: "Use for fragile, duplicate, or over-engineered test assets."
---

# Test Maintainability Review

## Purpose

Find test-suite complexity and fragility that raise maintenance cost.

## Triggers

Reviewing duplicated tests, brittle locators, excessive fixtures, or overgrown abstractions.

## Inputs

Specs, helpers and fixtures, covered rules, and recurring test maintenance issues.

## Outputs

Prioritized review findings with exact locations, preserved behavior, and low-risk remediation.

## Workflow

1. Trace failing or frequently edited tests to the relevant assertions and setup. Look for overlapping coverage, implementation-coupled selectors, and dependencies on execution order.

2. Compare cases before consolidation. Preserve distinct risks, negative assertions, and independent data. Prefer a small shared fixture or action when multiple callers genuinely need it.

3. Recommend the smallest change with its regression checks. Hand execution-time tuning to test suite optimization when runtime is the actual problem.

## Example

Two reward specs use duplicate create-and-open setup. Share the fixture while keeping both the unauthorized-edit and successful-edit assertions visible.

[Regression skills](../../../docs/regression-skills.md)
