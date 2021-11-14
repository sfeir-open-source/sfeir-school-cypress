
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

  it('should display placeholder if user is NOT logged in', () => {
    cy.visit('/')

    cy.get('[data-cy=top-10-login-placeholder]').should('exist')
    cy.get('[data-cy=top-10-books]').should('not.exist')
  })

  it('should display top 10 books if user is logged in', () => {
    cy.visit('/')
    cy.login()

    cy.wait('@top10')
    cy.get('[data-cy=top-10-login-placeholder]').should('not.exist')
    cy.get('[data-cy=top-10-books]')
      .within(() => {
        // This uses fixture data instead of hardcoding values
        this.data.top10Books.forEach(book => {
          cy.contains(book.title)
          cy.contains(book.author)
        })
      })
  })

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
