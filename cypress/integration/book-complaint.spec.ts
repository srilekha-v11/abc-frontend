describe("Book Complint test", () => {
    it("Can fill the form", () => {
      cy.visit("http://localhost:4200/client/logged/product/bookComplaint/3/3/string12");
       cy.get("form");
       
  
       cy.get('input[name="productModelNumber"]')
       .type("string12")
       .should("have.value", "string12");
  
       cy.get('input[name="complaintName"]')
       .type("sw issue")
       .should("have.value", "sw issue");
  
       cy.get('select').select('Open');
      
       cy.get("button").click();

    // function preventFormSubmitDefault(selector: any) {
    //     cy.get(selector).then(form$ => {
    //       form$.on("submit", e => {
    //         e.preventDefault();
    //       });
    //     });
    //   }
      
    //   preventFormSubmitDefault("form");
    //   cy.get('[data-test="button"]').click();
    });
  });