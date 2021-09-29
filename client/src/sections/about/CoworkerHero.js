import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"

import { Title, Section, Text } from "../../components/Core"
import { urlFor } from "../../utils/helpers"

const SectionStyled = styled(Section)`
  background: ${({ heroImage }) =>
    heroImage
      ? `linear-gradient(
      to right,
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.1)
    ),
    linear-gradient(
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.1)
    ),
    /* bottom, image */ url(${heroImage}) no-repeat center 20%`
      : "linear-gradient(147deg, rgba(141, 141, 236, 0.17) 0%, rgba(84, 84, 212, 0) 100%)"};
  background-position: center;
  background-size: cover;
`

const Hero = ({ title, children, heroImage }) => (
  <>
    <SectionStyled
      pt={["120px!important", null, "190px!important"]}
      pb={["50px!important", null, "180px!important"]}
      bg="dark"
      heroImage={heroImage && urlFor(heroImage.asset._ref)}
    >
      <Container
        css={`
          z-index: 10;
        `}
      >
        <Row>
          <Col lg="6">
            <div>
              <Title color="dark" variant="hero">
                {title}
              </Title>
              <Text color="dark">{children}</Text>
            </div>
          </Col>
        </Row>
      </Container>
    </SectionStyled>
  </>
)

export default Hero
