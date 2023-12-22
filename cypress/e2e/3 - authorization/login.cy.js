// const passwordData = require("/Users/rusau/Documents/js_course/hw/lesson_5.1.2/cypress/fixtures/passwords.json");
// const loginData = require("/Users/rusau/Documents/js_course/hw/lesson_5.1.2/cypress/fixtures/logins.json");

const passwordData = require("../");

beforeEach(() => {
  cy.visit("/login");
});

describe("Checks For Login", () => {
  it("successful login", () => {
    cy.validLogin();
    cy.checkText("#task-heading > span", "Tasks");
  });

  it.only("unsuccessful login with invalid username", () => {
    const loginField = "#username";
    loginData.forEach((item) => {
      cy.visit("/login");
      cy.get("#password").type(Cypress.env("PASSWORD"));
      cy.enterText(loginField, item);
      cy.get(
        "#login-page > div > form > div.modal-footer > button.btn.btn-primary > span"
      ).click();
      cy.contains("Failed to sign in!").should("be.visible");
      cy.clearText(loginField);
    });
  });

  it.only("unsuccessful login with invalid password", () => {
    cy.visit("/login");
    cy.get("#username").type(Cypress.env("LOGIN"));
    const inputField = '[data-cy="password"]';
    passwordData.forEach((item) => {
      cy.enterText(inputField, item);
      cy.get(
        "#login-page > div > form > div.modal-footer > button.btn.btn-primary > span"
      ).click();
      cy.contains("Failed to sign in!").should("be.visible");
      cy.clearText(inputField);
    });
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

  it("redirection to 'forget your password' page", () => {
    cy.clickElement(
      "#login-page > div > form > div.modal-body > div:nth-child(3) > a > span"
    );
    cy.checkUrl("/account/reset/request");
  });

  it.only("redirection to 'registration' page", () => {
    cy.clickElement("Register a new account");
    cy.checkUrl("/account/register");
  });
});
