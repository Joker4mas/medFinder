describe('hero-section spec', () => {
  it('passes', () => {
    cy.visit('/')
      cy.get('[data-id="booking-btn"]').should('be.visible')
      cy.get('[data-id="booking-btn"]').click()
      cy.get('[data-id="welcome-note"]').should('be.visible')
      cy.get('[data-id="doc-picture"]').should('be.visible')
  })
})