import './app.module.scss'
import Pages from '../pages/pages'
import Header from '../header/header'

export function App () {
  return (
    <div >
      <Header />
      <main>
        <Pages />
      </main>
    </div>
  )
}

export default App
