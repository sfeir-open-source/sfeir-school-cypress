# Page Object

<!-- .slide: class="with-code" -->
```typescript
// cart page object
export class CartPage {
  private readonly cartButton = '[data-cy="cart-btn"]';
  private readonly cartItem = '[data-cy="cart-item"]';

  public visit(): void {
    cy.visit('/cart');
  }

  public getCartButton(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.cartButton);
  }

  public getCartItem(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.cartItem);
  }
}
```
