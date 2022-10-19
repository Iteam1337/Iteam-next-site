import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import { Section, Typography } from '../../components/Core'
import Carousel from '../../components/Carousel'

export const Testimonial = ({ content }) => {
  return (
    <>
      <Section bg="#F7F7FB" pb={['130px!important']}>
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg="9" md="9">
              <div className="text">
                <Typography.H2>{content.title}</Typography.H2>
                <Typography.Paragraph>{content.subtitle}</Typography.Paragraph>
              </div>
            </Col>
          </Row>
          <Carousel content={content.texts} />
        </Container>
      </Section>
    </>
  )
}
