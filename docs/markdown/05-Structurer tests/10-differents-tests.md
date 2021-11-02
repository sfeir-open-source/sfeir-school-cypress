# Un bon test : rappel

Un bon test doit être :

* Compréhensible

* Rapide

* Fiable

##==##

# Compréhensible
<br/>

Test d'intégration/end-to-end : ➔ __Humain__.

 * Cas d'utilisation réel
 
 * Plusieurs assertions par test

##==##

# Fiable
<br/>

Si on casse 1 fonctionnalité:

 * 👍 Au moins 1 test plante 

 * 👌 1 seul test plante

Plus rapide (à réparer), plus clair, moins frustrant.


##==## 
<!-- .slide: class="two-column-layout" -->

# Fiable
<br/>

## Tester __tous__ les cas

  * login/mdp OK
  * login/mdp KO
  * aucune entrée
  * Erreur 500 
  * ...

_intercept_ + _fixture_ !

##--##

<img src="./assets/images/login-page.svg"/>

##==##
<!-- .slide: class="two-column-layout" -->

# Rapide
<br/>

## Prenez des raccourcis ! 

 * Etat initial programmatique   
<br/>

<div style="width:50%">

```js

beforeEach(() => {
  localStorage.setItem({
    username: "Username"
  })
})

it('should handle logged user', () => {
  cy.visit('/youSongs')
})


```

</div>
##--##

<img src="./assets/images/logged-page.svg"/>
