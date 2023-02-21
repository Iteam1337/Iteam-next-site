import { groq } from 'next-sanity'
import { NextSeo } from 'next-seo'
import React from 'react'

import { Box, Section, Typography } from '../../components/Core'
import { ExitPreviewLink } from '../../components/ExitPreviewLink'
import { Container, Flex } from '../../components/Layout'
import { PageWrapper } from '../../components/PageWrapper'
import { CaseList, CTA } from '../../features/Case'
import { usePreviewSubscription } from '../../lib/sanity'
import { getClient } from '../../lib/sanity.server'
import { filterDataToSingleItem, urlFor } from '../../utils/helpers'

const BlogDetails = ({ data, preview = false }) => {
  const { data: previewData } = usePreviewSubscription(data?.casePostQuery, {
    params: data?.queryParams ?? {},
    initialData: data?.post,
    enabled: preview,
  })

  const post = filterDataToSingleItem(previewData, preview)
  return (
    <PageWrapper footerDark>
      {post && (
        <NextSeo
          title={post?.metaTags?.title ?? post.title}
          titleTemplate="%s | Iteam"
          description={
            post?.metaTags?.description ?? post?.preview?.imageCard?.description
          }
          image={urlFor(
            post?.metaTags?.imageWithAlt?.asset._ref ??
              post?.preview?.imageCard?.image.asset._ref
          )}
          openGraph={{
            title: post?.metaTags?.title ?? post.title,
            description:
              post?.metaTags?.description ??
              post?.preview?.imageCard?.description,
            images: [
              {
                url: urlFor(
                  post?.metaTags?.imageWithAlt?.asset._ref ??
                    post?.preview?.imageCard?.image.asset._ref
                ),
              },
            ],
            site_name: 'Iteam',
          }}
          twitter={{
            title: post?.metaTags?.title ?? post.title,
            description:
              post?.metaTags?.description ??
              post?.preview?.imageCard?.description,
            image: urlFor(
              post?.metaTags?.imageWithAlt?.asset._ref ??
                post?.preview?.imageCard?.image.asset._ref
            ),
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
            <div className="tw-w-4/5 tw-text-center">
              <Box className="text-center" mb={4}>
                {post?.company && post.company}
              </Box>
              <Typography.H1>{post?.title && post.title}</Typography.H1>
              <Typography.Paragraph>
                {post?.subtitle && post.subtitle}
              </Typography.Paragraph>
            </div>
          </Flex>
        </Container>
      </Section>
      <Section className="position-relative" borderBottom="1px solid #eae9f2;">
        <Container>
          <Flex>
            <div>
              <Box pb={['40px', null, '65px']}>
                {post?.blockText?.blockText && (
                  <Typography.BlockContent blocks={post.blockText.blockText} />
                )}
              </Box>
            </div>
          </Flex>
        </Container>
      </Section>
      {data?.posts && <CaseList posts={data.posts} />}
      {data?.page?.titleWithCTA && <CTA text={data.page.titleWithCTA} />}
    </PageWrapper>
  )
}

const casePostsQuery = groq`
*[_type == 'casePost' && defined(slug.current) && !(_id in path('drafts.**'))][] {
  slug,
  preview
}
`

const casePageQuery = groq`
*[_id == 'casePage'] {
titleWithCTA {
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
    },
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
}`

const casePostQuery = groq`
*[_type == "casePost" && slug.current == $slug] {
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
  },
}`

export async function getStaticProps({ params, preview = false }) {
  const queryParams = { slug: params.slug }
  const data = await getClient(preview).fetch(casePostQuery, queryParams)
  const posts = await getClient(preview).fetch(casePostsQuery)
  const casePage = await getClient(preview).fetch(casePageQuery)

  if (!data) return { notFound: true }

  const post = filterDataToSingleItem(data, preview)
  const page = filterDataToSingleItem(casePage, preview)

  return {
    props: {
      preview,
      data: {
        post,
        posts,
        page,
        casePostQuery,
        queryParams,
      },
    },
  }
}

export const getStaticPaths = async () => {
  const query = groq`*[_type == 'casePost' && defined(slug.current)][].slug.current
  `
  const pages = await getClient().fetch(query)
  return {
    paths: pages.map((slug) => `/case/${slug}`),
    fallback: true,
  }
}

export default BlogDetails
