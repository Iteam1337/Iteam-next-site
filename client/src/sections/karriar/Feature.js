import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Section, Box, Text } from "../../components/Core"
import BlockContent from "../../components/BlockContent"

const Feature = ({ content }) => {
  return (
    <>
      <Section pt="0!important">
        <Container>
          <Row className="">
            {content.texts.map((item) => <Col md="6" xl="4" className="mb-5">
              <Box width={"100%"} bg="light">
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
                    <BlockContent variant='thin' blocks={item.blockText.blockText} />
                  </div>
                </div>
              </Box>
            </Col>)}
          </Row>
        </Container>
      </Section>
    </>
  )
}
export default Feature
