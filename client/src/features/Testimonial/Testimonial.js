import React from 'react'
import { Row, Col } from 'react-bootstrap'

import { Section, Box, Typography } from '../../components/Core'
import { Carousel } from '../../components/Carousel'
import { Container } from '../../components/Layout'

export const Testimonial = ({ content, coworker, bg }) => {
  return (
    <Section bg={bg && '#F7F7FB'}>
      <Container>
        {coworker ? (
          <>
            <Row className="justify-content-center pb-4">
              <Col lg="6" md="9">
                <Typography.H2>{content.section.title}</Typography.H2>
              </Col>
              <Col lg="6" className="pl-lg-5">
                <Typography.BlockContent
                  blocks={content.section.blockText.blockText}
                />
              </Col>
            </Row>
            <Box className="tw-mt-6">
              <Carousel coworker={true} content={content.carousel} />
            </Box>
          </>
        ) : (
          <>
            <Row className="justify-content-center mb-5">
              <Col lg="9" md="9">
                <div className="text">
                  <Typography.H2>{content.title}</Typography.H2>
                  <Typography.Paragraph>
                    {content.subtitle}
                  </Typography.Paragraph>
                </div>
              </Col>
            </Row>
            <Carousel coworker={false} content={content.texts} />
          </>
        )}
      </Container>
    </Section>
  )
}
