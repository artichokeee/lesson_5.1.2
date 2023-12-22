describe("the main page is loaded", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("displays tasks list by default", () => {
    cy.checkText("#task-heading", "Tasks");
  });
});
