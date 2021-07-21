import Head from 'next/head'
import Link from 'next/link'

import styles from 'styles/components/Home.module.sass'

import fifa from 'public/images/fifa.svg'
import overwatch from 'public/images/overwatch.svg'
import lol from 'public/images/lol.svg'

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

      <main className={styles.main}>
        <section className={styles.intro}>
          <div className={styles.left_content}>
            <h1 className={styles.content__title}>
              Torneos eSports en un único lugar. ¿Listo para entrar?{' '}
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
            <span className={styles.imageContainer}>
              <div>
                <img src={fifa} className={styles.fifa} />
              </div>
            </span>

            <span className={styles.imageContainer}>
              <div>
                <img src={overwatch} className={styles.overwatch} />
              </div>
            </span>

            <span className={styles.imageContainer}>
              <div>
                <img src={lol} className={styles.lol} />
              </div>
            </span>
          </div>
        </section>
      </main>
    </>
  )
}
