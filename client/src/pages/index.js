import React from 'react'
import Script from 'next/script'
import { groq } from 'next-sanity'

import { usePreviewSubscription } from '../lib/sanity'
import { getClient } from '../lib/sanity.server'
import Hero from '../sections/startpage/Hero'
import TextGrid from '../sections/startpage/TextGrid'
import TextWithImageToRight from '../sections/startpage/TextWithImageToRight'
import TextWithImageToLeft from '../sections/startpage/TextWithImageToLeft'
import SectionWithImageAndCta from '../sections/common/SectionWithImageAndCta'
import PageWrapper from '../components/PageWrapper'
import { filterDataToSingleItem } from '../utils/helpers'
import DefaultContent from '../sections/startpage/DefaultContent'
import ExitPreviewLink from '../components/ExitPreviewLink'

const StartPage = ({ data, preview = false }) => {
  const { data: previewData } = usePreviewSubscription(data?.startPageQuery, {
    initialData: data?.startPage,
    enabled: preview,
  })

  const page = filterDataToSingleItem(previewData, preview)
  const { layout } = page

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
      {page?.hero && <Hero content={page.hero} />}
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
