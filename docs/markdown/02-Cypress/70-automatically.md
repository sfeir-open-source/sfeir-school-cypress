
# Dans le navigateur 
<br/>

* Atteindre une page : 

```js

cy.visit('/home') // use preconfigurated URL (ex: http://localhost:8080) 


```

* Atteindre un élement du DOM 

```js

cy.get('header > div[0]')


```

* intéragir avec l'interface

```js

cy.get('#my-button').click()
cy.get('#my-input').type('foo')


```

##==##

## Assertions

* Contenu :

```js

cy.get('.sticky .title').contains('Sfeir-school: Cypress');

cy.get('#user-name').should('have.text', 'Joe Smith')

```

* Visibilité

```js

cy.get('button#form-submit').should('be.visible')


```

* Longueur

```js

cy.get('li.selected').should('have.length', 3)


```

##==##

# Dans votre navigateur
<br/>

* tester les choses

<pre><code class="hljs" data-line-numbers="2-4|6-10|12-14|15">
cy.get('button')
    .contains('buy it!') // Check text
    .should('be.disabled') // Check status

cy.get('[data-cy="buy-panel"]')
    .within(() => {
        cy.get('[data-cy="buy-button"]')
            .should('be.visible')
    })

cy.get('.error-label')
    .should('not.exist')

cy.location('pathname').should('eq', '/cart')

</code></pre>

##==##

# RTFM
<br/>

Tout est dans [la doc](https://docs.cypress.io/) :)

<br/>

https://docs.cypress.io/
