describe('App', () => {
  it('increments the counter', () => {
    cy.visit('/')
    cy.findByRole('button', { name: /count is/i }).click()
    cy.findByRole('button', { name: /count is/i }).should(
      'contain',
      'count is 1',
    )
    cy.findByRole('button', { name: /count is/i }).click()
    cy.findByRole('button', { name: /count is/i }).should(
      'contain',
      'count is 2',
    )

    cy.get('#navbar').contains('Converter').click()
    cy.contains('Hexadecimal')
  })
})
