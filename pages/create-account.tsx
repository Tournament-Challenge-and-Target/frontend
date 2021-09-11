import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { isLoading } from 'redux/actions/app'
import { register } from 'api/access'
import { Button, Input } from 'components'

import styles from 'styles/pages/CreateAccount.module.sass'

const CreateAccount = (): React.ReactElement => {
  const dispatch = useDispatch()

  const [fields, setFields] = useState({
    username: '',
    password: '',
    email: '',
    birthdate: '',
  })

  const handleOnChange = (e): void => {
    const { name, value } = e.target
    setFields({ ...fields, [name]: value })
  }

  const handleOnSubmit = (e): void => {
    e.preventDefault()
    dispatch(isLoading(true))

    register(fields)
      .then((response) => response.data)
      .then(() => dispatch(isLoading(false)))
      .catch((error) => {
        console.error(error)
        dispatch(isLoading(false))
      })
  }

  return (
    <section className={styles.createAccount}>
      <div className={styles.wrapper}>
        <form className={styles.form} onSubmit={handleOnSubmit}>
          <h1 className={styles.title}>Crea una cuenta</h1>

          <Input
            handleOnChange={handleOnChange}
            light
            name="username"
            textLabel="Usuario"
            type="text"
            placeholder=" "
          />
          <Input
            handleOnChange={handleOnChange}
            light
            name="password"
            textLabel="Contraseña"
            type="password"
            placeholder=" "
          />
          <Input
            handleOnChange={handleOnChange}
            light
            name="email"
            textLabel="Email"
            type="email"
            placeholder=" "
          />
          <Input
            handleOnChange={handleOnChange}
            light
            name="birthday"
            textLabel="Fecha de nacimiento"
            type="date"
          />

          <Button primary text="Registrarme" />
        </form>
      </div>
    </section>
  )
}

export default CreateAccount
