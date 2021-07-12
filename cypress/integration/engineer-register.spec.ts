describe("Engineer Register test", () => {
  it("Can fill the form", () => {
    cy.visit("http://localhost:4200/engineer/login/register");
     cy.get("form");
     

     cy.get('input[name="engineerName"]')
     .type("sandeep")
     .should("have.value", "sandeep");

     cy.get('input[name="domain"]')
     .type("Mobile")
     .should("have.value", "Mobile");

     cy.get('input[name="password"]')
     .type("sandy123")
     .should("have.value", "sandy123");

     cy.get('input[name="mobileNumber"]')
     .type("9663649747")
     .should("have.value", "09663649747");
     
    cy.get("form").submit();
  });
});

