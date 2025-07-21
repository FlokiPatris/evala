import registrationPage from 'pages/RegistrationPage';
import { registrationTestCases } from 'testData/registrationTestCases';
import { fillField } from 'utils/form'

describe('Evala Registration Flow', () => {
  beforeEach(() => {
    cy.visit('https://app.evala.cz/login/register');
  });

  registrationTestCases.forEach(({ description, inputs, expectedAlert }) => {
    it(`Attempt to submit registration using: ${description}`, () => {
      fillField(registrationPage.firstName, inputs.name);
      fillField(registrationPage.lastName, inputs.surname);
      fillField(registrationPage.email, inputs.email);
      fillField(registrationPage.password, inputs.password);
      registrationPage.submitButton.click();

      // Validate if expected alert msg popped up.
      cy.contains(expectedAlert).should('be.visible');
    });
  });
});