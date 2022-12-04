# Yield

Certaines commandes **yield** un contexte, comme la référence d'un élément du DOM, pour un usgae ultérieur.

<!-- .slide: class="with-code" -->

```js
it('should', () => {
    cy
      .get('nav a') // yield all links from the navigation bar
      .first() // yield the first link from the previous list
      .click() // click on the previous yielded DOM elemnt
})

```
<!-- .element: class="big-code" -->
