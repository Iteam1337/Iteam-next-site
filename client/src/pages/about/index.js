import React from "react"

import PageWrapper from "../../components/PageWrapper"
import Hero from "../../sections/common/Hero"
import Content from "../../sections/about/Content"

import MetaTags from "../../components/MetaTags/MetaTags"
import Team from "../../sections/about/Team"
import CTA from "../../sections/about/CTA"
import client from "./../../../src/sanity-client"

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

About.getInitialProps = async () => ({
  aboutPage: await client.fetch(`
  *[_type == 'aboutPage'][0] {
    ...
   }
  `),
  coworkers: await client.fetch(`
  *[_type == 'coworker'] {
    phoneNumber, email, fullname, status, role, slug
   }
  `),
})

export default About
