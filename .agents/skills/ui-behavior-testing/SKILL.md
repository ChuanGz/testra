---
name: ui-behavior-testing
description: Write or verify automated checks of user-visible frontend behavior, including actions, transitions, saving, reloading, validation, and error states.
---

# UI Behavior Testing

## Purpose

Prove an agreed UI behavior with a repeatable scenario and observable assertions.

## Triggers

A user-visible requirement needs coverage, a flow regressed, or a verified fix needs a targeted regression test.

## Inputs

Requirement or scenario, expected outcomes, route, fixture and auth setup, and the verified interaction path.

## Outputs

Scenario and spec or test plan, assertion-to-requirement mapping, run command, result, and evidence.

## Workflow

1. Capture the starting state, action, and observable outcome. Choose a component test for a local interaction or Playwright Test for a flow that needs real browser behavior and coordination across views.

2. Reuse isolated fixtures and the project's auth setup. Use semantic locators, normal interactions, and retrying assertions such as `toHaveText()` or `toHaveValue()`. Wait for a user-visible outcome or an explicit relevant response.

3. Keep assertions for separate outcomes visible in the spec. Capture the trace for failures. When a runnable defect baseline exists, confirm the new regression check fails at the intended assertion and passes after the fix.

4. Run only the affected scenarios and relevant shared consumers, expanding the scope when evidence shows a shared change.

## Example

Rename Sir Lump from the detail panel, then reload. Verify the new title in the same record's grid row and reopened panel.

[Writing Playwright tests](https://playwright.dev/docs/writing-tests) · [Playwright assertions](https://playwright.dev/docs/test-assertions)

[Frontend skills](../../../docs/frontend-diagnostics.md)
