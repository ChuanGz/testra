# Testra

**Test faster. Verify smarter. Improve continuously.**

Testra is a collection of skills and examples for testing web applications with an AI agent and Playwright. Use it to decide what to test, run focused checks, and leave enough evidence for someone else to review the result.

Use your own agent as the **Verifier**. It can plan tests, write specs, and investigate failures. Playwright runs the specs and evaluates their assertions. The person responsible for the work decides what behavior is acceptable and what the evidence proves.

## Start here

1. Pick one important flow or a specific change. Write down the expected behavior and find any test that already covers it.
2. Use the [Playwright setup guide](docs/playwright-setup.md) from the application repository. Reuse its test runner, fixtures, and sign-in setup.
3. Try the [sample scenarios](docs/samples.md). The search example has a runnable Playwright spec that uses its own page and responses.
4. Use the [skill catalog](docs/regression-skills.md) to plan regression checks, or [frontend diagnostics](docs/frontend-diagnostics.md) to investigate a failure.

## How Testra is designed

- [Design intent](docs/intent.md) explains what to retain after each test run.
- [The Verifier role](docs/verifier.md) defines what the agent hands back to the person making the decision.
- [Design principles](docs/principles.md) cover test design, verification, and repair.

## Repository policy

Testra is shared as a public reference. Issue reporting, pull requests, and contributions are closed. See the [self-service guide](SUPPORT.md) and [disclaimer](DISCLAIMER.md). The repository currently has no project license.
