# Solution

<!-- .slide: class="with-code" -->
```typescript
declare namespace Cypress {
  interface Chainable<Subject> {
    getById(id: string): Cypress.Chainable<Subject>;
  }
}
```
<!-- .element: class="big-code" -->

<!-- .slide: class="with-code" -->
```typescript
Cypress.Commands.add('getById', (id) => {
  cy.get(`[data-cy="${id}"]`);
});
```
<!-- .element: class="big-code" -->
