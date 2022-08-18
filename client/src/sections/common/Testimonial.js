import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Title, Section, Text } from '../../components/Core'
import Carousel from '../../components/Carousel'

const Testimonial = ({ content }) => {
  return (
    <>
      <Section bg="#F7F7FB" pb={['130px!important']}>
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg="9" md="9">
              <div className="text">
                <Title>{content.title}</Title>
                <Text>{content.subtitle}</Text>
              </div>
            </Col>
          </Row>
          <Carousel content={content.texts} />
        </Container>
      </Section>
    </>
  )
}

export default Testimonial
