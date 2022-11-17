import React from 'react'
import { Row, Col } from 'react-bootstrap'

import { Section, Typography } from '../../components/Core'
import { Card } from '../../components/Card'
import { CardList } from '../../components/CardList'
import { Container } from '../../components/Layout'

export const Roles = ({ content, openPositions }) => (
  <>
    <Section bg="#f7f7fb" id="openings">
      <Container>
        <Row className="justify-content-center tw-mb-6">
          <Col lg="6" className="text-center">
            <div>
              <Typography.H2>{content.title}</Typography.H2>
              <Typography.BlockContent blocks={content.subtitle.blockText} />
            </div>
          </Col>
        </Row>
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
            />
          ))}
        </CardList.CardListFlex>
      </Container>
    </Section>
  </>
)
