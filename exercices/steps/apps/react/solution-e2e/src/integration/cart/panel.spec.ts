describe('Cart panel', () => {
  before(() => {
    return cy.fixture('books/top10.json')
      .then(books => {
        this.data = {
          books
        }
      })
  })

  beforeEach(() => {
    cy.intercept('/books?query=top', { fixture: 'books/top10.json' }).as('top10')
    cy.intercept('/genres', { fixture: 'genres.json' }).as('genres')
    cy.intercept('/books?query=drama', { fixture: 'books/drama.json' }).as('drama')
    cy.intercept('/books?query=history', { fixture: 'books/history.json' }).as('history')
    cy.intercept('/books?query=litterature', { fixture: 'books/litterature.json' }).as('litterature')
    cy.intercept('/books?query=poetry', { fixture: 'books/poetry.json' }).as('poetry')
    cy.intercept('/books?query=sciencefiction', { fixture: 'books/sciencefiction.json' }).as('scienfiction')

    cy.intercept('/cart', {
      statusCode: 200,
      body: {
        books: [],
        total: 0
      }
    })
    cy.visit('/')
  })

  it('should display empty cart', () => {
    cy.get('[data-cy=cart-panel]').find('[data-cy=cart-panel-empty]').should('be.visible')
    cy.get('[data-cy=cart-button-counter]').should('not.exist')
  })

  it('should add a book to cart', () => {
    cy.intercept('PUT', '/cart/799', {
      statusCode: 200,
      body: {
        books: [
          {
            id: '799',
            imageUrl: 'https://www.gutenberg.org/cache/epub/799/pg799.cover.medium.jpg',
            date: '1997-01-01',
            title: 'De la Terre à la Lune',
            author: 'Verne, Jules',
            genre: 'Science-fiction'
          }
        ],
        total: 0
      }
    })

    cy.get('[data-cy=book-item-799]').find('[data-cy=add-to-cart-btn]').click()
    cy.get('[data-cy=cart-panel]').find('[data-cy=cart-item-799]').should('be.visible')
    cy.get('[data-cy=cart-button-counter]').contains('1')
  })

  it('should go to cart', () => {
    cy.get('[data-cy=cart-panel]').contains('Cart').click()
    cy.location('pathname').should('eq', '/cart')
  })
})
