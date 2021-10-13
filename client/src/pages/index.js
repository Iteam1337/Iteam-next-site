import React from 'react'
import Hero from '../sections/startpage/Hero'
import Feature from '../sections/startpage/Feature'
import Content1 from '../sections/startpage/Content1'
import Content2 from '../sections/startpage/Content2'
import DesignatedTeam from '../sections/mvp/DesignatedTeam'
import PageWrapper from '../components/PageWrapper'
import GoogleAnalytics from '../components/GoogleAnalytics/GoogleAnalytics'
import { usePreviewSubscription } from '../lib/sanity'
import { getClient } from '../lib/sanity.server'
import { filterDataToSingleItem } from '../utils/helpers'
import { groq } from 'next-sanity'
import DefaultContent from '../sections/startpage/DefaultContent'

const StartPage = ({ data, preview = false, carousel }) => {
  const { data: previewData } = usePreviewSubscription(data?.startPageQuery, {
    initialData: data?.startPage,
    enabled: preview,
  })

  const page = filterDataToSingleItem(previewData, preview)
  return (
    <>
      <PageWrapper headerDark footerDark>
        <GoogleAnalytics />
        <Hero />
        <Feature />
        <Content1 />
        <DesignatedTeam />
        <Content2 />
        <DefaultContent data={page.defaultLayout} carousel={carousel} />
      </PageWrapper>
    </>
  )
}

const startPageQuery = groq`
*[_id == 'startPage'] {
  ...,
}`

const carouselQuery = groq`
*[_id == 'carousel'][0] {
  ...,
}`

export async function getStaticProps({ preview = false }) {
  const startPage = await getClient(preview).fetch(startPageQuery)
  const carousel = await getClient(preview).fetch(carouselQuery)

  return {
    props: {
      preview,
      data: { startPage, startPageQuery },
      carousel,
    },
  }
}

export default StartPage
