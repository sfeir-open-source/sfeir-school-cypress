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

 * data-cy (spécifique Cypress)
 * data-test
 * data-testid

```html

<div data-cy="button-bar">
  <button data-cy="play-button" class="btn btn-primary rounded">
</div>


```


```js

cy.get('[data-cy=button-bar]').find('[data-cy=play-button]')


```


##==##
<!-- .slide: class="two-column-layout" -->

## Dois-je tester un label ? 

<br/>

_Si ce label change, mon test doit-il passer rouge ?_

<br/>

 * Oui ? => Contains
    * (exemple: donnée venant du back-end ?)

 * Non ? => Get by data-cy
    * (exemple: label d'un bouton ?)

<br/>

__C'est une question subjective !__

##--##

<img src="./assets/images/spotify-library.svg" style='position:absolute; right: 120px'/>
