## Execution order

By executing a test suite, Cypress firstly evaluates each command and push them in a queue before executing them all.

<!-- .slide: class="with-code" -->
```js
it('should', () => {
    cy.get('#login-button').click(); // 2
    console.log('user logged in'); // 1
    cy.get('#username').should('be.visible'); // 3
});
```
<!-- .element: class="big-code" -->
