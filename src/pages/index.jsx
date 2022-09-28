import styles from '../styles/Home.module.css'
import { BlockchainProvider } from '../blockchain'
import Login from '../components/Login'

export default function Home() {
  return (
    <div className={styles.container}>
      <BlockchainProvider>
        <main className={styles.main}>
          <div className={styles.grid}>
            <Login />
          </div>
        </main>
      </BlockchainProvider>
    </div>
  )
}
