## Command Creation


<!-- .slide: class="with-code" -->
```typescript
declare namespace Cypress {
  interface Chainable<Subject> {
    fillLoginForm(username: string, password: string): Cypress.Chainable<Subject>;
  }
}
```
<!-- .element: class="big-code" -->

<!-- .slide: class="with-code" -->
```typescript
Cypress.Commands.add('fillLoginForm', (username, password) => {
  cy.get('username').type(username);
  cy.get('password').type(password);
});
```
<!-- .element: class="big-code" -->
