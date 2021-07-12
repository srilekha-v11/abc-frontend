describe("Engineer Login test", () => {
    it("Can fill the form", () => {
      cy.visit("http://localhost:4200/engineer/login");
      cy.get("form");
       
  
       
       cy.get('input[name="phoneNumber"]')
       .type("535353353")
       .should("have.value", "535353353");
  
       cy.get('input[name="password"]')
       .type("string13")
       .should("have.value", "string13");
  
       
      cy.get("form").submit();
    });
  });