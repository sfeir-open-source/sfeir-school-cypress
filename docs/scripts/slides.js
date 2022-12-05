import { SfeirThemeInitializer } from '../web_modules/sfeir-school-theme/sfeir-school-theme.mjs';

// One method per module
function school() {
  const root = "00-School";
  return [
    `${root}/00-TITLE.md`,
    `${root}/speaker-jge.md`,
    `${root}/speaker-nfr.md`,
    `${root}/speaker-ggr.md`,
  ]
}

function introduction() {
  const root = "01-Introduction";
  return [
    `${root}/00-TITLE.md`,
    `${root}/10-why.md`,
    `${root}/20-how.md`,
  ]
}

function cypress() {
  const root = "02-Cypress";
  return [
    `${root}/00-TITLE.md`,
    `${root}/10-cypress.md`,
    `${root}/20-installation.md`,
    `${root}/30-nx.md`,
    `${root}/40-exercice-demarrage.md`,
    `${root}/50-test-runner.md`,
    `${root}/60-running-javascript.md`,
    `${root}/70-api.md`,
    `${root}/80-good-practices.md`,
    `${root}/90-exercice-premiers-pas.md`,
    `${root}/100-good-tests.md`,
  ]
}

function commands() {
  const root = "03-Commands";
  return [
    `${root}/00-TITLE.md`,
    `${root}/10-introduction.md`,
    `${root}/20-yield.md`,
    `${root}/30-execution-order.md`,
    `${root}/40-exercice-usage-commands.md`,
    `${root}/50-custom-commands.md`,
    `${root}/60-commands-creation.md`,
    `${root}/70-exercice-creation-command.md`,
  ]
}

function structurerTests() {
  const root = "04-Structurer-tests";
  return [
    `${root}/00-TITLE.md`,
    `${root}/10-command.md`,
    `${root}/20-command-ouverture.md`,
    `${root}/30-differents-tests.md`,
    `${root}/40-ouverture.md`,
    `${root}/50-page-object.md`,
    `${root}/60-exercice-page-object.md`,
  ]
}

function alias() {
  const root = "05-Alias";
  return [
    `${root}/00-TITLE.md`,
    `${root}/10-execution-order.md`,
    `${root}/20-bad-example.md`,
    `${root}/30-reference.md`,
    `${root}/40-usages.md`,
    `${root}/50-exercice-alias.md`,
  ]
}

function networking() {
  const root = "05-Networking";
  return [
    `${root}/00-TITLE.md`,
    `${root}/10-differents-tests.md`,
    `${root}/20-integration-networking.md`,
    `${root}/30-fixture.md`,
    `${root}/40-exercice-networking.md`,
    `${root}/50-ouverture.md`,
  ]
}

function origin() {
  const root = "06-Origin";
  return [
    `${root}/00-TITLE.md`,
    `${root}/10-iframe-context.md`,
    `${root}/20-exercice-origin.md`,
    ]
}

function componentTesting() {
  const root = "07-Component-testing";
  return [
    `${root}/00-TITLE.md`,
    `${root}/10-introduction.md`,
    `${root}/20-configuration.md`,
    `${root}/30-exercice-component-testing.md`,
  ]
}


function more() {
  const root = "08-More";
  return [
    `${root}/00-TITLE.md`,
    `${root}/10-more-functionalities.md`,
    `${root}/20-limitations.md`,
  ]
}

function tdd() {
  return [
    "07-TDD/00-TITLE.md",
    "07-TDD/10-TDD-explained.md",
    "07-TDD/20-exercice-06.md",
  ]
}

function continuousIntegration() {
  const root = "09-Continuous-integration";
  return [
    `${root}/00-TITLE.md`,
    `${root}/10-what-is-ci.md`,
    `${root}/20-configuration.md`,
    `${root}/30-exercice-07.md`,
  ]
}

function lessonsLearnt() {
  const root = "10-Lessons-learnt";
  return [
    `${root}/00-TITLE.md`,
    `${root}/10-lesson-learnt.md`,
    `${root}/20-end.md`,
  ]
}

function formation() {
  return [
    ...school(),
    ...introduction(),
    ...cypress(),
    ...commands(),
    ...structurerTests(),
    ...alias(),
    ...networking(),
    ...origin(),
    // ...componentTesting(),
    ...more(),
    // ...continuousIntegration(),
    // ...tdd(),
    ...lessonsLearnt(),
  ].map(slidePath => {
    return { path: slidePath };
  });
}

SfeirThemeInitializer.init(formation);
