import { defineConfig } from '@playwright/test';

const baseURL = 'http://127.0.0.1:4178';
const stalePanel = process.env.TEST_STALE_PANEL === '1';
const reportRoot = process.env.TEST_PROOF === '1' ? 'test-results/proof' : 'test-results';
const results = `${reportRoot}/${stalePanel ? 'defective' : 'corrected'}`;

export default defineConfig({
  testDir: './tests',
  retries: 0,
  outputDir: `${results}/artifacts`,
  preserveOutput: 'always',
  reporter: [
    ['list'],
    ['html', { outputFolder: `${results}/html`, open: 'never' }],
    ['json', { outputFile: `${results}/report.json` }],
  ],
  use: { baseURL, browserName: 'chromium', trace: 'on', serviceWorkers: 'block' },
  webServer: {
    command: 'npm run dev -- --host 127.0.0.1 --port 4178 --strictPort',
    url: baseURL,
    env: { VITE_STALE_PANEL_PROOF: stalePanel ? '1' : '0' },
  },
});
