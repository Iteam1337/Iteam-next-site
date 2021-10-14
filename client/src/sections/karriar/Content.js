import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Title, Section, Box, Text, Anchor } from '../../components/Core'
import BlockContent from '../../components/BlockContent'
import { shuffleArray } from '../../utils/helpers'
import Carousel from '../../components/Carousel'

const Content = ({ content, carousel }) => {
  return (
    <>
      <Section>
        <Container>
          <Row className="justify-content-center pb-4">
            <Col lg="6">
              <Title variant="hero">{content.title}</Title>
            </Col>
            <Col lg="6" className="pl-lg-5">
              <BlockContent blocks={content.blockText.blockText} />
            </Col>
          </Row>
          <Box>
            <Carousel content={carousel} />
          </Box>
        </Container>
      </Section>
    </>
  )
}

export default Content
