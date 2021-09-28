import React from "react"

import PageWrapper from "../../components/PageWrapper"
import Hero from "../../sections/karriar/Hero"
import Content from "../../sections/karriar/Content"
import Feature from "../../sections/karriar/Feature"
import Roles from "../../sections/karriar/Roles"
import client from "./../../../src/sanity-client"
import { groq } from "next-sanity"

const Career = ({ openPositions }) => {
  return (
    <>
      <PageWrapper headerDark footerDark>
        <Hero title="Kom in i värmen">
          Vi söker dig som älskar att lära nytt och att lösa komplexa problem
          med digitala lösningar som skapar värde på riktigt.
        </Hero>
        <Content />
        <Feature />
        <Roles openPositions={openPositions} />
      </PageWrapper>
    </>
  )
}

const openPositionsQuery = groq`
  *[_type == 'openPositions' && !(_id in path('drafts.**'))] {
    title, position, slug
   }
`

export async function getStaticProps() {
  const openPositions = await client.fetch(openPositionsQuery)
  return {
    props: {
      openPositions,
    },
  }
}
export default Career
