import React from "react"
import Link from "next/link"
import Head from "next/head"
import { Container, Row, Col } from "react-bootstrap"
import PageWrapper from "../../components/PageWrapper"
import { Section, Title, Text, Box } from "../../components/Core"

import PostDetails from "../../sections/aktuellt/PostDetails"
import Sidebar from "../../sections/aktuellt/Sidebar"

import { getAllPostIds, getPostData, getSortedPostsData } from "../../lib/posts"

// get path
export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

// get data
export async function getStaticProps({ params }) {
  const post = await getPostData(params.id)
  const posts = await getSortedPostsData()
  return {
    props: {
      post,
      posts,
    },
  }
}

const BlogDetails = ({ post, posts }) => {
  return (
    <>
      <PageWrapper footerDark>
        <Head>
          <title>{post.title}</title>
          <meta property="og:title" content={post.title} key="title" />
          <meta
            property="og:description"
            content={post.intro}
            key="description"
          />
          <meta property="og:image" content={post.image} key="image" />
        </Head>
        <Section className="pb-0">
          <div className="pt-5"></div>
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg="12">
                <Title variant="hero">{post.title}</Title>
                <Box className="d-flex justify-content-center">
                  <Text mr={3}>
                    <p>{post.date}</p>
                  </Text>
                  <Text>
                    {post.tags?.map((tag) => (
                      <Link href="/">{tag}</Link>
                    ))}
                  </Text>
                  <Text>{post.author && "av " + post.author}</Text>
                </Box>
              </Col>
            </Row>
          </Container>
        </Section>
        <Section className="pb-0">
          <Container>
            <Row>
              <Col lg="8" className="mb-5">
                <PostDetails post={post} />
              </Col>
              <Col lg="4" className="">
                <Sidebar posts={posts} />
              </Col>
            </Row>
          </Container>
        </Section>
      </PageWrapper>
    </>
  )
}
export default BlogDetails
