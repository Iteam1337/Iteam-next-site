import React from "react";
import styled from "styled-components";
import { saturate, lighten } from "polished";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box, Text } from "../../components/Core";

import { device } from "../../utils";
import imgHeroTab from "../../assets/image/jpeg/Radu-Lowres.jpg";

const SectionStyled = styled(Section)`
  background: 
    /* top, transparent black, faked with gradient */ 
    linear-gradient(
      rgba(0, 0, 0, 0.7), 
      rgba(0, 0, 0, 0.3)
    ),
    /* bottom, image */
    url(${imgHeroTab}) no-repeat center 20% fixed;
  background-size: cover; 
`;

const ImgRight = styled(Box)`
  position: relative;
  left: 50px;
  width: 300px;
  @media ${device.md} {
    position: absolute;
    top: 0;
    max-width: 40%;
    min-width: 30%;
    right: 0;
    left: auto;
    transform: translateX(25%);
  }
`;

const Hero = () => {
  return (
    <>
      {/* <!-- Hero Area --> */}
      <SectionStyled className="position-relative">
        <div className="pt-5"></div>
        <Container
          css={`
            margin: 0px;
          `}
        >
          <Row className="justify-content-center align-items-center position-relative">
            <Col className="order-md-1">
              <div
                data-aos="fade-right"
                data-aos-duration="300"
                data-aos-delay="100"
                data-aos-once="true"
              >
                <Box py={[null, null, null, 5]} pr={5} pt={[4, null]}>
                  <Title variant="hero" color="light">
                    Move fast,<br/>{" "}
                    Fix things.
                  </Title>
                  <Text mb={4} color="light">
                    Vi digitaliserar företag och organisationer genom en enkel och välbeprövad och användarstyrd process med öppen källkod, teamwork och effektivitet.
                  </Text>
                </Box>
              </div>
            </Col>
          </Row>
        </Container>
      </SectionStyled>
    </>
  );
};

export default Hero;
