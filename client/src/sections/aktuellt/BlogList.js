import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import Card from '../../components/Card/'
import CardList from '../../components/CardList'
import { Section, Typography } from '../../components/Core'

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
        <CardList.CardListGrid>
          {sortedPosts?.map((post) => {
            const { imageCard, slug, date, title, _type } = post
            const prefix =
              _type == 'openSourceLesson' ? 'open-source-skolan' : 'aktuellt'
            return (
              <Card.PostCard
                key={slug.current}
                link={`/${prefix}/${slug.current}`}
                img={imageCard.image}
                preTitle={date}
                title={title}
                bgDark={false}
              >
                {imageCard.description}
              </Card.PostCard>
            )
          })}
        </CardList.CardListGrid>
      </Container>
    </Section>
  )
}
