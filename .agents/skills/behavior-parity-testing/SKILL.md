---
name: behavior-parity-testing
description: "Use for comparing baseline and candidate behavior across builds or implementations."
---

# Behavior Parity Testing

## Purpose

Verify that two implementations produce the same agreed external behavior.

## Triggers

A refactor, migration, replacement, or backport should preserve behavior.

## Inputs

Approved baseline and candidate, same scenario inputs, expected contracts, and any approved differences.

## Outputs

Comparable outcomes and side effects, exact differences, and verdict with evidence.

## Workflow

1. Choose a verified baseline and run the same scenarios with equivalent fixtures, roles, flags, locale, and clock. Use separate data or reset it between runs.

2. Compare user-visible outcomes, relevant requests and responses, and persistent side effects where they are contractual. Normalize only differences known to be irrelevant, such as generated IDs.

3. Report the first unexpected divergence with evidence from both runs. Check agreed expected behavior as well as parity so a pre-existing bug cannot become the acceptance rule.

## Example

Run the Sir Lump promotion against the original editor and its refactor. Both must save the same title and show it in both views after reload.

[Regression skills](../../../docs/regression-skills.md)
