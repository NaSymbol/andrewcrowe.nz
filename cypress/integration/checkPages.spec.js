/// <reference types="Cypress" />


const timeToScroll = 500;
const navCheck = ['Portfolio', 'About', 'Contact']

context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:8000/contact')
    
    })
  

      it('View in tablet', () => {
        // https://on.cypress.io/focus
        cy.viewport(768, 1024) 
        
        navCheck.map( item => {

            cy.contains(item).click()
            cy.get('footer').scrollIntoView({duration: timeToScroll}) 

        })
   

      })
   
  
   


    
})