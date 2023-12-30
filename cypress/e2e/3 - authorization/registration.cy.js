import { faker } from "@faker-js/faker";
const loginData = require("../../fixtures/logins.json");
const emailData = require("../../fixtures/emails.json");
const passwordData = require("../../fixtures/passwords.json");
const registrationData = require("../../fixtures/registration.json");

beforeEach(() => {
  cy.visit("/account/register");
});

describe("General Checks For Registration", () => {
  it("successful registration of a new user", () => {
    cy.register(
      faker.internet.userName(),
      faker.internet.email(),
      faker.internet.password(),
      faker.internet.password()
    );
  });

  it("registration: the validation for empty fields", () => {
    cy.register("", "", "", "");
    registrationData.forEach((item) => {
      cy.checkClass(item, "is-invalid");
    });
  });
});

describe("Username Validation Tests", () => {
  it("Positive tests", () => {
    const loginField = "#username";
    loginData[1].forEach((item) => {
      cy.enterText(loginField, item.login);
      cy.checkClass(loginField, item.exp);
      cy.clearText(loginField);
    });
  });

  it("Negative tests", () => {
    const loginField = "#username";
    loginData[2].forEach((item) => {
      cy.enterText(loginField, item.login);
      cy.log(item.login);
      cy.checkClass(loginField, item.exp);
      cy.clearText(loginField);
    });
  });
});

describe("Email Validation Tests", () => {
  it("Positive tests", () => {
    const emailField = "#email";
    emailData[0].forEach((item) => {
      cy.enterText(emailField, item.email);
      cy.checkClass(emailField, item.exp);
      cy.clearText(emailField);
    });
  });

  it("Negative tests", () => {
    const emailField = "#email";
    emailData[1].forEach((item) => {
      cy.enterText(emailField, item.email);
      cy.checkClass(emailField, item.exp);
      cy.clearText(emailField);
    });
  });
});

describe("Password Validation Tests", () => {
  it("Check the password's strength", () => {
    const passwordField = "#firstPassword";
    passwordData[1].forEach((item) => {
      cy.enterText(passwordField, item.password);
      cy.checkClass(passwordField, item.exp);
      cy.checkCSS(item.selector, item.property, item.style);
      cy.clearText(passwordField);
    });

    it("Should show an error for a password longer than 50 characters", () => {
      cy.enterText(
        "#firstPassword",
        "1cQ)Y0*dyg?LDbw@H+64M&SeE+y]l-rNA|!sRFBX:mOWQ_-o+12"
      );
      cy.checkText(
        "#register-form > div:nth-child(3) > div",
        "Your password cannot be longer than 50 characters."
      );
    });

    it("Should require a password when empty", () => {
      cy.enterText("#firstPassword", " ");
      cy.checkClass("#firstPassword", "is-invalid");
    });

    it("Password's comparison tests", () => {
      const firstField = "#firstPassword";
      const secondField = "#secondPassword";
      passwordData[2].forEach((item) => {
        cy.enterText(firstField, item.first);
        cy.enterText(secondField, item.second);
        cy.checkClass(secondField, item.exp);
        cy.clearText(firstField);
        cy.clearText(secondField);
      });
    });
  });
});
