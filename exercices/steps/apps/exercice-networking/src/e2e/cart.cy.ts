describe('Cart', () => {
  beforeEach(() => {
    // intercepter la requête pour réupérer la cart

    cy.visit('/');
  });

  it('should populate the cart', () => {
    // attendre la réponse du serveur

    cy.get('[data-cy="cart-button-counter"]').invoke('text').should('eq', '2');
  });
});
