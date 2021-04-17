import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import {
  Title,
  Button,
  Section,
  Box,
  Text,
  Input,
  Select,
} from "../../components/Core";

import { device } from "../../utils";

import imgYellow from "../../assets/image/png/hero-shape-yellow.png";
import imgForm from "../../assets/image/png/hero-shape-combined.png";

const SectionStyled = styled(Section)``;

const ShapeYellow = styled(Box)`
  position: absolute;
  left: 0;
  transform: translateX(-63%) translateY(50%);
  bottom: 0;
  z-index: 1;
`;

const FormStyled = styled.form`
  position: relative;
  padding: 30px;
  box-shadow: ${({ theme }) => `0 42px 54px ${theme.colors.dark}`};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.light};
`;

const ShapeForm = styled(Box)`
  position: absolute;
  bottom: -58px;
  transform: scale(1.2);
  z-index: -1;
  @media ${device.md} {
    left: 13%;
  }
  @media ${device.lg} {
    bottom: 17px;
    transform: scale(1.5);
    z-index: -1;
    left: 0;
  }
  @media ${device.xl} {
    bottom: -58px;
    transform: scale(1.2);
    z-index: -1;
  }
`;

const companySize = [
  { value: "", label: "Company size", isDisabled: true },
  { value: "sm", label: "Small" },
  { value: "md", label: "Medium" },
  { value: "lg", label: "Large" },
];

const budget = [
  { value: "", label: "Yearly budget", isDisabled: true },
  { value: "40000", label: ">$40000" },
  { value: "30000", label: ">$30000" },
  { value: "20000", label: ">$20000" },
];

const Hero = () => {
  return (
    <>
      {/* <!-- Hero Area --> */}
      <SectionStyled bg="dark">
        <div className="pt-5"></div>
        <ShapeYellow className="d-none d-md-block">
          <img src={imgYellow} alt="" className="img-fluid" />
        </ShapeYellow>
        <Container
          className="position-relative"
          css={`
            z-index: 10;
          `}
        >
          <Row>
            <Col lg="4" xl="5" className="order-lg-2">
              <div className="position-relative w-100 h-100">
                <FormStyled>
                  <ShapeForm>
                    <img src={imgForm} alt="" className="img-fluid" />
                  </ShapeForm>
                  <Input
                    variant="animation"
                    type="email"
                    placeholder="Email address"
                    className="mb-4"
                  />
                  <Input
                    variant="animation"
                    type="text"
                    placeholder="Company name"
                    className="mb-4"
                  />
                  <Select name="size" options={companySize} className="mb-4" />
                  <Select name="budget" options={budget} className="mb-4" />
                  <Button borderRadius="10px" width="100%">
                    Get Beta Access
                  </Button>
                </FormStyled>
              </div>
            </Col>
            <Col
              lg="8"
              xl="7"
              data-aos="fade-right"
              data-aos-duration="750"
              data-aos-once="true"
              data-aos-delay="500"
            >
              <Box py={[null, null, null, 5]} pr={5} pt={[4, null]}>
                <Title variant="hero" color="light">
                  Build your next landing page
                  <br className="d-none d-sm-block" /> in 5 minutes!
                </Title>
                <Text mb={4} color="lightShade">
                  Create custom landing pages with Omega that convert more
                  visitors than any website. With lots of unique blocks, you can
                  easily build a page without coding.
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
