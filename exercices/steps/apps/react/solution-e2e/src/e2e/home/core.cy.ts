const previousButton = '[data-cy=previous]';
const nextButton = '[data-cy=next]';

function playWithListScroll() {
  dontHavePreviousButton();
  clickNextButton();

  // So now we scrolled using button, the previous button should exist
  // As well as the next button, because we don't reach the end yet
  havePreviousButton();
  clickNextButton();

  // Now we reach the end
  dontHaveNextButton();
  clickPreviousButton();

  haveNextButton();
  clickPreviousButton();

  // Now we scrolled back to the beginning, so the previous button should disapeared again
  dontHavePreviousButton();
  haveNextButton();
}

function dontHavePreviousButton() {
  return cy.get(previousButton).should('not.exist');
}

function havePreviousButton() {
  return cy.get(previousButton).should('exist');
}

function clickPreviousButton() {
  return havePreviousButton().should('exist').click();
}

function dontHaveNextButton() {
  return cy.get(nextButton).should('not.exist');
}

function haveNextButton() {
  return cy.get(nextButton).should('exist');
}

function clickNextButton() {
  return haveNextButton().click();
}

describe('home page', () => {
  beforeEach(() => {
    // Note how we can load fixture data and use it in tests
    cy.fixture('books/top10').then((top10Books: any) => {
      this.data = {
        top10Books,
      };
    });

    cy.interceptHomePage();
  });

  it('should display placeholder if user is NOT logged in', () => {
    cy.visit('/');

    cy.get('[data-cy=top-10-login-placeholder]').should('exist');
    cy.get('[data-cy=top-10-books]').should('not.exist');
  });

  it('should display top 10 books if user is logged in', () => {
    cy.visit('/');
    cy.login();

    cy.wait('@top10');
    cy.get('[data-cy=top-10-login-placeholder]').should('not.exist');
    cy.get('[data-cy=top-10-books]').within(() => {
      // This uses fixture data instead of hardcoding values
      this.data.top10Books.forEach(book => {
        cy.contains(book.title);
        cy.contains(book.author);
      });

      playWithListScroll();
    });
  });

  it('should display all genres', () => {
    cy.visit('/');

    cy.get('[data-cy=drama]').within(() => {
      cy.contains('Théatre');
      playWithListScroll();
    });

    cy.get('[data-cy=history]').within(() => {
      cy.contains('Histoire');
      playWithListScroll();
    });

    cy.get('[data-cy=litterature]').within(() => {
      cy.contains('Littérature');
      playWithListScroll();
    });

    cy.get('[data-cy=poetry]').within(() => {
      cy.contains('Poésie');
      playWithListScroll();
    });

    cy.get('[data-cy=sciencefiction]').within(() => {
      cy.contains('Science fiction');
      playWithListScroll();
    });
  });
});
