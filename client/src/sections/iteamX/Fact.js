import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'

import { Section, Box, Typography } from '../../components/Core'
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
            <Col md="4" sm="6" className="mb-4 mb-md-0" key={index}>
              <Box>
                <Typography.H2 additionalClassName="tw-text-white tw-mb-6">
                  {item.title}
                </Typography.H2>
                <Typography.Paragraph light>{item.text}</Typography.Paragraph>
              </Box>
            </Col>
          ))}
        </Row>
      </Container>
    </SectionStyled>
  </>
)

export default Fact
