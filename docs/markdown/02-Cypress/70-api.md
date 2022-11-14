
# Navigation

* Navigate to a complete URL

<!-- .slide: class="with-code" -->
```js
cy.visit('http://localhost:4200/home') // use preconfigurated URL (ex: http://localhost:8080)
```
<!-- .element: class="big-code" -->

<br><br>
* Navigate with a preconfigurated **baseUrl**

<!-- .slide: class="with-code" -->
```js
cy.visit('/home') // use preconfigurated URL (ex: http://localhost:4200)
```
<!-- .element: class="big-code" -->

##==##

# Queries

* by class

<!-- .slide: class="with-code" -->
```js
cy.get('.header')

```
<!-- .element: class="big-code" -->

<br>

* by id

<!-- .slide: class="with-code" -->
```js
cy.get('#header')

```
<!-- .element: class="big-code" -->

<br>

* by tag

<!-- .slide: class="with-code" -->
```js
cy.get('header')

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

* Type

<!-- .slide: class="with-code" -->
```js
cy.get('#my-input').type('foo')

```
<!-- .element: class="big-code" -->

##==##

## Assertions

* Content :

<!-- .slide: class="with-code" -->
```js
cy.get('.sticky .title').contains('Sfeir-school: Cypress');
cy.get('#user-name').should('have.text', 'Joe Smith')

```
<!-- .element: class="big-code" -->

<br>

* Visibility

<!-- .slide: class="with-code" -->
```js
cy.get('button#form-submit').should('be.visible')

```
<!-- .element: class="big-code" -->

<br>

* Length

<!-- .slide: class="with-code" -->
```js
cy.get('li.selected').should('have.length', 3)

```
<!-- .element: class="big-code" -->

##==##

# Test example

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
