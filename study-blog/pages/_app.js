import 'styles/globals.css'
import Layout from 'components/layout'

import '@fortawesome/fontawesome-svg-core/style.css'
import {config} from '@fontawesome-svg-core/styles.css'
config.authAddCss = false

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
