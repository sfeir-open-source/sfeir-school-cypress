<!-- .slide: class="center" -->

# Un test runner

```js
describe('My First Test', () => {
  // Use it partially !
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

  // Use it partially !
  afterEach(() => {})

  // Use it partially !
  after(() => {})
})
```