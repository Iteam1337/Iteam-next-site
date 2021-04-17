import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box, Text } from "../../components/Core";
import { device } from "../../utils";

import imgRounded from "../../assets/image/png/l2-content1-oval.png";
import imgHalf from "../../assets/image/jpeg/l2-content1-bg.jpg";

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
                <Title>
                  50k+ users are <br className="d-none d-sm-block" />
                  using landing page.
                </Title>
                <Text>
                  Create custom landing pages with Omega that converts more
                  visitors than any website. With lots of unique blocks, you can
                  easily build a page without coding.
                </Text>
                <Button mt={4}>Get Started</Button>
              </div>
            </Section>
          </Col>
          <Col md={8} lg={6} className="position-relative mb-5 mb-lg-0">
            <ImageHalfContainer>
              <div className="h-100">
                <img src={imgHalf} alt="" className="img-half img-fluid" />
              </div>
              <ImageBottom
                bg="light"
                data-aos="fade-up"
                data-aos-duration="750"
                data-aos-once="true"
                data-aos-delay="500"
              >
                <img src={imgRounded} alt="" className="img-fluid" />
              </ImageBottom>
            </ImageHalfContainer>
          </Col>
        </Row>
      </Container>
    </div>
  </>
);

export default Content1;
