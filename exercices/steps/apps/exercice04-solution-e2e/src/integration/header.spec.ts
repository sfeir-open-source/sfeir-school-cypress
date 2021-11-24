describe('Header', () => {
  // 🤔 Should I copy/paste this in every test ???
  beforeEach(() => {
    cy.interceptHomePage()
  })

  it('should display Sfeir header', () => {
    cy.visit('/')
    // ✅ data-cy : a dedicated marker for our test (and only for test)
    cy.get('[data-cy=header]').contains('Sfeir-school: Cypress')
  })

  it('should go to sign-in page when user clicks on button',() => {
    cy.visit('/')
    // ✅ data-cy : a dedicated marker for our test (and only for test)
    cy.get("[data-cy=login-button]").click()
    cy.location('pathname').should('eq', '/signin')
  })
})