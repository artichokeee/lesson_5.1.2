describe('the main page is loaded', () => {
    beforeEach(() => {
      cy.visit('https://sqlverifier-live-6e21ca0ed768.herokuapp.com')
    })
  
    it('displays tasks list by default', () => {
      cy.get('#task-heading').should('have.text', 'Tasks')
    })
  })
  

  