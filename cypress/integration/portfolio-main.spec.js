/// <reference types="Cypress" />

context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:8000/portfolio/main')
    
    })
  


        const time = 50;
        const timeToWait = 500;
        const pages = ['All', 'React', 'Web', 'UX/UI', 'Showcase']

        function checkNav(){

        // check the nav
        pages.map( item =>{
            cy.contains(item).click()
            cy.wait(timeToWait)
            cy.get('footer').scrollIntoView({duration: time}) 
        })

    }
        

    it('View in Mobile', () => {
        cy.viewport(375, 667) 
        cy.get('footer').scrollIntoView({duration: time}) 

        checkNav()

      })


      it('View in tablet', () => {
        cy.viewport(768, 1024) 
        cy.get('footer').scrollIntoView({duration: time}) 


        checkNav()

      })
   
      
      it('View in desktop', () => {
        cy.viewport(1024, 800)
        cy.get('footer').scrollIntoView({duration: time}) 
  

        checkNav()

      })
   
      it('View in Large desktop', () => {
        cy.viewport(1824, 1400)
        cy.get('footer').scrollIntoView({duration: time}) 
  

        checkNav()

      })

    
})