import React, { useState, useEffect, useContext, useRef } from 'react'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import AOS from 'aos'
import { get, merge } from 'lodash'

import { Header } from '../Header'
import { Footer } from '../Footer'
import { ModalVideo } from '../ModalVideo'
import GlobalContext from '../../context/GlobalContext'
import { SkipLink } from '../SkipLink'
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

export const Layout = ({ children, pageContext, footer }) => {
  const gContext = useContext(GlobalContext)

  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    AOS.init({
      disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    })
    setLoaded(true)
  }, [])

  // Navbar style based on scroll
  const eleRef = useRef()

  useEffect(() => {
    window.addEventListener(
      'popstate',
      function () {
        // The popstate event is fired each time when the current history entry changes.
        gContext.closeOffCanvas()
      },
      false
    )
    window.addEventListener(
      'pushState',
      function () {
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
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        </Head>
        <SkipLink />
        {/* todo: remove this conditional when header has been refactored to not rely
        on client rendering as heavily (that causes flickering on loading page) */}
        {loaded && (
          <div className="site-wrapper overflow-hidden" ref={eleRef}>
            <Header loaded={loaded} isDark={gContext.headerDark} />
            <main id="main-content">{children}</main>
            <Footer isDark={gContext.footerDark} content={footer} />
          </div>
        )}
        <ModalVideo />
      </ThemeProvider>
    </>
  )
}
