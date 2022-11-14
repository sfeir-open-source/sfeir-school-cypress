describe('Cart', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should add an item to the cart', () => {
      cy.get('[data-cy^="book-item"]').first().within(() => {
        cy.get('[data-cy="book-item-title"]').invoke('text').as('booktitle');
        cy.addToCart();
      });

      cy.get('[data-cy="cart-button"]').click();

      cy.get('@booktitle').then(title => {
        cy.get('.container').should('contain', title);
      });
    });
});
