import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Section, Box, Text } from '../../components/Core'

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
                      <Text
                        color="heading"
                        as="h3"
                        fontSize={4}
                        fontWeight={800}
                        letterSpacing={-0.75}
                        mb={2}
                      >
                        {item.title}
                      </Text>
                      <Text variant="thin">{item.text}</Text>
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
