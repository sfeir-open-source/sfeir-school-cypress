describe('Cart', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should add an item to the cart', () => {
    cy.get('[data-cy^="book-item"]')
      .first()
      .within(() => {
        // TODO: save the book title as an alias
        cy.get('[data-cy="book-item-title"]').invoke('text');
        cy.addToCart();
      });

    // TODO: click on the cart button
    // TODO: check the book title in the cart
  });
});
