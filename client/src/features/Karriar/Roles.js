import React from 'react'

import { Card } from '../../components/Card'
import { CardList } from '../../components/CardList'
import { Section, Typography } from '../../components/Core'
import { Container, Flex } from '../../components/Layout'

export const Roles = ({ content, openPositions }) => (
  <>
    <Section bg="#f7f7fb" id="openings">
      <Container>
        <Flex center className="tw-mb-6">
          <div className="tw-text-center">
            <div>
              <Typography.H2>{content.title}</Typography.H2>
              <Typography.BlockContent blocks={content.subtitle.blockText} />
            </div>
          </div>
        </Flex>
        <CardList.CardListFlex>
          {openPositions.map((openPosition) => (
            <Card.SimpleCard
              key={openPosition.title}
              link={`/karriar/${openPosition.slug.current}`}
              icon="icon-pin-3"
              preTitle={openPosition.position}
              title={openPosition.title}
              ariaLabel={`Plats: ${openPosition.position}`}
              bgDark={false}
              className="tw-max-w-lg"
            />
          ))}
        </CardList.CardListFlex>
      </Container>
    </Section>
  </>
)
