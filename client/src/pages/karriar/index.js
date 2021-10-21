import React from 'react'
import PageWrapper from '../../components/PageWrapper'
import Hero from '../../sections/common/Hero'
import Content from '../../sections/karriar/Content'
import Feature from '../../sections/karriar/Feature'
import Roles from '../../sections/karriar/Roles'
import { groq } from 'next-sanity'
import { usePreviewSubscription } from '../../lib/sanity'
import { getClient } from '../../lib/sanity.server'
import { filterDataToSingleItem, shuffleArray } from '../../utils/helpers'
import ExitPreviewButton from '../../components/ExitPreviewButton'

const Career = ({ data, preview = false, carousel }) => {
  const { data: previewData } = usePreviewSubscription(data?.careerPageQuery, {
    initialData: data?.careerPage,
    enabled: preview,
  })

  const post = filterDataToSingleItem(previewData, preview)
  const { hero, openings, section, textGrid } = post

  return (
    <>
      <PageWrapper headerDark footerDark>
        {preview && <ExitPreviewButton />}
        <Hero content={hero} />
        <Content content={section} carousel={carousel} />
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
  hero, 
  openings, 
  textGrid, 
  _id, 
  coworkerCarouselOne[] -> {
  fullname,
  role,
  whyTech,
  answerTech, 
  email,
  } , coworkerCarouselTwo[] -> {
  fullname,
  role,
  whyTech,
  answerTech,
  email
  },
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

export async function getServerSideProps({ preview = false }) {
  const openPositions = await getClient(preview).fetch(openPositionsQuery)
  const careerPage = await getClient(preview).fetch(careerPageQuery)

  if (!openPositions) return { notFound: true }

  const { coworkerCarouselOne, coworkerCarouselTwo } = filterDataToSingleItem(
    careerPage,
    preview
  )
  const coworkerCarousel = [coworkerCarouselOne, coworkerCarouselTwo]
  return {
    props: {
      preview,
      data: { openPositions, careerPage, careerPageQuery },
      carousel: shuffleArray(
        coworkerCarousel[Math.floor(Math.random() * coworkerCarousel.length)]
      ),
    },
  }
}

export default Career
