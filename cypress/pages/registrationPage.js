export class RegistrationPage {
  elements = {
    loginField: () => cy.get("#username"),
    emailField: () => cy.get("#email"),
    firstPasswordField: () => cy.get("#firstPassword"),
    secondPasswordField: () => cy.get("#secondPassword"),
    registerButton: () => cy.get("#register-submit"),
  };

  register(username, email, firstPassword, secondPassword) {
    this.elements.loginField().type(username);
    this.elements.emailField().type(email);
    this.elements.firstPasswordField().type(firstPassword);
    this.elements.secondPasswordField().type(secondPassword);
    this.elements.registerButton().click();
  }
}
