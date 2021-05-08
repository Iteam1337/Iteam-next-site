import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import {
  Title,
  Button,
  Section,
  Box,
  Text,
  InputGroup,
} from "../../components/Core";

import { device } from "../../utils";

import imgL2HeroOval1 from "../../assets/image/png/l2-hero-oval1.png";
import imgL2HeroOval2 from "../../assets/image/png/l2-hero-oval2.png";
import imgL2HeroBg from "../../assets/image/jpeg/Jonna-Med-Team-Scrum-Board.jpg";

const SectionStyled = styled(Section)`
  background: 
      /* top, transparent black, faked with gradient */ 
      linear-gradient(
        rgba(255, 255, 255, 0.7), 
        rgba(255, 255, 255, 0.3)
      ),
      /* bottom, image */
      url(${imgL2HeroBg}) no-repeat;
  background-size: cover;
  background-position: bottom left;

  @media ${device.lg} {
    background-position: center;
  }
`;

const ImageTop = styled(Box)`
  border: 10px solid transparent;
  box-shadow: ${({ theme }) => `0 52px 54px ${theme.colors.shadow}`};
  position: absolute;
  top: -11%;
  left: -13%;
  border-radius: 50%;
  overflow: hidden;

  @media ${device.lg} {
    left: 2%;
  }
`;

const ImageBottom = styled(Box)`
  position: absolute;
  right: -13%;
  top: 54%;

  @media ${device.lg} {
    right: -23%;
  }
  @media ${device.xl} {
    right: -28%;
  }
`;

const Hero = () => {
  return (
    <>
      {/* <!-- Hero Area --> */}
      <SectionStyled>
        <div className="pt-5"></div>
        <Container
          css={`
          z-index: 10;
          margin: 15px;
        `}>
          <Row>
            
            <Col
              md="9"
              lg="7"
              className="order-lg-1"
              data-aos="fade-right"
              data-aos-duration="600"
              data-aos-delay="500"
              data-aos-once="true"
            >
              <Box py={[null, null, null, 4]} pr={5} pt={[4, null]}>
                <Title variant="hero">
                  MVP: När du vet vad du vill bygga.
                </Title>
                <Text mb={4}>
                  Det är svårt att komma igång med digitala projekt. Teamet ska funka, rätt teknikval och inte bygga för mycket innan användarna är med. Vi är experter!
                </Text>
              </Box>
            </Col>
          </Row>
        </Container>
      </SectionStyled>
    </>
  );
};

export default Hero;
