import { Header } from './components/Header'
import { Banner } from './components/Banner'
import { Recommended } from './components/Recommended'
import { Footer } from './components/Footer'

import styles from './App.module.scss'

function App() {
  return (
    <main className={styles.content__wrapper}>
      <Header />
      <Banner />
      <Recommended />
      <Footer />
    </main>
  )
}

export default App
