# Regression Skills

Use the ranking to decide where to start. Within each group, P0 marks the checks to prioritize before P1.

## Top 10

| Rank | Skill | Main value |
| --- | --- | --- |
| 1 | [`change-impact-analysis`](../.agents/skills/change-impact-analysis/SKILL.md) | Know which behaviors to test. |
| 2 | [`test-scenario-design`](../.agents/skills/test-scenario-design/SKILL.md) | Design tests that prove the right behavior. |
| 3 | [`test-reusability-analysis`](../.agents/skills/test-reusability-analysis/SKILL.md) | Reuse existing test work. |
| 4 | [`behavior-parity-testing`](../.agents/skills/behavior-parity-testing/SKILL.md) | Verify that a refactor preserves behavior. |
| 5 | [`regression-test-selection`](../.agents/skills/regression-test-selection/SKILL.md) | Run the tests relevant to the change. |
| 6 | [`http-record-replay`](../.agents/skills/http-record-replay/SKILL.md) | Reduce dependence on a live backend. |
| 7 | [`root-cause-analysis`](../.agents/skills/root-cause-analysis/SKILL.md) | Shorten investigations. |
| 8 | [`fix-strategy`](../.agents/skills/fix-strategy/SKILL.md) | Reduce repair and retest cycles. |
| 9 | [`test-data-management`](../.agents/skills/test-data-management/SKILL.md) | Improve reproducibility. |
| 10 | [`test-knowledge-curation`](../.agents/skills/test-knowledge-curation/SKILL.md) | Retain useful knowledge across iterations. |

## Frontend Behavior and State

| Skill | Responsibility | Priority |
| --- | --- | --- |
| [`form-behavior-testing`](../.agents/skills/form-behavior-testing/SKILL.md) | Verify defaults, validation, submit, reset, and conditional fields. | P0 |
| [`dirty-state-testing`](../.agents/skills/dirty-state-testing/SKILL.md) | Verify unsaved changes and Save or Discard across forms. | P0 |
| [`state-transition-testing`](../.agents/skills/state-transition-testing/SKILL.md) | Verify allowed UI transitions and their outcomes. | P0 |
| [`component-lifecycle-testing`](../.agents/skills/component-lifecycle-testing/SKILL.md) | Verify state across mount, unmount, remount, or record changes. | P0 |
| [`navigation-testing`](../.agents/skills/navigation-testing/SKILL.md) | Verify routes, browser history, and navigation guards. | P1 |
| [`async-behavior-testing`](../.agents/skills/async-behavior-testing/SKILL.md) | Verify request order, cancellation, loading, and races. | P1 |
| [`cache-consistency-testing`](../.agents/skills/cache-consistency-testing/SKILL.md) | Verify invalidation, refetch, and stale-data behavior. | P1 |

## API and Data Integrity

| Skill | Responsibility | Priority |
| --- | --- | --- |
| [`api-request-verification`](../.agents/skills/api-request-verification/SKILL.md) | Verify endpoint, method, payload, and contract-relevant call counts. | P0 |
| [`data-persistence-testing`](../.agents/skills/data-persistence-testing/SKILL.md) | Verify writes through reload or a fresh authoritative read. | P0 |
| [`data-consistency-testing`](../.agents/skills/data-consistency-testing/SKILL.md) | Compare the same entity across form, grid, search, and API. | P0 |
| [`http-record-replay`](../.agents/skills/http-record-replay/SKILL.md) | Record and replay scoped HTTP traffic using sanitized HAR. | P0 |
| [`api-error-recovery-testing`](../.agents/skills/api-error-recovery-testing/SKILL.md) | Verify timeout, retry, partial failure, and recovery outcomes. | P1 |
| [`test-data-management`](../.agents/skills/test-data-management/SKILL.md) | Generate, seed, isolate, reuse, and clean up test data. | P0 |
| [`api-contract-testing`](../.agents/skills/api-contract-testing/SKILL.md) | Verify frontend and backend compatibility. | P1 |

## Enterprise UI Testing

| Skill | Responsibility | Priority |
| --- | --- | --- |
| [`data-grid-testing`](../.agents/skills/data-grid-testing/SKILL.md) | Verify sort, filter, pagination, selection, and virtualization. | P0 |
| [`search-behavior-testing`](../.agents/skills/search-behavior-testing/SKILL.md) | Verify multi-term search, debounce, filters, and empty results. | P0 |
| [`relationship-testing`](../.agents/skills/relationship-testing/SKILL.md) | Verify assignment, removal, undo, and duplicate relationships. | P0 |
| [`side-panel-testing`](../.agents/skills/side-panel-testing/SKILL.md) | Verify reusable panel and dialog behavior, tabs, and state. | P0 |
| [`permission-testing`](../.agents/skills/permission-testing/SKILL.md) | Verify role-based visibility, enabled actions, and access decisions. | P1 |
| [`internationalization-testing`](../.agents/skills/internationalization-testing/SKILL.md) | Verify translations, formats, locale behavior, and localized text overflow. | P1 |
| [`file-import-testing`](../.agents/skills/file-import-testing/SKILL.md) | Verify upload, validation, errors, and import results. | P1 |

## Regression Intelligence

| Skill | Responsibility | Priority |
| --- | --- | --- |
| [`change-impact-analysis`](../.agents/skills/change-impact-analysis/SKILL.md) | Identify behaviors and consumers affected by a code change. | P0 |
| [`regression-test-selection`](../.agents/skills/regression-test-selection/SKILL.md) | Select scenarios based on impact and risk. | P0 |
| [`behavior-parity-testing`](../.agents/skills/behavior-parity-testing/SKILL.md) | Compare behavior across builds, branches, or implementations. | P0 |
| [`test-reusability-analysis`](../.agents/skills/test-reusability-analysis/SKILL.md) | Find existing scenarios, specs, fixtures, and test assets. | P0 |
| [`coverage-gap-analysis`](../.agents/skills/coverage-gap-analysis/SKILL.md) | Identify important behaviors without sufficient evidence. | P1 |
| [`flaky-test-diagnostics`](../.agents/skills/flaky-test-diagnostics/SKILL.md) | Distinguish application, test, data, and environment causes. | P0 |
| [`test-maintainability-review`](../.agents/skills/test-maintainability-review/SKILL.md) | Identify duplicate, fragile, or over-engineered tests. | P1 |
| [`test-suite-optimization`](../.agents/skills/test-suite-optimization/SKILL.md) | Reduce runtime while preserving required coverage. | P1 |
| [`test-knowledge-curation`](../.agents/skills/test-knowledge-curation/SKILL.md) | Refresh reusable testing knowledge and identify stale assets. | P0 |

## Choose a route

- **Planning a change.** Map its impact, look for reusable checks, fill the gaps, then select the tests to run. For a refactor, compare behavior against the accepted baseline.
- **Testing a save.** Check form behavior and the request when they are part of the rule. Use a fresh backend read to verify persistence. Compare views if the same value must appear in several places. Use HAR replay for frontend behavior with stable responses.
- **Investigating a failure.** Start with [frontend diagnostics](frontend-diagnostics.md) or flaky-test diagnostics. After verification, use test knowledge curation to keep the scenario and evidence.

For agent discovery and commands, see [Playwright setup](playwright-setup.md).
