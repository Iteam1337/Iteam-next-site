import React from 'react'
import PageWrapper from '../../components/PageWrapper'
import Hero from '../../sections/common/Hero'
import Content from '../../sections/about/Content'
import MetaTags from '../../components/MetaTags/MetaTags'
import Team from '../../sections/about/Team'
import CTA from '../../sections/about/CTA'
import { groq } from 'next-sanity'
import { usePreviewSubscription } from '../../lib/sanity'
import { getClient } from '../../lib/sanity.server'
import { filterDataToSingleItem } from '../../utils/helpers'
import ExitPreviewButton from '../../components/ExitPreviewButton'

const About = ({ data, preview = false }) => {
  const { data: previewData } = usePreviewSubscription(data?.aboutPageQuery, {
    initialData: data?.aboutPage,
    enabled: preview,
  })

  const aboutPage = filterDataToSingleItem(previewData, preview)
  const { hero, coworkersSection, titleWithCTA, ...rest } = aboutPage
  return (
    <>
      <PageWrapper>
        <MetaTags
          title={
            'Skapa värde, ha kul, göra något bra, det är våra värderingar. De lever vi efter varje dag.'
          }
          description={
            'Skapa värde, ha kul, göra något bra, det är våra värderingar. De lever vi efter varje dag.'
          }
        />
        {preview && <ExitPreviewButton />}
        <Hero content={hero && hero} />
        <Content content={rest && rest} />
        <Team
          content={coworkersSection && coworkersSection}
          coworkers={data?.coworkers && data.coworkers}
        />
        <CTA content={titleWithCTA && titleWithCTA} />
      </PageWrapper>
    </>
  )
}

const aboutPageQuery = groq`
*[_type == 'aboutPage'] {
  ..., 
  titleWithCTA {
    ...,
  	cta {
      ...,
  		reference-> {
        _type,
        slug {
          current
        }
      }
    }
  }
 }
`

const coworkerQuery = groq`
  *[_type == 'coworker' && !(_id in path('drafts.**'))] {
    phoneNumber, email, fullname, status, role, slug, profilePic
   }
`

export async function getStaticProps({ preview = false }) {
  const aboutPage = await getClient(preview).fetch(aboutPageQuery)
  const coworkers = await getClient(preview).fetch(coworkerQuery)

  if (!coworkers) return { notFound: true }

  return {
    props: {
      preview,
      data: { aboutPage, coworkers, aboutPageQuery },
    },
  }
}

export default About
