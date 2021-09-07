import React from 'react'
import Head from 'next/head'
import { Button } from 'components'
import styles from 'styles/pages/Access.module.sass'

const Access = (): React.ReactNode => {
  const handeOnSubmit = (e): void => {
    e.preventDefault()
    console.log('submit')
  }

  return (
    <>
      <Head>
        <title>Login / Registro - 1upgaming.gg</title>
        <meta
          name="description"
          content="Página de acceso y registro para usuarios de 1UpGaming"
        />
      </Head>
      <div className={styles.access}>
        <div className={styles.content}>
          <h1 className={styles.title}>¡Bienvenido de nuevo!</h1>

          <form className={styles.loginForm} onSubmit={handeOnSubmit}>
            <label htmlFor="email" className={styles.label}>
              <input
                className={`${styles.input} ${styles.light}`}
                type="email"
                name="email"
                placeholder=" "
              />
              <span className={styles.textLabel}>E-mail</span>
              <div className={styles.hasBorder} />
            </label>

            <label htmlFor="password" className={styles.label}>
              <input
                className={`${styles.input} ${styles.light}`}
                type="password"
                name="password"
                placeholder=" "
              />
              <span className={styles.textLabel}>Contraseña</span>
              <div className={styles.hasBorder} />
            </label>

            <Button primary text="Identificarme" />
          </form>
        </div>
      </div>
    </>
  )
}

export default Access
