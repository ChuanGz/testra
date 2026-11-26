# Scenario Cards

Commands below run from the example directory after installing dependencies and Chromium.

## REWARD-EDIT-001 · Sir Lump gets a promotion

- **Rule.** After saving a reward and reloading, both the grid and detail panel show the saved title for that reward.
- **Setup.** The stateful mock starts with `reward-001` as Sir Lump and `reward-002` as Moon Cheese. The selected reward ID stays in the URL so reload opens the same panel.
- **Action.** Open Sir Lump's panel, rename it to Duke of Snacks, save, and reload.
- **Test plan.** Check that PATCH targets `reward-001` with the new title. Observe a fresh detail GET after reload. Assert the new title in the grid and panel separately, and assert Moon Cheese still appears in the API result and grid.
- **Layer and limit.** This browser check verifies the frontend contract against a test-scoped HTTP store. Database persistence requires a backend integration test.
- **Run.** `npm test -- tests/reward-edit.spec.ts` and `npm run test:proof`.
- **Result.** Corrected run passed. The defective run failed at the panel value assertion with Sir Lump, after the API and grid checks passed.
- **Evidence.** `test-results/proof/corrected/` and `test-results/proof/defective/`. [Spec](tests/reward-edit.spec.ts)

## REWARD-TREE-001 · The tree ate the wrong branch

- **Rule.** Deleting an eligible category reloads its branch and removes only that category.
- **Setup.** The category handler seeds two siblings under `events`, Free Hats and Emergency Lasers.
- **Action.** Delete Free Hats in the tree.
- **Test plan.** Check that DELETE targets `free-hats`, then capture the fresh branch GET. Check that Emergency Lasers is the sole returned record. Assert each sibling's expected presence in the tree.
- **Layer and limit.** This browser check verifies frontend request and rendering behavior with the category mock. Backend deletion and authorization require integration coverage.
- **Run.** `npm test -- tests/category-delete.spec.ts`.
- **Result.** Passed.
- **Evidence.** `test-results/corrected/report.json` and the category trace under `test-results/corrected/artifacts/`. [Spec](tests/category-delete.spec.ts)

## REWARD-SEARCH-001 · The slow goblin

- **Rule.** The newest search results stay visible when an older response arrives late.
- **Setup and action.** Route the page and search requests inside the browser test. Hold the first result, submit the more specific query, then release the old response.
- **Test plan.** Assert Goblin Accountant before releasing the old response and again after the UI handles both responses.
- **Layer and limit.** This example tests response order in its supplied page. A production search implementation needs its own application check.
- **Run.** `npm test -- tests/goblin-search.spec.ts`.
- **Result.** Passed.
- **Evidence.** `test-results/corrected/report.json` and the search trace under `test-results/corrected/artifacts/`. [Spec](tests/goblin-search.spec.ts) · [Original example](../../docs/samples.md#run-the-goblin-race)
