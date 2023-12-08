beforeEach(() => {
  cy.visit("/login");
});

describe("Checks For Login", () => {
  it("successful login", () => {
    cy.get("#username").type(Cypress.env("LOGIN"));
    cy.get("#password").type(Cypress.env("PASSWORD"));
    cy.clickElement(
      "#login-page > div > form > div.modal-footer > button.btn.btn-primary"
    );
    cy.checkText("#task-heading > span", "Tasks");
  });

  it("unsuccessful login with wrong username", () => {
    cy.get("#username").type("test_user");
    cy.get("#password").type(Cypress.env("PASSWORD"));
    cy.clickElement(
      "#login-page > div > form > div.modal-footer > button.btn.btn-primary"
    );
    cy.checkText(
      "#login-page > div > form > div.modal-body > div.row > div:nth-child(1) > div > span",
      "Failed to sign in! Please check your credentials and try again."
    );
  });

  it("unsuccessful login with wrong password", () => {
    cy.get("#username").type(Cypress.env("LOGIN"));
    cy.get("#password").type(34566);
    cy.clickElement(
      "#login-page > div > form > div.modal-footer > button.btn.btn-primary"
    );
    cy.checkText(
      "#login-page > div > form > div.modal-body > div.row > div:nth-child(1) > div > span",
      "Failed to sign in! Please check your credentials and try again."
    );
  });

  it("unsuccessful login with empty fields", () => {
    cy.get("#username").type(" ");
    cy.get("#password").type(" ");
    cy.clickElement(
      "#login-page > div > form > div.modal-footer > button.btn.btn-primary"
    );
    cy.checkText(
      "#login-page > div > form > div.modal-body > div.row > div:nth-child(1) > div > span",
      "Failed to sign in! Please check your credentials and try again."
    );
  });

  it.only("redirection to 'forget your password' page", () => {
    cy.clickElement(
      "#login-page > div > form > div.modal-body > div:nth-child(3) > a > span"
    );
    cy.checkUrl("/account/reset/request");
  });

  it.only("redirection to 'registration' page", () => {
    cy.clickElement(
      "#login-page > div > form > div.modal-body > div:nth-child(4) > a > span"
    );
    cy.checkUrl("/account/register");
  });
});
