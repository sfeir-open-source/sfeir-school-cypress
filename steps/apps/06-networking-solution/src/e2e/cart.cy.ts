describe('Cart', () => {
  beforeEach(() => {
    cy.intercept('/api/cart', {fixture: 'cart.json'}).as('cart');
    cy.visit('/');
  });

  it('should populate the cart', () => {
    cy.wait('@cart');

    cy.get('[data-cy="cart-button-counter"]').invoke('text').should('eq', '2');
  });
});
