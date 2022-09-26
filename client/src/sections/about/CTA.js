import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'

import { Button, Section, Box, Typography } from '../../components/Core'

import imgOval from '../../assets/image/svg/l1-cta-oval.svg'
import svgCurve from '../../assets/image/svg/l1-curve-cta.svg'
import { buildInternalUrl } from '../../utils/helpers'

const LeftCard = styled(Box)`
  position: absolute;
  top: 0;
  left: 0px;
`

const RightCard = styled(Box)`
  position: absolute;
  top: 0;
  right: -275px;
`

const CTA = ({ content }) => (
  <>
    {/* <!-- CTA section --> */}
    <Section bg="dark" className="position-relative">
      <LeftCard
        data-aos="fade-right"
        data-aos-duration="750"
        data-aos-once="true"
      >
        <img src={imgOval} alt="" aria-hidden="true" className="img-fluid" />
      </LeftCard>
      <RightCard>
        <img src={svgCurve} alt="" aria-hidden="true" className="img-fluid" />
      </RightCard>
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg="6">
            <Box mb={5} className="text-center">
              <Typography.H2 className="tw-text-white">
                {content.title}
              </Typography.H2>
            </Box>
            <Box>
              <Button
                onClick={() =>
                  (window.location.href = buildInternalUrl(
                    content.cta.reference
                  ))
                }
              >
                {content.cta.title}
              </Button>
            </Box>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
)

export default CTA
