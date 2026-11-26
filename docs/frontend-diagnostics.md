# Frontend Testing and Diagnostics

Pick the first check that can explain the failure. Add another skill when a different layer could resolve an open question. Keep the same reproduction and evidence across the investigation.

## Select by the first observable failure

| What you observe | Start with | Add when needed |
| --- | --- | --- |
| Missing, ambiguous, or blocked control | [UI element inspection](../.agents/skills/ui-element-inspection/SKILL.md) | CSS layout diagnostics if something clips or covers it. |
| Clipping, overflow, or overlap | [CSS layout diagnostics](../.agents/skills/css-layout-diagnostics/SKILL.md) | Responsive testing if it changes with size. |
| Unclear component or state owner | [Component tracing](../.agents/skills/component-tracing/SKILL.md) | Root-cause analysis if several source paths fit. |
| Wrong visible result after a normal action | [UI behavior testing](../.agents/skills/ui-behavior-testing/SKILL.md) | Error diagnostics or network interception if it fails before rendering. |
| Runtime error, failed request, or error banner | [Frontend error diagnostics](../.agents/skills/frontend-error-diagnostics/SKILL.md) | Component tracing for the relevant stack or handler. |
| Several plausible causes | [Root-cause analysis](../.agents/skills/root-cause-analysis/SKILL.md) | The evidence skill that can distinguish the leading causes. |
| A likely or confirmed cause needs repair | [Fix strategy](../.agents/skills/fix-strategy/SKILL.md) | The test skill that checks the affected behavior and shared callers. |
| Unexpected screenshot change | [Visual regression testing](../.agents/skills/visual-regression-testing/SKILL.md) | CSS layout diagnostics for the changed region. |
| Failure at a particular width or orientation | [Responsive testing](../.agents/skills/responsive-testing/SKILL.md) | Accessibility testing if keyboard access changes. |
| Wrong role, label, keyboard behavior, or focus | [Accessibility testing](../.agents/skills/accessibility-testing/SKILL.md) | Component tracing for the owner of that behavior. |
| Slow interaction or choppy rendering | [Frontend performance diagnostics](../.agents/skills/frontend-performance-diagnostics/SKILL.md) | Network or component inspection where the timing points. |

## From evidence to a fix

Record the expected result, actual result, build, and data. Start with the native Playwright tools, then trace the first wrong state to the source that produced it. Name the affected consumers and keep uncertain causes labeled as such.

Use [fix strategy](../.agents/skills/fix-strategy/SKILL.md) to propose a repair before editing. Rerun the targeted failure and checks for affected callers. Keep the scenario, evidence, and result with the tests. See the [Verifier handoff](verifier.md) for what to report.

For planning from a diff or selecting tests before a run, use the [regression skills](regression-skills.md). For browser and agent setup, see the [Playwright guide](playwright-setup.md).
