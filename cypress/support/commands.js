// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("clearText", (selector) => {
  cy.get(selector).clear();
});

// Cypress.Commands.add("checkElement", (selector) => {
//   cy.get(selector).should("be.visible");
// });

Cypress.Commands.add("clickElement", (selector) => {
  cy.get(selector).click();
});

Cypress.Commands.add("checkUrl", (text) => {
  const baseUrl = Cypress.config("baseUrl");
  cy.url().should("eq", baseUrl + text);
});

Cypress.Commands.add("checkClass", (selector, classValue) => {
  cy.get(selector).should("have.class", classValue);
});

Cypress.Commands.add("checkCSS", (selector, property, value) => {
  cy.get(selector).should("have.css", property, value);
});

Cypress.Commands.add("checkTextUrl", (menu, subMenu, text, endpoint) => {
  const baseUrl = Cypress.config("baseUrl");
  cy.contains(menu).click();
  cy.contains(subMenu).click();
  cy.contains(text).should("be.visible");
  cy.url().should("eq", baseUrl + endpoint);
});

Cypress.Commands.add("checkTextUrl", (menu, subMenu, text, endpoint) => {
  const baseUrl = Cypress.config("baseUrl");
  cy.contains(menu).click();
  cy.contains(subMenu).click();
  cy.contains(text).should("be.visible");
  cy.url().should("eq", baseUrl + endpoint);
});

Cypress.Commands.add("checkText", (selector, text) => {
  cy.get(selector).should("have.text", text);
});

Cypress.Commands.add("clickElement", (element) => {
  cy.contains(element).click();
});

Cypress.Commands.add("validLogin", () => {
  cy.visit("/login");
  cy.get("#username").type(Cypress.env("LOGIN"));
  cy.get("#password").type(Cypress.env("PASSWORD"));
  cy.get(
    "#login-page > div > form > div.modal-footer > button.btn.btn-primary > span"
  ).click();
});

Cypress.Commands.add("invalidLogin", (username) => {
  cy.visit("/login");
  cy.get("#password").type(Cypress.env("password"));
  cy.get("#username").type(username);
  cy.get(
    "#login-page > div > form > div.modal-footer > button.btn.btn-primary > span"
  ).click();
});

Cypress.Commands.add("invalidPassword", () => {
  const inputField = "Password";
  cy.visit("/login");
  cy.get("#username").type(Cypress.env("LOGIN"));

  passwordData.forEach((item) => {
    cy.enterText(inputField, item);
    cy.get(
      "#login-page > div > form > div.modal-footer > button.btn.btn-primary > span"
    ).click();
  });
});

Cypress.Commands.add("enterText", (selector, text) => {
  cy.get(selector).type(`${text}{enter}`);
});
