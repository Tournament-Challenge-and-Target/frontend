import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { userLogin } from 'redux/actions/users'
import Head from 'next/head'
import { login } from 'api/access'
import { Button, Link } from 'components'

import styles from 'styles/pages/Login.module.sass'

interface fieldsType {
  username: string
  password: string
}

const Login = (): React.ReactNode => {
  const dispatch = useDispatch()

  const [fields, setFields] = useState<fieldsType>({
    username: '',
    password: '',
  })

  const handeOnSubmit = (e): void => {
    e.preventDefault()
    login(fields)
      .then((response) => dispatch(userLogin(response.data)))
      .catch((error) => console.log(error))
  }

  const handleOnChange = (e): void => {
    const { name, value } = e.target
    setFields({ ...fields, [name]: value })
  }

  const disabledButton = !fields.username || !fields.password

  return (
    <>
      <Head>
        <title>Login / Registro - 1upgaming.gg</title>
        <meta
          name="description"
          content="Página de acceso y registro para usuarios de 1UpGaming"
        />
      </Head>
      <div className={styles.login}>
        <div className={styles.content}>
          <h1 className={styles.title}>¡Bienvenido de nuevo!</h1>

          <form
            className={styles.loginForm}
            onSubmit={handeOnSubmit}
            autoComplete="off"
          >
            <label htmlFor="email" className={styles.label}>
              <input
                className={`${styles.input} ${styles.light}`}
                name="username"
                onChange={handleOnChange}
                placeholder=" "
                type="text"
                required
              />
              <span className={styles.textLabel}>Nickname</span>
              <div className={styles.hasBorder} />
            </label>

            <label htmlFor="password" className={styles.label}>
              <input
                className={`${styles.input} ${styles.light}`}
                name="password"
                onChange={handleOnChange}
                placeholder=" "
                type="password"
                required
              />
              <span className={styles.textLabel}>Contraseña</span>
              <div className={styles.hasBorder} />
            </label>

            <Button primary disabled={disabledButton} text="IDENFTIFICARME" />
          </form>

          <p className={styles.information}>
            ¿No tienes una cuenta? Crea una{' '}
            <Link href="/create-account" text="aquí" primary></Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default Login
