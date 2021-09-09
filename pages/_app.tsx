import React from 'react'
import { Layout } from 'components'

import 'styles/globals.sass'

type AppProps = {
  Component: React.FC
  pageProps: any
}

function MyApp({ Component, pageProps }: AppProps): React.ReactNode {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
