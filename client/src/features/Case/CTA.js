import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'

import { Section, Box, Typography, CTALink } from '../../components/Core'
import imgOval from '../../assets/image/svg/l1-cta-oval.svg'
import svgCurveGray from '../../assets/image/svg/l1-curve-cta-gray.svg'
import { buildInternalUrl } from '../../utils/helpers'
import { Container } from '../../components/Layout'

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

export const CTA = ({ text }) => {
  return (
    <>
      {/* <!-- CTA section --> */}
      <Section bg="dark" className="position-relative">
        <LeftCard
          data-aos="fade-right"
          data-aos-duration="750"
          data-aos-once="true"
        >
          <Image src={imgOval} alt="" aria-hidden="true" />
        </LeftCard>
        <RightCard>
          {<Image src={svgCurveGray} alt="" aria-hidden="true" />}
        </RightCard>
        <Container className="tw-relative">
          <Row className="justify-content-center text-center">
            <Col lg="6">
              <Box className="text-center">
                <Typography.H2 className="tw-text-white">
                  {text.title}
                </Typography.H2>
                <CTALink
                  href={buildInternalUrl(text.cta.reference)}
                  text={text.cta.title}
                  className="tw-mt-3"
                />
              </Box>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  )
}
