describe('home page', () => {
  beforeEach(() => {
    cy.interceptHomePage()
  })

  it('should handle buttons to scroll', () => {
    cy.visit('/')

    cy.get('[data-cy=top-10]').within(() => cy.playWithListScroll())
  })

  it('should display all genres', () => {
    cy.visit('/')

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
