<!-- .slide: class="center" -->

# Un test runner

```js
describe('My First Test', () => {
  // Use it with parsimony !
  before(() => {
    this.user = 'John Doe'
  })

  beforeEach(() => {
    this.counter = 7
  })

  it('increments', () => {
    this.counter++
    expect(this.counter).to.equal(8)
    expect(this.user).to.equal('John Doe')
  })

  it('decrements', () => {
    this.counter--
    expect(this.counter).to.equal(6)
    expect(this.user).to.equal('John Doe')
  })

  // Use it with parsimony !
  afterEach(() => {})

  // Use it with parsimony !
  after(() => {})
})
```
