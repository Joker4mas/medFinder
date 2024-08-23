describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
  })

  it('test navigation', () => {
    cy.visit('/')
    cy.get('[data-testid="theme-btn"]').should('be.visible')
    cy.get('[data-testid="theme-btn"]').click()
    cy.get('[data-testid="logo"]').should('be.visible')
    cy.get('[data-testid="logo"]').click()
    cy.contains(/About/)
    cy.get('[data-testid="about"]').click()
    cy.contains(/Contact us/)
    cy.get('[data-testid="contact"]').click()
    cy.contains(/Log-In/)
    cy.get('[data-testid="login"]').click()
  })

})