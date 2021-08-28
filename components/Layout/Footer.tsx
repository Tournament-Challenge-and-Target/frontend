import React from 'react'
import styles from 'styles/components/Footer.module.sass'

const Footer = (): React.ReactElement => {
  return (
    <footer className={styles.footer}>
      Desarrollado por Julián y diseñado por Noelius con <span>❤</span>
    </footer>
  )
}

export default Footer
