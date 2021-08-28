import React from 'react'
import Link from 'next/link'

import styles from 'styles/components/Header.module.sass'

const Header = (): React.ReactElement => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        1<span>up</span>gaming
      </h1>

      <nav className={styles.nav}>
        <ul className={styles.nav__menu}>
          <li className={styles.menu__item}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>

          <li className={styles.menu__item}>
            <Link href="/about-us">
              <a>About Us</a>
            </Link>
          </li>

          <li className={styles.menu__item}>
            <Link href="/access">
              <a>Login</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
