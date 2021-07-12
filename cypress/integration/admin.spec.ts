describe(" Admin Login test", () => {
    it("Can fill the form", () => {
      cy.visit("http://localhost:4200/admin/login");
       cy.get("form");
       
  
       cy.get('input[name="phoneNumber"]')
       .type("9490030909")
       .should("have.value", "9490030909");
  
       cy.get('input[name="password"]')
       .type("9490030909")
       .should("have.value", "9490030909");
       
      cy.get("form").submit();
    });
  });