import { faker } from "@faker-js/faker";

beforeEach(() => {
  cy.visit("/account/register");
});

describe("General Checks For Registration", () => {
  it("successful registration of a new user", () => {
    const password = faker.internet.password();
    cy.enterText("#username", faker.internet.userName());
    cy.enterText("#email", faker.internet.email());
    cy.enterText("#firstPassword", password);
    cy.enterText("#secondPassword", password);
    cy.clickElement("#register-submit");
  });

  it("registration: the validation for empty fields", () => {
    cy.enterText("#username", " ");
    cy.checkClass("#username", "is-invalid");
    cy.checkClass("#email", "is-invalid");
    cy.checkClass("#firstPassword", "is-invalid");
    cy.checkClass("#secondPassword", "is-invalid");
  });
});

describe("Username Validation Tests", () => {
  it("Should display an error message when username is not entered", () => {
    cy.enterText("#username", " ");
    cy.checkClass("#username", "is-invalid");
  });

  it("Should accept a correct username", () => {
    cy.enterText("#username", "test");
    cy.checkClass("#username", "is-valid");
  });

  it("Should accept a numeric username", () => {
    cy.enterText("#username", "1111");
    cy.checkClass("#username", "is-valid");
  });

  it("Should accept an alphanumeric username", () => {
    cy.enterText("#username", "test1111");
    cy.checkClass("#username", "is-valid");
  });

  it("Should reject a username with special characters", () => {
    cy.enterText("#username", "$$$");
    cy.checkClass("#username", "is-invalid");
    cy.clearText("#username");
  });

  it("Should reject a username with mixed characters, numeric, special", () => {
    cy.enterText("#username", "test1111$$$$");
    cy.checkClass("#username", "is-invalid");
  });

  it("Should reject a username with leading and trailing spaces", () => {
    cy.enterText("#username", " test ");
    cy.checkClass("#username", "is-invalid");
  });
});

describe("Email Validation Tests", () => {
  it("Should display an error if the email is empty", () => {
    cy.enterText("#email", " ");
    cy.checkClass("#email", "is-invalid");
  });

  it("Should accept a valid email", () => {
    cy.enterText("#email", "test@test.com");
    cy.checkClass("#email", "is-valid");
  });

  it("Should accept another valid email with number", () => {
    cy.enterText("#email", "test1@test.com");
    cy.checkClass("#email", "is-valid");
  });

  it("Should accept an email with an underscore in the beggining", () => {
    cy.enterText("#email", "_test@test.com");
    cy.checkClass("#email", "is-valid");
  });

  it("Should accept an email with a hyphen", () => {
    cy.enterText("#email", "test-test@test.com");
    cy.checkClass("#email", "is-valid");
  });

  it("Should reject an email starting with a dot in the beggining", () => {
    cy.enterText("#email", ".test@test.com");
    cy.checkClass("#email", "is-invalid");
  });
});

describe("Password Validation Tests", () => {
  it("Should validate the strength for a simple password", () => {
    cy.enterText("#firstPassword", "1234");
    cy.checkClass("#firstPassword", "is-valid");
    cy.checkCSS(
      "#strengthBar > li:nth-child(1)",
      "background-color",
      "rgb(255, 0, 0)"
    );
  });

  it("Should validate the strength for a medium password", () => {
    cy.enterText("#firstPassword", "1234@@GG");
    cy.checkClass("#firstPassword", "is-valid");
    cy.checkCSS(
      "#strengthBar > li:nth-child(1)",
      "background-color",
      "rgb(255, 153, 0)"
    );
  });

  it("Should validate the strength for a strong password", () => {
    cy.enterText("#firstPassword", "1234@@GG@@12GG@@BB22GG$$JJ");
    cy.checkClass("#firstPassword", "is-valid");
    cy.checkCSS(
      "#strengthBar > li:nth-child(1)",
      "background-color",
      "rgb(153, 255, 0)"
    );
  });

  it("Should validate the strength for a very strong password with special characters", () => {
    cy.enterText(
      "#firstPassword",
      "cQ)Y0*dyg?LDbw@H+64M&SeE+y]l-rNA|!sRFBX:mOWQ_-o+"
    );
    cy.checkClass("#firstPassword", "is-valid");
    cy.checkCSS(
      "#strengthBar > li:nth-child(1)",
      "background-color",
      "rgb(0, 255, 0)"
    );
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

  it("Should validate matching passwords in both fields", () => {
    cy.enterText("#firstPassword", "1234");
    cy.enterText("#secondPassword", "1234");
    cy.checkClass("#secondPassword", "is-valid");
  });

  it("Should show an error for non-matching passwords", () => {
    cy.enterText("#firstPassword", "1234");
    cy.enterText("#secondPassword", "12345");
    cy.checkClass("#secondPassword", "is-invalid");
  });

  it("Should show an error when the confirmation password is empty", () => {
    cy.enterText("#firstPassword", "1234");
    cy.enterText("#secondPassword", " ");
    cy.checkClass("#secondPassword", "is-invalid");
  });
});
