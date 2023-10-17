import React, { useEffect } from 'react'
// import App from 'next/app'
import { groq } from 'next-sanity'
import { init } from '@socialgouv/matomo-next'

import { GlobalProvider } from '../context/GlobalContext'
import { getClient } from '../lib/sanity.server'
import { Layout } from '../components/Layout'
import '../components/Layout/bootstrap-custom.scss'
import '../../node_modules/slick-carousel/slick/slick.css'
import '../../node_modules/slick-carousel/slick/slick-theme.css'
import '../../node_modules/aos/dist/aos.css'
import '../assets/fonts/icon-font/css/style.css'
import '../assets/fonts/fontawesome-5/css/all.css'
import '../assets/fonts/roboto/css/style.css'
import '../styles/globals.css'

let footerCache

const MyApp = ({ Component, pageProps, router, footer }) => {
  useEffect(() => {
    footerCache = footer
  }, [footer])

  const MATOMO_URL = 'https://matomo.iteam.services'
  const MATOMO_SITE_ID = '1'

  useEffect(() => {
    init({ url: MATOMO_URL, siteId: MATOMO_SITE_ID })
  }, [])

  if (router.pathname.match(/sign|reset|coming/)) {
    return (
      <GlobalProvider>
        <Layout pageContext={{ layout: 'bare' }}>
          <Component {...pageProps} />
        </Layout>
      </GlobalProvider>
    )
  }

  return (
    <GlobalProvider>
      <Layout pageContext={{}} footer={footer}>
        <Component {...pageProps} />
      </Layout>
    </GlobalProvider>
  )
}

const footerQuery = groq`
*[_id == 'footer'][0] {
  ...,
}`

MyApp.getInitialProps = async () => {
  if (footerCache) {
    return { footer: footerCache }
  }

  const footer = await getClient().fetch(footerQuery)

  footerCache = footer

  return { footer }
}

export default MyApp
