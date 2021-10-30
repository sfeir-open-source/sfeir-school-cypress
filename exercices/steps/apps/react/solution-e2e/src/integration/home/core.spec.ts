describe('home page', () => {
  before(() => {
    return cy.fixture('books/top10.json')
      .then(books => {
        this.data = {
          books
        }
      })
  })

  beforeEach(() => {
    cy.intercept('/api/books?query=top', { fixture: 'books/top10.json' }).as('top10')
    cy.intercept('/api/genres', { fixture: 'genres.json' }).as('genres')
    cy.intercept('/api/books?query=drama', { fixture: 'books/drama.json' }).as('drama')
    cy.intercept('/api/books?query=history', { fixture: 'books/history.json' }).as('history')
    cy.intercept('/api/books?query=litterature', { fixture: 'books/litterature.json' }).as('litterature')
    cy.intercept('/api/books?query=poetry', { fixture: 'books/poetry.json' }).as('poetry')
    cy.intercept('/api/books?query=sciencefiction', { fixture: 'books/sciencefiction.json' }).as('scienfiction')

    cy.intercept('/api/cart', {
      statusCode: 200,
      body: {
        books: [],
        total: 0
      }
    })
    cy.visit('/')
  })

  it('should display top 10 books', () => {
    const titles = this.data.books.map(b => b.title)

    cy.visit('/')

    cy.get('[data-cy=top-10]').within(() => {
      cy.get('[data-cy*=book-item-]').each(($el, index) => {
        cy.wrap($el).contains(titles[index])
      })
    })
  })

  it('should handle buttons to scroll', () => {
    cy.visit('/')

    cy.get('[data-cy=top-10]').within(() => cy.playWithListScroll())
  })

  it('should display all genres', () => {
    cy.get('[data-cy=drama]').within(() => {
      cy.contains('Théatre')
      cy.playWithListScroll()
    })

    cy.get('[data-cy=history]').within(() => {
      cy.contains('Histoire')
      cy.playWithListScroll()
    })

    cy.get('[data-cy=litterature]').within(() => {
      cy.contains('Littérature')
      cy.playWithListScroll()
    })

    cy.get('[data-cy=poetry]').within(() => {
      cy.contains('Poésie')
      cy.playWithListScroll()
    })

    cy.get('[data-cy=sciencefiction]').within(() => {
      cy.contains('Science fiction')
      cy.playWithListScroll()
    })
  })
})