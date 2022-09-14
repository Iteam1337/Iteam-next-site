import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Title, Section, Text, Box, Typography } from '../../components/Core'
import Carousel from '../../components/Carousel'
import BlockContent from '../../components/BlockContent'

const Testimonial = ({ content, coworker, bg }) => {
  return (
    <Section bg={bg && '#F7F7FB'}>
      <Container>
        {coworker ? (
          <>
            <Row className="justify-content-center pb-4">
              <Col lg="6" md="9">
                <Title>{content.section.title}</Title>
              </Col>
              <Col lg="6" className="pl-lg-5">
                <BlockContent blocks={content.section.blockText.blockText} />
              </Col>
            </Row>
            <Box>
              <Carousel coworker={true} content={content.carousel} />
            </Box>
          </>
        ) : (
          <>
            <Row className="justify-content-center mb-5">
              <Col lg="9" md="9">
                <div className="text">
                  <Title>{content.title}</Title>
                  <Typography.Caption>{content.subtitle}</Typography.Caption>
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

export default Testimonial
