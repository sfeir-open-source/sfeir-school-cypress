
describe('home page', () => {
  beforeEach(() => {
    // Note how we can load fixture data and use it in tests
    cy.fixture('books/top10').then((top10Books: any) => {
      this.data = {
        top10Books
      }
    })

    cy.interceptHomePage()
  })

  /*
   * 
   * TODO : Add some test for Top10
   * 
   */

  it('should display all genres', () => {
    cy.visit('/')

    cy.get('[data-cy=drama]').within(() => {
      cy.contains('Théatre')
    })

    cy.get('[data-cy=history]').within(() => {
      cy.contains('Histoire')
    })

    cy.get('[data-cy=litterature]').within(() => {
      cy.contains('Littérature')
    })

    cy.get('[data-cy=poetry]').within(() => {
      cy.contains('Poésie')
    })

    cy.get('[data-cy=sciencefiction]').within(() => {
      cy.contains('Science fiction')
    })
  })
})
