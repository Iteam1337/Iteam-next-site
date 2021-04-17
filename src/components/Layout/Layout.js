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

import imgFavicon from "../../assets/favicon.png";

import { get, merge } from "lodash";
// the full theme object
import { theme as baseTheme } from "../../utils";

const Loader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #fff;
  z-index: 9999999999;
  opacity: 1;
  visibility: visible;
  transition: all 1s ease-out 1.5s;
  &.inActive {
    opacity: 0;
    visibility: hidden;
  }
`;

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
          <title>Omega</title>
          <link rel="icon" type="image/png" href={imgFavicon} />
        </Head>
        <Loader id="loading" className={visibleLoader ? "" : "inActive"}>
          <div className="load-circle">
            <span className="one"></span>
          </div>
        </Loader>
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
          <title>Omega</title>
          <link rel="icon" type="image/png" href={imgFavicon} />
        </Head>
        <Loader id="loading" className={visibleLoader ? "" : "inActive"}>
          <div className="load-circle">
            <span className="one" />
          </div>
        </Loader>
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
