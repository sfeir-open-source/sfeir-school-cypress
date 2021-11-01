# Dans notre cas
<br/>

Pour le moment : End-to-end
  * back-end nécessaire

  * Indépendances des tests ? 
    QUID des tests "stateful" ? (ex: ajout dans le panier)

<br/>

Les tests E2E, c'est __bien__ !   
Il sont juste __difficile__ à mettre en place.

##==##

# Un autre tradeoff ? 
<br/>

Intégration ? 

  * back-end inutile

  * Indépendances des tests !
    Mock des états

<br/>

Les tests d'intégration, c'est __bien__ aussi !   
Mais ils ne testent pas le back-end.

##==##

# Comment faire ? 

* Back-end réel : E2E
  * Difficile

* Mock "Fetch" : Unitaire
  * Ne teste pas tout le front-end

<br/>  
🤔 Comment faire pour tester __toute l'application__, tout en __se passant__ du back-end ? 