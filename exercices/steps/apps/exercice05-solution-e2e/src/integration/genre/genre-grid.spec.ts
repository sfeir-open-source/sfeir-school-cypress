describe('Science fiction page', () => {
  beforeEach(() => {
    cy.interceptHomePage();
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

  it('should navigate between genres', () => {
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
