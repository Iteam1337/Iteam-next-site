import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import PageWrapper from "../../components/PageWrapper"
import { Section, Title, Text } from "../../components/Core"

import MetaTags from "../../components/MetaTags/MetaTags"
import BlogList from "../../sections/aktuellt/BlogList"
import { getSortedPostsData } from "../../lib/posts"
import { groq } from "next-sanity"
import client from "../../sanity-client"

// export async function getStaticProps() {
//   console.log("getting blog posts")
//   const posts = getSortedPostsData()
//   return {
//     props: {
//       posts,
//     },
//   }
// }

export default function BlogRegular({ newsPage, newsPosts }) {
  const { title } = newsPage
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
        <BlogList posts={newsPosts} />
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
  *[_type == 'newsPost']
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