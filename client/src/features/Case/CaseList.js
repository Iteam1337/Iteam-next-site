import React from 'react'

import { Card } from '../../components/Card'
import { CardList } from '../../components/CardList'
import { Section, Typography } from '../../components/Core'
import { Container } from '../../components/Layout'

export const CaseList = ({ posts }) => {
  return (
    <>
      <Section className="position-relative">
        <Container>
          <Typography.H2 className="sr-only">Utvalda case</Typography.H2>
          <CardList.CardListGrid>
            {posts.map((post) => {
              const { preview, slug } = post
              return (
                <Card.ArticleCard
                  key={slug.current}
                  link={`/case/${slug.current}`}
                  img={preview.imageCard.image}
                  preTitle=""
                  title={preview.title}
                  bgDark={false}
                >
                  {preview.imageCard.description}
                </Card.ArticleCard>
              )
            })}
          </CardList.CardListGrid>
        </Container>
      </Section>
    </>
  )
}
