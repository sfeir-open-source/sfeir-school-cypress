# Tips

## Function versus Command

<!-- .slide: class="with-code" -->
```typescript
Cypress.Commands.add('fillLoginForm', (username, password) => {
  cy.get('username').type(username);
  cy.get('password').type(password);
});
```
<!-- .element: class="big-code" -->

<!-- .slide: class="with-code" -->
```typescript
export const fillLoginForm = (username, password) => {
  cy.get('username').type(username);
  cy.get('password').type(password);
});
```
<!-- .element: class="big-code" -->


