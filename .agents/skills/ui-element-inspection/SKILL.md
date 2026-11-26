---
name: ui-element-inspection
description: Inspect a browser control that is missing, ambiguous, disabled, or blocked. Identify its semantic locator, current state, and actionability evidence before interaction.
---

# UI Element Inspection

## Purpose

Identify the intended control and establish what the user can do with it in the current UI state.

## Triggers

A locator matches multiple elements, a control is missing, or Playwright reports that it cannot click, fill, or focus the target.

## Inputs

Page and frame or popup, intended action, expected control, and a current snapshot or failing trace.

## Outputs

Scoped locator, observed role and label, visibility and state, and the evidence for any blocker.

## Workflow

1. Inspect the current page with a Playwright snapshot or Inspector. Read the heading, visible labels, and target record before choosing a control.

2. Prefer `getByRole()` with an accessible name or `getByLabel()`. Scope repeated controls to the intended row, dialog, or region. Verify uniqueness before relying on the locator. Use a repository-defined test ID where semantics alone cannot distinguish targets.

3. Check the relevant actionability conditions. Use the call log, DOM snapshot, or hit target to distinguish disabled, hidden, unstable, and intercepted controls. Refresh evidence after state changes.

4. Hand confirmed clipping or overlap to [CSS layout diagnostics](../css-layout-diagnostics/SKILL.md). Hand a control's runtime identity to [component tracing](../component-tracing/SKILL.md) when its owning source must be located.

## Example

Two `Save` buttons exist. The snapshot shows one in a `Reward details` dialog and one in the page toolbar. Scope the locator to the dialog and inspect its enabled state before clicking.

[Playwright locators](https://playwright.dev/docs/locators) · [Actionability checks](https://playwright.dev/docs/actionability)

[Frontend skills](../../../docs/frontend-diagnostics.md)
