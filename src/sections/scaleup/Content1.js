import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box, Text } from "../../components/Core";
import { device } from "../../utils";

import imgHalf from "../../assets/image/jpeg/teamcoach.jpeg";

const ImageHalfContainer = styled(Box)`
  position: static;
  right: -260px;
  z-index: -1;
  height: 100%;

  .img-half {
    height: auto;
    @media ${device.lg} {
      height: 100%;
    }
  }
  @media ${device.lg} {
    position: absolute !important;
    height: 100%;
    right: -500px;
  }
  @media ${device.xl} {
    position: absolute !important;
    height: 100%;
    right: -370px;
  }
`;

const ImageBottom = styled(Box)`
  border: 10px solid transparent;
  box-shadow: ${({ theme }) => `0 52px 54px ${theme.colors.shadow}`};
  position: absolute;
  left: 15px;
  bottom: 10%;
  border-radius: 50%;
  overflow: hidden;
  max-width: 50%;

  @media ${device.sm} {
    bottom: 15%;
    left: 0;
  }
  @media ${device.md} {
    max-width: 50%;
  }
  @media ${device.lg} {
    top: 55%;
    left: -95px;
    bottom: auto;
    max-width: 100%;
  }
`;

const Content1 = () => (
  <>
    <div className="overflow-hidden">
      <Container>
        <Row>
          <Col
            md={8}
            lg={6}
            data-aos="fade-right"
            data-aos-duration="750"
            data-aos-once="true"
            data-aos-delay="500"
          >
            <Section py={[5, null, null, "190px"]}>
              <div className="omga-02__content-text section-title order-lg-1">
                <Title>Konsult betyder rådgivare</Title>
                <Text>
                  I dag har nästan ordet konsult börjat betyda resurs. Det
                  tycker vi är fel. En konsult kommer in med specifik kunskap
                  och ska vara med så kort tid som möjligt och tillföra så stort
                  värde som möjligt. Vi satsar mycket på lärande och väljer våra
                  uppdrag med omsorg för att kunna använda ordet konsult med
                  dess rätta betydelse.
                </Text>
                <a href="#pricing">
                  <Button mt={4}>Se våra priser</Button>
                </a>
              </div>
            </Section>
          </Col>
          <Col md={8} lg={6} className="position-relative mb-5 mb-lg-0">
            <ImageHalfContainer>
              <div className="h-100">
                <img src={imgHalf} alt="" className="img-half img-fluid" />
              </div>
            </ImageHalfContainer>
          </Col>
        </Row>
      </Container>
    </div>
  </>
);

export default Content1;
