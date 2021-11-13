describe('Header', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should display Sfeir header — attempt 1',() => {
    // 🤔 What if we refactor DOM ? 
    cy.get('main > header > h1').should('have.text', 'Sfeir-school: Cypress')
  })

  // 🤔 What if we change style ? 
  it('should display Sfeir header — attempt 2',() => {
    cy.get('.sticky .title')
    .contains('Sfeir-school: Cypress') // Use selector as assertion : if there is no element matching the selector, test fails
  })


  // 🤔 What if we change to a button, or something else ?
  // 🤔 What if there is more than one link ?
  it('should go to sign-in page when user clicks on button — attempt 1',() => {
    cy.get("a:nth-child(3)").click()
    cy.location('pathname').should('eq', '/signin')
  })


  // 🤔 What if we change label ?
  it('should go to sign-in page when user clicks on button — attempt 2',() => {
    cy.contains("Login").click()
    cy.location('pathname').should('eq', '/signin')
  })

  // 🤔 Must I add id to test ? 
  it('should go to sign-in page when user clicks on button — attempt 3',() => {
    cy.get("#login-button").click()
    cy.location('pathname').should('eq', '/signin')
  })
})