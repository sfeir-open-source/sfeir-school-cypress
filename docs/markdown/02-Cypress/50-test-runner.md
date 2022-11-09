<!-- .slide: class="center" -->

# Un test runner

```js [1,20|1-9,14-20|1-20]
describe('My First Test', () => {
  before(() => {
    // Use it with parsimony !
  })

  beforeEach(() => {
    cy.visit('/');
    cy.resetDB();
  })

  it('add a book to the cart', () => {
    cy.get('book-item').click();
  })

  // Use it with parsimony !
  afterEach(() => {})

  // Use it with parsimony !
  after(() => {})
})
```
