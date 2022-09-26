import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import MetaTags from '../../components/MetaTags/MetaTags'
import PageWrapper from '../../components/PageWrapper'
import { Section, Box, Typography } from '../../components/Core'
import { groq } from 'next-sanity'
import client from '../../sanity-client'
import BlockContent from '../../components/BlockContent'
import { urlFor } from '../../utils/helpers'
import { usePreviewSubscription } from '../../lib/sanity'
import { getClient } from '../../lib/sanity.server'
import { filterDataToSingleItem } from '../../utils/helpers'
import { NextSeo } from 'next-seo'
import ExitPreviewLink from '../../components/ExitPreviewLink'

const OpeningDetails = ({ data, preview = false }) => {
  const { data: previewData } = usePreviewSubscription(
    data?.openPositionQuery,
    {
      params: data?.queryParams ?? {},
      initialData: data?.post,
      enabled: preview,
    }
  )
  const post = filterDataToSingleItem(previewData, preview)

  return (
    <PageWrapper footerDark>
      {post && (
        <NextSeo
          title={post?.metaTags?.title ?? post?.title}
          titleTemplate="%s | Iteam"
          description={post?.metaTags?.description}
          image={urlFor(post?.metaTags?.imageWithAlt?.asset._ref)}
          openGraph={{
            title: post?.metaTags?.title ?? post.title,
            description: post?.metaTags?.description,
            images: [
              {
                url: urlFor(post?.metaTags?.imageWithAlt?.asset._ref),
              },
            ],
            site_name: 'Iteam',
          }}
          twitter={{
            title: post?.metaTags?.title ?? post?.title,
            description: post?.metaTags?.description,
            image: urlFor(post?.metaTags?.imageWithAlt?.asset._ref),
            handle: '@iteam1337',
            site: '@iteam1337',
            cardType: 'summary_large_image',
          }}
        />
      )}
      {preview && <ExitPreviewLink />}
      <Section className="pb-0">
        <div className="pt-5"></div>
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg="8">
              <Box className="text-center" mb={4}>
                Ledig tjänst
              </Box>
              <Typography.H1>{post?.title && post.title}</Typography.H1>
            </Col>
          </Row>
        </Container>
      </Section>

      <Section className="position-relative" borderBottom="1px solid #eae9f2;">
        <Container>
          <Row>
            <Col lg="12" xl="10" className="offset-xl-1">
              {post?.blockText && (
                <BlockContent blocks={post?.blockText.blockText} />
              )}
            </Col>
          </Row>
        </Container>
      </Section>
    </PageWrapper>
  )
}

const openPositionQuery = groq`
    *[_type == "openPositions" && slug.current == $slug] {
    ...,
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
`
export async function getStaticProps({ params, preview = false }) {
  const queryParams = { slug: params.slug }
  const data = await getClient(preview).fetch(openPositionQuery, queryParams)

  if (!data) return { notFound: true }

  const post = filterDataToSingleItem(data, preview)

  return {
    props: {
      preview,
      data: { post, openPositionQuery, queryParams },
    },
  }
}

export const getStaticPaths = async () => {
  const query = groq`*[_type == 'openPositions' && defined(slug.current)][].slug.current`
  const pages = await getClient().fetch(query)
  return {
    paths: pages.map((slug) => `/karriar/${slug}`),
    fallback: true,
  }
}

export default OpeningDetails
