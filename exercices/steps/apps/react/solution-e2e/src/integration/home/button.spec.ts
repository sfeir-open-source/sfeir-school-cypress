describe('cart button', () => {
  beforeEach(() => {
    cy.interceptHomePage();
  });

  it('should go to cart page', () => {
    cy.visit('/');

    cy.get('[data-cy=cart-button]').click();
    cy.location('pathname').should('eq', '/cart');
  });
});
