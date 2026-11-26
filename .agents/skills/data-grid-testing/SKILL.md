---
name: data-grid-testing
description: "Use for sorting, filtering, pagination, selection, and virtual scrolling."
---

# Data Grid Testing

## Purpose

Verify how a grid presents and manipulates a known result set.

## Triggers

Sorting, filtering, pagination, selection, or virtual rendering changes.

## Inputs

Grid contract, predictable rows and unique IDs, and client or server data behavior.

## Outputs

Visible row and order assertions, count and selection outcomes, and boundary findings.

## Workflow

1. Seed distinctive rows that distinguish sort direction, filters, or page boundaries. Check the documented tie behavior when it matters.

2. Operate the grid using visible controls. Assert ordered rows, page or filter changes, and which IDs remain selected.

3. For virtualized rows, scroll a known record into view. Verify logical totals only through the documented UI or API evidence rather than counting rendered DOM rows.

## Example

Filter for emergency gear, sort by title, and move to the next page. Verify the listed reward IDs and selection rule. A virtualized row count is just the visible slice.

[Regression skills](../../../docs/regression-skills.md)
