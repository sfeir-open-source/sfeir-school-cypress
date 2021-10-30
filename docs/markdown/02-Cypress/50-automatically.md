<!-- .slide: class="with-code" -->

# Dans le navigateur 
<br/>

* Atteindre un page : 

```js

cy.visit('/home') // use preconfigurated URL (ex: http://localhost:8080)


```

* Atteindre un élement du DOM 

```js

cy.get('header > div[0])


```

* intéragir avec l'interface

```js

cu.get('#my-button').click()


```

##==##

# In your browser
<br/>

* tester les choses

```js

cy.get('button')
    .contains('buy it!') // Check text
    .should('be.disabled') // Check status

cy.get('[data-cy="buy-panel"]'])
    .within(() => {
        cy.get('data-cy="buy-button"]')
            .should('be.visible')
    })

cy.get('.error-label')
    .should('not.exist')

cy.location('pathname').should('eq', '/cart')


```