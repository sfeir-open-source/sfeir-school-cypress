describe('cart button', () => {
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

  it('should go to cart page', () => {
    cy.get('[data-cy=cart-button]').click()
    cy.location('pathname').should('eq', '/cart')
  })
})
