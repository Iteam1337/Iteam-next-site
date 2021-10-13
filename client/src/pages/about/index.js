import React from 'react'
import PageWrapper from '../../components/PageWrapper'
import Hero from '../../sections/common/Hero'
import Content from '../../sections/about/Content'
import MetaTags from '../../components/MetaTags/MetaTags'
import Team from '../../sections/about/Team'
import CTA from '../../sections/about/CTA'
import client from './../../../src/sanity-client'
import { groq } from 'next-sanity'
import { NextSeo } from 'next-seo'
import { urlFor } from '../../utils/helpers'

const About = ({ aboutPage, coworkers }) => {
  const { hero, coworkersSection, titleWithCTA, metaTags, ...rest } = aboutPage
  return (
    <>
      <PageWrapper>
        {metaTags && (
          <NextSeo
            title={metaTags.title}
            titleTemplate="%s | Aktellt på Iteam"
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

        <Hero content={hero} />
        <Content content={rest} />
        <Team content={coworkersSection} coworkers={coworkers} />
        <CTA content={titleWithCTA} />
      </PageWrapper>
    </>
  )
}

const aboutPageQuery = groq`
*[_type == 'aboutPage'][0] {
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
    phoneNumber, email, fullname, status, role, slug, profilePic
   }
`

export async function getStaticProps() {
  const aboutPage = await client.fetch(aboutPageQuery)
  const coworkers = await client.fetch(coworkerQuery)
  return {
    props: {
      aboutPage,
      coworkers,
    },
  }
}

export default About
