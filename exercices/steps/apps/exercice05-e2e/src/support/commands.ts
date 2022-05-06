// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  interface Chainable<Subject> {
    interceptHomePage(): Cypress.Chainable<Subject>;
    interceptBooksByGenre(): Cypress.Chainable<Subject>;
  }
}

Cypress.Commands.add('login', () => {
  const user = {
    id: '1234',
    name: 'John Doe',
  };

  window.localStorage.setItem('user', JSON.stringify(user));
});

Cypress.Commands.add('interceptHomePage', () => {
  cy.interceptBooksByGenre().as('booksByGenre');
  cy.intercept('/api/books/top10', { fixture: 'books/top10.json' }).as('top10');
  cy.intercept('/api/books/genres', { fixture: 'books/genres.json' }).as('genres');

  cy.intercept('/api/cart', {
    statusCode: 200,
    body: {
      books: [],
      total: 0,
    },
  }).as('getCart');
});

Cypress.Commands.add('interceptBooksByGenre', () => {
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
        // Make the test fail
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
