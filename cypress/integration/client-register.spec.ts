describe("Client Register test", () => {
    it("Can fill the form", () => {
      cy.visit("http://localhost:4200/client/login/register");
       cy.get("form");
       
  
       cy.get('input[name="address"]')
       .type("Bengaluru")
       .should("have.value", "Bengaluru");

       cy.get('input[name="password"]')
       .type("sandy12")
       .should("have.value", "sandy12");
  
       cy.get('input[name="phoneNumber"]')
       .type("9663649747")
       .should("have.value", "09663649747");
       
      cy.get("form").submit();
    });
  });