import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import Card from '../../components/Card'
import { Section, Title, Typography } from '../../components/Core'

const Column = (props) => <Col sm={6} lg={4} className="mb-4" {...props} />
const CaseList = ({ posts }) => {
  return (
    <>
      <Section className="position-relative">
        <Container>
          <Title className="sr-only">Utvalda case</Title>
          <ul>
            {posts.map((post) => {
              const { preview, slug } = post
              return (
                <Card.PostCard
                  key={slug.current}
                  link={`/case/${slug.current}`}
                  img={preview.imageCard.image}
                  preTitle=""
                  title={preview.title}
                >
                  {preview.imageCard.description}
                </Card.PostCard>
              )
            })}
          </ul>
        </Container>
      </Section>
    </>
  )
}

export default CaseList
