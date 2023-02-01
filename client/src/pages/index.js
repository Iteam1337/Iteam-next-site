import { groq } from 'next-sanity'
import { PreviewSuspense } from 'next-sanity/preview'
import Script from 'next/script'
import React, { lazy } from 'react'

import { DocumentsCount } from '../components/DocumentsCount'
import { ExitPreviewLink } from '../components/ExitPreviewLink/ExitPreviewLink'
import { PageWrapper } from '../components/PageWrapper/PageWrapper'
import { sanityClient } from '../lib/sanity.client'
import { Hero } from '../features/Hero'
import {
  TextGrid,
  TextWithImageToRight,
  TextWithImageToLeft,
  DefaultContent,
} from '../features/Startpage'
import { SectionWithImageAndCta } from '../features/SectionWithImageAndCta'

const PreviewDocumentsCount = lazy(() =>
  import('../components/PreviewDocumentsCount')
)

const StartPage = ({ data, /* token, */ preview /*  = false */ }) => {
  // const { data: previewData } = usePreviewSubscription(data?.startPageQuery, {
  //   initialData: data?.startPage,
  //   enabled: preview,
  // })

  // const page = filterDataToSingleItem(previewData, preview)
  const { layout, hero } = data.startPage

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

  if (preview) {
    return (
      <PreviewSuspense fallback="Loading...">
        <ExitPreviewLink />
        <PreviewDocumentsCount />
      </PreviewSuspense>
    )
  }

  console.log(data)

  return (
    <>
      <PageWrapper headerDark footerDark>
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
        {hero && (
          <Hero
            title={hero.title}
            subtitle={hero.subtitle}
            mediaType={hero.mediaType}
            link={hero.link}
            className="tw-h-screen"
          />
        )}
        {layout?.map((content, index) => getLayoutComponent(content, index))}
        <DefaultContent
          data={data.startPage.defaultLayout}
          carousel={data.carousel}
          ourPricing={data.ourPricing}
        />
      </PageWrapper>
      <DocumentsCount data={data} />
    </>
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
  if (preview) {
    return { props: { preview } }
  }

  const startPage = await sanityClient.fetch(startPageQuery)
  const carousel = await sanityClient.fetch(carouselQuery)
  const ourPricing = await sanityClient.fetch(ourPricingQuery)

  // if (!startPage)
  //   return {
  //     notfound: true,
  //   }

  return {
    props: {
      // preview,
      data: { startPage, startPageQuery, carousel, ourPricing },
      // data,
    },
  }
}

export default StartPage
