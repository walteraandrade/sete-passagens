import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Camping App</title>
        <meta name="description" content="An app to help you organize your camping" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>
          <h1>Camping App</h1>
        </div>
      </main>
    </>
  )
}
