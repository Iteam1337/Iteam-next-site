import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import PageWrapper from "../components/PageWrapper";
import { Section, Title, Text } from "../components/Core";

import BlogList from "../sections/aktuellt/BlogList";
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  console.log('getting blog posts')
  const posts = getSortedPostsData();
  return {
    props: {
      posts,
    },
  };
}

export default function BlogRegular ({ posts }) {
  return (
    <>
      <PageWrapper footerDark>
        <Section className="pb-0">
          <div className="pt-5"></div>
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg="8">
                <Title>Aktuellt på Iteam</Title>
              </Col>
            </Row>
          </Container>
        </Section>
        <BlogList posts={posts} />
      </PageWrapper>
    </>
  );
};
