import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'

import { Section, Box, Typography } from '../../components/Core'
import { device } from '../../utils'

const SectionStyled = styled(Section)`
  border-bottom: 1px solid #ededf4;
  padding-bottom: 30px;
  padding-top: 0;
  @media ${device.md} {
    padding-bottom: 70px;
  }
`

const Fact = () => (
  <>
    {/* <!-- Fact section 1 --> */}
    <SectionStyled bg="#f2f2f3" pt={0}>
      <Container>
        <Row className="text-center">
          <Col md="4" className="mb-5">
            <Box>
              <Typography.H2 additionalClassName="tw-text-secondary">
                26
              </Typography.H2>
              <Typography.Paragraph>
                år har Iteam jobbat med digitalisering.
              </Typography.Paragraph>
            </Box>
          </Col>
          <Col md="4" className="mb-5">
            <Box>
              <Typography.H2 additionalClassName="tw-text-secondary">
                92%
              </Typography.H2>
              <Typography.Paragraph>
                Satisfaction rate comes from our awesome customers.
              </Typography.Paragraph>
            </Box>
          </Col>
          <Col md="4" className="mb-5">
            <Box>
              <Typography.H2 additionalClassName="tw-text-secondary">
                4.9/5.0
              </Typography.H2>
              <Typography.Paragraph>
                Average customer ratings we have got all over internet.
              </Typography.Paragraph>
            </Box>
          </Col>
        </Row>
      </Container>
    </SectionStyled>
  </>
)

export default Fact
