import React from 'react'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'

import { Section, Typography, CTALink } from '../../components/Core'
import { urlFor } from '../../utils/helpers'

export const Case = ({ content }) => {
  return (
    <Section id="design_sprint">
      <Container>
        <Row className="align-items-center">
          <Col lg="6" md="10" className="order-lg-2 mb-4">
            <div className="position-relative text-lg-right">
              <div className="tw-overflow-hidden tw-rounded-md tw-shadow-md">
                <Image
                  src={urlFor(content.preview.imageCard.image.asset._ref)}
                  alt={content.preview.imageCard.image.alt}
                  width={3140}
                  height={3141}
                  layout="responsive"
                />
              </div>
            </div>
          </Col>
          <Col lg="6" className="order-lg-1 mt-5 mt-lg-0">
            <div
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="50"
              data-aos-offset="0"
              data-aos-once="true"
            >
              <div>
                <Typography.H2>{content.title}</Typography.H2>
                <Typography.Paragraph>
                  {content.preview.imageCard.description}
                </Typography.Paragraph>
                <CTALink
                  href={`/case/${content.slug.current}`}
                  text={`Läs mer om ${content.company}`}
                  className="tw-mt-8"
                  variant="secondary"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  )
}
