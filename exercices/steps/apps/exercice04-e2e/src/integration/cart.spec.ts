describe('Cart', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should add an item to the cart', () => {
    cy.request('DELETE', 'http://localhost:3333/api/cart').then(() => {
      cy.get('[data-cy="cart-button-counter"]').should('not.exist');

      cy.get('[data-cy^="book-item"]').first().within(() => {
        // TACHE : stocker le titre du livre en mémoire

        cy.get('[data-cy="add-to-cart-btn"]').click();
      });

      cy.get('[data-cy="cart-button-counter"]').should('contain', 1);

      // TACHE : cliquer sur le lien du panier dans le header

      // TACHE : vérifier le titre
    });
  });
});
