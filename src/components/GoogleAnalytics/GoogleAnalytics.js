import { Component } from "react";
import Head from "next/head";

export default class extends Component {
  render() {
    return (
      <>
        {process.env.NODE_ENV === "production" && process.browser ? (
          <Head>
            <script
              async
              defer
              src="https://www.googletagmanager.com/gtag/js?id=UA-2430046-1"
            ></script>
            <script
              async
              defer
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag("js", new Date());

                gtag("config", "UA-2430046-1");`,
              }}
            />
          </Head>
        ) : null}
      </>
    );
  }
}
