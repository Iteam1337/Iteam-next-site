import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Section, Box } from '../../components/Core'
import PostCard from '../../components/PostCard'

export default function BlogList({ posts }) {
  const sortedPosts = posts.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
  return (
    <Section className="position-relative">
      <Container>
        <Row className="justify-content-center">
          {sortedPosts?.map((post, i) => {
            const { imageCard, slug, date, title, _type } = post
            const prefix = _type == 'openSourceLesson' ? 'open-source-skolan' : 'aktuellt'
            return (
              <Col lg="4" className="mb-5" key={i}>
                <PostCard
                  img={imageCard.image}
                  preTitle={date}
                  link={`/${prefix}/${slug.current}`}
                  title={title}
                  readMore
                >
                  {imageCard.description}
                </PostCard>
              </Col>
            )
          })}
        </Row>
      </Container>
    </Section>
  )
}
