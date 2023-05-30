describe('template spec', () => {
  beforeEach(() => {
    // Denna funktion körs varje gång innan varje test
    cy.visit('http://localhost:5175/#');
  });

  it('should type in all inputfields', () => {
    cy.get("[data-id='booking-info__date']").type('2023-10-12')
    cy.get("[data-id='booking-info__time']").type('1100')
    cy.get("[data-id='booking-info__bowlers']").type('2')
    cy.get("[data-id='booking-info__lanes']").type('1')
    cy.get("[data-id='booking-info__date']").should('have.value', '2023-10-12')
    cy.get("[data-id='booking-info__time']").should('have.value', '1100')
    cy.get("[data-id='booking-info__bowlers']").should('have.value', '2')
    cy.get("[data-id='booking-info__lanes']").should('have.value', '1')
  })

  it('should send you to confirmation page', () => {
    cy.get("[data-id='booking-info__date']").type('2023-10-12')
    cy.get("[data-id='booking-info__time']").type('1100')
    cy.get("[data-id='booking-info__bowlers']").type('2')
    cy.get("[data-id='booking-info__lanes']").type('1')
    cy.get("[data-id='add__shoe']").click()
    cy.get("[data-id='add__shoe']").click()
    cy.get("[data-id='shoes__input']").first().type('42')
    cy.get("[data-id='shoes__input']").last().type('43')
    cy.get("[data-id='booking__button']").click()
    cy.get("[data-id='confirmation']").should('be.visible')
  })

  it('should not type in bowlers and lanes', () => {
    cy.get("[data-id='booking-info__bowlers']").type('wasd')
    cy.get("[data-id='booking-info__lanes']").type('wasd')
    cy.get("[data-id='booking-info__bowlers']").should('have.value', '')
    cy.get("[data-id='booking-info__lanes']").should('have.value', '')
  })

  it('should show error message when date is not filled', () => {
    cy.get("[data-id='booking-info__time']").type('1100')
    cy.get("[data-id='booking-info__bowlers']").type('1')
    cy.get("[data-id='booking-info__lanes']").type('1')
    cy.get("[data-id='add__shoe']").click()
    cy.get("[data-id='shoes__input']").first().type('42')
    cy.get("[data-id='booking__button']").click()
    cy.get("[data-id='error-message']").should('be.visible')
  })

  it('should show error message when time is not filled', () => {
    cy.get("[data-id='booking-info__date']").type('2023-10-12')
    cy.get("[data-id='booking-info__bowlers']").type('1')
    cy.get("[data-id='booking-info__lanes']").type('1')
    cy.get("[data-id='add__shoe']").click()
    cy.get("[data-id='shoes__input']").type('42')
    cy.get("[data-id='booking__button']").click()
    cy.get("[data-id='error-message']").should('be.visible')
  })

  it('should show error message when number of bowlers is not filled', () => {
    cy.get("[data-id='booking-info__date']").type('2023-10-12')
    cy.get("[data-id='booking-info__time']").type('1100')
    cy.get("[data-id='booking-info__lanes']").type('1')
    cy.get("[data-id='add__shoe']").click()
    cy.get("[data-id='shoes__input']").type('42')
    cy.get("[data-id='booking__button']").click()
    cy.get("[data-id='error-message']").should('be.visible')
  })

  it('should show error message when number of lanes is not filled', () => {
    cy.get("[data-id='booking-info__date']").type('2023-10-12')
    cy.get("[data-id='booking-info__time']").type('1100')
    cy.get("[data-id='booking-info__bowlers']").type('1')
    cy.get("[data-id='add__shoe']").click()
    cy.get("[data-id='shoes__input']").type('42')
    cy.get("[data-id='booking__button']").click()
    cy.get("[data-id='error-message']").should('be.visible')
  })
})