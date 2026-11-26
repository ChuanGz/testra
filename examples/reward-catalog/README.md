# Reward Catalog Reference

This example runs two catalog flows in React, Ant Design, and TanStack Query. Playwright intercepts the application's API calls with a fresh in-memory store for each test. The Goblin search example runs its two responses in a separate, self-contained browser spec.

## Run locally

Use Node.js 22.12 or a newer supported Node release. From the repository root:

```sh
cd examples/reward-catalog
npm ci
npm run typecheck
npm run build
npx playwright install chromium
npm test
npm run test:proof
```

Playwright starts Vite itself. To watch a flow, run `npm test -- tests/reward-edit.spec.ts --headed`. A separate `npm run dev` session serves the frontend only. The test fixtures supply the API responses when Playwright opens it.

`npm run test:proof` runs the same reward rename spec twice. The defective run must fail at the named panel assertion with the old title. The corrected run must pass. The script checks Playwright's JSON reports so a startup error or unrelated assertion cannot satisfy the proof.

## Read the evidence

- [Scenario cards and test plans](scenarios.md)
- [Verification record and Verifier handoff](verification.md)
- [Project context and working rules](AGENTS.md)

Playwright writes HTML, JSON, and traces under `test-results/`. The GitHub Actions workflow runs the suite and the proof, then uploads the evidence directory.
