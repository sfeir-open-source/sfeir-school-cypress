# Solution

<!-- .slide: class="with-code" -->
```js
it('should add an item to the cart', () => {
      cy
        .get('[data-cy^="book-item"]')
        .first()
        .within(() => {
            cy.get('[data-cy="add-to-cart-btn"]').click();
      });
  });
```
<!-- .element: class="big-code" -->
