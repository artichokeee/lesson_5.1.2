const loginPageElements = require("../../fixtures/pages/loginPageSelectors.json");
const changePasswordElements = require("../../fixtures/pages/changePasswordSelectors.json");

import { faker } from "@faker-js/faker";

describe("Verifier - Login UI", () => {
  it("user cannot login with old password", () => {
    let username = Cypress.env("LOGIN");
    let oldPassword = Cypress.env("PASSWORD");
    let newPassword = faker.internet.password();

    cy.visit("/account/login");
    cy.login(username, oldPassword);
    cy.contains("Swagger").should("be.visible");
    cy.logout();

    cy.visit("/account/login");
    cy.changePassword(username, oldPassword, newPassword);
    cy.logout();

    cy.visit("/account/login");
    cy.login(username, newPassword);
    cy.contains("Swagger").should("be.visible");
    cy.logout();

    cy.visit("/account/login");
    cy.login(username, oldPassword);
    cy.checkText(
      "#login-page > div > form > div.modal-body > div.row > div:nth-child(1) > div > span > strong",
      "Failed to sign in!"
    );

    cy.visit("/account/login");
    cy.changePassword(username, newPassword, oldPassword);
    cy.wait(5000);
    cy.logout();
  });
});
