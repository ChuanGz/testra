---
name: accessibility-testing
description: Check frontend semantics, keyboard operation, focus, and state announcements for a specific user flow. Capture accessible role, name, and interaction evidence.
---

# Accessibility Testing

## Purpose

Verify that the intended workflow is operable and understandable for the accessibility checks in scope.

## Triggers

An accessible role or label is wrong, a keyboard or focus regression is reported, or a specific flow needs accessibility coverage.

## Inputs

User workflow, component semantics and expected states, applicable accessibility criteria, and required keyboard or assistive technology coverage.

## Outputs

Observed roles, names, focus transitions, relevant state, failing steps, and any manual verification still needed.

## Workflow

1. Inspect the relevant accessibility tree and use native role and label locators. Assert dynamic state and use a targeted ARIA snapshot when the semantic structure is part of the contract.

2. Exercise the flow with keyboard actions. Check visible focus, operation order, dialog entry and restoration, validation messaging, or announcements where relevant. Confirm the actual pattern before applying pattern-specific expectations.

3. Use the existing scanner if available for additional automated coverage. Record which checks require an assistive technology session or visual contrast review, and report coverage for the checks performed.

4. Trace a confirmed defect to the component that owns the semantics or focus behavior, then hand it to [fix strategy](../fix-strategy/SKILL.md).

## Example

For a modal reward editor, open it by keyboard, confirm the dialog has an accessible name, verify focus enters the modal and stays within it when tabbing, then close it and check focus returns to the invoking control.

[Playwright ARIA snapshots](https://playwright.dev/docs/aria-snapshots) · [W3C modal dialog pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)

[Frontend skills](../../../docs/frontend-diagnostics.md)
