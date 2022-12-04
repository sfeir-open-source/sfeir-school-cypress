<!-- .slide: class="exercice" -->

# Exercice: Créer une command

## Lab


* declare a **getBySelectorId** command
* add it to Cypress to abstract the current **get('[data-cy="selector"]')** solution

### npm run start-exercice-creation-commands


##==##

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

##==##

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
};
```
<!-- .element: class="big-code" -->
