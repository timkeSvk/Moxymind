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
  timeout: 300000,
  workers: 5,
  projects: [
    {
      name: 'chrome',
      use: {
        browserName: 'chromium',
        headless: false,
        screenshot: 'on',
        trace: 'on',
      }
    },
    {
      name: 'firefox',
      use: {
        browserName: 'firefox',
        headless: false,
        screenshot: 'on',
        trace: 'on',
      }
    },
    {
      name: 'safari',
      use: {
        browserName: 'webkit',
        headless: false,
        screenshot: 'on',
        trace: 'on',
      }
    },
    {
      name: 'iPhone',
      use: {
        browserName: 'webkit',
        headless: false,
        screenshot: 'on',
        trace: 'on',
        ...devices['iPhone 15']
      }
    },
    {
      name: 'samsung',
      use: {
        browserName: 'chromium',
        headless: false,
        screenshot: 'on',
        trace: 'on',
        ...devices['Galaxy S8']
      }
    },
    {
      name: 'api',
      use: {
        baseURL: 'https://reqres.in/',
        extraHTTPHeaders: {"x-api-key": "reqres-free-v1"},
        trace: 'on'
      }
    }
  ]
});

module.exports = config;