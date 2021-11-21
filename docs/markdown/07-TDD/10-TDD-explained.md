# Notre Todo-list à présent : 
<br/>

Pour chaque fonctionnalité:

  1. Développer

  2. Tester à la main

  3. Tester automatiquement (Cypress)


🤔 __La bonne solution ?__ 

##==##

# Développement et test manuel

<br/>

<img src="./assets/images/tdd-cart.svg" class="mockup"/>

##==##
<!-- .slide: class="two-column-layout" -->

# Et on peut recommencer ...
<br/>


<div style="color:#ff5352; font-size:0.75em; background-color: #f2e4e4; padding: 16px; width: 45vw;">
Uncaught ReferenceError: total is not defined
  <div style='padding-left:30px; font-size:0.75em;'>
    at thirdFunction (/Some/where/to/crash/crashing.js:12:3)<br/>
    at secondFunction (/Some/where/to/crash/crashing.js:12:3)<br/>
    at firstFunction (/Some/where/to/crash/crashing.js:12:3)<br/>
    at rootFunction (/Some/where/to/crash/crashing.js:12:3)<br/>
  </div>
</div>


##--##
<br/>

Il faut recommencer: 

 1. Corriger le problème 

 2. Vider la DB

 3. Retaper tous les champs

<p class="fragment slide-in">
    <b>😒 Et encore, et encore, et encore ...</b>

</p>


##==##

# Ecrivons le test d'abord ! 

<br/>

  1. Tester automatiquement (Cypress)

    ⚠️ Il doit planter !

  2. Développer 

  3. Tester à la main

<br/>

<p class="fragment slide-in">
  <b>Cypress rejoue automatiquement les tests pour nous !</b>
</p>