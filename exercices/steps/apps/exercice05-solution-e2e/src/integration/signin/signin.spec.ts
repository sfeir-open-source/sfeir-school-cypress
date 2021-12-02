describe('login', () => {
  beforeEach(() => {
    cy.interceptHomePage();
  });

  it('should handle issued login', () => {
    cy.intercept('POST', '/api/user/sign-in', {
      statusCode: 401,
      body: {
        message: 'Wrong user/password',
      },
    });

    cy.visit('/signin');

    cy.get('login-error-label').should('not.exist');
    cy.get('[data-cy=username-input]').type('fake-username');
    cy.get('[data-cy=password-input]').type('fake-password');

    cy.get('[data-cy=login-button]').click();

    cy.get('[data-cy=login-error-label]').should('be.visible').contains('Wrong user/password');
  });

  it('should handle sucessful login', () => {
    cy.intercept('POST', '/api/user/sign-in', {
      statusCode: 200,
      body: {
        username: 'John Doe',
        id: '1234',
      },
    });

    cy.visit('/signin');

    cy.get('login-error-label').should('not.exist');
    cy.get('[data-cy=username-input]').type('fake-username');
    cy.get('[data-cy=password-input]').type('fake-password');

    cy.get('[data-cy=login-button]').click();

    cy.location('pathname')
      .should('eq', '/')
      /*
       * Wait for login and redirection to be actually made
       * Remember 'expect' is synchronous and will check the value as soon as it's called,
       * unlike 'cy.{get,find,should...} which wait for the assertion to be truthy
       */
      .then(() => {
        expect(JSON.parse(localStorage.getItem('user'))).to.deep.eq({
          id: '1234',
          username: 'John Doe',
        });
      });
  });
});
