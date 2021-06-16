import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import { Section } from "../../components/Core"
import CaseCard from "../../components/CaseCard"

import imgCase1 from "../../assets/image/png/Chat-Large.png"
import imgCase2 from "../../assets/image/jpeg/christian-landgren.webp"

const CaseList2 = () => (
  <>
    {/* <!-- Feature section --> */}
    <Section bg="#F7F7FB" className="position-relative">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col lg="6" className="mb-5 mb-lg-0">
            <CaseCard
              img={imgCase1}
              title="Blir du nyfiken på fler av våra case?"
            >
              De mest spännande projekten vi jobbar med kan vi inte berätta så
              mycket om här. Kontakta oss så berättar vi mer.
            </CaseCard>
          </Col>
          <Col lg="6" className="mb-5 mb-lg-0">
            <CaseCard img={imgCase2} title="Christian Landgren">
              VD och grundare av Iteam sedan 1995. Programmerare,
              tech-entreprenör och rådgivare. En av Sveriges tyngsta
              opinionsbildare inom digitalisering enligt Dagens Opinion.
            </CaseCard>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
)

export default CaseList2
