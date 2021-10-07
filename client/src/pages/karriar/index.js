import React from "react"
import PageWrapper from "../../components/PageWrapper"
import Hero from '../../sections/common/Hero'
import Content from "../../sections/karriar/Content"
import Feature from "../../sections/karriar/Feature"
import Roles from "../../sections/karriar/Roles"
import { groq } from "next-sanity"
import { usePreviewSubscription } from '../../lib/sanity'
import { getClient } from '../../lib/sanity.server'
import { filterDataToSingleItem } from '../../utils/helpers'

const Career = ({ data, preview = false }) => {
  const { data: previewData } = usePreviewSubscription(data?.careerPageQuery, {
    initialData: data?.careerPage,
    enabled: preview,
  })

  const post = filterDataToSingleItem(previewData, preview)
  const { hero, openings, section, textGrid } = post

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
 *[_type == 'careerPage']{
  hero, openings, textGrid, _id,
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

  return {
    props: {
      preview,
      data: { openPositions, careerPage, careerPageQuery }
    }
  }
}

export default Career
