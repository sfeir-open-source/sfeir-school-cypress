# Mock data
<br/>
Fixture : fausse donnée  
<br/>

 * Statique (json, txt, csv, png ...)

 * En local

 * Observable


##==##

# Fixture
<br/>

<!-- .slide: class="with-code" -->
```js

// charge le fichier users.json
cy.fixture('users')

cy.fixture('logo.png').then((logo) => {
  // load data from logo.png
})

```
<!-- .element: class="big-code" -->

Credits : [Official Cypress.io documentation](https://docs.cypress.io/api/commands/fixture#Syntax)


##==##

# Intercept

<!-- .slide: class="with-code" -->
```js
cy.intercept('/users/**')

cy.intercept('GET', '/users*')

cy.intercept('POST', '/users*', {
  statusCode: 201,
  body: {name: 'Peter Pan'},
})

cy.intercept('/users*', (req) => /* do something with request and/or response */ )

```
<!-- .element: class="big-code" -->

##==##

# Tester sa requête


<!-- .slide: class="with-code" -->
```js
cy.intercept('POST', '/signin', { status: 200 })
  .as("signIn")

cy.get('[data-cy=signin-button]').click()

// Vérifie que la requête est bien envoyée au moins une fois 
cy.wait("@signIn")

  // Vérifie les paramètres envoyés
  .its('request.body.password').should('eq', 'Passw0rd')
  // Vérifie la réponse (utile en cas de `intercept` complexe)
  .its('response.status').should('eq', 200)


```
<!-- .element: class="big-code" -->

##==##

# Fixture + Intercept
<br/>

Fixtures & Intercept fonctionnent ensemble ! 

 * Fixture : fausses données (ex: json)

 * Intercept : réponse = fixture

<!-- .slide: class="with-code" -->
```js

cy.intercept('/users', { fixture: 'users.json' })


```
<!-- .element: class="big-code" -->
