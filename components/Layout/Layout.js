import propTypes from 'prop-types'
import { Footer, Header } from 'components'

import styles from 'styles/components/layout.module.sass'

const Layout = ({ children }) => {
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

Layout.propTypes = {
  children: propTypes.object,
}

export default Layout
