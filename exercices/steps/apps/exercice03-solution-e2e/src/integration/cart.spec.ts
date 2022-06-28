describe('Cart', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should add an item to the cart', () => {
    cy.request('DELETE', 'http://localhost:3333/api/cart').then(() => {
      // vérifier que le counter n'est pas visible
      cy.get('[data-cy="cart-button-counter"]').should('not.exist');
      // cibler le premier item
      cy.get('[data-cy^="book-item"]').first().within(() => {
        cy.get('[data-cy="add-to-cart-btn"]').click();
      });
      // vérifier que la cart contient un item
      cy.get('[data-cy="cart-button-counter"]').should('contain', 1);
    });
  });
});
