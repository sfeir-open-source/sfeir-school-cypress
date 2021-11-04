describe('App', () => {
  /*
   * Why not to push those helpers as Commands ?
   * Because those aren't used be others tests
   *
   * Best practice : don't make everything a custom command :
   * if simple function is enough, no need to make complicated things
   *
   * https://docs.cypress.io/api/cypress-api/custom-commands#1-Don-t-make-everything-a-custom-command
   */
  function headerUserButton () {
    return cy.get('header').find('[data-cy=user-button]')
  }

  function headerLoginButton () {
    return cy.get('header').find('[data-cy=login-button]')
  }

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

  it('should display Sfeir header', () => {
    cy.visit('/')

    cy.get('header').contains('Sfeir-school: Cypress')
  })

  it('Should display Login button if user is not logged in', () => {
    cy.visit('/')

    headerUserButton().should('not.exist')
    headerLoginButton().should('exist')
      .click()
    cy.location('pathname').should('eq', '/signin')
  })

  it('Should display user and logout where user is logged in', () => {
    cy.visit('/')
    cy.login() // Custom command ; please see support/command.ts

    headerLoginButton().should('not.exist')
    headerUserButton()
      .should('exist') // Unecessary (as 'click' will wait for the button to appears), but good to explicitely check it
      .click()

    headerUserButton().should('not.exist')
    headerLoginButton().should('exist')
  })
})
