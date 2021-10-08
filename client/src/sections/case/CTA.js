import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'

import { Title, Button, Section, Box, Text } from '../../components/Core'

import imgOval from '../../assets/image/png/l1-cta-oval.png'
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
          <img src={imgOval} alt="" className="img-fluid" />
        </LeftCard>
        <RightCard>
          <img src={svgCurve} alt="" className="img-fluid" />
        </RightCard>
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg="6">
              <Box mb={5} className="text-center">
                <Title color="light">{text.title}</Title>
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
