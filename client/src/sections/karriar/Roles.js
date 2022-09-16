import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'

import { Title, Section } from '../../components/Core'
import BlockContent from '../../components/BlockContent'
import Card from '../../components/Card'
import CardList from '../../components/CardList'

const Roles = ({ content, openPositions }) => (
  <>
    <Section bg="#f7f7fb" id="openings">
      <Container>
        <Row className="justify-content-center">
          <Col lg="6" className="text-center">
            <div>
              <Title>{content.title}</Title>
              <BlockContent
                variant="thin"
                blocks={content.subtitle.blockText}
              />
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

export default Roles
