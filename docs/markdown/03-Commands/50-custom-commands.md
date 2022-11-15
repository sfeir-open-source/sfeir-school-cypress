## Create your own commands

You can enpower the Cypress API with your own custom commands

<!-- .slide: class="with-code" -->
```js
it('should login an user', () => {
    cy.getLoginButton().click();
    cy.fillLoginForm().submit();
})

```

<!-- .element: class="big-code" -->
