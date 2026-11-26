# Verification Record

Local verification used Node 22.12.0 and the locked dependencies. Run the commands below from the example directory.

| Checkpoint | Command | Observed result |
| --- | --- | --- |
| Foundation | `npm ci --engine-strict`, `npm run typecheck`, `npm run build`, `npx playwright install chromium`, `npm test -- tests/smoke.spec.ts` | Clean install, type check, production build, and Chromium smoke passed. Vite reported a chunk-size warning for the completed app build. |
| Reward rename | `npm test -- tests/reward-edit.spec.ts` | One passed. Correct reward, payload, fresh read, grid, panel, and unrelated reward checked. |
| Defect proof | `npm run test:proof` | Defective run exited 1 at the panel assertion. Corrected run exited 0 with the same spec. The proof command passed after checking both JSON reports. |
| Category deletion | `npm test -- tests/category-delete.spec.ts` | One passed. DELETE targeted Free Hats and the fresh branch and tree retained Emergency Lasers. |
| Goblin regression | `npm test -- tests/goblin-search.spec.ts` | One passed. The committed spec matches the code in the documentation. |
| CI and evidence | `npm test`, `npm run test:proof`, and `actionlint .github/workflows/reward-catalog.yml` from the root | Final suite passed all four tests with retries disabled. Suite and proof ran with a minimal process environment. Workflow lint passed. |

## Verifier Handoff

The stale-panel run completed the PATCH, fresh GET, grid, and unrelated-record assertions. At [the final panel assertion](tests/reward-edit.spec.ts#L72), Playwright expected `Duke of Snacks` and received `Sir Lump`. The proof mode deliberately reads a title captured before Save. The corrected mode uses the title from the detail query and passes the original assertion.

The normal suite produced four traces. The proof produced one trace for each variant. Read the HTML report or JSON from the corresponding directory:

- Full corrected suite: `test-results/corrected/`
- Defective proof: `test-results/proof/defective/`
- Corrected proof: `test-results/proof/corrected/`

The trace network records showed the loopback Vite origin and the Goblin spec's intercepted `rewards.test` origin. The application checks demonstrate browser behavior against the supplied HTTP fixtures. Backend persistence and authorization require integration coverage. The hosted GitHub Actions run is pending publication of the branch.

## What the Second Flow Reused

Category deletion uses the same package lock, bootstrap, React Query provider, browser lifecycle, test-scoped route fixture, and native reports and tracing. Its setup consists of a new 54-line category view, a 47-line scenario spec with its own synthetic records and handler, and a route in the app entry point. The category assertions stay in its spec and the shared fixture required zero changes.

An isolated seed and a targeted spec shorten reproduction. Separate API, grid, and panel assertions show where to investigate. The defective and corrected traces confirm that the same check catches the bug and accepts the repair. The scenario card and fixture are ready to reuse on the next change.
