## Alias usage



<!-- .slide: class="with-code" -->
```js
it(`will work as expected`, () => {
    cy.get('#login-button').as('loginButton');
    cy.get('@loginButton').click();
});
```
<!-- .element: class="big-code" -->
