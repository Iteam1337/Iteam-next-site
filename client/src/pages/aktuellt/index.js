import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import PageWrapper from "../../components/PageWrapper"
import { Section, Title, Text } from "../../components/Core"

import MetaTags from "../../components/MetaTags/MetaTags"
import BlogList from "../../sections/aktuellt/BlogList"
import client from "../../sanity-client"
import { groq } from "next-sanity"


export default function BlogRegular({ newsPage, newsPosts }) {
  const { title } = newsPage


  const sortedNewsPosts = newsPosts.sort((a, b) => {
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
          title={title}
          description={title}
        />
        <Section className="pb-0">
          <div className="pt-5"></div>
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg="8">
                <Title>{title}</Title>
              </Col>
            </Row>
          </Container>
        </Section>
        <BlogList posts={sortedNewsPosts} />
      </PageWrapper>
    </>
  )
}

const newsPageQuery = groq`
  *[_type == 'newsPage'][0] 
  {
    title
  }`

const newsPostsQuery = groq`
  *[_type == 'newsPost' && !(_id in path('drafts.**'))]
  {
  title,
   imageCard,
   slug,
   date
  }`


export async function getStaticProps() {
  const newsPage = await client.fetch(newsPageQuery)
  const newsPosts = await client.fetch(newsPostsQuery)
  return {
    props: {
      newsPage,
      newsPosts
    }
  }
}