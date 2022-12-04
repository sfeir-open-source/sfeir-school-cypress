import {CartPage} from "../page-object/cart.po";

describe('Cart', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should add an item to the cart', () => {
    const cart = new CartPage();
    cart.add();
  });
});
