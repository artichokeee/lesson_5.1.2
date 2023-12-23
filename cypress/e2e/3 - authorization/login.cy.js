const passwordData = require("../../fixtures/passwords.json");
const loginData = require("../../fixtures/logins.json");

beforeEach(() => {
  cy.visit("/login");
});

describe("Checks For Login", () => {
  it("successful login", () => {
    cy.login(Cypress.env("LOGIN"), Cypress.env("PASSWORD"));
    cy.checkText("#task-heading > span", "Tasks");
  });

  it("unsuccessful login with invalid username", () => {
    loginData[0].forEach((item) => {
      cy.invalidLogin(item);
    });
  });

  it("unsuccessful login with invalid password", () => {
    passwordData[0].forEach((item) => {
      cy.invalidPassword(item);
    });
  });

  it("unsuccessful login with empty fields", () => {
    cy.login(" ", " ");
    cy.checkText(
      "#login-page > div > form > div.modal-body > div.row > div:nth-child(1) > div > span",
      loginData[0][0].exp
    );
  });

  it("redirection to 'forget your password' page", () => {
    cy.clickElement("Did you forget your password?");
    cy.checkUrl("/account/reset/request");
  });

  it("redirection to 'registration' page", () => {
    cy.clickElement("Register a new account");
    cy.checkUrl("/account/register");
  });
});
