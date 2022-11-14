describe('login', () => {
  beforeEach(() => {
    cy.interceptHomePage();
  });

  it('should handle wrong login', () => {
    cy.get('[data-cy=login-error-label]').should('be.visible').contains('Wrong user/password');
  });

  it('should handle sucessful login', () => {
    expect(JSON.parse(localStorage.getItem('user'))).to.deep.eq({
      id: '1234',
      username: 'John Doe',
    });
  });
});
