# Origin

> Une des forces de Cypress est l'exécution dans une iframe qui permet de fournir très facilement beaucoup d'outillage, mais ça crée une limitation : On ne peut pas changer de domaine car on se heurte à un verrou de sécurité du navigateur.
> Il existe des méthodes pour passer outre cette contrainte.

- Ouvrer le fichier `steps/apps/07-origin/src/e2e/login.cy.ts`
- Suivez la trame de test décrite dans le fichier

> Pour changer le domaine courant il faut passer par la commande `cy.origin(url, () => {})`
