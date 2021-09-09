import React from 'react'
import { Provider } from 'react-redux'
import store from 'redux/store'
import { Layout } from 'components'

import 'styles/globals.sass'

type AppProps = {
  Component: React.FC
  pageProps: any
}

function MyApp({ Component, pageProps }: AppProps): React.ReactNode {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
