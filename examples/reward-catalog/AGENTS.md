# Reward Catalog Context and Working Rules

This is a fictional application for the Testra reference. The agreed rules live in [scenarios.md](scenarios.md). The Verifier turns those rules into checks and explains what the evidence proves. The human owner confirms changes to expected behavior.

- Use the package lock, shared Playwright config, and the built-in browser context per test.
- Keep the synthetic records and HTTP handlers owned by each scenario. The shared fixture installs the handler, while the scenario defines what the backend returns.
- Keep business assertions in the spec. Observe requests before triggering an action, then check what the browser renders. Use web-first assertions and keep unrelated fixture records visible when a rule requires them to survive.
- Preserve the Goblin spec from [the documentation](../../docs/samples.md#run-the-goblin-race). Keep the reward rename proof tied to the same spec and expected title across both runs.
- Store generated reports and traces under `test-results/`. Record findings and scope in [verification.md](verification.md). Backend or database guarantees require a separate integration test.
