import React from 'react'
import classNames from 'classnames'
import styles from 'styles/components/Button.module.sass'

type props = {
  text: string
  primary?: boolean
  secundary?: boolean
  tertiary?: boolean
  light?: boolean
  handleOnClick?: () => void
}

const Button = ({
  text,
  primary,
  secundary,
  tertiary,
  light,
  handleOnClick,
}: props): React.ReactElement => {
  const button = classNames({
    [styles.button]: true,
    [styles.primary]: primary,
    [styles.secundary]: secundary,
    [styles.tertiary]: tertiary,
    [styles.light]: light,
  })

  return (
    <button className={button} onClick={handleOnClick}>
      {text}
    </button>
  )
}

export default Button
