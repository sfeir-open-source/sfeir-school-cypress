# Page object

> Le pattern Page Object est un pattern souvent recommandé pour l'écriture des textes e2e. Ce pattern permet de centraliser les selector et centraliser aussi certaines suites d'actions répétitives dans une classe représentant une brique métier (une page, un composant, un ensemble de composant qui font partie de la même fonctionnalité, etc.)

- Ouvrer le fichier `steps/apps/08-page-object/src/e2e/app.cy.ts`
- Créez le fichier `steps/apps/08-page-object/src/page-object/cart.po.ts`
- En utilisant la syntaxe pour décrire une classe, définissez la classe `CartPage` avec les méthodes `visit(): void` et `add(): void`
- Suivez la trame de test décrite dans le fichier `app.cy.ts` en utilisant les méthodes que vous avez créé dans la classe `CartPage`

> Syntaxe des classes en TypeScript :
> ```TypeScript
> export class MyClass {
>   constuctor() {} // optional
>
>   method(): ReturnType {
>     // do something
>   }
> }
> ```
