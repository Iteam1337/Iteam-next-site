import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useContext,
  useRef,
} from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import AOS from 'aos'
import { get, merge } from 'lodash'

import Header from '../Header'
import Footer from '../Footer'
import ModalVideo from '../ModalVideo'
import GlobalContext from '../../context/GlobalContext'
import imgFavicon from '../../assets/image/png/favicon.png'
import SkipLink from '../SkipLink'
// the full theme object
import { theme as baseTheme } from '../../utils'

// options for different color modes
const modes = { light: 'light', dark: 'dark' }

// merge the color mode with the base theme
// to create a new theme object
const getTheme = (mode) =>
  merge({}, baseTheme, {
    colors: get(baseTheme.colors.modes, mode, baseTheme.colors),
  })

const Layout = ({ children, pageContext, footer }) => {
  const gContext = useContext(GlobalContext)

  const [visibleLoader, setVisibleLoader] = useState(true)

  useLayoutEffect(() => {
    AOS.init({
      disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    })
    setVisibleLoader(false)
  }, [])

  // Navbar style based on scroll
  const eleRef = useRef()

  useEffect(() => {
    window.addEventListener(
      'popstate',
      function (event) {
        // The popstate event is fired each time when the current history entry changes.
        gContext.closeOffCanvas()
      },
      false
    )
    window.addEventListener(
      'pushState',
      function (event) {
        // The pushstate event is fired each time when the current history entry changes.
        gContext.closeOffCanvas()
      },
      false
    )
  }, [gContext])

  if (pageContext.layout === 'bare') {
    return (
      <ThemeProvider
        theme={
          gContext.themeDark ? getTheme(modes.dark) : getTheme(modes.light)
        }
      >
        <SkipLink />
        <div className="site-wrapper overflow-hidden" ref={eleRef}>
          <main id="main-content">{children}</main>
        </div>
        <ModalVideo />
      </ThemeProvider>
    )
  }

  return (
    <>
      <ThemeProvider
        theme={
          gContext.themeDark ? getTheme(modes.dark) : getTheme(modes.light)
        }
      >
        <Head>
          <title>Iteam</title>
          <link rel="icon" type="image/png" href={imgFavicon} />
        </Head>
        <SkipLink />
        <div className="site-wrapper overflow-hidden" ref={eleRef}>
          <Header isDark={gContext.headerDark} />
          <main id="main-content">{children}</main>
          <Footer isDark={gContext.footerDark} content={footer} />
        </div>
        <ModalVideo />
      </ThemeProvider>
    </>
  )
}

export default Layout
