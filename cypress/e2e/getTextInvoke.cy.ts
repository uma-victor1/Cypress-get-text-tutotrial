describe("test for storing text", () => {
  it("should get text and save", () => {
    cy.visit("http://localhost:3000/");
    // Get the text of h3 header element using its data-title attribute
    cy.get("h3").invoke("text").as("textval");
  });

  it("should verify text", function () {
    cy.visit("http://localhost:3000/");
    cy.log("print this value out", this.textval);
    cy.get("h3").should("have.text", this.textval);
  });
});
