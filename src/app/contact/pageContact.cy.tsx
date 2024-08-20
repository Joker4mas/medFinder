import React from 'react'
import Contact from './page'

describe('<Contact />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Contact />)
  })
})