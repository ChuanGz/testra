---
name: dirty-state-testing
description: "Use for multi-form edits, unsaved state, Save, and Discard."
---

# Dirty State Testing

## Purpose

Verify whether the UI detects unsaved changes and handles Save or Discard correctly.

## Triggers

A form or multi-form view misreports edits, loses drafts, or shows the wrong unsaved-change prompt.

## Inputs

Clean baseline, fields or subforms, dirty rules, saving and discarding behavior, and navigation contract.

## Outputs

Transition evidence for clean, dirty, saved or discarded state, and preserved or cleared edits.

## Workflow

1. Start from a saved fixture. Change one field, restore its original value, and exercise changes in multiple subforms if they share saves. Assert the observable dirty indicators and available actions.

2. Verify Save clears only the intended pending edits after success. Verify Discard restores the agreed values. Exercise a save failure when the contract calls for retaining edits.

3. Use navigation testing for route-level guards. Keep form validation and cache refresh as separate checks unless they cause the observed dirty-state behavior.

## Example

Change a reward title and availability setting. Discard the availability edit in a separate subform and confirm the title is still dirty until it is saved.

[Regression skills](../../../docs/regression-skills.md)
