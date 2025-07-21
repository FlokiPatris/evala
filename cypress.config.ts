import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://app.evala.cz',
    specPattern: 'cypress/e2e/**/*.cy.ts',
    supportFile: 'cypress/support/e2e.ts',
  },
  experimentalStudio: true,
});
