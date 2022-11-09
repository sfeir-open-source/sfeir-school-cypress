describe('Exercice 01', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should navigate to cart page', () => {
    cy.get('[data-cy="header-title"]').should('have.text', 'Sfeir-school: Cypress');
    cy.get('[data-cy="cart-button"]').click();
    cy.get('body').should('contain', 'Your cart is empty');
  });
});
