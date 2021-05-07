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

import imgCtaBG from "../../assets/image/jpeg/Fanny-Flowers-Lowres.jpg";
import imgOval from "../../assets/image/png/l2-cta-oval.png";

const ImageBottom = styled(Box)`
  border: 10px solid transparent;
  box-shadow: ${({ theme }) => `0 52px 54px ${theme.colors.shadow}`};
  position: absolute;
  top: 21%;
  right: 0;
  z-index: 2;
  border-radius: 500px;
  max-width: 50%;
  overflow: hidden;

  @media ${device.md} {
    max-width: 100%;
    right: 15%;
  }
`;

const CTA = () => (
  <>
    <Section bg="ash">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} md={10} className="">
            <div className="position-relative mb-5">
              <div
                className="img-1"
                data-aos="fade-down"
                data-aos-duration="750"
                data-aos-once="true"
              >
                <img
                  src={imgCtaBG}
                  alt=""
                  className="img-fluid"
                  css={`
                    border-radius: 10px;
                  `}
                />
              </div>
            </div>
          </Col>
          <Col
            lg={6}
            md={9}
            className=""
            data-aos="fade-right"
            data-aos-duration="750"
            data-aos-once="true"
          >
            <div className="">
              <Title color="light">Get started now</Title>
              <Text color="light" opacity={0.7} mb={4}>
                Create custom landing pages with Omega that converts more
                visitors than any website. With lots of unique blocks, you can
                easily build a page without coding.
              </Text>
              <div className="pr-sm-5">
                <InputGroup
                  icon={<i className="icon icon-email-84" />}
                  placeholder="Email address"
                  className="text-center"
                  pr="4.125rem"
                />
                <Button width="100%" mt={3}>
                  Get Started
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default CTA;
