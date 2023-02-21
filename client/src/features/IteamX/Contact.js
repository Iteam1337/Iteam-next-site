import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

import imgShape from '../../assets/image/svg/contact-shape.svg'
import { Box } from '../../components/Core'
import { Container } from '../../components/Layout'
import { HubspotForm } from '../../features/HubspotForm'

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
      <Container className="tw-relative tw-z-10">
        <div id="sprintMeeting">
          <HubspotForm value="iteamX" title="Boka gratis rådgivningsmöte" />
        </div>
      </Container>
    </BoxStyled>
  </>
)
