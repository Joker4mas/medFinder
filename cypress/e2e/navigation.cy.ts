describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
  })

  it('test navigation', () => {
    cy.visit('/')
    cy.get('[data-id="theme-btn"]').should('be.visible')
    cy.get('[data-id="logo"]').click()
    cy.get('[data-id="logo"]').should('be.visible')
    cy.get('[data-id="theme-btn"]').click()
    cy.contains(/About/)
    cy.get('[data-id="about"]').click()
    cy.contains(/Contact us/)
    cy.get('[data-id="contact"]')
    cy.contains(/Log-In/)
  })

  it('test search', () => {
    cy.visit('/')
    cy.get('[data-id="search"]').type('test')
    cy.get('[data-id="search"]').should('be.visible')
  })

  it('test hero', () => {
    cy.visit('/')
    cy.get('[data-id="theme-btn"]').should('be.visible')
    cy.get('[data-id="logo"]').click()
    cy.get('[data-id="logo"]').should('be.visible')
    cy.get('[data-id="theme-btn"]').click()

  })

})