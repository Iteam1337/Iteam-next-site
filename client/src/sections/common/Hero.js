import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"

import { Title, Section, Text } from "../../components/Core"
import { hexToRGBA } from "../../utils/helpers"

const SectionStyled = styled(Section)`
  background-image: ${({ color }) => `linear-gradient(
    147deg, rgba(${hexToRGBA(color)}, 0.17) 0%,
    rgba(84, 84, 212, 0) 100%
  )`};
`
const MediaType = ({ mediaType, children }) => {
  switch (mediaType.type) {
    case "color":
      return (
        <SectionStyled
          pt={["120px!important", null, "190px!important"]}
          pb={["50px!important", null, "180px!important"]}
          color={mediaType.color}
        >
          {children}
        </SectionStyled>
      )

    default:
      break
  }
}
const Hero = ({ content }) => {
  const { title, subtitle, cta, mediaType } = content

  return (
    <>
      <MediaType mediaType={mediaType}>
        <Container
          css={`
            z-index: 10;
          `}
        >
          <Row>
            <Col lg="6">
              <div>
                <Title variant="hero">{title}</Title>
                <Text>{subtitle}</Text>
              </div>
            </Col>
          </Row>
        </Container>
      </MediaType>
    </>
  )
}
export default Hero
