---
name: browser-workflows
description: Plan and verify multiple Playwright browser flows by reusing signed-in tabs, running independent flows concurrently, and grounding every action in visible page evidence. Use for Testra regression planning or exploratory runs that share setup, navigation, or authentication.
---

# Browser Workflows

## Purpose

Group related browser checks and reuse a suitable signed-in session.

## Triggers

A scenario spans several actions, or independent scenarios can run in parallel.

## Inputs

Scenario cards, shared prerequisites, data ownership, and role or session requirements.

## Outputs

Tab and session plan with evidence for each flow.

## Workflow

### Choose where each flow runs

Before opening tabs, identify each flow's requirement, starting state, records it reads or writes, expected result, and evidence. Use the fewest tabs that let the work proceed efficiently.

| Situation | Browser strategy |
| --- | --- |
| Steps verify one outcome or need the same record, view, or intermediate state | Keep them together in one tab. Reuse the signed-in page and perform the shared setup once. |
| Flows can run concurrently with the same account and independent test data, settings, and side effects | Open a separate tab for each concurrent flow in the same authenticated browser context. Track the flow and record IDs assigned to each tab. |
| Flows need distinct roles, accounts, or browser state | Use separate contexts or named browser sessions. Use separate test accounts when actions can change account-wide settings or invalidate a login. |
| Flows can affect the same backend records or shared settings | Give each flow independent test data or run them sequentially with the necessary state checks. Separate tabs and contexts still reach the same backend. |

Reuse the authenticated session while the required account and permissions remain valid. Treat sign-in and sign-out as actions with a test purpose, such as establishing missing authentication or verifying an authentication requirement. Confirm that a new tab is signed in before relying on it. Some applications keep authentication in tab-specific session storage. [Multiple pages](https://playwright.dev/docs/pages#multiple-pages) · [Playwright authentication](https://playwright.dev/docs/auth)

For actual concurrency, use explicit Playwright `Page` handles or run independent specs through Playwright Test workers. If CLI or MCP actions target the selected tab, select, inspect, and act on each tab in sequence so another command cannot switch the target mid-action. [Agent CLI tab commands](https://playwright.dev/agent-cli/introduction#tabs) · [MCP browser tools](https://playwright.dev/mcp/introduction#available-tools) · [Playwright Test parallelism](https://playwright.dev/docs/test-parallel)

### Read, decide, then act

1. Read the active tab's heading, visible controls, labels, and relevant row values. Use the current snapshot and identify the intended record by its stable ID or another unambiguous value.
2. Before acting, connect the control to the scenario. Know which action it performs, which record it affects, and what change you expect to observe.
3. After navigation, save, delete, or reload, read the updated state before choosing the next action. Tie your assertion to the expected post-action state.
4. If the screen or requirement is ambiguous, pause. Inspect the current state, compare it with the plan, and identify whether the missing information is about the target, action, prerequisite, or expected result. Ask one specific question when that information cannot be recovered from the project or UI. Retry only when you can explain the cause and what makes the new attempt valid.

## Example

- **Rewards tab.** Edit a reward title in the detail panel, save, then reload and verify the same reward in the grid and panel. Keep these steps together because they verify the same change.
- **Tree tab.** Delete an independently seeded category and verify the fresh API read and tree. Run this concurrently when the category deletion leaves the edited reward, its grid results, and shared settings untouched.

In exploratory work, reuse the live signed-in tab as long as it serves the flow. In saved specs, group steps that form one scenario and keep independent tests runnable on their own. Reuse the project's authenticated state fixture across isolated test contexts so each spec can start signed in. Report each flow's result with its own assertions or evidence. [Playwright test isolation](https://playwright.dev/docs/browser-contexts)
