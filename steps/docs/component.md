# Component Testing

## Introduction



Introduced in 9.0 et stable in 10.0, Cypress now includes a feature to test a rendered component in isolation.

## Setup

Cypress propose une phase d'onboarding pour le component testing.
Elle a pour objectif d'en valider les prérequis, puis d'ajouter au projet les configurations appropriées.

Contrairement au e2e testing, le component testing présuppose que la codebase soit dans le même projet.
Cypress a également comme prérequis une version minimale du framework Javascript utilisé.

## Test

Si l'objectif du e2e testing est de tester une application depuis l'extérieur, dans les mêmes conditions qu'un utilisateur final, le component testing est différent.
Puisqu'il s'agit de tester un composant en isolation, il est donc nécessaire de lui mettre à disposition tous les entrants pour qu'il soit dans l'état attendu.



Grâce à cette référence, il est possible d'utiliser l'API du composant


// TODO cypress api
