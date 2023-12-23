describe("the redirection after clicking header's menu elements", () => {
  beforeEach(() => {
    cy.login(Cypress.env("LOGIN"), Cypress.env("PASSWORD"));
  });

  it('redirection to task page after clicking "Task" button', () => {
    cy.checkRedirection(
      "Entities",
      "Task",
      "Refresh list",
      "/task?page=1&sort=id,asc"
    );
  });

  it('redirection to a user tasks page after clicking "User task" button', () => {
    cy.checkRedirection("Entities", "User Task", "User Tasks", "/user-task");
  });

  it('redirection to home page after clicking "Home" button', () => {
    cy.clickElement("Swagger");
    cy.checkRedirection("API", "Home", "Tasks", "/?page=1&sort=id,asc");
  });

  it('redirection to api page after clicking "API" button', () => {
    cy.checkRedirection("Swagger", "API", "This is your footer", "/docs/docs");
  });

  it('localization to french after clicking "Français" button', () => {
    cy.checkRedirection(
      "English",
      "Français",
      "Accueil",
      "/?page=1&sort=id,asc"
    );
  });

  it('localization to englsh after clicking "English" button', () => {
    cy.clickElement("English");
    cy.checkRedirection("Français", "English", "Home", "/?page=1&sort=id,asc");
  });

  it('localization to russian after clicking "Русский" button', () => {
    cy.checkRedirection(
      "English",
      "Русский",
      "Главная",
      "/?page=1&sort=id,asc"
    );
  });

  it('localization to ukrainian after clicking "Українська" button', () => {
    cy.checkRedirection(
      "English",
      "Українська",
      "Головна",
      "/?page=1&sort=id,asc"
    );
  });

  it('redirection to a settings page after clicking "Settings" button', () => {
    cy.checkRedirection(
      "Account",
      "Settings",
      "First Name",
      "/account/settings"
    );
  });

  it('redirection to a password page after clicking "Password" button', () => {
    cy.checkRedirection(
      "Account",
      "Password",
      "Current password",
      "/account/password"
    );
  });

  it('signing out after clicking "Sign out" button', () => {
    cy.checkRedirection(
      "Account",
      "Sign out",
      "Logged out successfully!",
      "/logout"
    );
  });
});
