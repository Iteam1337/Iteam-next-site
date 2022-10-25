import React from 'react'
import { groq } from 'next-sanity'
import { NextSeo } from 'next-seo'

import { PageWrapper } from '../components/PageWrapper'
import { TextWithTags } from '../features/TextWithTags'
import { Testimonial } from '../features/Testimonial'
import { SectionWithImage } from '../features/SectionWithImage'
import { SectionWithButtonAndTextGrid } from '../features/SectionWithButtonAndTextGrid'
import { Hero } from '../features/Hero'
import { Pricing } from '../features/Pricing'
import { Role, SectionWithImageAndButton, Case, CTA } from '../features/Scaleup'
import { getClient } from '../lib/sanity.server'
import { filterDataToSingleItem } from '../utils/helpers'
import { usePreviewSubscription } from '../lib/sanity'
import { urlFor } from '../utils/helpers'
import { ExitPreviewLink } from '../components/ExitPreviewLink'

const ScaleUp = ({ data, preview = false, carousel, ourPricing }) => {
  const { data: previewData } = usePreviewSubscription(data?.scaleUpPageQuery, {
    initialData: data?.scaleUp,
    enabled: preview,
  })
  const scaleUpPage = filterDataToSingleItem(previewData, preview)

  const casePost = scaleUpPage.case.find(
    (casePost) => casePost.slug.current === scaleUpPage.reference.slug.current
  )

  const { hero } = scaleUpPage

  return (
    <PageWrapper>
      {preview && <ExitPreviewLink />}
      {scaleUpPage.metaTags && (
        <NextSeo
          title={scaleUpPage.metaTags.title}
          titleTemplate="%s | Iteam"
          description={scaleUpPage.metaTags.description}
          image={urlFor(scaleUpPage.metaTags.imageWithAlt.asset._ref)}
          openGraph={{
            title: scaleUpPage.metaTags.title,
            description: scaleUpPage.metaTags.description,
            images: [
              {
                url: urlFor(scaleUpPage.metaTags.imageWithAlt.asset._ref),
              },
            ],
            site_name: 'Iteam',
          }}
          twitter={{
            title: scaleUpPage.metaTags.title,
            description: scaleUpPage.metaTags.description,
            image: urlFor(scaleUpPage.metaTags.imageWithAlt.asset._ref),
            handle: '@iteam1337',
            site: '@iteam1337',
            cardType: 'summary_large_image',
          }}
        />
      )}
      {scaleUpPage?.hero && (
        <Hero
          title={hero?.title && hero.title}
          subtitle={hero?.subtitle && hero.subtitle}
          mediaType={hero?.mediaType && hero.mediaType}
          link={hero?.link && hero.link}
        />
      )}
      {scaleUpPage?.sectionWithImageAndButton && (
        <SectionWithImageAndButton
          content={scaleUpPage.sectionWithImageAndButton}
        />
      )}
      {scaleUpPage?.sectionWithButtonAndTextGrid && (
        <SectionWithButtonAndTextGrid
          content={scaleUpPage.sectionWithButtonAndTextGrid}
          btnStyle="secondary"
        />
      )}
      {scaleUpPage?.textWithTagsFirst && (
        <TextWithTags content={scaleUpPage.textWithTagsFirst} />
      )}
      {scaleUpPage?.sectionWithImage && (
        <SectionWithImage bg="dark" content={scaleUpPage.sectionWithImage} />
      )}
      {scaleUpPage?.textWithTagsSecond && (
        <TextWithTags content={scaleUpPage.textWithTagsSecond} />
      )}
      {casePost && <Case content={casePost} />}
      {scaleUpPage?.textWithTagsThirs && (
        <Role content={scaleUpPage.textWithTagsThirs} />
      )}
      <Testimonial bg content={carousel} />
      <Pricing content={ourPricing} />
      <CTA />
    </PageWrapper>
  )
}

const scaleUpPageQuery = groq`
  *[_type == 'scaleUpPage']
  {
    ...,
    reference -> {
      _type,
      slug {
        current,
      }
    },
    "case": *[ _type == "casePost"],
    sectionWithImageAndButton{
      ...,
      blockText{
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
      }
    },
    sectionWithImageAndCtaSecond{
      ...,
      blockText{
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
      }
    },
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
  }
`

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
  const scaleUp = await getClient(preview).fetch(scaleUpPageQuery)
  const carousel = await getClient(preview).fetch(carouselQuery)
  const ourPricing = await getClient(preview).fetch(ourPricingQuery)

  if (!scaleUp) return { notFound: true }

  return {
    props: {
      preview,
      data: { scaleUp, scaleUpPageQuery },
      carousel,
      ourPricing,
    },
  }
}

export default ScaleUp
