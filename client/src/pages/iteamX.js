import React from 'react'
import Hero from '../sections/iteamX/Hero'
import Fact from '../sections/iteamX/Fact'
import Content from '../sections/iteamX/Content'
import Content2 from '../sections/iteamX/Content2'
import Feature1 from '../sections/iteamX/Feature1'
import CaseStudies from '../sections/iteamX/CaseStudies'
import Reviews from '../sections/iteamX/Reviews'
import Contact from '../sections/iteamX/Contact'
import MetaTags from '../components/MetaTags/MetaTags'

import PageWrapper from '../components/PageWrapper'
import { getClient } from '../lib/sanity.server'
import { groq } from 'next-sanity'

const IteamX = ({ data }) => {
  return (
    <>
      <PageWrapper headerDark footerDark>
        <MetaTags
          title={'Iteam X - när du inte vet vad som är möjligt'}
          description={'Experimentell utveckling med exponentiell teknik.'}
        />
        <Hero />
        <Fact />
        <Content />
        <Content2 />
        <Feature1 />
        <CaseStudies cases={data.casePosts} />
        <Reviews />
        <Contact />
      </PageWrapper>
    </>
  )
}

const filteredCasePostQuery = groq`
 *[_type=='casePost' && typeOfCase == 'x'][0..1] {
   title,
 	slug, 
   preview {
   ...,
 }
 }
`

export async function getStaticProps({ preview = false }) {
  const casePosts = await getClient(preview).fetch(filteredCasePostQuery)

  if (!casePosts) return { notFound: true }
  return {
    props: {
      preview,
      data: { casePosts },
    },
  }
}

export default IteamX
