describe('Footer spec', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get('[data-testid="footer"]').should('be.visible')
    cy.get('[data-testid="social-media"]').should('be.visible')
    cy.get('[data-testid="copyright"]').should('be.visible')
    cy.get('[data-testid="developed"]').should('be.visible')
  })
})