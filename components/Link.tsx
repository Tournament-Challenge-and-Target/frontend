import React from 'react'
import Anchor from 'next/link'
import classNames from 'classnames'

import styles from 'styles/components/Link.module.sass'

type props = {
  boxed?: boolean
  children?: React.ReactNode
  href: string
  light?: boolean
  primary?: boolean
  secundary?: boolean
  text: string
  third?: boolean
}

const Link = ({
  boxed,
  children,
  href,
  light,
  primary,
  secundary,
  text,
  third,
}: props): React.ReactElement => {
  const anchor = classNames({
    [styles.link]: true,
    [styles.primary]: primary && !boxed,
    [styles.secundary]: secundary && !boxed,
    [styles.third]: third && !boxed,
    [styles.boxed]: boxed,
    [styles.boxed_primary]: boxed && primary,
    [styles.boxed_light]: boxed && light,
  })
  return (
    <Anchor href={href}>
      <a className={anchor}>{text || children}</a>
    </Anchor>
  )
}

export default Link
