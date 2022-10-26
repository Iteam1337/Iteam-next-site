import React from 'react'
import { NextSeo } from 'next-seo'
import { groq } from 'next-sanity'

import { ExitPreviewLink } from '../components/ExitPreviewLink'
import { PageWrapper } from '../components/PageWrapper'
import { TextWithTags } from '../features/TextWithTags'
import { Testimonial } from '../features/Testimonial'
import { Hero } from '../features/Hero'
import { SectionWithImage } from '../features/SectionWithImage'
import { SectionWithButtonAndTextGrid } from '../features/SectionWithButtonAndTextGrid'
import { usePreviewSubscription } from '../lib/sanity'
import { getClient } from '../lib/sanity.server'
import { Content1, CTA } from '../features/Mvp'
import { SectionWithImageAndCta } from '../features/SectionWithImageAndCta'
import { filterDataToSingleItem, urlFor } from '../utils/helpers'

const Mvp = ({ data, preview = false }) => {
  const { data: previewData } = usePreviewSubscription(data?.mvpPageQuery, {
    initialData: data?.mvp,
    enabled: preview,
  })
  const mvpPage = filterDataToSingleItem(previewData, preview)

  const { hero } = mvpPage

  return (
    <PageWrapper>
      {preview && <ExitPreviewLink />}
      {mvpPage.metaTags && (
        <NextSeo
          title={mvpPage.metaTags.title}
          titleTemplate="%s | Iteam"
          description={mvpPage.metaTags.description}
          image={urlFor(mvpPage.metaTags.imageWithAlt.asset._ref)}
          openGraph={{
            title: mvpPage.metaTags.title,
            description: mvpPage.metaTags.description,
            images: [
              {
                url: urlFor(mvpPage.metaTags.imageWithAlt.asset._ref),
              },
            ],
            site_name: 'Iteam',
          }}
          twitter={{
            title: mvpPage.metaTags.title,
            description: mvpPage.metaTags.description,
            image: urlFor(mvpPage.metaTags.imageWithAlt.asset._ref),
            handle: '@iteam1337',
            site: '@iteam1337',
            cardType: 'summary_large_image',
          }}
        />
      )}
      {hero && (
        <Hero
          title={hero.title && hero.title}
          subtitle={hero.subtitle && hero.subtitle}
          mediaType={hero.mediaType && hero.mediaType}
          link={hero.link && hero.link}
        />
      )}
      {mvpPage?.sectionWithButtonAndTextGrid && (
        <SectionWithButtonAndTextGrid
          content={mvpPage.sectionWithButtonAndTextGrid}
        />
      )}
      {mvpPage?.sectionWithImageAndButton && (
        <Content1 content={mvpPage.sectionWithImageAndButton} />
      )}
      {mvpPage?.textWithTags && <TextWithTags content={mvpPage.textWithTags} />}
      {mvpPage?.sectionWithImageAndButton2 && (
        <SectionWithImageAndCta
          bg="dark"
          referenceTo="#book"
          content={mvpPage.sectionWithImageAndButton2}
        />
      )}
      {mvpPage?.sectionWithImage && (
        <SectionWithImage content={mvpPage.sectionWithImage} />
      )}
      <Testimonial bg content={data.carousel} />
      <CTA />
    </PageWrapper>
  )
}

const mvpPageQuery = groq`
  *[_type == 'mvpPage']
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
export async function getStaticProps({ preview = false }) {
  const mvp = await getClient(preview).fetch(mvpPageQuery)
  const carousel = await getClient(preview).fetch(carouselQuery)

  if (!mvp) return { notFound: true }

  return {
    props: {
      preview,
      data: { mvp, mvpPageQuery, carousel },
    },
  }
}
export default Mvp
