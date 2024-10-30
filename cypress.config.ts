import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000', // Set your application URL
    setupNodeEvents(on, config) {
      // Add custom plugins or event listeners here
    },
    supportFile: 'cypress/support/e2e.ts',
  }
});