import React from "react";
import styled from "styled-components";
import { saturate, lighten } from "polished";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box, Text } from "../../components/Core";

import { device } from "../../utils";
import imgHeroTab from "../../assets/image/png/Illustrationer-Digitalt Vit BG_M.png";

const SectionStyled = styled(Section)`
  background-image: ${({ theme }) => `radial-gradient(
    circle 961px at 49.94% 0%,
    ${lighten(0.114, saturate(0.0911, theme.colors.ash))} 0%,
    ${theme.colors.ash} 100%
  );`};
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
        <Container>
          <Row className="justify-content-center align-items-center position-relative">
            <Col md="5" className="order-md-2 position-static">
              <ImgRight>
                <img
                  src={imgHeroTab}
                  alt=""
                  className="img-fluid"
                  data-aos="fade-left"
                  data-aos-duration="750"
                  data-aos-delay="1000"
                  data-aos-once="true"
                />
              </ImgRight>
            </Col>
            <Col md="7" className="order-md-1">
              <div
                data-aos="fade-right"
                data-aos-duration="750"
                data-aos-delay="500"
                data-aos-once="true"
              >
                <Box py={[null, null, null, 5]} pr={5} pt={[4, null]}>
                  <Title variant="hero" color="light">
                    We move fast <br className="d-none d-sm-block" />
                    and fix things.
                  </Title>
                  <Text mb={4} color="light" opacity={0.7}>
                    Vi digitaliserar företag och organisationer genom en enkel och välbeprövad metod som bygger på
                    en användarstyrd process med öppen källkod, teamwork och samarbete.
                  </Text>
                  <div className="d-flex flex-column align-items-start pt-3">
                    <Button mb={2}>Boka ett team och börja bygga</Button>
                    <Text
                      variant="small"
                      fontSize={"14px"}
                      color="light"
                      opacity={0.7}
                    >
                      Vi har enkla avtal utan bindningstid
                    </Text>
                  </div>
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
