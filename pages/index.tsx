import React from 'react'
import Head from 'next/head'

import { Link, InfluencerSlider } from 'components'

import styles from 'styles/pages/Home.module.sass'

const Home = (): React.ReactElement => {
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

          <div className={styles.action_links}>
            <Link href="/access" text="Regístrate" boxed primary />
            <Link href="/access" text="Identifícate" boxed light />
          </div>
        </section>

        <section className={styles.one_column}>
          <div className={styles.features}>
            <span className={styles.feature}>
              <Link href="/">
                <img src="images/icons/trofeo.png" />
              </Link>
              <h3 className={styles.feature__title}>Trofeos</h3>
            </span>

            <span className={styles.feature}>
              <Link href="/">
                <img src="images/icons/mando.svg" />
              </Link>
              <h3 className={styles.feature__title}>Mejoras</h3>
            </span>

            <span className={styles.feature}>
              <Link href="/">
                <img src="images/icons/1up.svg" />
              </Link>
              <h3 className={styles.feature__title}>Tokens</h3>
            </span>
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
