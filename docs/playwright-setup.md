# Playwright Setup

Run commands in the application repository that owns the tests. Find its setup instructions, package manager, Playwright config, sign-in fixture, and test URL first. Use an approved test environment and synthetic records for flows that write or delete data.

## Find the skills in your agent

Start the agent in the Testra checkout or make the skill folders available in your application workspace. **Codex** and **Gemini CLI** read `.agents/skills/`. **Claude Code** reads the aliases in `.claude/skills/`. Those aliases point to the same files. If your checkout stores symlinks as text, copy the corresponding canonical skill directories to the Claude path in place of the alias files. [Codex](https://learn.chatgpt.com/docs/build-skills#where-codex-loads-local-skills) · [Gemini CLI](https://geminicli.com/docs/cli/skills/) · [Claude Code](https://code.claude.com/docs/en/skills#choose-where-skills-load)

Try this prompt with a real requirement or a [sample scenario](samples.md).

> Act as the Verifier. Tell me what result would prove this requirement, find any reusable tests, and propose a focused plan. Ask one question if an important outcome is unclear. If implementation is in scope, run the spec and show me the assertion or trace that supports the result.

## Explore the flow

Use an existing browser tool first. The **Agent CLI** is useful from a shell. **Playwright MCP** offers similar browser actions through the agent's tool interface. Use either to read the screen, then write a Playwright spec for repeatable assertions. [Playwright CLI introduction](https://playwright.dev/agent-cli/introduction)

### Agent CLI

Use Node.js 20 or newer. If your project already has Playwright 1.59 or newer, use its CLI. Set `PLAYWRIGHT_BASE_URL` to the test environment before opening the browser. [Agent CLI installation](https://playwright.dev/agent-cli/installation)

```sh
npx --no-install playwright --version
npx playwright cli --help
npx playwright cli install
npx playwright cli -s=verify open "$PLAYWRIGHT_BASE_URL"
npx playwright cli -s=verify snapshot
npx playwright cli -s=verify close
```

If you need the standalone CLI in an npm workspace, install it with `npm install --save-dev @playwright/cli` and replace `npx playwright cli` with `npm exec -- playwright-cli`. The optional official CLI skill can be installed with `npx playwright cli install --skills=agents` or `npx playwright cli install --skills=claude`. [Official Playwright CLI skills](https://playwright.dev/agent-cli/skills)

Use [browser workflows](../.agents/skills/browser-workflows/SKILL.md) to keep related actions in a signed-in tab and assign independent work to separate tabs.

### MCP

Reuse an existing connection or add this standard server entry to your client. Reload the client when it needs to discover the tools. Open a known test page with `browser_navigate` and inspect the returned snapshot. [MCP installation](https://playwright.dev/mcp/installation)

```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": ["-y", "@playwright/mcp@latest"]
    }
  }
}
```

## Write and run the test

Use the repository's runner and config. In an npm project that needs a new test runner, install it and the browser for the intended test. [Playwright Test installation](https://playwright.dev/docs/intro)

```sh
npm install --save-dev @playwright/test
npx playwright install chromium
```

Use a [scenario card](samples.md) to specify the fixture, action, and assertion. Keep setup, cleanup, and reusable sign-in in fixtures. Start with [the goblin race spec](samples.md#run-the-goblin-race) if you want a test with its own page and responses. Then run the targeted test in the application repository. For example:

```sh
npx playwright test tests/goblin-search.spec.ts --trace on
npx playwright show-trace path/to/trace.zip
```

Report the expected behavior, the exact command, the result, and any useful trace. Keep the spec runnable without an agent. For next steps, use the [regression skill catalog](regression-skills.md) or [frontend diagnostics](frontend-diagnostics.md). [Test command line](https://playwright.dev/docs/test-cli) · [Trace Viewer](https://playwright.dev/docs/trace-viewer)
