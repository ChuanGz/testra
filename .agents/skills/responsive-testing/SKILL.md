---
name: responsive-testing
description: Test frontend behavior at relevant viewport and container breakpoints. Verify layout, control reachability, and equivalent actions across supported sizes.
---

# Responsive Testing

## Purpose

Show where a responsive behavior changes and whether users can still complete the task.

## Triggers

A UI failure appears only at certain widths, orientations, or input modes, or a responsive change needs a regression check.

## Inputs

Supported widths and input modes, actual breakpoint or container rules, intended behavior, and failing and passing sizes when known.

## Outputs

Tested sizes and modes, boundary and symptom, affected selectors or components, and checks for nearby supported states.

## Workflow

1. Identify whether the app uses a viewport breakpoint, a container query, or an input-mode condition. Choose a known failing size, a neighboring size across the transition, and a representative supported size as needed.

2. Use Playwright viewport settings, existing projects, or device emulation. Use a sized host container when the rule depends on its width. Keep data, role, and theme equivalent across runs.

3. Assert that core content and controls are reachable, the equivalent action works, and scroll or overflow matches the design of the relevant region. Hand source-level geometry to [CSS layout diagnostics](../css-layout-diagnostics/SKILL.md).

4. Report the effective boundary and remaining device coverage. Keep a small matrix that catches the known defect and protects the adjacent layout.

## Example

The reward editor moves Save into an action menu below its breakpoint. Test both sides of the transition and verify that the same save behavior works in each layout.

[Playwright viewport and device emulation](https://playwright.dev/docs/emulation)

[Frontend skills](../../../docs/frontend-diagnostics.md)
