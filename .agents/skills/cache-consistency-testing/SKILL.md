---
name: cache-consistency-testing
description: "Use for cache keys, invalidation, refetch, and stale data."
---

# Cache Consistency Testing

## Purpose

Verify whether cached reads refresh or intentionally stay valid after a change.

## Triggers

A cache-key, invalidation, refetch, deduplication, or stale-data issue affects frontend results.

## Inputs

Mutation, read paths or keys, documented freshness rules, and affected views.

## Outputs

Timeline of mutation and reads, affected keys or consumers, expected versus actual freshness, and evidence.

## Workflow

1. Identify reads that depend on the mutation and the freshness policy for each. Seed known initial data and record which views consume each key.

2. Execute the mutation and observe invalidation, refetch, or intentional local update after the documented trigger. Assert user-visible values and inspect network state when it distinguishes a stale cache from stale backend data.

3. Check neighboring keys and consumers only when they share the affected invalidation scope. Use data-persistence testing to verify the authoritative saved value separately.

## Example

A rename should refresh the list and detail queries for that reward. Confirm each settles on the new title while an unrelated catalog remains stable.

[Regression skills](../../../docs/regression-skills.md)
