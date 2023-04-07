describe('Login', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should log in the user', () => {
    // click on the login button
    cy.get('[data-cy="login-button"]').click();

    cy.origin('https://dev-y3-86mxa.us.auth0.com/', () => {
      // fill the username field
      cy.get('input[type="email"]').type('grignon.g@sfeir.com');
      // fill the password field
      cy.get('input[type="password"]').type('SchoolCypress28?{enter}');
      // click on the login button
    });

    // check that the logout button is visible
    cy.get('[data-cy="logout-button"]').should('be.visible');
  });
});
