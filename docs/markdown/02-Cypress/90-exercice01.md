<!-- .slide: class="exercice" -->

# Exercice 01

## Lab


 * check the header's title (Sfeir-school: Cypress)
  
 * click on **cart** button
  
 * check the cart page's content (You cart is empty)


```bash
cd exercices/steps

# Lancer le serveur
npm run start-nest-server

# Lancer l'exercice
npm run start-exercice01-e2e

```


##==##

## Solution

<!-- .slide: class="with-code" -->
```js
describe('Exercice 01', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should navigate to cart page', () => {
    cy.get('[data-cy="header-title"]').should('have.text', 'Sfeir-school: Cypress');
    cy.get('[data-cy="cart-button"]').click();
    cy.get('body').should('contain', 'Your cart is empty');
  });
});

```
<!-- .element: class="big-code" -->

##==##

# Tips

## Use hooks with parsimony

Resets the test environment before each test

<br>

<!-- .slide: class="with-code" -->
```js
describe('Exercice 01', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.resetDB();
  });
});

```
<!-- .element: class="big-code" -->

##==##

# Tips


## Think as an end user

Queries implicitly wait for elements to appear in the DOM before executing.  
Explicit content assertions might not provide any value.

<br>

<!-- .slide: class="with-code" -->
```js
// Explicit assertion
cy.get('button').should('have.text', 'Login').click();

// Implicit assertion
cy.get('button').click();

```
<!-- .element: class="big-code" -->

