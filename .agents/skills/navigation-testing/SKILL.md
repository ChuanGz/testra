---
name: navigation-testing
description: "Use for routes, browser history, deep links, and guards."
---

# Navigation Testing

## Purpose

Verify route changes, direct entry, history navigation, and navigation guards.

## Triggers

A route, link, deep link, browser Back or Forward behavior, or route guard changes.

## Inputs

Route contract, expected URL and view, entry paths, roles, and guard policy.

## Outputs

Verified routes, history outcomes, blocked or redirected transitions, and associated view state.

## Workflow

1. Start from a known route and role. Use normal navigation and assert the URL plus the view or entity that should render.

2. Exercise browser Back and Forward and direct loading where relevant. Check filters, selection, or history state that the contract says to restore.

3. Verify guards from both allowed and blocked starting states. Compose with dirty-state testing when unsaved changes are the reason navigation should pause.

## Example

Open a reward from a filtered catalog. Use Back and verify the documented filter state and list return. Repeat with an unsaved edit to verify the expected guard.

[Regression skills](../../../docs/regression-skills.md)
