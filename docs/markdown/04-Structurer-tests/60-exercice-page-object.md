<!-- .slide: class="exercice" -->

# Exercice: Créer un Page Object

## Lab


* créer une classe Page Object 

### npm run start-exercice-page-object


##==##

# Solution

<!-- .slide: class="with-code" -->
```typescript
export class CartPage {
  private readonly cartButton = '[data-cy="cart-btn"]';
  private readonly cartItem = '[data-cy="cart-item"]';

  public visit(): void {
    cy.visit('/cart');
  }

  public add(): Cypress.Chainable<JQuery<HTMLElement>> {
    cy
      .get('[data-cy^="book-item"]')
      .first()
      .within(() => {
        cy.get('[data-cy="add-to-cart-btn"]').click();
      });
  }
}
```

<!-- .slide: class="with-code" -->
```typescript
it('should add an item to the cart', () => {
  const cartPage = new CartPage();
  cartPage.add();
});
```
