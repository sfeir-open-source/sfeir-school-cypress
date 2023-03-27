describe('Cart', () => {
  beforeEach(() => {
    // TODO: intercept the /api/cart request and replace the response with a fixture

    cy.visit('/');
  });

  it('should populate the cart', () => {
    // TODO: wait the server response

    cy.get('[data-cy="cart-button-counter"]').invoke('text').should('eq', '2');
  });
});
