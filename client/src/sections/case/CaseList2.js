import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import { Section } from "../../components/Core"
import CaseCard from "../../components/CaseCard"
import { urlFor } from "../../utils/helpers"

const CaseList2 = ({ sectionCards }) => {

  return (
    <>
      {/* <!-- Feature section --> */}
      <Section bg="#F7F7FB" className="position-relative">
        <Container>
          <Row className="align-items-center justify-content-center">
            {sectionCards.map((card, i) => {
              return (
                <Col lg="6" className="mb-5 mb-lg-0" key={i}>
                  <CaseCard
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

export default CaseList2
