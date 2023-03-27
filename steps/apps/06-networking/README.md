# Networking

- Ouvrer le fichier `steps/apps/06-networking/src/e2e/cart.cy.ts`
- Créez un intercepteur pour les appels à l'API `/api/cart`
- Utilisez le fichier `steps/apps/06-networking/src/fixtures/cart.json` comme mock pour la valeur de retour ("fixture")
- Créez un alias pour l'intercepteur
- Attender que l'intercepteur ait été appelé avant de vérifier le compteur sur le bouton panier en utilisant l'alias
