import styles from './app.module.scss'
import Pages from '../pages/pages'

export function App () {
  return (
    <div className={styles.app}>
      <header className="sticky p-4 text-white bg-black">
        <h1>Sfeir-school: Cypress</h1>
      </header>
      <main>
        <Pages />
      </main>
    </div>
  )
}

export default App
