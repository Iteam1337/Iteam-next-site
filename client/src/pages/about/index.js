import React from "react"
import PageWrapper from "../../components/PageWrapper"
import Hero from "../../sections/common/Hero"
import Content from "../../sections/about/Content"
import MetaTags from "../../components/MetaTags/MetaTags"
import Team from "../../sections/about/Team"
import CTA from "../../sections/about/CTA"
import client from "./../../../src/sanity-client"
import { groq } from "next-sanity"

const About = ({ aboutPage, coworkers }) => {
  const { hero, coworkersSection, titleWithCTA, ...rest } = aboutPage
  return (
    <>
      <PageWrapper>
        <MetaTags
          title={
            "Skapa värde, ha kul, göra något bra, det är våra värderingar. De lever vi efter varje dag."
          }
          description={
            "Skapa värde, ha kul, göra något bra, det är våra värderingar. De lever vi efter varje dag."
          }
        />
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
