import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import { Section } from '../../components/Core'
import HubspotForm from '../../components/HubspotForm'
import imgCtaBG from '../../assets/image/jpeg/Fanny-Flowers-Lowres.jpg'

const CTA = () => (
  <>
    <Section bg="ash" id="book">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} md={10} className="">
            <div className="position-relative">
              <div className="img-1">
                <img
                  src={imgCtaBG}
                  alt=""
                  className="img-fluid"
                  css={`
                    border-radius: 10px;
                  `}
                />
              </div>
            </div>
          </Col>
          <Col lg={6} md={10} className="">
            <div className="">
              <HubspotForm value="mvp" title="Hur kan vi hjälpa dig?" />
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
)

export default CTA
