describe('Cart', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should add an item to the cart', () => {
    cy.get('[data-cy^="book-item"]')
      .first()
      .within(() => {
        cy.get('[data-cy="add-to-cart-btn"]').click();
      });
  });
});
