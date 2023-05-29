describe('template spec', () => {
    beforeEach(() => {
      // Denna funktion körs varje gång innan varje test
      cy.visit('http://localhost:5173/#');
    });

it('should add two pair of shoes and sizes', () => {
    cy.get("[data-id='add__shoe']").click()
    cy.get("[data-id='add__shoe']").click()
    cy.get("[data-id='shoes__input']").first().type('43')
    cy.get("[data-id='shoes__input']").last().type('35')
    cy.get("[data-id='shoes__input']").should('have.length', 2)
  })

  it('should remove a shoe', () => {
    cy.get("[data-id='add__shoe']").click()
    cy.get("[data-id='add__shoe']").click()
    cy.get("[data-id='shoe__remove']").first().click()
    cy.get("[data-id='shoes__input']").should('have.length', 1)
  })
  
  it('should show error message when shoes is not added', () => {
      cy.get("[data-id='booking-info__date']").type('2023-10-12')
      cy.get("[data-id='booking-info__time']").type('1100')
      cy.get("[data-id='booking-info__bowlers']").type('1')
      cy.get("[data-id='booking-info__lanes']").type('1')
      cy.get("[data-id='booking__button']").click()
      cy.get("[data-id='error-message']").should('be.visible')
  })

  it('should show error message when too many shoes is added', () => {
      cy.get("[data-id='booking-info__date']").type('2023-10-12')
      cy.get("[data-id='booking-info__time']").type('1100')
      cy.get("[data-id='booking-info__bowlers']").type('1')
      cy.get("[data-id='booking-info__lanes']").type('1')
      cy.get("[data-id='add__shoe']").click()
      cy.get("[data-id='add__shoe']").click()
      cy.get("[data-id='booking__button']").click()
      cy.get("[data-id='error-message']").should('be.visible')
  })
})

