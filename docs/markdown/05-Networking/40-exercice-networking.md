<!-- .slide: class="exercice" -->

# Exercice: Mock serveur

## Lab

* Mocker la requête pour la cart

### npm run start-exercice-networking

##==##

# Solution

<!-- .slide: class="with-code" -->
```typescript
describe('Cart', () => {
  beforeEach(() => {
    // intercepter la requête pour réupérer la cart
    cy.intercept('/api/cart', {fixture: 'cart.json'}).as('cart');
    cy.visit('/');
  });

  it('should populate the cart', () => {
    // attendre la réponse du serveur
    cy.wait('@cart');
    cy.get('[data-cy="cart-button-counter"]').invoke('text').should('eq', '2');
  });
});

```
<!-- .element: class="big-code" -->
