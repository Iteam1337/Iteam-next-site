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

const Fact = ({ content }) => (
  <>
    {/* <!-- Fact section 1 --> */}
    <SectionStyled bg="dark">
      <Container>
        <Row>
          {content.texts.map((item, index) => (
            <Col md="4" sm="6" className="mb-4 mb-md-0">
              <Box>
                <Title color="light" mb="20px!important">
                  {item.title}
                </Title>
                <Text color="light">{item.text}</Text>
              </Box>
            </Col>
          ))}
        </Row>
      </Container>
    </SectionStyled>
  </>
)

export default Fact
