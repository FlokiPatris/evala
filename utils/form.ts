export function fillField(
  selector: Cypress.Chainable<JQuery<HTMLElement>>,
  value?: string
): void {
  if (value !== undefined) {
    selector.clear();
    if (value !== '') {
      cy.log(`🔹 Typing into field with value: "${value}"`);
      selector.type(value);
    } else {
      cy.log(`🔹 Leaving field empty`);
    }
  }
}