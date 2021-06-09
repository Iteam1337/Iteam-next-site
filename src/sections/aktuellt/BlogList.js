import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Section, Box } from "../../components/Core";
import PostCard from "../../components/PostCard";


export default function BlogList ({ posts })
{
  return (
    <Section className="position-relative">
      <Container>
        <Row className="align-items-center justify-content-center">
          {posts?.map(post =>  <Col lg="4" className="mb-5">
            <PostCard
              img={post.image? require(post.image) : null}
              preTitle={post.date}
              link={`/aktuellt/${post.id}`}
              title={post.title}
              readMore
            >
              {post.intro}
            </PostCard>
          </Col>)}
        </Row>
      </Container>
    </Section>
  )
}