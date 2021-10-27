import React from 'react'
import Hero from '../sections/startpage/Hero'
import TextGrid from '../sections/startpage/TextGrid'
import TextWithImageToRight from '../sections/startpage/TextWithImageToRight'
import TextWithImageToLeft from '../sections/startpage/TextWithImageToLeft'
import SectionWithImageAndCta from '../sections/mvp/SectionWithImageAndCta'
import PageWrapper from '../components/PageWrapper'
import GoogleAnalytics from '../components/GoogleAnalytics/GoogleAnalytics'
import { usePreviewSubscription } from '../lib/sanity'
import { getClient } from '../lib/sanity.server'
import { filterDataToSingleItem } from '../utils/helpers'
import { groq } from 'next-sanity'
import DefaultContent from '../sections/startpage/DefaultContent'

const StartPage = ({ data, preview = false }) => {
  const { data: previewData } = usePreviewSubscription(data?.startPageQuery, {
    initialData: data?.startPage,
    enabled: preview,
  })
  const page = filterDataToSingleItem(previewData, preview)
  const { layout } = page

  return (
    <>
      <PageWrapper headerDark footerDark>
        <GoogleAnalytics />
        <Hero />
        {layout.map((content) => {
          switch (content._type) {
            case 'textGrid':
              return <TextGrid content={content} />
            case 'sectionWithImageAndPosition':
              switch (content.imageToRight) {
                case true:
                  return <TextWithImageToRight content={content} />
                case false:
                  return <TextWithImageToLeft content={content} />
              }
            case 'sectionWithImageAndCta':
              return <SectionWithImageAndCta content={content} />
            default:
              console.log('Type does not exist')
          }
        })}

        <DefaultContent
          data={page.defaultLayout}
          carousel={data.carousel}
          ourPricing={data.ourPricing}
        />
      </PageWrapper>
    </>
  )
}

const startPageQuery = groq`
*[_id == 'startPage'] {
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

  return {
    props: {
      preview,
      data: { startPage, startPageQuery, carousel, ourPricing },
    },
  }
}

export default StartPage
