---
name: side-panel-testing
description: "Use for generic panel or dialog opening, closing, tabs, and state preservation."
---

# Side Panel Testing

## Purpose

Verify panel and dialog behavior as a reusable UI pattern.

## Triggers

A detail panel has regressions when opening, closing, switching tabs, changing records, or preserving state.

## Inputs

Panel type and trigger, active record, tab behavior, and policies for drafts and reentry.

## Outputs

Open and close evidence, correct record identity, tab state, and expected preservation or reset.

## Workflow

1. Confirm whether the UI is a modal dialog, a non-modal panel, or another documented pattern. Open it from a known row and verify its title or record identity.

2. Switch panel tabs and records, then close and reopen it. Verify the documented state policy and that another record cannot inherit stale data.

3. Compose with accessibility testing for modal focus, dirty-state testing for unsaved changes, or cache-consistency testing for stale reads. Keep project-specific behavior in the scenario.

## Example

Open the detail panel for reward A and select History. Switch to reward B and verify the active reward, tab, and draft state match the documented behavior.

[Regression skills](../../../docs/regression-skills.md)
