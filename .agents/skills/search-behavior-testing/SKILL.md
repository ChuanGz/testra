---
name: search-behavior-testing
description: "Use for multi-term search, debounce, result filtering, and empty states."
---

# Search Behavior Testing

## Purpose

Verify how search input and filters determine results and empty states.

## Triggers

A change affects multiple terms, debounce, filtering, ranking, or no-match behavior.

## Inputs

Documented query semantics, distinctive corpus, input controls, and relevant timing rules.

## Outputs

Results and exclusions for each search case, empty-state evidence, and request timing only where contractual.

## Workflow

1. Create a corpus that separates exact, partial, and multi-term results according to the product's matching rules. Include records that should be excluded.

2. Drive the visible search and filter controls. Assert the returned IDs or empty-state behavior after the results settle.

3. When debounce or race handling is a requirement, control the browser clock or response ordering and compose with async behavior testing.

## Example

Search for two terms that should match a single reward, then add a category filter that excludes it. Verify the corresponding result set and empty state.

[Regression skills](../../../docs/regression-skills.md)
