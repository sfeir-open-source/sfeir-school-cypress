# Hooks

Privilégier les hooks **before** et **beforeEach** pour initialiser le contexte de test.

##==##

# Longueur des tests

##==##

# Structurer ses tests

 * Par fonctionnalité ? 

 * Par page ? 

<br/>

__Celà dépend de vous__ (et/ou du projet)  

 * Faites un choix

 * Changez au besoin

##==##

# Un bon test #2

Test == Code
➔ Bonnes pratiques !

 * Code clair 
  
 * Pas de duplication

##==##

# Pas de duplication 

Login : pour __plusieurs__ pages
➔ Réutiliser "login"

##==##

# Commands

 * fonctions simple

 * Attaché à 'cy'


```js

// commands.js
Cypress.Commands.add('login', (username) => {
  localStorage.setItem({
    username
  })
})


```

<br/>

```js

// N'importe quel test
beforeEach(() => {
  cy.login("Username")
})


```
