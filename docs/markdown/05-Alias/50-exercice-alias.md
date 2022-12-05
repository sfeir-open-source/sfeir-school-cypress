<!-- .slide: class="exercice" -->

# Exercice: Créer un alias

## Lab

* create an alias for the Book title
* click on the cart button
* check book title presence on cart page

### npm run start-exercice-alias


##==##

# Solution

<!-- .slide: class="with-code" -->
```typescript
it('should add an item to the cart', () => {
  cy.get('[data-cy^="book-item"]').first().within(() => {
    cy.get('[data-cy="book-item-title"]').invoke('text').as('booktitle');
    cy.addToCart();
  });

  cy.get('[data-cy="cart-button"]').click();

  cy.get('@booktitle').then(title => {
    cy.get('.container').should('contain', title);
  });
});
```
<!-- .element: class="big-code" -->
