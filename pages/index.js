import Head from 'next/head'
import Link from 'next/link'

import { InfluencerSlider } from 'components'

import styles from 'styles/components/Home.module.sass'

export default function Home() {
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
          <div className={styles.left_content}>
            <h1 className={styles.content__title}>
              Torneos de eSports en un único lugar. ¿Listo para entrar?{' '}
              <span>¡Es gratis!</span>
            </h1>

            <span className={styles.explanation}>
              Juega y organiza competiciones en todos los juegos.
            </span>

            <div className={styles.action_button}>
              <Link href="/">
                <a
                  className={`${styles.link} ${styles.button} ${styles.active}`}
                >
                  Entra ahora
                </a>
              </Link>
              <Link href="/">
                <a
                  className={`${styles.link} ${styles.button} ${styles.light}`}
                >
                  Ver precios
                </a>
              </Link>
            </div>
          </div>

          <div className={styles.right_content}>
            <div className={styles.imageContainer}>
              <div className={styles.wrapper_1}>
                <img src="images/fifa.svg" className={styles.fifa} />
              </div>
            </div>

            <div className={styles.imageContainer}>
              <div className={styles.wrapper_2}>
                <img src="images/overwatch.svg" className={styles.overwatch} />
              </div>
            </div>

            <div className={styles.imageContainer}>
              <div className={styles.wrapper_3}>
                <img src="images/lol.svg" className={styles.lol} />
              </div>
            </div>
          </div>
        </section>

        <section classNames={styles.one_column}>
          <InfluencerSlider />
        </section>
      </main>
    </>
  )
}
