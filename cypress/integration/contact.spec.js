/// <reference types="Cypress" />

context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:8000/contact')
    
    })
  
    it('View in Mobile', () => {
        // https://on.cypress.io/focus
        cy.viewport(375, 667) 
        cy.get('footer').scrollIntoView({duration: 4000}) 
      })


      it('View in tablet', () => {
        // https://on.cypress.io/focus
        cy.viewport(768, 1024) 
        cy.get('footer').scrollIntoView({duration: 4000}) 
      })
   
  
      it('View in desktop', () => {
        cy.viewport(1024, 800)
        // https://on.cypress.io/focus

        cy.get('footer').scrollIntoView({duration: 4000}) 
      })
   


    
})