describe('Cart panel', () => {
  beforeEach(() => {
    cy.interceptHomePage();
  });

  it('should display empty cart', () => {
    cy.visit('/');

    cy.get('[data-cy=cart-panel]').find('[data-cy=cart-panel-empty]').should('be.visible');
    cy.get('[data-cy=cart-button-counter]').should('not.exist');
  });

  it('should add a book to cart', () => {
    cy.intercept('PUT', '/api/cart', {
      statusCode: 200,
      body: [
        {
          book: {
            id: '799',
            imageUrl: 'https://www.gutenberg.org/cache/epub/799/pg799.cover.medium.jpg',
            date: '1997-01-01',
            title: 'De la Terre à la Lune',
            author: 'Verne, Jules',
            genre: 'Science-fiction',
          },
          quantity: 1,
        },
      ],
    }).as('add-to-cart');

    cy.visit('/');

    cy.get('[data-cy=book-item-799]').find('[data-cy=add-to-cart-btn]').click();
    cy.wait('@add-to-cart').its('request.body').should('deep.equal', {
      bookId: '799',
      quantity: 1,
      price: 0,
    });

    cy.get('[data-cy=cart-panel]').find('[data-cy=cart-item-799]').should('be.visible');
    cy.get('[data-cy=cart-button-counter]').contains('1');
  });

  it('should go to cart', () => {
    cy.visit('/');

    cy.get('[data-cy=cart-panel]').contains('Cart').click();
    cy.location('pathname').should('eq', '/cart');
  });

  context('mobile ', () => {
    beforeEach(() => {
      cy.viewport('iphone-8');
    });

    it('should not be present on mobile', () => {
      cy.visit('/');

      cy.get('[data-cy=cart-panel]').should('not.be.visible');
    });
  });
});
