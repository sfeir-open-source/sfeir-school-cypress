describe('cart button', () => {
  beforeEach(() => {
    cy.intercept('/api/books/top10', { fixture: 'books/top10.json' }).as('top10')
    cy.intercept('/api/books/genres', { fixture: 'genres.json' }).as('genres')
    cy.intercept('/api/books?genre=drama&pageSize=10&page=1', { fixture: 'books/drama.json' }).as('drama')
    cy.intercept('/api/books?genre=history&pageSize=10&page=1', { fixture: 'books/history.json' }).as('history')
    cy.intercept('/api/books?genre=litterature&pageSize=10&page=1', { fixture: 'books/litterature.json' }).as('litterature')
    cy.intercept('/api/books?genre=poetry&pageSize=10&page=1', { fixture: 'books/poetry.json' }).as('poetry')
    cy.intercept('/api/books?genre=sciencefiction&pageSize=10&page=1', { fixture: 'books/sciencefiction.json' }).as('scienfiction')

    cy.intercept('/api/cart', {
      statusCode: 200,
      body: {
        books: [],
        total: 0
      }
    })
    cy.visit('/')
  })

  it('should go to cart page', () => {
    cy.get('[data-cy=cart-button]').click()
    cy.location('pathname').should('eq', '/cart')
  })
})
