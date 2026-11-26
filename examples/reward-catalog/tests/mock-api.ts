import { test as base } from '@playwright/test';
import type { Route } from '@playwright/test';

type HandleRequest = (route: Route) => Promise<void>;

export const test = base.extend<{ mockApi: (handle: HandleRequest) => Promise<void> }>({
  mockApi: async ({ context, baseURL }, use) => {
    const origin = new URL(baseURL!).origin;
    await use(async handle => {
      // Each flow installs its own handler and closes over its own test data.
      await context.route(
        url => url.origin === origin && url.pathname.startsWith('/api/'),
        handle,
      );
    });
  },
});
