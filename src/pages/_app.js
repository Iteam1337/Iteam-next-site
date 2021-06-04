// import App from 'next/app'
import TagManager from "react-gtm-module";
import ReactGA from "react-ga";
import Layout from "../components/Layout";
import { GlobalProvider } from "../context/GlobalContext";

import "../assets/fonts/typography-font/Roboto-Bold.ttf";
import "../assets/fonts/typography-font/Roboto-BoldItalic.ttf";
import "../assets/fonts/typography-font/Roboto-Medium.ttf";
import "../assets/fonts/typography-font/Roboto-MediumItalic.ttf";

import "../components/Layout/bootstrap-custom.scss";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import "../../node_modules/aos/dist/aos.css";

import "../assets/fonts/icon-font/css/style.css";
import "../assets/fonts/typography-font/typo.css";
import "../assets/fonts/fontawesome-5/css/all.css";

const tagManagerArgs = {
  gtmId: "GTM-MP7MZVC",
};

if (process.browser) {
  TagManager.initialize(tagManagerArgs);
}
const trackingId = "UA-2430046-1";

ReactGA.initialize(trackingId);

ReactGA.pageview(window.location.pathname + window.location.search);

const MyApp = ({ Component, pageProps, router }) => {
  if (router.pathname.match(/sign|reset|coming/)) {
    return (
      <GlobalProvider>
        <Layout pageContext={{ layout: "bare" }}>
          <Component {...pageProps} />
        </Layout>
      </GlobalProvider>
    );
  }

  return (
    <GlobalProvider>
      <Layout pageContext={{}}>
        <Component {...pageProps} />
      </Layout>
    </GlobalProvider>
  );
};

export default MyApp;
