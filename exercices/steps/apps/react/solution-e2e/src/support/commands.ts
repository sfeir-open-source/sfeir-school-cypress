// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  interface Chainable<Subject> {
    login() : Cypress.Chainable<Subject>

    playWithListScroll() : Cypress.Chainable<Subject>
    dontHavePreviousButton() : Cypress.Chainable<Subject>
    havePreviousButton() : Cypress.Chainable<Subject>
    clickPreviousButton() : Cypress.Chainable<Subject>
    dontHaveNextButton() : Cypress.Chainable<Subject>
    haveNextButton() : Cypress.Chainable<Subject>
    clickNextButton() : Cypress.Chainable<Subject>
  }
}
const previousButton = '[data-cy=previous]'
const nextButton = '[data-cy=next]'

Cypress.Commands.add('login', () => {
  const user = {
    id: '1234',
    name: 'John Doe'
  }

  window.localStorage.setItem('user', JSON.stringify(user))
})

Cypress.Commands.add('playWithListScroll', () => {
  cy.dontHavePreviousButton()
  cy.clickNextButton()

  // So now we scrolled using button, the previous button should exist
  // As well as the next button, because we don't reach the end yet
  cy.havePreviousButton()
  cy.clickNextButton()

  // Now we reach the end
  cy.dontHaveNextButton()
  cy.clickPreviousButton()

  cy.haveNextButton()
  cy.clickPreviousButton()

  // Now we scrolled back to the beginning, so the previous button should disapeared again
  cy.dontHavePreviousButton()
  cy.haveNextButton()
})

Cypress.Commands.add('dontHavePreviousButton', () => {
  return cy.get(previousButton).should('not.exist')
})

Cypress.Commands.add('havePreviousButton', () => {
  return cy.get(previousButton).should('exist')
})

Cypress.Commands.add('clickPreviousButton', () => {
  return cy.havePreviousButton().should('exist').click()
})

Cypress.Commands.add('dontHaveNextButton', () => {
  return cy.get(nextButton).should('not.exist')
})

Cypress.Commands.add('haveNextButton', () => {
  return cy.get(nextButton).should('exist')
})

Cypress.Commands.add('clickNextButton', () => {
  return cy.haveNextButton().click()
})
