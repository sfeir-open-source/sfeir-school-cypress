<!-- .slide: class="with-code-dark“ -->

## Testing ? 
<br/>

```js

container.render(<Home/>)

find("section[1] > div[7] > button[2]").triggerHtmlEvent("click");
await render();

find("header > div[className='.btn btn-primary']").triggerHtmlEvent("click");
await render();

find("div[className=cart-list] > div > div > span[1]).shouldContains("Alice aux pays des merveilles");


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
