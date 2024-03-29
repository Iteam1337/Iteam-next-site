import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import { Section, Box, Typography } from '../../components/Core'
import { ContentCard } from '../../components/ContentCard'

export const Role = ({ content }) => {
  return (
    <Section bg="#f7f7fb">
      <Container>
        <Row className="justify-content-center">
          <Col lg="9">
            <Box className="text-center" mb={[4, 5]}>
              <Typography.H2>{content.title}</Typography.H2>
              <Typography.BlockContent blocks={content.subtitle.blockText} />
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
  )
}
