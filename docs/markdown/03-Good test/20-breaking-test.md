<style>
    .mockup {
        height: 80vh;
    }
</style>

<!-- .slide: class="two-column-layout" -->
# A good test !
<br/>

<img src="./assets/images/spotify-button-up.svg" class="mockup"/>

##--##

<br/>

```js

cy.get('button[1]')


```

##==##

<!-- .slide: class="two-column-layout" -->
# A good test ???
<br/>

<img src="./assets/images/spotify-play-only.svg" class="mockup"/>

##--##

<br/>

```js
// ❌ Test cassé (bouton "précédent" ???)
cy.get('button[1]') 

// ✅ Ok, mais changement à effectuer
cy.get('#button-bar button.primary') 

```

##==##

<!-- .slide: class="two-column-layout" -->
# A good test ???
<br/>

<img src="./assets/images/spotify-favourites.svg" class="mockup"/>

##--##
<br/>

```js
// ❌ Test cassé (Like ???)
cy.get('#button-bar .primary')

// 🤔 QUID  d'un design "carré" ? 
cy.get('#button-bar .rounded') 

// ⚠️ Ok, mais le test impacte le code !
cy.get('#play-button') 

```
__Il me faudrait un moyen d'identifier ce bouton juste pour le test !__


##==##

<!-- .slide: class="two-column-layout" -->
# A good test ???
<br/>

<img src="./assets/images/spotify-favourites.svg" class="mockup"/>

##--##

<br/>

```js
cy.get('#song-list').within(() => {
    // 🤔 Rechercher par texte ? 
    // 🤔 Est-ce vraiment bien ? 
    cy.contains('First song') 
    cy.contains('Second song') 
    cy.contains('Third song')
}) 

cy.get('#bottom-nav').within(() => {
    cy.contains('Favourites').click()
    cy.location('pathname').should('eq', '/favourites')
}) 

```

##==##

<!-- .slide: class="two-column-layout" -->
# A good test ???
<br/>

<img src="./assets/images/spotify-library.svg" class="mockup"/>

##--##

<br/>

```js
cy.get('#song-list').within(() => {
    // 🤔 Rechercher par texte ? 
    // ✅ Toujours Ok pour le moment !  
    cy.contains('First song')  
    cy.contains('Second song') 
    cy.contains('Third song')
}) 

cy.get('#bottom-nav').within(() => {
    // ❌ Test cassé (le bouton n'existe plus)
    cy.contains('Favourites').click()

    // Ok, mais encore un changement à faire !
    cy.contains('Library').click() 

    // 🤔 Changer le label implique t-il de changer la route ?
    cy.location('pathname').should('eq', '/favourites')
}) 

```