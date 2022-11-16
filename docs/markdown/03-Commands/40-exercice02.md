<!-- .slide: class="exercice" -->

# Exercice 02: Use Commands

## Lab

* query the list of books
* query the **first** book
* query the cart button **within** the previous scope
* click on the cart button

### npm run start-exercice02-e2e


##==##

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
