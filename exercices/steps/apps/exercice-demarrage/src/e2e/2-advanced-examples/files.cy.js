/// <reference types="cypress" />

/// JSON fixture file can be loaded directly using
// the built-in JavaScript bundler
const requiredExample = require('../../fixtures/example');

context('Files', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/files');
  });

  beforeEach(() => {
    // load example.json fixture file and store
    // in the test context object
    cy.fixture('example.json').as('example');
  });

  it('cy.fixture() - load a fixture', () => {
    // https://on.cypress.io/fixture

    // Instead of writing a response inline you can
    // use a fixture file's content.

    // when application makes an Ajax request matching "GET **/comments/*"
    // Cypress will intercept it and reply with the object in `example.json` fixture
    cy.intercept('GET', '**/comments/*', { fixture: 'example.json' }).as('getComment');

    // we have code that gets a comment when
    // the button is clicked in scripts.js
    cy.get('.fixture-btn').click();

    cy.wait('@getComment')
      .its('response.body')
      .should('have.property', 'name')
      .and('include', 'Using fixtures to represent data');
  });

  it('cy.fixture() or require - load a fixture', function () {
    // we are inside the "function () { ... }"
    // callback and can use test context object "this"
    // "this.example" was loaded in "beforeEach" function callback
    expect(this.example, 'fixture in the test context').to.deep.equal(requiredExample);

    // or use "cy.wrap" and "should('deep.equal', ...)" assertion
    cy.wrap(this.example).should('deep.equal', requiredExample);
  });

  it('cy.readFile() - read file contents', () => {
    // https://on.cypress.io/readfile

    // You can read a file and yield its contents
    // The filePath is relative to your project's root.
    cy.readFile('cypress.json').then(json => {
      expect(json).to.be.an('object');
    });
  });
});
