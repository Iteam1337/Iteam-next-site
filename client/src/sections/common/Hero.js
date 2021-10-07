import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"

import { Title, Section, Text } from "../../components/Core"
import { hexToRGBA } from "../../utils/helpers"
import { urlFor } from '../../utils/helpers'

const SectionStyled = styled(Section)`
  background-image: ${({ color }) =>
    color
      ? `linear-gradient(
    147deg, rgba(${hexToRGBA(color)}, 0.17) 0%,
    rgba(84, 84, 212, 0) 100% 
  )`
      : "linear-gradient(147deg, rgba(141, 141, 236, 0.17) 0%, rgba(84, 84, 212, 0) 100%)"};
`

const SectionStyledImage = styled(Section)`
  background: ${(props) => `linear-gradient(to left, rgba(0, 0, 0, 0.127), rgba(0, 0, 0, 0.8)),
    url(${urlFor(props.image)}) no-repeat center`};
  background-size: cover;
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
    case "image":
      return (
        <SectionStyledImage
          pt={["120px!important", null, "190px!important"]}
          pb={["50px!important", null, "180px!important"]}
          bg="dark"
          image={mediaType.image.asset._ref}
        >
          {children}
        </SectionStyledImage>
      )
    default:
      return (
        <SectionStyled
          pt={["120px!important", null, "190px!important"]}
          pb={["50px!important", null, "180px!important"]}
        >
          {children}
        </SectionStyled>
      )
  }
}

const Hero = ({ content }) => {
  const { title, subtitle, cta, mediaType = { type: "" } } = content
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
                <Title variant="hero" color={mediaType.type === 'image' ? 'light' : 'dark'}>{title}</Title>
                <Text color={mediaType.type === 'image' ? 'light' : 'dark'}>{subtitle}</Text>
              </div>
            </Col>
          </Row>
        </Container>
      </MediaType>
    </>
  )
}
export default Hero
