import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import Card from '../../components/Card'
import { Section, Title } from '../../components/Core'

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
                <Card.BaseCard
                  key={slug.current}
                  img={preview.imageCard.image}
                  title={preview.title}
                  link={`/case/${slug.current}`}
                  readMore
                >
                  {preview.imageCard.description}
                </Card.BaseCard>
              )
            })}
          </ul>
        </Container>
      </Section>
    </>
  )
}

export default CaseList
