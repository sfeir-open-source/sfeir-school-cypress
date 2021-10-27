describe('Cart panel', () => {
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

  it('should display empty cart', () => {
    cy.get('[data-cy=cart-panel]').find('[data-cy=cart-panel-empty]').should('be.visible')
    cy.get('[data-cy=cart-button-counter]').should('not.exist')
  })

  it('should add a book to cart', () => {
    cy.intercept('PUT', '/api/cart/799', {
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

  context('mobile ', () => {
    beforeEach(() => {
      cy.viewport('iphone-8')
    })

    it('should not be present on mobile', () => {
      cy.get('[data-cy=cart-panel]').should('not.be.visible')
    })
  })
})
