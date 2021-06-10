import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box } from "../../components/Core";

import { device } from "../../utils";
// import imgL2HeroBg from "../../assets/image/jpeg/Hans-Radu-Martin-Office-Lowres.jpg";
import imgL2HeroBg from "../../assets/image/jpeg/scale-up-hero.jpg";

const SectionStyled = styled(Section)`
  /* top, transparent black, faked with gradient */
  background: linear-gradient(
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
    /* bottom, image */ url(${imgL2HeroBg}) no-repeat center 20%;
  background-size: cover;
  padding-top: 128px;

  @media ${device.lg} {
    background-position: center;
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
            margin-top: 20px;
          `}
        >
          <Row>
            <Col
              md="9"
              lg="7"
              className="order-lg-1"
              data-aos="fade-right"
              data-aos-duration="300"
              data-aos-delay="500"
              data-aos-once="true"
            >
              {" "}
              Iteam Scale-Up – När ditt team behöver extra kraft
              <Box py={[null, null, null, 4]} pr={5} pt={[4, null]}>
                <Title variant="hero">Ibland behöver man förstärkning</Title>
                {/* <Text mb={4}>
                Oavsett om du har ett problem du behöver lösa eller redan har en idé så hjälper vi dig. Vi börjar där du står och utgår ifrån det helt enkelt. Ibland gör vi en <a href="/designsprint">Designsprint</a> för att kickstarta samarbetet. Andra gånger gör vi research om användarbehov för att försäkra oss om att vi löser rätt problem.
                </Text> */}
              </Box>
            </Col>
          </Row>
        </Container>
      </SectionStyled>
    </>
  );
};

export default Hero;
