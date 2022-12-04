export class CartPage {
  private readonly cartButton = '[data-cy="cart-btn"]';
  private readonly cartItem = '[data-cy="cart-item"]';

  public visit(): void {
    cy.visit('/cart');
  }

  public add(): void {
    cy
      .get('[data-cy^="book-item"]')
      .first()
      .within(() => {
        cy.get('[data-cy="add-to-cart-btn"]').click();
      });
  }
}
