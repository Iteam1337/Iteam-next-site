import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import { Section, Box, Typography } from '../../components/Core'

const Feature = ({ content }) => {
  return (
    <>
      <Section pt="0!important">
        <Container>
          <Row className="">
            {content.texts.map((item, index) => (
              <Col md="6" xl="4" className="mb-5" key={index}>
                <Box width={'100%'} bg="light">
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <Typography.H3>{item.title}</Typography.H3>
                      <Typography.Paragraph>{item.text}</Typography.Paragraph>
                    </div>
                  </div>
                </Box>
              </Col>
            ))}
          </Row>
        </Container>
      </Section>
    </>
  )
}
export default Feature
