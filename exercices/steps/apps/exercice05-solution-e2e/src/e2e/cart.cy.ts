describe('Cart', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.intercept('/api/books/top10', { fixture: 'books/top10.json' }).as('top10');
    cy.intercept('/api/books/genres', { fixture: 'books/genres.json' }).as('genres');
    cy.intercept('/api/books?genre=**', { fixture: 'books/books.json' }).as('books');
  });

  it('should add an item to the cart', () => {
    it('should add an item to the cart', () => {
      cy.get('[data-cy^="book-item"]')
        .first()
        .within(() => {
          cy.get('[data-cy="book-item-title"]').invoke('text').as('booktitle');
          cy.addToCart();
        });

      cy.get('[data-cy="cart-button"]').click();

      cy.get('@booktitle').then(title => {
        cy.get('.container').should('contain', title);
      });
    });
  });
});
