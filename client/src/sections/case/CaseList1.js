import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import { Section } from '../../components/Core'
import PostCard from '../../components/PostCard'

const Column = (props) => <Col sm={6} lg={4} className="mb-4" {...props} />
const CaseList = ({ posts }) => {
  return (
    <>
      <Section className="position-relative">
        <Container>
          <Row>
            {posts.map((item, i) => {
              return (
                <Column key={i}>
                  <PostCard
                    img={item.preview.imageCard.image}
                    title={item.preview.title}
                    link={`/case/${item.slug.current}`}
                  >
                    {item.preview.imageCard.description}
                  </PostCard>
                </Column>
              )
            })}
          </Row>
        </Container>
      </Section>
    </>
  )
}

export default CaseList