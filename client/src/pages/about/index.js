import React from 'react'
import { groq } from 'next-sanity'
import { NextSeo } from 'next-seo'

import { PageWrapper } from '../../components/PageWrapper'
import { Hero } from '../../features/Hero'
import { Content, CTA, TeamList } from '../../features/About'
import { usePreviewSubscription } from '../../lib/sanity'
import { getClient } from '../../lib/sanity.server'
import { filterDataToSingleItem, urlFor } from '../../utils/helpers'
import { ExitPreviewLink } from '../../components/ExitPreviewLink'

const About = ({ data, preview = false }) => {
  const { data: previewData } = usePreviewSubscription(data?.aboutPageQuery, {
    initialData: data?.aboutPage,
    enabled: preview,
  })

  const aboutPage = filterDataToSingleItem(previewData, preview)
  const { hero, coworkersSection, titleWithCTA, metaTags, ...rest } = aboutPage
  return (
    <>
      <PageWrapper>
        {preview && <ExitPreviewLink />}
        {metaTags && (
          <NextSeo
            title={metaTags.title}
            titleTemplate="%s | Iteam"
            description={metaTags?.description}
            image={urlFor(metaTags?.imageWithAlt?.asset._ref)}
            openGraph={{
              title: metaTags?.title,
              description: metaTags?.description,
              images: [
                {
                  url: urlFor(metaTags?.imageWithAlt?.asset._ref),
                },
              ],
              site_name: 'Iteam',
            }}
            twitter={{
              title: metaTags?.title,
              description: metaTags?.description,
              image: urlFor(metaTags?.imageWithAlt?.asset._ref),
              handle: '@iteam1337',
              site: '@iteam1337',
              cardType: 'summary_large_image',
            }}
          />
        )}
        <Hero content={hero && hero} />
        <Content content={rest && rest} />
        <TeamList
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
  metaTags,
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
    phoneNumber, email, fullname, status, role, slug, profilePic, socialMedia
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
