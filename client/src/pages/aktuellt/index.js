import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PageWrapper from '../../components/PageWrapper'
import { Section, Title, Text } from '../../components/Core'
import BlogList from '../../sections/aktuellt/BlogList'
import { groq } from 'next-sanity'
import { usePreviewSubscription } from '../../lib/sanity'
import { getClient } from '../../lib/sanity.server'
import { filterDataToSingleItem, urlFor } from '../../utils/helpers'
import ExitPreviewLink from '../../components/ExitPreviewLink'
import { NextSeo } from 'next-seo'

export default function BlogRegular({ data, preview = false }) {
  const { data: previewData } = usePreviewSubscription(data?.newsPageQuery, {
    initialData: data?.newsPage,
    enabled: preview,
  })

  const newsPage = filterDataToSingleItem(previewData, preview)

  const sortedNewsPosts = data.newsPosts.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })

  const { metaTags, title } = newsPage

  return (
    <>
      <PageWrapper footerDark>
        {preview && <ExitPreviewLink />}
        {metaTags && (
          <NextSeo
            title={metaTags.title}
            titleTemplate="%s | Aktellt på Iteam"
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
        <Section className="pb-0">
          <div className="pt-5"></div>
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg="8">
                <Title>{title && title}</Title>
              </Col>
            </Row>
          </Container>
        </Section>
        <BlogList posts={sortedNewsPosts && sortedNewsPosts} />
      </PageWrapper>
    </>
  )
}

const newsPageQuery = groq`
  *[_type == 'newsPage'] {
    ...,
  }`

const newsPostsQuery = groq`
  *[_type == 'newsPost'&& !(_id in path('drafts.**'))] {
    title,
    imageCard,
    slug,
    date
  }`

export async function getStaticProps({ preview = false }) {
  const newsPosts = await getClient(preview).fetch(newsPostsQuery)
  const newsPage = await getClient(preview).fetch(newsPageQuery)

  if (!newsPosts) return { notFound: true }

  return {
    props: {
      preview,
      data: { newsPosts, newsPage, newsPageQuery },
    },
  }
}
