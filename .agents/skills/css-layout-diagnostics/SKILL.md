---
name: css-layout-diagnostics
description: Diagnose UI clipping, overflow, overlap, alignment, and sizing. Link browser geometry and computed styles to the responsible CSS rule or layout component.
---

# CSS Layout Diagnostics

## Purpose

Explain which layout constraint produced an observed rendering problem and where that constraint is defined.

## Triggers

A control is clipped, overlaps another control, overflows its container, or has incorrect spacing or dimensions.

## Inputs

Affected element and container, expected layout, screenshot or trace, viewport, and a near passing state if available.

## Outputs

Failing dimensions and computed values, active CSS rule and source location where available, and other consumers of the responsible layout.

## Workflow

1. Reproduce the defect with the actual data and viewport. Use Playwright `locator.evaluate()` to inspect rectangles, scroll and client dimensions, and relevant computed styles for the element and its ancestors.

2. Inspect the box or layout model in DevTools. Find the active grid, flex, sizing, overflow, or positioning rule and trace it through the stylesheet, component, or token. Record computed values and the authored source separately.

3. Compare with a nearby passing state. When useful, toggle one suspected declaration in the browser and record whether the defect changes. Treat this as diagnostic evidence and carry the proposed source edit to [fix strategy](../fix-strategy/SKILL.md).

4. List consumers of the affected rule or shared component. Use [responsive testing](../responsive-testing/SKILL.md) to confirm the affected breakpoint and neighboring behavior.

## Example

The reward panel clips its footer when its body grows. The body exceeds the available grid track height. DevTools ties the constraint to the panel's track declaration. A temporary change verifies whether that declaration is causal before proposing a patch.

[Playwright locator inspection](https://playwright.dev/docs/api/class-locator#locator-evaluate) · [Chrome DevTools CSS tools](https://developer.chrome.com/docs/devtools/css/)

[Frontend skills](../../../docs/frontend-diagnostics.md)
