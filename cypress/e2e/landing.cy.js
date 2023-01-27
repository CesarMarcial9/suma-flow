describe("Navigation", () => {
  it("Should open the app store", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-cy="download"]').click();
  });

  it("Should visit dashboard", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-cy="dash"]').click();
    cy.url().should("include", "/dashboard");
  });

  it("Should visit about us page", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-cy="about"]').click();
    cy.url().should("include", "/about");
  });
});
