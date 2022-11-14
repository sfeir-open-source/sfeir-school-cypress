import { defineConfig } from 'cypress';
import { nxE2EPreset } from '@nrwl/cypress/plugins/cypress-preset';

const cypressJsonConfig = {
  fileServerFolder: '.',
  fixturesFolder: './src/fixtures',
  video: false,
  videosFolder: '../../../dist/cypress/apps/react/solution-e2e/videos',
  screenshotsFolder: '../../../dist/cypress/apps/react/solution-e2e/screenshots',
  chromeWebSecurity: false,
  viewportWidth: 1280,
  viewportHeight: 760,
  env: {
    NX_API_URL_BOOKS: 'http://localhost:3333/api',
    NX_API_URL_CART: 'http://localhost:3333/api',
    NX_API_URL_USER: 'http://localhost:3333/api',
  },
  specPattern: 'src/e2e/**/*.cy.{js,jsx,ts,tsx}',
  supportFile: 'src/support/e2e.ts',
};
export default defineConfig({
  e2e: {
    ...nxE2EPreset(__dirname),
    ...cypressJsonConfig,
  },
});
