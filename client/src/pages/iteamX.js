import React from 'react'
import { groq } from 'next-sanity'
import { NextSeo } from 'next-seo'

import Hero from '../sections/iteamX/Hero'
import Fact from '../sections/iteamX/Fact'
import Content from '../sections/iteamX/Content'
import Content2 from '../sections/iteamX/Content2'
import CaseStudies from '../sections/iteamX/CaseStudies'
import Reviews from '../sections/iteamX/Reviews'
import Contact from '../sections/iteamX/Contact'
import PageWrapper from '../components/PageWrapper'
import { getClient } from '../lib/sanity.server'
import { usePreviewSubscription } from '../lib/sanity'
import { filterDataToSingleItem, urlFor } from '../utils/helpers'
import ExitPreviewLink from '../components/ExitPreviewLink'
import { SectionWithButtonAndTextGrid } from '../sections/common'

const IteamX = ({ data, preview = false }) => {
  const { data: previewData } = usePreviewSubscription(data?.xPageQuery, {
    initialData: data?.xPage,
    enabled: preview,
  })
  const xPage = filterDataToSingleItem(previewData, preview)

  return (
    <>
      <PageWrapper headerDark footerDark>
        {preview && <ExitPreviewLink />}
        {xPage.metaTags && (
          <NextSeo
            title={xPage.metaTags.title}
            titleTemplate="%s | Iteam"
            description={xPage.metaTags.description}
            image={urlFor(xPage.metaTags.imageWithAlt.asset._ref)}
            openGraph={{
              title: xPage.metaTags.title,
              description: xPage.metaTags.description,
              images: [
                {
                  url: urlFor(xPage.metaTags.imageWithAlt.asset._ref),
                },
              ],
              site_name: 'Iteam',
            }}
            twitter={{
              title: xPage.metaTags.title,
              description: xPage.metaTags.description,
              image: urlFor(xPage.metaTags.imageWithAlt.asset._ref),
              handle: '@iteam1337',
              site: '@iteam1337',
              cardType: 'summary_large_image',
            }}
          />
        )}
        {xPage.hero && <Hero content={xPage.hero} />}
        {xPage.textGrid && <Fact content={xPage.textGrid} />}
        {xPage.textWithTags && <Content content={xPage.textWithTags} />}
        {xPage.sectionWithImageAndCta && (
          <Content2 content={xPage.sectionWithImageAndCta} />
        )}
        {xPage.sectionWithButtonAndTextGrid && (
          <SectionWithButtonAndTextGrid
            content={xPage.sectionWithButtonAndTextGrid}
            linkTo="sprintMeeting"
          />
        )}
        <CaseStudies cases={data.casePosts} />
        {xPage.quote && <Reviews quote={xPage.quote} />}
        <Contact />
      </PageWrapper>
    </>
  )
}

const filteredCasePostQuery = groq`
 *[_type=='casePost' && typeOfCase == 'x'][0..1] {
   title,
   tags,
 	slug, 
   preview {
   ...,
 },
 }
`
const xPageQuery = groq`
  *[_type == 'xPage']
  {
    ...,
    sectionWithImageAndCta2 {
      ...,
      cta {
        ...,
        reference -> {
          _type,
          slug {
            current,
          }
        }
      }
    }
  }`

export async function getStaticProps({ preview = false }) {
  const xPage = await getClient(preview).fetch(xPageQuery)
  const casePosts = await getClient(preview).fetch(filteredCasePostQuery)

  if (!xPage) return { notFound: true }
  if (!casePosts) return { notFound: true }
  return {
    props: {
      preview,
      data: { casePosts, xPage, xPageQuery },
    },
  }
}

export default IteamX
