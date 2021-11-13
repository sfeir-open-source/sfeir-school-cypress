describe('Header', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should display Sfeir header',() => {
    // ✅ data-cy : a dedicated marker for our test (and only for test)
    cy.get('[data-cy=header]').contains('Sfeir-school: Cypress')
  })

  it('should go to sign-in page when user clicks on button',() => {
    // ✅ data-cy : a dedicated marker for our test (and only for test)
    cy.get("[data-cy=login-button]").click()
    cy.location('pathname').should('eq', '/signin')
  })
})