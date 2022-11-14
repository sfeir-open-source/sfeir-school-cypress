describe('Cart', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should add an item to the cart', () => {
    cy.get('[data-cy^="book-item"]')
      .first()
      .within(() => {
        // create a command for the next step
        // cy.get('[data-cy="add-to-cart-btn"]').click();
      });
  });
});
