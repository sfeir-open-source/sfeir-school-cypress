describe('Menu', () => {
  beforeEach(() => {
    cy.interceptHomePage();
  });

  it('should display all genres', () => {
    cy.visit('/');

    cy.get('[data-cy=menu]').within(() => {
      const genres = [
        {
          label: 'Histoire',
          query: 'history',
        },
        {
          label: 'Littérature',
          query: 'litterature',
        },
        {
          label: 'Poésie',
          query: 'poetry',
        },
        {
          label: 'Science fiction',
          query: 'sciencefiction',
        },
        {
          label: 'Théatre',
          query: 'drama',
        },
      ];

      cy.get('[data-cy^=menu-genre-]')
        .should('have.length', genres.length)
        .then(elements => {
          // Be careful : this is a Jquery element
          elements.map((i, element) => cy.wrap(element).should('have.text', genres[i].label));
        });
    });

    cy.get('[data-cy=menu-genre-sciencefiction]').click();

    cy.location('pathname').should('eq', '/genre/sciencefiction');
  });
});
