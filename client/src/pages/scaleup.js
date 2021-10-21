import React from 'react'
import PageWrapper from '../components/PageWrapper'
import SectionWithButtonAndTextGrid from '../sections/scaleup/SectionWithButtonAndTextGrid'
import SectionWithImageAndButton from '../sections/scaleup/SectionWithImageAndButton'
import Role from '../sections/scaleup/Role'
import Case from '../sections/scaleup/Case'
import SectionWithImage from '../sections/scaleup/SectionWithImage'
import Testimonial from '../sections/startpage/Testimonial'
import Pricing from '../sections/startpage/Pricing'
import CTA from '../sections/scaleup/CTA'
import { groq } from 'next-sanity'
import { getClient } from '../lib/sanity.server'
import { filterDataToSingleItem } from '../utils/helpers'
import { usePreviewSubscription } from '../lib/sanity'
import Hero from '../sections/common/Hero'
import { NextSeo } from 'next-seo'
import { urlFor } from '../utils/helpers'
import ExitPreviewLink from '../components/ExitPreviewLink'

const ScaleUp = ({ data, preview = false }) => {
  const { data: previewData } = usePreviewSubscription(data?.scaleUpPageQuery, {
    initialData: data?.scaleUp,
    enabled: preview,
  })
  const scaleUpPage = filterDataToSingleItem(previewData, preview)

  const casePost = scaleUpPage.case.find(
    (casePost) => casePost.slug.current === scaleUpPage.reference.slug.current
  )

  return (
    <PageWrapper>
      {preview && <ExitPreviewLink />}
      {scaleUpPage.metaTags && (
        <NextSeo
          title={scaleUpPage.metaTags.title}
          titleTemplate="%s | Aktuellt på Iteam"
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
      {scaleUpPage?.hero && <Hero content={scaleUpPage.hero} />}
      {scaleUpPage?.sectionWithImageAndButton && (
        <SectionWithImageAndButton
          content={scaleUpPage.sectionWithImageAndButton}
        />
      )}
      {scaleUpPage?.sectionWithButtonAndTextGrid && (
        <SectionWithButtonAndTextGrid
          content={scaleUpPage.sectionWithButtonAndTextGrid}
        />
      )}
      {scaleUpPage?.textWithTagsFirst && (
        <Role content={scaleUpPage.textWithTagsFirst} />
      )}
      {scaleUpPage?.sectionWithImage && (
        <SectionWithImage content={scaleUpPage.sectionWithImage} />
      )}
      {scaleUpPage?.textWithTagsSecond && (
        <Role content={scaleUpPage.textWithTagsSecond} />
      )}
      {casePost && <Case content={casePost} />}
      {scaleUpPage?.textWithTagsThirs && (
        <Role content={scaleUpPage.textWithTagsThirs} />
      )}
      <Testimonial />
      <Pricing />
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

export async function getStaticProps({ preview = false }) {
  const scaleUp = await getClient(preview).fetch(scaleUpPageQuery)

  if (!scaleUp) return { notFound: true }

  return {
    props: {
      preview,
      data: { scaleUp, scaleUpPageQuery },
    },
  }
}

export default ScaleUp
