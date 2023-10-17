import React from 'react'
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
