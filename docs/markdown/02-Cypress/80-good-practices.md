## Résumé

* ❌ DOM, class, id ...
  * Trop dépendant du code, du style, des changements

* 🤔 Un sélecteur pour les tests ? 
  * Parfait pour tester
  * Résistants aux changements de styles
  * Pas d'impact sur le code

* 🤔 Utiliser le texte ?
  * Parfois utile, parfois non 

##==##

## Selecteur pour le test

Cypress propose des "marqueurs" pour les tests :

 * data-cy (recommandation Cypress)
 * data-test
 * data-testid (recommandation Testing Library)

```html

<div data-cy="button-bar">
  <button data-cy="play-button" class="btn btn-primary rounded">
</div>


```

```html

<div data-cy="button-bar">
  <button data-cy="play-button" class="btn btn-primary rounded">
</div>


```


```js

cy.get('[data-cy=button-bar]').find('[data-cy=play-button]')


```

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

