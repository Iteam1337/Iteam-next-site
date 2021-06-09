import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import PageWrapper from "../../components/PageWrapper";
import { Section, Title, Text, Box } from "../../components/Core";

import PostDetails from "../../sections/aktuellt/PostDetails";
import Comments from "../../sections/aktuellt/Comments";
import Sidebar from "../../sections/aktuellt/Sidebar";

import { getAllPostIds, getPostData } from "../../lib/posts";

// get path
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

// get data
export async function getStaticProps({ params }) {
  const post = await getPostData(params.id);
  return {
    props: {
      post,
    },
  };
}

const BlogDetails = ({ post }) => {
  return (
    <>
      <PageWrapper footerDark>
        <Section className="pb-0">
          <div className="pt-5"></div>
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg="12">
                <Title variant="hero">{post.title}</Title>
                <Box className="d-flex justify-content-center">
                  <Text mr={3}>
                    <Link href="/">{post.date}</Link>
                  </Text>
                  <Text mr={3}>
                    {post.tags?.map((tag) => (
                      <Link href="/">
                        <a>{tag}</a>
                      </Link>
                    ))}
                  </Text>
                  <Text>{post.author}</Text>
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
                <Sidebar />
              </Col>
            </Row>
          </Container>
        </Section>
        {/* <Comments /> */}
      </PageWrapper>
    </>
  );
};
export default BlogDetails;
