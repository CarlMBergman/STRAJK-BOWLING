describe('template spec', () => {

    it('should navigate to confirmation page', () => {
        cy.visit('http://localhost:5175/#')
        cy.get("[data-id='navigation__icon']").click()
        cy.get("[data-id='navigation__confirmation']").click()
        cy.get("[data-id='confirmation']").should('be.visible')
    })

    it('should navigate to confirmation page', () => {
        cy.visit('http://localhost:5175/confirmation#')
        cy.get("[data-id='navigation__icon']").click()
        cy.get("[data-id='navigation__booking']").click()
        cy.get("[data-id='booking']").should('be.visible')
    })
})