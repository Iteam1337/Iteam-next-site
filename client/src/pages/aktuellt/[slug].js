import { groq } from 'next-sanity'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import React from 'react'

import { Box, Section, Typography } from '../../components/Core'
import { ExitPreviewLink } from '../../components/ExitPreviewLink'
import { Container, Flex } from '../../components/Layout'
import { PageWrapper } from '../../components/PageWrapper'
import { BlogList, Sidebar } from '../../features/Aktuellt'
import { usePreviewSubscription } from '../../lib/sanity'
import { getClient } from '../../lib/sanity.server'
import { filterDataToSingleItem, urlFor } from '../../utils/helpers'

const BlogDetails = ({ data, preview = false }) => {
  const { data: previewData } = usePreviewSubscription(data?.newsPostQuery, {
    params: data?.queryParams ?? {},
    initialData: data?.post,
    enabled: preview,
  })

  const post = filterDataToSingleItem(previewData, preview)

  return (
    <>
      {post && (
        <NextSeo
          title={post?.metaTags?.title ?? post.title}
          titleTemplate="%s | Iteam"
          description={
            post?.metaTags?.description ?? post?.imageCard?.description
          }
          image={urlFor(
            post?.metaTags?.imageWithAlt?.asset._ref ??
              post?.preview?.imageCard?.image.asset._ref
          )}
          openGraph={{
            title: post?.metaTags?.title ?? post.title,
            description:
              post?.metaTags?.description ?? post?.imageCard?.description,
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
              post?.metaTags?.description ?? post?.imageCard?.description,
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
      <PageWrapper footerDark>
        {preview && <ExitPreviewLink />}
        <Section className="pb-0">
          <div className="pt-5"></div>
          <Container>
            <Flex center className="tw-text-center">
              <div>
                <Typography.H1>{post?.title && post.title}</Typography.H1>
                <Box className="d-flex justify-content-center">
                  <Typography.Paragraph>
                    {post?.date && post.date}
                  </Typography.Paragraph>
                  <Typography.Paragraph>
                    {post?.tags &&
                      post.tags?.map((tag) => (
                        <Link key={tag} href="/">
                          {tag}
                        </Link>
                      ))}
                  </Typography.Paragraph>
                  <Typography.Paragraph>
                    {post?.author && 'av ' + post.author}
                  </Typography.Paragraph>
                </Box>
              </div>
            </Flex>
          </Container>
        </Section>
        <Section className="pb-0">
          <Container>
            <Flex>
              <div className="tw-mb-5">
                {post?.blockText?.blockText && (
                  <Typography.BlockContent blocks={post.blockText.blockText} />
                )}
              </div>
              <div style={{ marginTop: '2.3rem' }}>
                {data?.posts && <Sidebar posts={data.posts} />}
              </div>
            </Flex>
          </Container>
        </Section>
        {data?.posts && <BlogList posts={data.posts} />}
      </PageWrapper>
    </>
  )
}

const newsPostsQuery = groq`
  *[_type == 'newsPost' && !(_id in path('drafts.**'))] {
    ...,
   }
`

const newsPostQuery = groq`
    *[_type == "newsPost" && slug.current == $slug] {
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
  const data = await getClient(preview).fetch(newsPostQuery, queryParams)
  const posts = await getClient(preview).fetch(newsPostsQuery)

  if (!posts) return { notFound: true }

  const post = filterDataToSingleItem(data, preview)

  return {
    props: {
      preview,
      data: { post, posts, newsPostQuery, queryParams },
    },
  }
}

export const getStaticPaths = async () => {
  const query = groq`*[_type == 'newsPost' && defined(slug.current)][].slug.current`
  const pages = await getClient().fetch(query)
  return {
    paths: pages.map((slug) => `/aktuellt/${slug}`),
    fallback: true,
  }
}

export default BlogDetails
