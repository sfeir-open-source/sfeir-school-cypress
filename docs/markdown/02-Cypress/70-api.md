
# Navigation

* Naviguer vers une URI

<!-- .slide: class="with-code" -->
```js
cy.visit('http://localhost:4200/home')
```
<!-- .element: class="big-code" -->

<br><br>
* Naviguer avec une **baseUrl** prédéfinie

<!-- .slide: class="with-code" -->
```js
cy.visit('/home') // exemple: http://localhost:4200
```
<!-- .element: class="big-code" -->

##==##

# Queries

* par class

<!-- .slide: class="with-code" -->
```js
cy.get('.header') => <header class="header">...</header>
```
<!-- .element: class="big-code" -->

<br>

* par id

<!-- .slide: class="with-code" -->
```js
cy.get('#header') => <header id="header">...</header>
```
<!-- .element: class="big-code" -->

<br>

* par tag

<!-- .slide: class="with-code" -->
```js
cy.get('header') => <header>...</header>
```
<!-- .element: class="big-code" -->

##==##

# Interactions

* Click

<!-- .slide: class="with-code" -->
```js
cy.get('#my-input').click()

```
<!-- .element: class="big-code" -->

<br>

* Saisie

<!-- .slide: class="with-code" -->
```js
cy.get('#my-input').type('foo')

```
<!-- .element: class="big-code" -->

##==##

## Assertions

* par contenu

<!-- .slide: class="with-code" -->
```js
cy.get('.sticky .title').contains('Sfeir-school: Cypress');
cy.get('#user-name').should('have.text', 'Joe Smith')

```
<!-- .element: class="big-code" -->

<br>

* par visibilité

<!-- .slide: class="with-code" -->
```js
cy.get('button#form-submit').should('be.visible')

```
<!-- .element: class="big-code" -->

<br>

* par longueur

<!-- .slide: class="with-code" -->
```js
cy.get('li.selected').should('have.length', 3)

```
<!-- .element: class="big-code" -->

##==##

# Exemple de test

<!-- .slide: class="with-code" -->
```js
cy.get('button')
    .contains('buy it!') // teste le texte du bouton
    .should('be.disabled') // teste l'état du bouton

cy.get('[data-cy="buy-panel"]')
    .within(() => {
        cy.get('[data-cy="buy-button"]').should('be.visible')
    })

cy.get('.error-label').should('not.exist')

cy.location('pathname').should('eq', '/cart')
```
<!-- .element: class="big-code" -->

##==##

# RTFM
<br/>

Tout est dans documentation: https://docs.cypress.io/



