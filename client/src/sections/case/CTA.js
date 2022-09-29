import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'

import { Button, Section, Box, Typography } from '../../components/Core'

import imgOval from '../../assets/image/svg/l1-cta-oval.svg'
import svgCurveGray from '../../assets/image/svg/l1-curve-cta-gray.svg'
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

const CTA = ({ text }) => {
  return (
    <>
      {/* <!-- CTA section --> */}
      <Section bg="dark" className="position-relative">
        <LeftCard
          data-aos="fade-right"
          data-aos-duration="750"
          data-aos-once="true"
        >
          <img
            src={imgOval.src}
            alt=""
            aria-hidden="true"
            className="img-fluid"
          />
        </LeftCard>
        <RightCard>
          {
            <img
              src={svgCurveGray.src}
              alt=""
              aria-hidden="true"
              className="img-fluid"
            />
          }
        </RightCard>
        <Container className="tw-relative">
          <Row className="justify-content-center text-center">
            <Col lg="6">
              <Box mb={5} className="text-center">
                <Typography.H2 className="tw-text-white">
                  {text.title}
                </Typography.H2>
              </Box>
              <Box>
                <a href={buildInternalUrl(text.cta.reference)}>
                  <Button>{text.cta.title}</Button>
                </a>
              </Box>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  )
}

export default CTA
