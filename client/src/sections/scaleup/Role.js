import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import { Title, Section, Box } from '../../components/Core'
import ContentCard from '../../components/ContentCard'
import BlockContent from '../../components/BlockContent'

const Feature2 = ({ content }) => {
  return (
    <>
      <Section bg="#f7f7fb">
        <Container>
          <Row className="justify-content-center">
            <Col lg="9">
              <Box className="text-center" mb={[4, 5]}>
                <Title>{content.title}</Title>
                <BlockContent
                  textAlign="center"
                  blocks={content.subtitle.blockText}
                />
              </Box>
            </Col>
          </Row>
          <Row className="justify-content-center">
            {content.keywords.map((service, i) => (
              <ContentCard title={service} key={i} />
            ))}
          </Row>
        </Container>
      </Section>
    </>
  )
}

export default Feature2
