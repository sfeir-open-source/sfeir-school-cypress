describe('Science fiction page', () => {
  beforeEach(() => {
    // Use fixtures to easily get fake genres
    cy.intercept('/api/books/genres', { fixture: 'books/genres.json' }).as('genres');

    // Use static response to create empty cart
    cy.intercept('/api/cart', {
      statusCode: 200,
      body: {
        books: [],
        total: 0,
      },
    }).as('getCart');

    /*
     * Note how you can mix fixture and custom response interception here,
     * __Be careful__ : this is powerful, but use this with caution,
     * as your test now implements backend logic (instead of dummy json fixture).
     * Imagine a tests crashes: does it crash because it should, or because your mock implementation is incorrect ?
     */
    cy.fixture('books.json').then(books => {
      cy.intercept('/api/books?genre=**', req => {
        const { genre, page, pageSize }: any = req.query;

        if (!(genre && page && pageSize)) {
          // Make the test fails
          throw new Error('Unable to stub books request');
        }

        const entities = books.filter(book => book.genreId === genre);
        const content = entities.slice(page * pageSize - pageSize, page * pageSize);

        req.reply({
          itemsPerPage: pageSize,
          isFirst: page === 1,
          isLast: page * pageSize >= entities.length,
          content,
        });
      });
    });
  });

  function byId(id: string) {
    return `[data-cy=book-item-${id}]`;
  }

  function testBook(id: string, title: string, author: string) {
    cy.get(byId(id)).find('[data-cy=book-item-title]').should('have.text', title);

    cy.get(byId(id)).find('[data-cy=book-item-author]').should('have.text', author);

    cy.get(byId(id)).find('[data-cy=add-to-cart-btn]').should('be.enabled');
  }

  it('should display books', () => {
    cy.visit('/genre/sciencefiction');
    cy.get('[data-cy=genre-grid]').contains('Science fiction');

    testBook('799', 'De la Terre à la Lune', 'Verne, Jules');
    testBook('5096', 'Vingt Mille Lieues Sous Les Mers — Part 2', 'Verne, Jules');

    cy.get(byId('5097')).should('not.exist');

    cy.scrollTo('bottom');

    testBook('5097', 'Vingt mille Lieues Sous Les Mers — Complete', 'Verne, Jules');
  });

  it('should navigates between genres', () => {
    cy.visit('/genre/sciencefiction');
    cy.get('[data-cy=genre-grid]').contains('Science fiction');
    testBook('799', 'De la Terre à la Lune', 'Verne, Jules');
    cy.get(byId('1256')).should('not.exist');

    cy.get('[data-cy=menu-genre-drama').click();
    cy.get('[data-cy=genre-grid]').contains('Théatre');
    cy.get(byId('799')).should('not.exist');
    testBook('1256', 'Cyrano de Bergerac', 'Rostand, Edmond');
  });
});
