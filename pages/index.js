import Head from 'next/head'
import styles from 'styles/components/Home.module.sass'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tournament Challenge And Target</title>
        <meta
          name="description"
          content="we are the definitive and disruptive tournament platform for eSports."
        />
      </Head>

      <div className={styles.container}>
        <main className={styles.main}></main>
      </div>
    </>
  )
}
