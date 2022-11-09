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

```js

// charge le fichier users.json
cy.fixture('users')

cy.fixture('logo.png').then((logo) => {
  // load data from logo.png
})


```

Credits : [Official Cypress.io documentation](https://docs.cypress.io/api/commands/fixture#Syntax)


##==##

# Intercept

Intercept : fausse réponse


```js

cy.intercept('/users/**')

cy.intercept('GET', '/users*')


cy.intercept('POST', '/users*', {
  statusCode: 201,
  body: {
    name: 'Peter Pan',
  },
})

cy.intercept('/users*', (req) => {
  /* do something with request and/or response */
})

```

Credits : [Official Cypress.io documentation](https://docs.cypress.io/api/commands/intercept#Usage)

##==##

# Tester sa requête

 * Spy c'est bien 
 
 * Mock c'est mieux 
   * Test des paramètres envoyés

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

##==##

# Fixture + Intercept
<br/>

Fixtures & Intercept fonctionnent ensemble ! 

 * Fixture : fausses données (ex: json)

 * Intercept : réponse = fixture

```js

cy.intercept('/users', { fixture: 'users.json' })


```
