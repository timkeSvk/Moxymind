// @ts-check
import { defineConfig, devices, expect } from '@playwright/test';
import { TIMEOUT } from 'dns';
import { url } from 'inspector';
import { report } from 'process';


/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  reporter: 'html',
  timeout: 30000,
  workers: 5,
  use: {
    browserName: 'chromium',
    headless: false,
    screenshot: 'on',
    trace: 'retain-on-failure',
  }
});

module.exports = config;