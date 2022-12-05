# Viewport
<br/>

## Tester différentes tailles
<br/>

* Par défaut: cypress.json

```json

{
  "viewportWidth": 1280,
  "viewportHeight": 760,
}


```


* Pour chaque test: cy.viewport

```js

  cy.viewport("iphone-8")


```

##==##

# Scroll
<br/>

## Cypress peut scroller.

<!-- .slide: class="with-code" -->
```js

cy.scrollTo(x, y)

cy.get('.sidebar').scrollTo('bottom')


```
<!-- .element: class="big-code" -->

Crédits: [official documentation](https://docs.cypress.io/api/commands/scrollto)

##==##

# Screenshots

## Cypress photographie votre application !

<!-- .slide: class="with-code" -->
```js

cy.screenshot([filename])


```
<!-- .element: class="big-code" -->

Cypress prend aussi des vidéos


Credits: [official documentation](https://docs.cypress.io/api/commands/screenshot)

##==##

# Mock du temps

## Un test doit être rapide

```js

// Code à tester
setTimeout(() => {
  handlePayementError()
}, ONE_MINUTE)


```

```js 

// Test
cy.clock() // mock du temps

cy.visit('/')
// ...

cy.tick(ONE_MINUTE)
// setTimeout déclenché !


```

Credits: [official documentation](https://docs.cypress.io/api/commands/clock)

