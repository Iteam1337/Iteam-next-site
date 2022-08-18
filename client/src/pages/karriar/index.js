import React from 'react'
import PageWrapper from '../../components/PageWrapper'
import { Hero } from '../../sections/common'
import Content from '../../sections/karriar/Content'
import Feature from '../../sections/karriar/Feature'
import Roles from '../../sections/karriar/Roles'
import { groq } from 'next-sanity'
import { usePreviewSubscription } from '../../lib/sanity'
import { getClient } from '../../lib/sanity.server'
import {
  filterDataToSingleItem,
  shuffleArray,
  urlFor,
} from '../../utils/helpers'
import { NextSeo } from 'next-seo'
import ExitPreviewLink from '../../components/ExitPreviewLink'

const Career = ({ data, preview = false, carousel }) => {
  const { data: previewData } = usePreviewSubscription(data?.careerPageQuery, {
    initialData: data?.careerPage,
    enabled: preview,
  })

  const post = filterDataToSingleItem(previewData, preview)
  const { hero, openings, section, textGrid, metaTags } = post

  return (
    <>
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
      <PageWrapper headerDark footerDark>
        {preview && <ExitPreviewLink />}
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
  metaTags,
  hero, 
  openings, 
  textGrid, 
  _id, 
  coworkerCarouselOne[] -> {
  slug {
    current
  },
  fullname,
  role,
  whyTech,
  answerTech, 
  email,
  _type,
  } , coworkerCarouselTwo[] -> {
  slug {
    current
  },
  fullname,
  role,
  whyTech,
  answerTech,
  email,
  _type,
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
