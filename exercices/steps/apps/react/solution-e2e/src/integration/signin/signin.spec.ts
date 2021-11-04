describe('login', () => {
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
  })

  it('should handle issued login', () => {
    cy.intercept('POST', '/api/signin', {
      statusCode: 401,
      body: {
        message: 'Wrong user/password'
      }
    })

    cy.visit('/signin')

    cy.get('login-error-label').should('not.exist')
    cy.get('[data-cy=username-input]').type('fake-username')
    cy.get('[data-cy=password-input]').type('fake-password')

    cy.get('[data-cy=login-button]').click()

    cy.get('[data-cy=login-error-label]').should('be.visible')
      .contains('Wrong user/password')
  })

  it('should handle sucessful login', () => {
    cy.intercept('POST', '/api/signin', {
      statusCode: 200,
      body: {
        username: 'John Doe',
        id: '1234'
      }
    })

    cy.visit('/signin')

    cy.get('login-error-label').should('not.exist')
    cy.get('[data-cy=username-input]').type('fake-username')
    cy.get('[data-cy=password-input]').type('fake-password')

    cy.get('[data-cy=login-button]').click()

    cy.location('pathname').should('eq', '/')
      /*
       * Wait for login and redirection to be actually made
       * Remember 'expect' is synchronous and will check the value as soon as it's called,
       * unlike 'cy.{get,find,should...} which wait for the assertion to be truthy
       */
      .then(() => {
        expect(JSON.parse(localStorage.getItem('user'))).to.deep.eq({
          id: '1234',
          username: 'John Doe'
        })
      })
  })
})
