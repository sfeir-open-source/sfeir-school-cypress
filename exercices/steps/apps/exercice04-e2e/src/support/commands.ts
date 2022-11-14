// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  interface Chainable<Subject> {
    addToCart(): Cypress.Chainable<Subject>;
  }
}

Cypress.Commands.add('addToCart', () => {
  cy.get('[data-cy="add-to-cart-btn"]').click();
});
