import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Section, Box } from "../../components/Core"
import PostCard from "../../components/PostCard"

export default function BlogList({ posts }) {
  return (
    <Section className="position-relative">
      <Container>
        <Row className="justify-content-center">
          {posts?.map((post, i) => (
            <Col lg="4" className="mb-5" key={i}>
              <PostCard
                img={post.image}
                preTitle={post.date}
                link={`/aktuellt/${post.id}`}
                title={post.title}
                readMore
              >
                {post.imageCard.description}
              </PostCard>
            </Col>
          ))}
        </Row>
      </Container>
    </Section>
  )
}
