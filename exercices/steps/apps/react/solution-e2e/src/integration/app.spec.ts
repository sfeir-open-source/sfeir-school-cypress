describe('App', () => {
  it('should display Sfeir header', () => {
    cy.visit('/')
    cy.get('header').contains('Sfeir-school: Cypress')
  })
})
