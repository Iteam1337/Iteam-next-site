import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'

import { Title, Section, Box, Text } from '../../components/Core'
import { device } from '../../utils'

const SectionStyled = styled(Section)`
  border-bottom: 1px solid #2d2d30;
  padding-bottom: 30px;
  padding-top: 0;
  @media ${device.md} {
    padding-bottom: 70px;
  }
`

const Fact = () => (
  <>
    {/* <!-- Fact section 1 --> */}
    <SectionStyled bg="dark">
      <Container>
        <Row>
          <Col md="4" sm="6" className="mb-4 mb-md-0">
            <Box>
              <Title color="light" mb="20px!important">
                2012
              </Title>
              <Text color="lightShade">Började vi med NodeJS</Text>
            </Box>
          </Col>
          <Col md="4" sm="6" className="mb-4 mb-md-0">
            <Box pr={4}>
              <Title color="light" mb="20px!important">
                2013
              </Title>
              <Text color="lightShade">Började vi med AI/ML</Text>
            </Box>
          </Col>
          <Col md="4" sm="6" className="mb-4 mb-md-0">
            <Box pl={[null, null, null, 4]}>
              <Title color="light" mb="20px!important">
                2016
              </Title>
              <Text color="lightShade">Första AI-modellen i produktion</Text>
            </Box>
          </Col>
        </Row>
      </Container>
    </SectionStyled>
  </>
)

export default Fact
