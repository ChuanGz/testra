---
name: component-tracing
description: Trace a rendered frontend control, UI state, or stack frame to its verified source component, handler, state owner, and affected consumers.
---

# Component Tracing

## Purpose

Turn a browser observation into a source map that another reviewer can verify.

## Triggers

The problem is visible in the browser and the file, component, handler, state owner, or shared dependency is unclear.

## Inputs

Route and build, runtime locator or stack, relevant network or state evidence, and source checkout.

## Outputs

Evidence-to-source path with file and line references, ownership and shared dependencies, and any unconfirmed links.

## Workflow

1. Start from a route, stable test ID, label, translation key, class, or mapped stack frame. Use repository search and dev tooling to identify candidates in the matching version of the source.

2. Follow the rendering or event path through wrappers to the handler, state selector, store, or client. Confirm the candidate against a mapped breakpoint, runtime stack, or read-only observation where available. Record a match as a candidate until the runtime link is confirmed.

3. Trace shared components, hooks, query keys, or styles to their callers. List direct consumers and identify which share the same failing state or behavior.

4. Send the verified path and any gaps to [root-cause analysis](../root-cause-analysis/SKILL.md).

## Example

The grid shows a new reward title while the panel is stale. Trace each rendered title to its source and data provider. Record the list and detail query keys and verify which code actually reads them.

[Chrome DevTools source maps](https://developer.chrome.com/docs/devtools/javascript/source-maps) · [Playwright Trace Viewer](https://playwright.dev/docs/trace-viewer)

[Frontend skills](../../../docs/frontend-diagnostics.md)
