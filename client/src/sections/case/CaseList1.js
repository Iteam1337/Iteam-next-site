import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import { Section, Title } from '../../components/Core'
import PostCard from '../../components/PostCard'

const Column = (props) => <Col sm={6} lg={4} className="mb-4" {...props} />
const CaseList = ({ posts }) => {
  return (
    <>
      <Section className="position-relative">
        <Container>
          <Title className="sr-only">Utvalda case</Title>
          <Row>
            {posts.map((item, i) => {
              return (
                <Column key={i}>
                  <PostCard
                    img={item.preview.imageCard.image}
                    title={item.preview.title}
                    link={`/case/${item.slug.current}`}
                    readMore
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
