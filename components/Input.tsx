import React from 'react'
import classNames from 'classnames'

import styles from 'styles/components/Input.module.sass'

type Props = {
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  light?: boolean
  name: string
  placeholder?: string
  required?: boolean
  textLabel: string
  type: string
}

const Input = ({
  handleOnChange,
  light,
  name,
  placeholder,
  required,
  textLabel,
  type,
}: Props): React.ReactElement => {
  const inputText = classNames({
    [styles.inputText]: true,
    [styles.light]: light,
  })
  return (
    <label htmlFor="password" className={styles.label}>
      <input
        className={inputText}
        name={name}
        onChange={handleOnChange}
        placeholder={placeholder}
        required={required}
        type={type}
      />
      <span className={styles.textLabel}>{textLabel}</span>
      {light && <div className={styles.hasBorder} />}
    </label>
  )
}

export default Input
