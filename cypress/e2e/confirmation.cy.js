describe('template spec', () => {
    beforeEach(() => {
      // Denna funktion körs varje gång innan varje test
      cy.visit('http://localhost:5173/#');
    });

    it('should show all information on confirmation page', () => {
        cy.get("[data-id='booking-info__date']").type('2023-10-12')
        cy.get("[data-id='booking-info__time']").type('1100')
        cy.get("[data-id='booking-info__bowlers']").type('2')
        cy.get("[data-id='booking-info__lanes']").type('1')
        cy.get("[data-id='add__shoe']").click()
        cy.get("[data-id='add__shoe']").click()
        cy.get("[data-id='shoes__input']").first().type('42')
        cy.get("[data-id='shoes__input']").last().type('43')
        cy.get("[data-id='booking__button']").click()
        cy.get("[data-id='confirmation__date-time']").should('have.value', '2023-10-12 1100')
        cy.get("[data-id='confirmation__bowlers']").should('have.value', '2')
        cy.get("[data-id='confirmation__lanes']").should('have.value', '1')
        cy.wait(1000)
        cy.get("[data-id='confirmation__number']").should('not.have.value', '')
      })

      it('should say that it will cost 340 sek', () => {
        cy.get("[data-id='booking-info__date']").type('2023-10-12')
        cy.get("[data-id='booking-info__time']").type('1100')
        cy.get("[data-id='booking-info__bowlers']").type('2')
        cy.get("[data-id='booking-info__lanes']").type('1')
        cy.get("[data-id='add__shoe']").click()
        cy.get("[data-id='add__shoe']").click()
        cy.get("[data-id='shoes__input']").first().type('42')
        cy.get("[data-id='shoes__input']").last().type('43')
        cy.get("[data-id='booking__button']").click()
        cy.get("[data-id='confirmation__price']").should('have.text', '340 sek')
      })

      it('should have disabled inputfields', () => {
        cy.get("[data-id='booking-info__date']").type('2023-10-12')
        cy.get("[data-id='booking-info__time']").type('1100')
        cy.get("[data-id='booking-info__bowlers']").type('2')
        cy.get("[data-id='booking-info__lanes']").type('1')
        cy.get("[data-id='add__shoe']").click()
        cy.get("[data-id='add__shoe']").click()
        cy.get("[data-id='shoes__input']").first().type('42')
        cy.get("[data-id='shoes__input']").last().type('43')
        cy.get("[data-id='booking__button']").click()
        cy.get("[data-id='confirmation__date-time']").should('be.disabled')
        cy.get("[data-id='confirmation__bowlers']").should('be.disabled')
        cy.get("[data-id='confirmation__lanes']").should('be.disabled')
        cy.get("[data-id='confirmation__number']").should('be.disabled')
      })
})