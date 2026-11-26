import { expect } from '@playwright/test';
import { test } from './mock-api';

test('REWARD-TREE-001 removes only the deleted category from the refreshed branch', async ({ page, mockApi }) => {
  const categories = new Map([
    ['free-hats', { id: 'free-hats', name: 'Free Hats' }],
    ['emergency-lasers', { id: 'emergency-lasers', name: 'Emergency Lasers' }],
  ]);

  await mockApi(async route => {
    const request = route.request();
    const url = new URL(request.url());

    if (request.method() === 'GET' && url.pathname === '/api/categories' && url.searchParams.get('parent') === 'events') {
      return route.fulfill({ json: [...categories.values()] });
    }
    if (request.method() === 'DELETE' && url.pathname.startsWith('/api/categories/')) {
      const id = url.pathname.slice('/api/categories/'.length);
      if (categories.delete(id)) {
        return route.fulfill({ status: 204 });
      }
    }

    return route.fulfill({ status: 404, json: { error: 'Unknown category request' } });
  });

  await page.goto('/categories');
  const tree = page.getByRole('tree');
  await expect(tree.getByText('Free Hats', { exact: true })).toBeVisible();
  await expect(tree.getByText('Emergency Lasers', { exact: true })).toBeVisible();

  const deletion = page.waitForResponse(response =>
    response.request().method() === 'DELETE' && new URL(response.url()).pathname.startsWith('/api/categories/'));
  const refreshed = page.waitForResponse(response =>
    response.request().method() === 'GET' && new URL(response.url()).pathname === '/api/categories');
  await tree.getByRole('button', { name: 'Delete Free Hats' }).click();

  const removed = await deletion;
  expect(new URL(removed.url()).pathname).toBe('/api/categories/free-hats');
  expect(removed.status()).toBe(204);
  const freshBranch = await refreshed;
  expect(new URL(freshBranch.url()).searchParams.get('parent')).toBe('events');
  expect(freshBranch.status()).toBe(200);
  expect(await freshBranch.json()).toEqual([{ id: 'emergency-lasers', name: 'Emergency Lasers' }]);
  await expect(tree.getByText('Free Hats', { exact: true })).toHaveCount(0);
  await expect(tree.getByText('Emergency Lasers', { exact: true })).toBeVisible();
});
