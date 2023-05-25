describe('template spec', () => {
  beforeEach(() => {
    // Denna funktion körs varje gång innan varje test
    cy.visit('http://localhost:5173/#');
  });

  it('should add two pair of shoes', () => {
    cy.get('.shoes__button').click()
    cy.get('.shoes__form').should('be.visible')
  })
})