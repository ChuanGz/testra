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
