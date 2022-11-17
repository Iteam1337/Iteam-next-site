import React from 'react'
import Image from 'next/image'
import { Row, Col } from 'react-bootstrap'

import { Section } from '../../components/Core'
import { HubspotForm } from '../../features/HubspotForm'
import imgCtaBG from '../../assets/image/jpeg/Fanny-Flowers-Lowres.jpg'
import { Container } from '../../components/Layout'

export const CTA = () => (
  <>
    <Section bg="ash" id="book">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} md={10} className="">
            <div className="position-relative tw-mb-6 lg:tw-mb-0">
              <div className="tw-overflow-hidden tw-rounded-md">
                <Image
                  src={imgCtaBG.src}
                  alt="En person med en stor bukett blommor"
                  width={1001}
                  height={1500}
                  layout="responsive"
                />
              </div>
            </div>
          </Col>
          <Col lg={6} md={10} className="">
            <HubspotForm value="mvp" title="Hur kan vi hjälpa dig?" />
          </Col>
        </Row>
      </Container>
    </Section>
  </>
)
