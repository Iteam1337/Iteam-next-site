// import App from 'next/app'
import Layout from "../components/Layout"
import { GlobalProvider } from "../context/GlobalContext"
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'

import "../components/Layout/bootstrap-custom.scss"
import "../../node_modules/slick-carousel/slick/slick.css"
import "../../node_modules/slick-carousel/slick/slick-theme.css"
import "../../node_modules/aos/dist/aos.css"

import "../assets/fonts/icon-font/css/style.css"
import "../assets/fonts/fontawesome-5/css/all.css"


const MyApp = ({ Component, pageProps, router }) => {

  const useRouter = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    useRouter.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      useRouter.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [useRouter.events])


  if (router.pathname.match(/sign|reset|coming/)) {
    return (
      <GlobalProvider>
        <Layout pageContext={{ layout: "bare" }}>
          <Component {...pageProps} />
        </Layout>
      </GlobalProvider>
    )
  }

  return (
    <GlobalProvider>
      <Layout pageContext={{}}>
        <Component {...pageProps} />
      </Layout>
    </GlobalProvider>
  )
}

export default MyApp
