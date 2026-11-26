---
name: data-consistency-testing
description: "Use for comparing the same entity across UI projections and API data."
---

# Data Consistency Testing

## Purpose

Compare the same business data across views and APIs.

## Triggers

A form, grid, search result, detail panel, or API disagrees after a change.

## Inputs

Entity ID, affected views and responses, field mapping, formatting, and synchronization or freshness rules.

## Outputs

Expected and actual values by view and API response, shared entity identity, and first confirmed mismatch.

## Workflow

1. List the views and API responses with the fields they should agree on. Define approved representation differences, such as a formatted date versus its ISO value.

2. Trigger the change and wait for the relevant view refresh or synchronization condition. Compare each view and API response separately for the same entity ID.

3. Pinpoint the first discrepancy. Compose with cache-consistency testing for stale delivery or data-persistence testing when the authoritative value is in doubt.

## Example

After Sir Lump's promotion, compare the title for the same reward ID in the grid, search, detail panel, and API wherever the rule requires it.

[Regression skills](../../../docs/regression-skills.md)
