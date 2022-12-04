## Quel sélecteur

* ❌ DOM, class, id ...
  * Trop dépendant du code, du style, des changements

* 🤔 Un sélecteur pour les tests ? 
  * Parfait pour tester
  * Résistants aux changements de styles
  * Pas d'impact sur le code

* 🤔 Utiliser le texte ?
  * Parfois utile, parfois non 

##==##
<!-- .slide: class="two-column" -->

## Selecteur pour le test

Recommandations :

 * data-cy (Cypress)
 * data-test
 * data-testid (Testing Library)
 * par texte (Testing Library)

##--##

<br>
<br>
<br>

<!-- .slide: class="with-code" -->

```html

<button data-cy="play-button">


```
<!-- .element: class="big-code" -->

<!-- .slide: class="with-code" -->
```js

cy.get('[data-cy=play-button]').click();


```
<!-- .element: class="big-code" -->

##==##

## Test Runner UI

<br/>

<img src="assets/images/open-selector-ui.gif" style="width:100%;"/>

##==##

## Cypress Studio

<br/>


<!-- .slide: class="with-code" -->

```json
// cypress.json
{
  "experimentalStudio": true
}
```
<!-- .element: class="big-code" -->

