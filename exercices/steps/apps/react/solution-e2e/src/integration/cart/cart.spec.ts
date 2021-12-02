describe('cart page', () => {
  function enterCreditCard(cardNumber: string) {
    cy.get('[data-cy=credit-card-input]').type(cardNumber);
  }

  function enterUserAddress(userAddress: any /* TODO JGE UserAddressDTO */) {
    cy.get('[data-cy=user-address-input]').type(userAddress.address);
    cy.get('[data-cy=user-additional-address-input]').type(userAddress.additionalAddress || '');
    cy.get('[data-cy=user-postal-code-input').type(userAddress.postalCode);
    cy.get('[data-cy=user-city-input]').type(userAddress.city);
  }

  beforeEach(() => {
    cy.interceptHomePage();
  });

  it('should display empty cart', () => {
    cy.intercept('/api/cart', {
      statusCode: 200,
      body: {
        books: [],
        total: 0,
      },
    });

    cy.visit('/cart');

    cy.get('[data-cy=cart-panel-empty]').should('exist');
    cy.get('[data-cy=pay-button]').should('not.exist');
  });

  it('should handle cart payment', () => {
    cy.intercept('/api/cart', {
      statusCode: 200,
      body: [
        {
          book: {
            id: '799',
            imageUrl: 'https://www.gutenberg.org/cache/epub/799/pg799.cover.medium.jpg',
            date: '1997-01-01',
            title: 'De la Terre à la Lune',
            author: 'Verne, Jules',
            genre: 'Science-fiction',
          },
          quantity: 1,
        },
      ],
    });

    cy.intercept('POST', '/api/cart').as('payCard');

    cy.visit('/cart');

    cy.get('[data-cy=cart-panel-empty]').should('not.exist');
    cy.contains('De la Terre à la Lune').should('exist');

    cy.get('[data-cy=pay-button]').should('be.disabled'); // As address is not set yet

    enterUserAddress({
      address: '1 rue de la Gare',
      additionalAddress: 'Appt B21',
      postalCode: 'L-1000',
      city: 'Luxembourg',
    });

    enterCreditCard('1234-2345-3456-4567');

    cy.get('[data-cy=pay-button]')
      // Optional since click will wait for the button to be enabled ;
      // but still good to explicitely mention it !
      .should('be.enabled')
      .click();

    cy.wait('@payCard'); // Check that we send the payment order before clearing the cart

    cy.location('pathname').should('eq', '/order');
  });
});
