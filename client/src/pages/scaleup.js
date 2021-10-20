import React from 'react'
import PageWrapper from '../components/PageWrapper'
import Feature1 from '../sections/scaleup/Feature1'
import Content1 from '../sections/scaleup/Content1'
import Role from '../sections/scaleup/Role'
import Content2 from '../sections/scaleup/Content2'
import DesignatedTeam from '../sections/scaleup/DesignatedTeam'
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
import ExitPreviewButton from '../components/ExitPreviewButton'

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
      {preview && <ExitPreviewButton />}
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
        <Content1 content={scaleUpPage.sectionWithImageAndButton} />
      )}
      {scaleUpPage?.sectionWithButtonAndTextGrid && (
        <Feature1 content={scaleUpPage.sectionWithButtonAndTextGrid} />
      )}
      {scaleUpPage?.textWithTagsFirst && (
        <Role content={scaleUpPage.textWithTagsFirst} />
      )}
      {scaleUpPage?.sectionWithImage && (
        <DesignatedTeam content={scaleUpPage.sectionWithImage} />
      )}
      {scaleUpPage?.textWithTagsSecond && (
        <Role content={scaleUpPage.textWithTagsSecond} />
      )}
      {casePost && <Content2 content={casePost} />}
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
