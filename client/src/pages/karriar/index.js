import React from "react"

import PageWrapper from "../../components/PageWrapper"
import Hero from '../../sections/common/Hero'
import Content from "../../sections/karriar/Content"
import Feature from "../../sections/karriar/Feature"
import Roles from "../../sections/karriar/Roles"
import { groq } from "next-sanity"
import { usePreviewSubscription } from '../../lib/sanity'
import { getClient } from '../../lib/sanity.server'

const Career = ({ data, preview = false }) => {
  const { data: previewData } = usePreviewSubscription(data?.openPositionQuery, {
    params: data?.queryParams ?? {},
    initialData: data?.post,
    enabled: preview,
  })

  const { hero, openings, section, textGrid } = data.careerPage

  return (
    <>
      <PageWrapper headerDark footerDark>
        <Hero content={hero} />
        <Content content={section} />
        <Feature content={textGrid} />
        <Roles content={openings} openPositions={data.openPositions} />
      </PageWrapper>
    </>
  )
}

const openPositionsQuery = groq`
  *[_type == 'openPositions' && !(_id in path('drafts.**'))] {
    title, position, slug
   }
`

const careerPageQuery = groq`
 *[_type == 'careerPage'&& !(_id in path('drafts.**'))][0]{
hero, openings, textGrid,
   section{
     title,
     blockText{
       blockText []{
        ...,
        markDefs[]{
          ...,
          _type == "internalLink" => {
            reference-> {
              _type,
              slug {
                current
              }
            }
          }
        }
      }
     }
   }
 }
`

export async function getStaticProps({ preview = false }) {
  const openPositions = await getClient(preview).fetch(openPositionsQuery)
  const careerPage = await getClient(preview).fetch(careerPageQuery)

  if (!openPositions) return { notFound: true }

  // const post = filterDataToSingleItem(data, preview)

  return {
    props: {
      preview,
      data: { openPositions, careerPage, openPositionsQuery }
    }
  }
}

// export const getStaticPaths = async () => {
//   const pages = (await client.fetch(openPositionsQuery)) || []
//   const paths = pages.map((page) => ({
//     params: { slug: page.slug.current },
//   }))
//   return { paths, fallback: false }
// }


// export async function getStaticProps() {
//   const openPositions = await client.fetch(openPositionsQuery)
//   return {
//     props: {
//       openPositions,
//     },
//   }
// }
export default Career
