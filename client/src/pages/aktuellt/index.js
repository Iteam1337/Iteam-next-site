import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PageWrapper from '../../components/PageWrapper'
import { Section, Title, Text, Anchor } from '../../components/Core'
import BlogList from '../../sections/aktuellt/BlogList'
import { groq } from 'next-sanity'
import { usePreviewSubscription } from '../../lib/sanity'
import { getClient } from '../../lib/sanity.server'
import { filterDataToSingleItem, urlFor } from '../../utils/helpers'
import ExitPreviewLink from '../../components/ExitPreviewLink'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'

export default function BlogRegular({ query, data, preview = false }) {
  const router = useRouter()
  const { data: previewData } = usePreviewSubscription(data?.newsPageQuery, {
    initialData: data?.newsPage,
    enabled: preview,
  })

  const newsPage = filterDataToSingleItem(previewData, preview)
  const filters = {
    'alla': (type) =>
      (type == 'newsPost' || type == 'openSourceLesson'),
    'blogg': (type) =>
      (type == 'newsPost'),
    'open-source-skolan': (type) =>
      (type == 'openSourceLesson')
  }
  const filterParam = router?.query?.taggat || 'alla'
  console.log("filterParam: ", filterParam)
  const contentFilter = filters[filterParam] || filters['alla']

  const filteredPosts = data.posts.filter((post)=> (contentFilter(post._type)))

  const sortedPosts = filteredPosts.sort((a, b) => {
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
          <Section className="pb-0">
          <div className="pt-5"></div>
          <Container>
            <Row>
              <Col lg="8">
                <Text fontSize={2} fontWeight='bold'>Visa</Text>
              </Col>
            </Row>
            <Row>
              <Col lg="8">
                <Anchor fontWeight={filterParam == 'alla' ? 'bold' : 'normal'} color="dark" mr={48} href='/aktuellt'>Allt</Anchor>
                <Anchor fontWeight={filterParam == 'blogg' ? 'bold' : 'normal'} color="dark" mr={48} href='/aktuellt?taggat=blogg'>Blogg</Anchor>
                <Anchor fontWeight={filterParam == 'open-source-skolan' ? 'bold' : 'normal'} color="dark" mr={48} href='/aktuellt?taggat=open-source-skolan'>Open Source skolan</Anchor>
              </Col>
            </Row>
          </Container>
        </Section>
        <BlogList posts={sortedPosts && sortedPosts} />
      </PageWrapper>
    </>
  )
}

const newsPageQuery = groq`
  *[_type == 'newsPage'] {
    ...,
  }`

const allPostsQuery = groq`
  *[(_type == 'newsPost' || _type == 'openSourceLesson') && !(_id in path('drafts.**'))] {
    ...,
  }
`

export async function getStaticProps({ preview = false }) {
  const posts = await getClient(preview).fetch(allPostsQuery)
  const newsPage = await getClient(preview).fetch(newsPageQuery)
  if (!posts) return { notFound: true }

  return {
    props: {
      preview,
      data: { posts, newsPage, newsPageQuery },
    },
  }
}
