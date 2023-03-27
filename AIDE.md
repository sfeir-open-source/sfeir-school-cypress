# Aides

## Quelques commandes notables

- `cy.visit('/')` : permet d'ouvrir une URL
- `cy.go('forward' | 'back' | -int | int)` : permet de naviguer dans l'historique d'une page
- `cy.get(selector)` : permet de récupérer un élément de la page à partir d'un selector sur le DOM
- `cy.get(...).first()` : permet de récupérer le premier élément quand le selector va correspondre à plusieurs éléments du DOM
- `cy.get(...).first().as('thing')` + `cy.get('@thing')` : permet de réutiliser un élément qu'on a déjà récupéré en créant un alias
- `cy.get(...).within(() => {})` : permet d'éxecuter des commandes dans le contexte défini par un sélecteur
- `cy.get(...).should(chainer, value)` : permet de vérifier une condition
  - chainer peut prendre un grand nombre de valeur, quelques exemples : 
    - `contain`
    - `be.a`
    - `be.disabled`
    - `be.empty`
    - `be.enabled`
    - `be.hidden`
    - `be.visible`
    - `exist`
    - `eq`
    - `have.class`
    - `have.length`
    - `have.property`
    - `have.text`
    - `include`
    - `match`
    - tous préfixé avec `not` (exemple : `not.include`)
- `cy.get(...).click()` : permet de cliquer sur un élément
- `cy.get(...).type('text to type{enter}')` : permet de simuler une saisie au clavier avec la possibilité de définir des appuis de touche particulier via `{enter}`
- `cy.origin('http://example.com', () => {})` : permet de basculer temporairement sur une autre Origin (typiquement le domainde d'un fournisseur d'authentification)

## Cheat Sheet CSS Selector

- `div` : permet de sélectionner les éléments `div`
- `.main-content` : permet de sélectionner les éléments qui ont la class `main-content`
- `#main-content` : permet de sélectionner les éléments qui ont l'id `main-content`
- `div.mobile` : permet de sélectionner les éléments `div` qui ont la class `mobile`
- `.main-content.mobile` : permet de sélectionner les éléments qui ont les classes `main-content` et `mobile`
- `.main-content .section` : permet de sélectionner les éléments avec la classe `section` qui sont contenu dans un élément avec la classe `main-content`
- `[data-cy]` : permet de sélectionner les éléments qui ont l'attribut `data-cy`
- `[data-cy="card"]` : permet de sélectionner les éléments qui ont l'attribut `data-cy` avec pour valeur `card`
