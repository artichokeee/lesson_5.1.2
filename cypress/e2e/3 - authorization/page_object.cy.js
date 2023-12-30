import { LoginPage } from "../../pages/loginPage";
import { ChangePasswordPage } from "../../pages/changePasswordPage";

import { faker } from "@faker-js/faker";

beforeEach(() => {
  cy.visit("/account/login");
});

describe.only("Verifier - Login UI", () => {
  it.only("user cannot login with old password", () => {
    let loginPage = new LoginPage();
    let changePasswordPage = new ChangePasswordPage();
    let username = Cypress.env("LOGIN");
    let oldPassword = Cypress.env("PASSWORD");
    let newPassword = faker.internet.password();

    loginPage.login(username, oldPassword);
    cy.contains("Swagger").should("be.visible");
    cy.logout();

    cy.visit("/account/login");
    changePasswordPage.changePassword(username, oldPassword, newPassword);
    cy.logout();

    cy.visit("/account/login");
    loginPage.login(username, newPassword);
    cy.contains("Swagger").should("be.visible");
    cy.logout();

    cy.visit("/account/login");
    loginPage.login(username, oldPassword);
    cy.checkText(
      "#login-page > div > form > div.modal-body > div.row > div:nth-child(1) > div > span > strong",
      "Failed to sign in!"
    );

    cy.visit("/account/login");
    changePasswordPage.changePassword(username, newPassword, oldPassword);
    cy.wait(5000);
    cy.logout();
  });
});
