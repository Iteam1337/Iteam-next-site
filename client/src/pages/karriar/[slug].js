import { groq } from 'next-sanity'
import { NextSeo } from 'next-seo'
import React from 'react'

import { Box, Section, Typography } from '../../components/Core'
import { ExitPreviewLink } from '../../components/ExitPreviewLink'
import { Container, Flex } from '../../components/Layout'
import { PageWrapper } from '../../components/PageWrapper'
import { usePreviewSubscription } from '../../lib/sanity'
import { getClient } from '../../lib/sanity.server'
import { filterDataToSingleItem, urlFor } from '../../utils/helpers'

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
          <Flex center>
            <div className="tw-w-4/5">
              <Box className="tw-text-center" mb={4}>
                Ledig tjänst
              </Box>
              <Typography.H1 className="tw-text-center">
                {post?.title && post.title}
              </Typography.H1>
            </div>
          </Flex>
        </Container>
      </Section>
      <Section className="position-relative" borderBottom="1px solid #eae9f2;">
        <Container>
          <Flex>
            {post?.blockText && (
              <Typography.BlockContent blocks={post?.blockText.blockText} />
            )}
          </Flex>
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
