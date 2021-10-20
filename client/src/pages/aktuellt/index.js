import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PageWrapper from '../../components/PageWrapper'
import { Section, Title, Text } from '../../components/Core'
import MetaTags from '../../components/MetaTags/MetaTags'
import BlogList from '../../sections/aktuellt/BlogList'
import { groq } from 'next-sanity'
import { usePreviewSubscription } from '../../lib/sanity'
import { getClient } from '../../lib/sanity.server'
import { filterDataToSingleItem } from '../../utils/helpers'
import ExitPreviewLink from '../../components/ExitPreviewLink'

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

  return (
    <>
      <PageWrapper footerDark>
        <MetaTags
          title={newsPage?.title && newsPage.title}
          description={newsPage?.title && newsPage.title}
        />
        {preview && <ExitPreviewLink />}
        <Section className="pb-0">
          <div className="pt-5"></div>
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg="8">
                <Title>{newsPage?.title && newsPage.title}</Title>
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
