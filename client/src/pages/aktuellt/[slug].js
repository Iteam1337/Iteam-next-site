import React from 'react'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import PageWrapper from '../../components/PageWrapper'
import { Section, Title, Text, Box } from '../../components/Core'
import { groq } from 'next-sanity'
import Sidebar from '../../sections/aktuellt/Sidebar'
import BlogList from '../../sections/aktuellt/BlogList'
import { NextSeo } from 'next-seo'
import BlockContent from '../../components/BlockContent'
import { urlFor } from '../../utils/helpers'
import { usePreviewSubscription } from '../../lib/sanity'
import { getClient } from '../../lib/sanity.server'
import { filterDataToSingleItem } from '../../utils/helpers'
import ExitPreviewLink from '../../components/ExitPreviewLink'

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
            <Row className="justify-content-center text-center">
              <Col lg="12">
                <Title variant="hero">{post?.title && post.title}</Title>
                <Box className="d-flex justify-content-center">
                  <Text mr={3}>{post?.date && post.date}</Text>
                  <Text>
                    {post?.tags &&
                      post.tags?.map((tag) => <Link href="/">{tag}</Link>)}
                  </Text>
                  <Text>{post?.author && 'av ' + post.author}</Text>
                </Box>
              </Col>
            </Row>
          </Container>
        </Section>
        <Section className="pb-0">
          <Container>
            <Row>
              <Col lg="8" className="mb-5">
                {post?.blockText?.blockText && (
                  <BlockContent
                    variant="thin"
                    blocks={post.blockText.blockText}
                  />
                )}
              </Col>
              <Col lg="4" className="" style={{ marginTop: '2.3rem' }}>
                {data?.posts && <Sidebar posts={data.posts} />}
              </Col>
            </Row>
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
