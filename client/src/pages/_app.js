import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
// import App from 'next/app'
import posthog from 'posthog-js'

import { GlobalProvider } from '../context/GlobalContext'
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
  const nextRouter = useRouter()

  useEffect(() => {
    footerCache = footer
  }, [footer])

  useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_API_KEY, {
      api_host: 'https://posthog.iteam.services',
      loaded: (posthog) => {
        if (process.env.NODE_ENV === 'development') posthog.opt_out_capturing()
      },
    })

    const handleRouteChange = () => posthog.capture('$pageview')
    nextRouter.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      nextRouter.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [nextRouter.events])

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

export default MyApp
