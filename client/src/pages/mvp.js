import React from 'react'
import { groq } from 'next-sanity'
import { getClient } from '../lib/sanity.server'
import { filterDataToSingleItem } from '../utils/helpers'
import { usePreviewSubscription } from '../lib/sanity'
import PageWrapper from '../components/PageWrapper'
import Hero from '../sections/mvp/Hero'
import Feature1 from '../sections/mvp/Feature1'
import Content1 from '../sections/mvp/Content1'
import Feature2 from '../sections/mvp/Feature2'
import Content2 from '../sections/mvp/Content2'
import DesignatedTeam from '../sections/mvp/DesignatedTeam'
// import Testimonial from "../sections/mvp/Testimonial";
import ModalVideo from '../components/ModalVideo'
import Testimonial from '../sections/startpage/Testimonial'
import CTA from '../sections/mvp/CTA'
import MetaTags from '../components/MetaTags/MetaTags'
import {
  SectionWithButtonAndTextGrid,
  SectionWithImage,
  SectionWithImageAndButton,
  TextWithTags,
} from '../components/Sections'

const Mvp = ({ data, preview = false }) => {
  const { data: previewData } = usePreviewSubscription(data?.mvpPageQuery, {
    initialData: data?.mvp,
    enabled: preview,
  })
  const mvpPage = filterDataToSingleItem(previewData, preview)
  return (
    <>
      <PageWrapper>
        <MetaTags
          title={'Iteam MVP – När du vill bygga nytt'}
          description={'Utveckling av nya digitala tjänster'}
        />
        <Hero />
        {mvpPage?.sectionWithButtonAndTextGrid && (
          <SectionWithButtonAndTextGrid
            content={mvpPage.sectionWithButtonAndTextGrid}
          />
        )}
        {mvpPage?.sectionWithImageAndButton && (
          <SectionWithImageAndButton
            content={mvpPage.sectionWithImageAndButton}
          />
        )}
        {mvpPage?.textWithTags && (
          <TextWithTags content={mvpPage.textWithTags} />
        )}
        {mvpPage?.sectionWithImageAndButton2 && (
          <SectionWithImageAndButton
            bg="dark"
            content={mvpPage.sectionWithImageAndButton2}
          />
        )}
        {mvpPage?.sectionWithImage && (
          <SectionWithImage content={mvpPage.sectionWithImage} />
        )}
        <Testimonial />
        <CTA />
      </PageWrapper>
    </>
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

export async function getStaticProps({ preview = false }) {
  const mvp = await getClient(preview).fetch(mvpPageQuery)

  if (!mvp) return { notFound: true }

  return {
    props: {
      preview,
      data: { mvp, mvpPageQuery },
    },
  }
}
export default Mvp
