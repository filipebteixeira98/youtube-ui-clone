import { Header } from './components/Header'
import { Banner } from './components/Banner'

import styles from './App.module.scss'

function App() {
  return (
    <main className={styles.content__wrapper}>
      <Header />
      <Banner />
    </main>
  )
}

export default App
