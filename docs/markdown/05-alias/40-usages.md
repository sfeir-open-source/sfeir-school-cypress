# Usages

* hold a value to test it later on

```js
it(`should login`, () => {
  cy.get('#login-button').as('loginButton');
  cy.get('@loginButton').click();
});
```
<!-- .element: class="big-code" -->

<br>

* wait for a network request

```js
it('should login', () => {
  cy.intercept('POST', '/signin', { status: 200 })
    .as("signIn")

  cy.get('[data-cy=signin-button]').click()

  // Vérifie que la requête est bien envoyée au moins une fois 
  cy.wait("@signIn")
});
```
<!-- .element: class="big-code" -->
