import { SfeirThemeInitializer } from '../web_modules/sfeir-school-theme/sfeir-school-theme.mjs';

// One method per module
function school() {
  return [
    "00-school/00-TITLE.md",
    "00-school/speaker-jge.md",
    "00-school/speaker-nfr.md",
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
    "02-Cypress/10-application.md",
    "02-Cypress/20-cypress.md",
    "02-Cypress/30-test-runner.md",
    "02-Cypress/40-running-javascript.md",
    "02-Cypress/50-automatically.md",
    "02-Cypress/60-exercice01-static.md",
  ]
}

function goodtest() {
  return [
    "03-Good test/00-TITLE.md",
    "03-Good test/10-good-tests.md",
    "03-Good test/20-breaking-test.md",
    "03-Good test/30-query.md",
    "03-Good test/40-exercice02-query.md",
  ]
}

function networking() {
  return [
    "04-Networking/00-TITLE.md",
    "04-Networking/10-differents-tests.md",
    "04-Networking/20-integration-networking.md",
    "04-Networking/30-fixture.md",
    "04-Networking/40-exercice03-intercept.md",
    "04-Networking/50-ouverture.md",
  ]
}

function structurertests() {
  return [
    "05-Structurer tests/00-TITLE.md",
    "05-Structurer tests/20-command.md",
    "05-Structurer tests/30-exercice04-commands.md",
    "05-Structurer tests/40-command-ouverture.md",
    "05-Structurer tests/50-differents-tests.md",
    "05-Structurer tests/60-exercice05-login.md",
    "05-Structurer tests/70-ouverture.md",
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
    ...goodtest(),
    ...networking(),
    ...structurertests(),
    ...more(),
    ...tdd(),
    ...lessonlearnt(),
  ].map(slidePath => {
    return { path: slidePath };
  });
}

SfeirThemeInitializer.init(formation);
