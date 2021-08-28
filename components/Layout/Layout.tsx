import React from 'react'
import { Footer, Header } from 'components'

import styles from 'styles/components/Layout.module.sass'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props): React.ReactElement => {
  return (
    <div className={styles.layout}>
      <div className={styles.wrapper}>
        <Header />

        {children}

        <Footer />
      </div>
    </div>
  )
}

export default Layout
