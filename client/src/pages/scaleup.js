import React from 'react'
import PageWrapper from '../components/PageWrapper'
import Feature1 from '../sections/scaleup/Feature1'
import Content1 from '../sections/scaleup/Content1'
import UX from '../sections/scaleup/UX'
import Tech from '../sections/scaleup/Tech'
import AgileCoach from '../sections/scaleup/AgileCoach'
import Content2 from '../sections/scaleup/Content2'
import DesignatedTeam from '../sections/scaleup/DesignatedTeam'
// import Testimonial from "../sections/scaleup/Testimonial";
import ModalVideo from '../components/ModalVideo'
import Testimonial from '../sections/startpage/Testimonial'
import Pricing from '../sections/startpage/Pricing'
import CTA from '../sections/scaleup/CTA'
import MetaTags from '../components/MetaTags/MetaTags'
import { groq } from 'next-sanity'
import { getClient } from '../lib/sanity.server'
import { filterDataToSingleItem } from '../utils/helpers'
import { usePreviewSubscription } from '../lib/sanity'
import Hero from '../sections/common/Hero'
import { NextSeo } from 'next-seo'
import { urlFor } from '../utils/helpers'

const ScaleUp = ({ data, preview = false }) => {
  const { data: previewData } = usePreviewSubscription(data?.scaleUpPageQuery, {
    initialData: data?.newsPage,
    enabled: preview,
  })

  const scaleUpPage = filterDataToSingleItem(previewData, preview)
  return (
    <>
      <PageWrapper>
        {scaleUpPage && (
          <NextSeo
            title={scaleUpPage?.metaTags?.title ?? scaleUpPage.hero.title}
            titleTemplate="%s | Aktuellt på Iteam"
            description={
              scaleUpPage?.metaTags?.description ?? scaleUpPage?.hero?.subtitle
            }
            image={urlFor(
              scaleUpPage?.metaTags?.imageWithAlt?.asset._ref ??
                scaleUpPage?.hero?.mediaType?.image.asset._ref
            )}
            openGraph={{
              title: scaleUpPage?.metaTags?.title ?? scaleUpPage.title,
              description:
                scaleUpPage?.metaTags?.description ??
                scaleUpPage?.hero?.description,
              images: [
                {
                  url: urlFor(
                    scaleUpPage?.metaTags?.imageWithAlt?.asset._ref ??
                      scaleUpPage?.hero?.mediaType?.image.asset._ref
                  ),
                },
              ],
              site_name: 'Iteam',
            }}
            twitter={{
              title: scaleUpPage?.metaTags?.title ?? scaleUpPage.title,
              description:
                scaleUpPage?.metaTags?.description ??
                scaleUpPage?.hero?.description,
              image: urlFor(
                scaleUpPage?.metaTags?.imageWithAlt?.asset._ref ??
                  scaleUpPage?.hero?.mediaType?.image.asset._ref
              ),
              handle: '@iteam1337',
              site: '@iteam1337',
              cardType: 'summary_large_image',
            }}
          />
        )}
        {scaleUpPage?.hero && <Hero content={scaleUpPage.hero} />}
        {scaleUpPage?.sectionWithImageAndCtaFirst && (
          <Content1 content={scaleUpPage.sectionWithImageAndCtaFirst} />
        )}
        {scaleUpPage?.sectionWithCtaAndTextGrid && (
          <Feature1 content={scaleUpPage.sectionWithCtaAndTextGrid} />
        )}
        <AgileCoach />
        <DesignatedTeam />
        <Tech />
        <ModalVideo url="https://www.youtube.com/watch?v=Iz-XLYvzXyU"></ModalVideo>
        <Content2 />
        <UX />
        <Testimonial />
        <Pricing />
        <CTA />
      </PageWrapper>
    </>
  )
}

const scaleUpPageQuery = groq`
  *[_type == 'scaleUpPage' && !(_id in path('drafts.**'))][0] 
  {
    ...,
    sectionWithImageAndCtaFirst{
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
