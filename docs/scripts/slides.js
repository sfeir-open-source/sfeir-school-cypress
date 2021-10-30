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
    "01-intro/10-dream.md",
    "01-intro/20-life.md",
    "01-intro/30-testing.md",
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
  ]
}

function formation() {
  return [
    ...school(),
    ...intro(),
    ...cypress(),
    ...goodtest(),
  ].map(slidePath => {
    return { path: slidePath };
  });
}

export function usedSlides() {
  return formation();
}

