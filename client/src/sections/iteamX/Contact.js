import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'

import { Box } from '../../components/Core'

import { device } from '../../utils'

import imgShape from '../../assets/image/svg/contact-shape.svg'
import HubspotForm from '../../components/HubspotForm'

const BoxStyled = styled(Box)`
  &::after {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 49%;
    content: '';
    width: 100%;
    background: ${({ theme }) => theme.colors.secondary};
    z-index: 1;
  }
`

const Shape = styled(Box)`
  position: absolute;
  width: 150%;
  bottom: 48%;
  left: -5%;

  @media ${device.lg} {
    bottom: 47%;
  }
`

const Contact = () => (
  <>
    <BoxStyled
      bg="dark"
      pt={[0, null, null, 4]}
      pb={6}
      className="position-relative"
    >
      <Shape>
        <img src={imgShape} alt="" className="w-100 img-fluid" />
      </Shape>
      <Container
        css={`
          position: relative;
          z-index: 10;
        `}
      >
        <Row className="justify-content-center">
          <Col
            lg="10"
            id="sprintMeeting"
          >
            <HubspotForm value="iteamX" title="Boka gratis rådgivningsmöte" />
          </Col>
        </Row>
      </Container>
    </BoxStyled>
  </>
)

export default Contact
