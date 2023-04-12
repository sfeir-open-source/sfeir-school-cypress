<!-- .slide: class="exercice" -->

# Exercice: Premiers pas

## Lab


 * check the header's title (Sfeir-school: Cypress)
  
 * click on **cart** button
  
 * check the cart page's content (Your cart is empty)

### npm run start-exercice-premiers-pas


##==##

## Solution

<!-- .slide: class="with-code" -->
```js
describe('Premiers pas', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should navigate to cart page', () => {
    cy.get('[data-cy="header-title"]').should('have.text', 'Sfeir-school: Cypress');
    cy.get('[data-cy="cart-button"]').click();
    cy.get('body').should('contain', 'Your cart is empty');
  });
});

```
<!-- .element: class="big-code" -->
