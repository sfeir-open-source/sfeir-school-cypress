describe('react-solution', () => {
  before(() => {
    cy.fixture('books/top10.json')
      .then(books => {
        this.data = {
          books
        }
      })
  })

  beforeEach(() => cy.visit('/'))

  it('should display Sfeir header', () => {
    cy.get('header').contains('Sfeir-school: Cypress')
  })

  it('should display top 10 books', () => {
    const titles = this.data.books.map(b => b.title)
    cy.intercept('GET', '/books?query=top', { fixture: 'books/top10.json' })

    cy.get('[data-cy=top-10]').within(() => {
      cy.get('[data-cy*=book-item-]').each(($el, index) => {
        cy.wrap($el).contains(titles[index])
      })
    })
  })

  it('should handle buttons to scroll', () => {
    cy.intercept('GET', '/books?query=top', { fixture: 'books/top10.json' })

    cy.get('[data-cy=top-10]').within(() => {
      cy.get('[data-cy=previous]').should('not.exist')
      cy.get('[data-cy=next]').click() // This test implies .should('exist') ; cypress will make the test fails otherwise

      // So now we scrolled using button, the previous button should exist
      cy.get('[data-cy=previous]').should('exist')
      cy.get('[data-cy=next]').should('exist').click()

      cy.get('[data-cy=next]').should('not.exist')
      cy.get('[data-cy=previous]').should('exist').click()

      cy.get('[data-cy=next]').should('exist')
      cy.get('[data-cy=previous]').should('exist').click()

      // SO now we scrolled back, the previous button should disapeared again
      cy.get('[data-cy=previous]').should('not.exist')
      cy.get('[data-cy=next]').should('exist')
    })
  })
})
