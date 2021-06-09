import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useContext,
  useRef,
} from "react";

import styled, { ThemeProvider } from "styled-components";
import Head from "next/head";
import AOS from "aos";

import Header from "../Header";
import Footer from "../Footer";

import ModalVideo from "../ModalVideo";

import GlobalContext from "../../context/GlobalContext";

import GlobalStyle from "../../utils/globalStyle";

import imgFavicon from "../../assets/image/png/favicon.png";

import { get, merge } from "lodash";
// the full theme object
import { theme as baseTheme } from "../../utils";

// options for different color modes
const modes = { light: "light", dark: "dark" };

// merge the color mode with the base theme
// to create a new theme object
const getTheme = (mode) =>
  merge({}, baseTheme, {
    colors: get(baseTheme.colors.modes, mode, baseTheme.colors),
  });

const Layout = ({ children, pageContext }) => {
  const gContext = useContext(GlobalContext);

  const [visibleLoader, setVisibleLoader] = useState(true);

  useLayoutEffect(() => {
    AOS.init();
    setVisibleLoader(false);
  }, []);

  // Navbar style based on scroll
  const eleRef = useRef();

  useEffect(() => {
    window.addEventListener(
      "popstate",
      function (event) {
        // The popstate event is fired each time when the current history entry changes.
        gContext.closeOffCanvas();
      },
      false
    );
    window.addEventListener(
      "pushState",
      function (event) {
        // The pushstate event is fired each time when the current history entry changes.
        gContext.closeOffCanvas();
      },
      false
    );
  }, [gContext]);

  if (pageContext.layout === "bare") {
    return (
      <ThemeProvider
        theme={
          gContext.themeDark ? getTheme(modes.dark) : getTheme(modes.light)
        }
      >
        <GlobalStyle />
        <Head>
          <title>Iteam</title>
          <link rel="icon" type="image/png" href={imgFavicon} />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
        </Head>
        <div className="site-wrapper overflow-hidden" ref={eleRef}>
          {children}
        </div>

        <ModalVideo />
      </ThemeProvider>
    );
  }

  return (
    <>
      <ThemeProvider
        theme={
          gContext.themeDark ? getTheme(modes.dark) : getTheme(modes.light)
        }
      >
        <GlobalStyle />
        <Head>
          <title>Iteam</title>
          <link rel="icon" type="image/png" href={imgFavicon} />
        </Head>
        <div className="site-wrapper overflow-hidden" ref={eleRef}>
          <Header isDark={gContext.headerDark} />
          {children}

          <Footer isDark={gContext.footerDark} />
        </div>

        <ModalVideo />
      </ThemeProvider>
    </>
  );
};

export default Layout;
