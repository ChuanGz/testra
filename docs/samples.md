# Sample Scenarios

The setting is a fictional game's reward catalog. Each story gives the Verifier something specific to prove.

## The tree ate the wrong branch

The festival is over. Someone deletes the empty **Free Hats** category, and the neighboring **Emergency Lasers** category disappears too. Now nobody has hats or lasers.

- **Rule `REWARD-TREE-001`.** Deleting an eligible category refreshes its branch and removes only that category.
- **Run it.** Seed both siblings and confirm they appear. Delete Free Hats and observe the next API read for that branch.
- **Prove it.** The fresh response and the rendered tree both omit Free Hats and still contain Emergency Lasers.
- **Use.** [Network interception](../.agents/skills/network-interception/SKILL.md) and [UI behavior testing](../.agents/skills/ui-behavior-testing/SKILL.md).

## Sir Lump gets a promotion

Sir Lump has become the **Duke of Snacks**. The grid celebrates. His own detail panel still calls him Sir Lump after reload.

- **Rule `REWARD-EDIT-001`.** Both views show the saved title for the same reward after reload.
- **Run it.** Seed Sir Lump, keep its ID, rename it from the detail panel, save, and reload through the app's normal flow.
- **Prove it.** Assert Duke of Snacks in the grid row and detail panel separately. If one differs, read the reward by ID to see whether the saved value or the view is stale.
- **Use.** [Data consistency testing](../.agents/skills/data-consistency-testing/SKILL.md) and [data persistence testing](../.agents/skills/data-persistence-testing/SKILL.md).

## The slow goblin wins the race

A player searches for **goblin**, then narrows it to **goblin accountant**. The accountant arrives first. Just as the player reaches for the tax forms, the old goblin list barges back in.

- **Rule `REWARD-SEARCH-001`.** Results reflect the latest submitted query after older requests finish.
- **Run it.** Hold the first response. Submit the specific query and let it finish, then release the first response.
- **Prove it.** The list still shows Goblin Accountant after both responses have been handled.
- **Use.** [Async behavior testing](../.agents/skills/async-behavior-testing/SKILL.md). [Run this example](#run-the-goblin-race).

## The treasure chest has a short memory

A player claims a chest. The server saves the claim, but the response times out. The player tries again. Two piles of gold would be a generous apology and a bad regression.

- **Rule `REWARD-CLAIM-001`.** Retrying an already committed claim grants the reward only once.
- **Run it.** Seed one unclaimed chest. In an integration test with a real test backend, let the first claim commit and simulate losing its response. Retry through the normal UI.
- **Prove it.** The UI reaches the claimed state, and the authoritative reward history has one grant for the claim. A mocked browser check can verify the recovery message and retry action.
- **Use.** [API error recovery testing](../.agents/skills/api-error-recovery-testing/SKILL.md) and [data persistence testing](../.agents/skills/data-persistence-testing/SKILL.md).

## Run the goblin race

With Playwright Test and Chromium installed, save this as `tests/goblin-search.spec.ts` and run `npx playwright test tests/goblin-search.spec.ts`. Playwright serves the page and both responses from the test, so the example runs without a separate app or backend. See [Playwright setup](playwright-setup.md).

```ts
import { expect, test } from '@playwright/test';

test('a late response cannot replace the latest search results', async ({ page }) => {
  const origin = 'https://rewards.test';
  let releaseOldResponse = () => {};
  const holdOldResponse = new Promise<void>(resolve => { releaseOldResponse = resolve; });

  await page.route(origin + '/', route => route.fulfill({
    contentType: 'text/html',
    body: `
      <form><label>Search rewards <input name="query"></label><button>Search</button></form>
      <p id="result"></p><p role="status"></p>
      <script>
        let latest = 0;
        let completed = 0;
        document.querySelector('form').onsubmit = async event => {
          event.preventDefault();
          const id = ++latest;
          const query = new FormData(event.target).get('query');
          const response = await fetch('/search?q=' + encodeURIComponent(query));
          const { title } = await response.json();
          if (id === latest) document.querySelector('#result').textContent = title;
          document.querySelector('[role=status]').textContent = 'Completed ' + ++completed;
        };
      </script>`,
  }));

  await page.route(url => url.origin === origin && url.pathname === '/search', async route => {
    const oldSearch = new URL(route.request().url()).searchParams.get('q') === 'goblin';
    if (oldSearch) await holdOldResponse;
    await route.fulfill({ json: { title: oldSearch ? 'Goblin Guard' : 'Goblin Accountant' } });
  });

  try {
    await page.goto(origin + '/');
    const input = page.getByRole('textbox', { name: 'Search rewards' });
    const search = page.getByRole('button', { name: 'Search' });
    const oldRequest = page.waitForRequest(request => request.url() === origin + '/search?q=goblin');

    await input.fill('goblin');
    await search.click();
    await oldRequest;
    await input.fill('goblin accountant');
    await search.click();

    await expect(page.locator('#result')).toHaveText('Goblin Accountant');
    releaseOldResponse();
    await expect(page.getByRole('status')).toHaveText('Completed 2');
    await expect(page.locator('#result')).toHaveText('Goblin Accountant');
  } finally {
    releaseOldResponse();
  }
});
```
