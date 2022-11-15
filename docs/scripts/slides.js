import { SfeirThemeInitializer } from '../web_modules/sfeir-school-theme/sfeir-school-theme.mjs';

// One method per module
function school() {
  return [
    "00-school/00-TITLE.md",
    "00-school/speaker-jge.md",
    "00-school/speaker-nfr.md",
    "00-school/speaker-ggr.md",
  ]
}

function intro() {
  return [
    "01-intro/00-TITLE.md",
    "01-intro/10-why.md",
    "01-intro/20-how.md",
  ]
}

function cypress() {
  return [
    "02-Cypress/00-TITLE.md",
    "02-Cypress/10-cypress.md",
    "02-Cypress/20-installation.md",
    "02-Cypress/30-nx.md",
    "02-Cypress/40-exercice00.md",
    "02-Cypress/50-test-runner.md",
    "02-Cypress/60-running-javascript.md",
    "02-Cypress/70-api.md",
    "02-Cypress/80-good-practices.md",
    "02-Cypress/90-exercice01.md",
    "02-Cypress/100-good-tests.md"
  ]
}

function commands() {
  return [
    "03-Commands/00-TITLE.md",
    "03-Commands/10-introduction.md",
    "03-Commands/20-yield.md",
    "03-Commands/30-execution-order.md",
    "03-Commands/40-exercice02.md",
    "03-Commands/50-custom-commands.md",
    "03-Commands/60-commands-creation.md",
    "03-Commands/70-exercice03.md",
  ]
}

function structurertests() {
  return [
    "04-Structurer tests/00-TITLE.md",
    "04-Structurer tests/10-command.md",
    "04-Structurer tests/20-command-ouverture.md",
    "04-Structurer tests/30-differents-tests.md",
    "04-Structurer tests/40-ouverture.md",
  ]
}

function alias() {
  return [
    "05-alias/00-TITLE.md",
    "05-alias/10-execution-order.md",
    "05-alias/20-bad-example.md",
    "05-alias/30-reference.md",
    "05-alias/40-usages.md",
    "05-alias/50-exercice04.md",
  ]
}

function networking() {
  return [
    "05-Networking/00-TITLE.md",
    "05-Networking/10-differents-tests.md",
    "05-Networking/20-integration-networking.md",
    "05-Networking/30-fixture.md",
    "05-Networking/40-exercice05.md",
    "05-Networking/50-ouverture.md",
  ]
}

function domains() {
  return [
      "06-Domains/00-TITLE.md",
    ]
}


function more() {
  return [
    "06-More/00-TITLE.md",
    "06-More/10-more-functionalities.md",
    "06-More/20-limitations.md",
  ]
}

function tdd() {
  return [
    "07-TDD/00-TITLE.md",
    "07-TDD/10-TDD-explained.md",
    "07-TDD/20-exercice-06.md",
  ]
}

function lessonlearnt() {
  return [
    "08-lesson-learnt/00-TITLE.md",
    "08-lesson-learnt/10-lesson-learnt.md",
    "08-lesson-learnt/20-end.md",
  ]
}

function formation() {
  return [
    ...school(),
    ...intro(),
    ...cypress(),
    ...commands(),
    ...structurertests(),
    ...alias(),
    ...networking(),
    // ...domains(),
    ...more(),
    // ...tdd(),
    ...lessonlearnt(),
  ].map(slidePath => {
    return { path: slidePath };
  });
}

SfeirThemeInitializer.init(formation);
