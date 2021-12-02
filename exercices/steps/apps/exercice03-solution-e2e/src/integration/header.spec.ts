describe('Header', () => {
  // 🤔 Should I copy/paste this in every test ???
  beforeEach(() => {
    // Use fixtures to easily get fake genres
    cy.intercept('/api/books/genres', { fixture: 'books/genres.json' }).as('genres');
    cy.intercept('/api/books/top10', { fixture: 'books/top10.json' });

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

  it('should display Sfeir header', () => {
    cy.visit('/');
    // ✅ data-cy : a dedicated marker for our test (and only for test)
    cy.get('[data-cy=header]').contains('Sfeir-school: Cypress');
  });

  it('should go to sign-in page when user clicks on button', () => {
    cy.visit('/');
    // ✅ data-cy : a dedicated marker for our test (and only for test)
    cy.get('[data-cy=login-button]').click();
    cy.location('pathname').should('eq', '/signin');
  });
});
