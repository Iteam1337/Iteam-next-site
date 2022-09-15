import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import Card from '../../components/Card'
import CardList from '../../components/CardList'
import { Section, Title } from '../../components/Core'

const CaseList = ({ posts }) => {
  return (
    <>
      <Section className="position-relative">
        <Container>
          <Title className="sr-only">Utvalda case</Title>
          <CardList>
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
          </CardList>
        </Container>
      </Section>
    </>
  )
}

export default CaseList
