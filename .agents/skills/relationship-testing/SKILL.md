---
name: relationship-testing
description: "Use for assign, remove, undo, or duplicate links between records."
---

# Relationship Testing

## Purpose

Verify assigning, removing, undoing, and deduplicating relationships between records.

## Triggers

A link between entities can be created, removed, restored, or accidentally duplicated.

## Inputs

Entity IDs, relationship rules and cardinality, and the declared outcome of duplicate or undo actions.

## Outputs

Before and after links by ID, duplicate and undo outcomes, and optional persistence evidence.

## Workflow

1. Seed both ends of the relationship and any existing link explicitly. Identify which records and projections should change.

2. Perform an assign or remove through the intended UI or API. Assert membership by ID and exercise duplicate or undo behavior when the rule defines it.

3. Reload or read the link again if it must persist. Verify unrelated relationships stay intact when the operation is scoped.

## Example

Assign a reward to a campaign, repeat the assignment if allowed, then remove it and undo. Check for exactly the expected link and keep another campaign unchanged.

[Regression skills](../../../docs/regression-skills.md)
