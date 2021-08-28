import React from 'react'
import classNames from 'classnames'
import styles from 'styles/components/Button.module.sass'

type props = {
  text: string
  primary?: string
  secundary?: string
  third?: string
  light?: string
  handleOnClick: () => void
}

const Button = ({
  text,
  primary,
  secundary,
  third,
  light,
  handleOnClick,
}: props): React.ReactElement => {
  const button = classNames({
    [styles.button]: true,
    [styles.primary]: primary,
    [styles.secundary]: secundary,
    [styles.third]: third,
    [styles.light]: light,
  })

  return (
    <button className={button} onClick={handleOnClick}>
      {text}
    </button>
  )
}

export default Button
