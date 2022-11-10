import React from 'react'
import Script from 'next/script'
import { groq } from 'next-sanity'

import { usePreviewSubscription } from '../lib/sanity'
import { getClient } from '../lib/sanity.server'
import { SectionWithImageAndCta } from '../features/SectionWithImageAndCta'
import {
  TextGrid,
  TextWithImageToRight,
  TextWithImageToLeft,
  DefaultContent,
} from '../features/Startpage'
import { PageWrapper } from '../components/PageWrapper'
import { filterDataToSingleItem } from '../utils/helpers'
import { ExitPreviewLink } from '../components/ExitPreviewLink'
import { Hero } from '../features/Hero'

const StartPage = ({ data, preview = false }) => {
  const { data: previewData } = usePreviewSubscription(data?.startPageQuery, {
    initialData: data?.startPage,
    enabled: preview,
  })

  const page = filterDataToSingleItem(previewData, preview)
  const { layout, hero } = page

  const getLayoutComponent = (content, index) => {
    switch (content._type) {
      case 'textGrid':
        return <TextGrid key={index} content={content} />
      case 'sectionWithImageAndPosition':
        if (content.imageToRight) {
          return <TextWithImageToRight key={index} content={content} />
        }
        return <TextWithImageToLeft key={index} content={content} />
      case 'sectionWithImageAndCta':
        return <SectionWithImageAndCta key={index} content={content} />
      default:
        console.log('Type does not exist')
    }
  }

  return (
    <PageWrapper headerDark footerDark>
      {preview && <ExitPreviewLink />}
      <Script
        id="matomo"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
    var _paq = window._paq = window._paq || [];
  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="//matomo.iteam.services/";
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', '1']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
  })();
  `,
        }}
      />
      <Script
        id="posthog"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
          posthog.init('phc_Lq4jhhjx4WcWDll2x0NILK5yulFFaUSrgGM82iPL36M',{api_host:'https://posthog.iteam.services'})`,
        }}
      />
      {hero && (
        <Hero
          title={hero.title}
          subtitle={hero.subtitle}
          mediaType={hero.mediaType}
          link={hero.link}
          className="tw-h-screen"
        />
      )}
      {layout.map((content, index) => getLayoutComponent(content, index))}

      <DefaultContent
        data={page.defaultLayout}
        carousel={data.carousel}
        ourPricing={data.ourPricing}
      />
    </PageWrapper>
  )
}

const startPageQuery = groq`
*[_type == 'startPage'] {
  ...,
  layout[] {
    ...,
      blockText {
        blockText []{
        ...,
        markDefs[]{
          ...,
          _type == "internalLink" => {
            reference-> {
              _type,
              slug {
                current
              }
            }
          }
        }
      }
    },
  },
  defaultLayout {
    ...,
    faq[] {
      ...,
      blockText {
        blockText [] {
          ...,
          markDefs[] {
            ...,
            _type == "internalLink" => {
              reference-> {
                _type,
                slug {
                  current
                }
              }
            }
          }
        }
      }
    }
  }
}`

const carouselQuery = groq`
*[_id == 'carousel'][0] {
  ...,
  texts[]{
    ...,
    reference -> {
      _type,
      slug {
        current,
      }
    }
  }
}`

const ourPricingQuery = groq`
*[_id == 'ourPricing'][0] {
  ...,
  section {
    ...,
    blockText {
      blockText [] {
        ...,
        markDefs[] {
          ...,
          _type == "internalLink" => {
            reference-> {
              _type,
              slug {
                current
              }
            }
          }
        }
      }
    }
  }
}
`
export async function getStaticProps({ preview = false }) {
  const startPage = await getClient(preview).fetch(startPageQuery)
  const carousel = await getClient(preview).fetch(carouselQuery)
  const ourPricing = await getClient(preview).fetch(ourPricingQuery)

  if (!startPage)
    return {
      notfound: true,
    }

  return {
    props: {
      preview,
      data: { startPage, startPageQuery, carousel, ourPricing },
    },
  }
}

export default StartPage
