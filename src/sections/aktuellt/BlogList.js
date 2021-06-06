import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Section, Box } from "../../components/Core";
import PostCard from "../../components/PostCard";
import { getSortedPostsData } from '../../lib/posts'

export async function getStaticProps() {
  const posts = getSortedPostsData();
  return {
    props: {
      posts,
    },
  };
}


const BlogList = ({ posts }) => (
  <>
    {/* <!-- Blog section --> */}
    <Section className="position-relative">
      <Container>
        <Row className="align-items-center justify-content-center">
          {posts?.map(post =>  <Col lg="4" className="mb-5">
            <PostCard
              img={require(post.image)}
              preTitle={post.date}
              title={post.title}
              readMore
            >
              {post.intro}
            </PostCard>
          </Col>)}
        </Row>
      </Container>
    </Section>
  </>
);

export default BlogList;
