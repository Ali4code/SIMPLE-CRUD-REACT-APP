describe("go to detial post", () => {
  it("Displays the result in the form", () => {
    cy.visit("http://localhost:3000");

    cy.contains("qui est esse").click();

    cy.contains("qui est esse");
    cy.contains("est rerum tempore vitae");
  });

  it("updates post by clicking update", () => {
    cy.visit("http://localhost:3000");

    cy.contains("qui est esse").click();

    cy.intercept({
      method: "DELETE",
      url: "**",
    }).as("apiCheck");

    cy.get(".delete-icon").click();

    cy.wait("@apiCheck").then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
    });
  });
});
