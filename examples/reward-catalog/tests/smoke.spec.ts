import { expect } from '@playwright/test';
import { test } from './mock-api';

test('opens the reward catalog', async ({ page, mockApi }) => {
  await mockApi(route => route.fulfill({ json: [{ id: 'smoke-001', title: 'Preview Reward' }] }));
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Reward Catalog', exact: true })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Preview Reward', exact: true })).toBeVisible();
});
