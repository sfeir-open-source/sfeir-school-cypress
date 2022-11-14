# Solution

<!-- .slide: class="with-code" -->
```typescript
declare namespace Cypress {
  interface Chainable<Subject> {
    getBySelectorId(id: string): Cypress.Chainable<Subject>;
  }
}
```
<!-- .element: class="big-code" -->

<!-- .slide: class="with-code" -->
```typescript
Cypress.Commands.add('getBySelectorId', (id) => {
  cy.get(`[data-cy="${id}"]`);
});
```
<!-- .element: class="big-code" -->
