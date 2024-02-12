let getText: string;
describe("template spec", () => {
  it("navigates and click stuff", () => {
    cy.visit("http://localhost:3000/");
    cy.get(`.featured`)
      .contains("Featured")
      .then(($value): void => {
        getText = $value.text();
      });
  });

  it("prints text value of nav", function () {
    cy.log("print value of nav", getText);
  });
});
