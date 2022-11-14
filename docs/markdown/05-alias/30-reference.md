## Alias usage



<!-- .slide: class="with-code" -->
```js
it(`will NOT work as expected`, () => {
    const button = cy.get('#login-button').as('loginButton');
    cy.get('@loginButton').click();
});
```
<!-- .element: class="big-code" -->
