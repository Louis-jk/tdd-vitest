describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");
    cy.get("[data-testid=title]")
      .should("exist")
      .should("have.text", "Cypress Demo");

    cy.get("input").type("Hello Cypress");
    cy.get("p").should("contain.text", "Hello Cypress");
  });
});
