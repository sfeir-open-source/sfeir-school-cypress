# Test Automatique : 
<br/>

Si on fait des tests, il doivent être :

 * Fiables (détecter les bugs)

 * Rapides (à écrire, à exécuter)
 
 * Peu cher (à maintenir)

##==##
<!-- .slide: class="with-code-dark“ -->

## Testing ? 
<br/>

```js

container.render(<Home/>)

find("section[1] > div[7] > button[2]")
  .triggerHtmlEvent("click");
await render();

find("header > button[class='btn btn-primary']")
  .triggerHtmlEvent("click");
await render();

find("div[class=cart-list] > div > div > span[1]")
  .getAttr('text')
  .eq("Alice aux pays des merveilles");


```

##==##

## Testing ? 
<br/>

```js

goTo("home")

find("Alice aux pays des merveilles")
  within(() => click("add to cart"))

find("cart").click()
shouldBeAt("/cart")
shouldContains("Alice aux pays des merveilles")


```
