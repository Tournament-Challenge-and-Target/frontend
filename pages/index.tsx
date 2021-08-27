import Head from 'next/head'
import Link from 'next/link'

import { InfluencerSlider } from 'components'

import styles from 'styles/components/Home.module.sass'

const Home = () => {
  return (
    <>
      <Head>
        <title>Tournament Challenge And Target</title>
        <meta
          name="description"
          content="We are the definitive and disruptive tournament platform for eSports. Are you prepared?"
        />
      </Head>

      <main className={styles.main}>
        <section className={styles.intro}>
          <h1 className={styles.content_title}>
            <span className={styles.title}>
              Todos tus <span className={styles.highlight}>torneos</span>
            </span>
            <span className={styles.subtitle}>en un mismo sitio</span>
          </h1>

          <div className={styles.action_button}>
            <Link href="/">
              <a className={`${styles.link} ${styles.button} ${styles.active}`}>
                Entra ahora
              </a>
            </Link>
            <Link href="/">
              <a className={`${styles.link} ${styles.button} ${styles.light}`}>
                Ver precios
              </a>
            </Link>
          </div>
        </section>

        <section className={styles.one_column}>
          <InfluencerSlider />
        </section>
      </main>
    </>
  )
}

export default Home
