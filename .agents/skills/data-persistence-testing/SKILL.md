---
name: data-persistence-testing
description: "Use for write, reload, and verification against a fresh read."
---

# Data Persistence Testing

## Purpose

Verify that a write survives a fresh authoritative read.

## Triggers

A save, update, delete, or import must persist beyond optimistic UI or current browser state.

## Inputs

Mutation contract, authoritative read path, expected stored fields, and a known fixture ID.

## Outputs

Write result, independent read evidence, and the value shown after the required reload or reentry.

## Workflow

1. Record the starting value and ID, perform the write through the intended entry point, and observe the result. Use a real test backend for a persistence claim.

2. Read the record again through the authoritative API or the documented reload path after the system's completion condition. If the store is eventually consistent, use the agreed readiness signal or bounded project policy.

3. Assert the stored value and, when required, the refreshed UI. Treat a replay or mocked result as frontend evidence and use integration coverage for storage.

## Example

Rename Sir Lump, then read the reward by ID after reload. The fresh API result and visible title both need to say Duke of Snacks.

[Regression skills](../../../docs/regression-skills.md)
