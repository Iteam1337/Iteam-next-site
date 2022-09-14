import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import Card from '../../components/Card/'
import { Section } from '../../components/Core'

export default function BlogList({ posts }) {
  const sortedPosts = posts.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
  return (
    <Section className="pt-5 position-relative">
      <Container>
        <ul>
          {sortedPosts?.map((post) => {
            const { imageCard, slug, date, title, _type } = post
            const prefix =
              _type == 'openSourceLesson' ? 'open-source-skolan' : 'aktuellt'
            return (
              <Card.BaseCard
                key={slug.current}
                img={imageCard.image}
                preTitle={date}
                link={`/${prefix}/${slug.current}`}
                title={title}
                readMore
              >
                {imageCard.description}
              </Card.BaseCard>
            )
          })}
        </ul>
      </Container>
    </Section>
  )
}
