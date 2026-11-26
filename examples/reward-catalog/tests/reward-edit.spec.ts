import { expect } from '@playwright/test';
import { test } from './mock-api';

test('REWARD-EDIT-001 shows the saved reward title in both views after reload', async ({ page, mockApi }) => {
  const rewards = new Map([
    ['reward-001', { id: 'reward-001', title: 'Sir Lump' }],
    ['reward-002', { id: 'reward-002', title: 'Moon Cheese' }],
  ]);

  await mockApi(async route => {
    const request = route.request();
    const pathname = new URL(request.url()).pathname;

    if (request.method() === 'GET' && pathname === '/api/rewards') {
      return route.fulfill({ json: [...rewards.values()] });
    }

    const id = pathname.replace('/api/rewards/', '');
    const reward = pathname.startsWith('/api/rewards/') && rewards.get(id);
    if (reward && request.method() === 'GET') {
      return route.fulfill({ json: reward });
    }
    if (reward && request.method() === 'PATCH') {
      const { title } = request.postDataJSON();
      if (typeof title !== 'string' || !title.trim()) {
        return route.fulfill({ status: 400, json: { error: 'A title is required' } });
      }
      const updated = { ...reward, title };
      rewards.set(id, updated);
      return route.fulfill({ json: updated });
    }

    return route.fulfill({ status: 404, json: { error: 'Unknown reward request' } });
  });

  await page.goto('/');
  const row = page.getByRole('row').filter({
    has: page.getByRole('cell', { name: 'reward-001', exact: true }),
  });
  const unrelated = page.getByRole('row').filter({
    has: page.getByRole('cell', { name: 'reward-002', exact: true }),
  });
  await expect(unrelated.getByRole('cell', { name: 'Moon Cheese', exact: true })).toBeVisible();
  await row.getByRole('button', { name: 'Edit Sir Lump' }).click();

  const panel = page.getByRole('dialog', { name: 'Edit reward' });
  const title = panel.getByRole('textbox', { name: 'Reward title' });
  await expect(title).toHaveValue('Sir Lump');
  await title.fill('Duke of Snacks');

  const mutation = page.waitForResponse(response =>
    response.request().method() === 'PATCH' && new URL(response.url()).pathname.startsWith('/api/rewards/'));
  await panel.getByRole('button', { name: 'Save', exact: true }).click();
  const write = await mutation;
  expect(new URL(write.url()).pathname).toBe('/api/rewards/reward-001');
  expect(write.request().postDataJSON()).toEqual({ title: 'Duke of Snacks' });
  expect(write.status()).toBe(200);
  await expect(panel.getByRole('status')).toHaveText('Reward saved');

  const detailAfterReload = page.waitForResponse(response =>
    response.request().method() === 'GET' && new URL(response.url()).pathname === '/api/rewards/reward-001');
  const gridAfterReload = page.waitForResponse(response =>
    response.request().method() === 'GET' && new URL(response.url()).pathname === '/api/rewards');
  await page.reload();

  const read = await detailAfterReload;
  expect(read.status()).toBe(200);
  expect(await read.json()).toEqual({ id: 'reward-001', title: 'Duke of Snacks' });
  expect(await (await gridAfterReload).json()).toContainEqual({ id: 'reward-002', title: 'Moon Cheese' });
  await expect(row.getByRole('cell', { name: 'Duke of Snacks', exact: true })).toBeVisible();
  await expect(unrelated.getByRole('cell', { name: 'Moon Cheese', exact: true })).toBeVisible();
  await expect(title, 'REWARD-EDIT-001 detail panel title after reload').toHaveValue('Duke of Snacks');
});
