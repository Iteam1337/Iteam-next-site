import React from "react"
import PageWrapper from "../../components/PageWrapper"
import Medarbetare from "../../sections/about/Medarbetare"
import Hero from "../../sections/about/CoworkerHero"
import { groq } from "next-sanity"
import client from "../../sanity-client"

const CoworkerPage = ({ coworker }) => {
  const { fullname, heroImage, role, ...rest } = coworker
  return (
    <PageWrapper footerDark>
      {coworker && (
        <>
          <Hero title={fullname} heroImage={heroImage}>
            {role}
          </Hero>
          <Medarbetare info={rest} />
        </>
      )}
    </PageWrapper>
  )
}

const coworkersQuery = groq`
  *[_type == 'coworker'] {
    ...,
   }
`

const coworkerQuery = groq`
*[_type == 'coworker' && slug.current == $slug][0] {
  ...,
 }
`

export async function getStaticProps(context) {
  const coworker = await client.fetch(coworkerQuery, {
    slug: context.params.name,
  })
  return {
    props: {
      coworker,
    },
  }
}

export const getStaticPaths = async () => {
  const pages = (await client.fetch(coworkersQuery)) || []
  const paths = pages.map((page) => ({
    params: { name: page.slug.current },
  }))
  return { paths, fallback: false }
}

export default CoworkerPage
