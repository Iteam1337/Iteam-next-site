import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box, Text } from "../../components/Core";
import { device } from "../../utils";

import imgDesignSprint from "../../assets/image/jpeg/design-sprint.jpeg";

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

const ImageRight = styled(Box)`
  img {
    box-shadow: ${({ theme }) => `0 52px 54px ${theme.colors.shadow}`};
    border-radius: 10px;
  }
`;
const Content1 = () => (
  <>
    <div className="overflow-hidden">
      <Container>
        <Row>
          {/* <Col lg="6" md="10" className="order-lg-2 mb-4">
            <div className="position-relative text-lg-right">
              <ImageRight
                className=""
                data-aos="fade-down"
                data-aos-duration="750"
                data-aos-once="true"
              >
                <img src={imgDesignSprint} alt="" className="img-fluid" />
              </ImageRight>
            </div>
          </Col> */}
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
                <Title>Agil Coach </Title>
                <Text>
                  Tillsammans med er bygger vi högpresterande, välmående och
                  autonoma team och organisationer.
                  <ul style={{ listStyle: "disc", marginLeft: "3rem" }}>
                    <li>Agila principer, ramverk och metoder</li>
                    <li>Teamdynamik</li>
                    <li>Design och facilitering av workshops</li>
                    <li>Stöd åt produktägare och scrum masters</li>
                    <li> Coachning i agilt ledarskap</li>
                    <li> SAFe (certifierade) och agil skalning</li>
                  </ul>
                </Text>
                {/* <a href="#book">
                  <Button mt={4}>Kom igång</Button>
                </a> */}
              </div>
            </Section>
          </Col>
        </Row>
      </Container>
    </div>
  </>
);

export default Content1;
