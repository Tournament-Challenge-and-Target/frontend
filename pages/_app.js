import propTypes from 'prop-types'
import { Layout } from 'components'

import 'styles/globals.sass'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

MyApp.propTypes = {
  Component: propTypes.func,
  pageProps: propTypes.object,
}

export default MyApp
