import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import { Section, Typography } from '../../components/Core'
import { CaseFooterSection } from './CaseFooterSection'
import { urlFor } from '../../utils/helpers'

export const CaseFooter = ({ sectionCards }) => {
  return (
    <>
      {/* <!-- Feature section --> */}
      <Section bg="#F7F7FB" className="position-relative">
        <Container>
          <Typography.H2 className="sr-only">Mer information</Typography.H2>
          <Row className="justify-content-center">
            {sectionCards.map((card, i) => {
              return (
                <Col lg="6" className="mb-5 mb-lg-0" key={i}>
                  <CaseFooterSection
                    alt={card.imageWithAlt.alt}
                    img={urlFor(card.imageWithAlt.asset._ref)}
                    title={card.title}
                    blocks={card.blockText}
                  />
                </Col>
              )
            })}
          </Row>
        </Container>
      </Section>
    </>
  )
}
