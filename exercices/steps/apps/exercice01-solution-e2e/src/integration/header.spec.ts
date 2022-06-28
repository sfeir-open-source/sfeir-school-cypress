describe('Header', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display Sfeir header — attempt 1', () => {
    // 🤔 What if we refactor DOM ?
    cy.get('[data-cy="header-title"]').should('have.text', 'Sfeir-school: Cypress');
  });
});
