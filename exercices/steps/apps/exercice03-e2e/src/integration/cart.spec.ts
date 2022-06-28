describe('Cart', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should add an item to the cart', () => {
      // TACHE: vérifier que le counter n'est pas visible

      cy.get('[data-cy^="book-item"]').first().within(() => {
        cy.get('[data-cy="add-to-cart-btn"]').click();
      });

      // TACHE: vérifier que la cart contient un item

    });
});
