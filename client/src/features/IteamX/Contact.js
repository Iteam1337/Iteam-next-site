import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'

import { Box } from '../../components/Core'
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
    background: #5454d4;
    z-index: 1;
  }
`

export const Contact = () => (
  <>
    <BoxStyled
      bg="dark"
      pt={[0, null, null, 4]}
      pb={6}
      className="position-relative"
    >
      <div className="tw-absolute tw-bottom-[48%] tw-left-[-5%] tw-w-[150%] lg:tw-bottom-[47%]">
        <Image
          src={imgShape.src}
          alt=""
          aria-hidden="true"
          width={2007}
          height={91}
          layout="responsive"
        />
      </div>
      <Container
        css={`
          position: relative;
          z-index: 10;
        `}
      >
        <Row className="justify-content-center">
          <Col lg="10" id="sprintMeeting">
            <HubspotForm value="iteamX" title="Boka gratis rådgivningsmöte" />
          </Col>
        </Row>
      </Container>
    </BoxStyled>
  </>
)
