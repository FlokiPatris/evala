class RegistrationPage {
  get firstName() {
    return cy.xpath("//input[@id='firstName']");
  }

  get lastName() {
    return cy.xpath("//input[@id='lastName']");
  }

  get email() {
    return cy.xpath("//input[@id='username']");
  }

  get password() {
    return cy.xpath("//input[@id='new-password']");
  }

  get showPassword() {
    return cy.xpath("//button[@title='Zobrazit heslo']");
  }

  get allowToProcessData() {
    return cy.xpath("(//div[@data-testid='CheckboxContainer']//div[@data-testid='Checkbox'])[1]");
  }

  get allowDataCollection() {
    return cy.xpath("(//div[@data-testid='CheckboxContainer']//div[@data-testid='Checkbox'])[2]");
  }

  get allowMarketingDataCollection() {
    return cy.xpath("(//div[@data-testid='CheckboxContainer']//div[@data-testid='Checkbox'])[3]");
  }

  get submitButton() {
    return cy.xpath("//button[@type='submit']");
  }

  get alreadyRegisteredLoginHere() {
    return cy.xpath("//span[@data-testid='BottomTextLabel']/following-sibling::a");
  }

  get backButton() {
    return cy.xpath("//a[@title='Zpět']");
  }
}

export default new RegistrationPage();