describe("Client Login test", () => {
    it("Can fill the form", () => {
      cy.visit("http://localhost:4200/client/login");
      cy.get("form");
       
  
       
       cy.get('input[name="phoneNumber"]')
       .type("9954920347")
       .should("have.value", "9954920347");
  
       cy.get('input[name="password"]')
       .type("client@1")
       .should("have.value", "client@1");
  
       
      cy.get("form").submit();
    });
  });