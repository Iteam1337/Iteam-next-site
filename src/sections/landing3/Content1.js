import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text, Badge } from "../../components/Core";

import imgShape from "../../assets/image/png/content1-img-small.png";
import imgContent from "../../assets/image/png/content1-img.png";

const SectionStyled = styled(Section)`
  border-top: 1px solid #242427;
`;

const ShapeBox = styled(Box)`
  position: absolute;
  top: -70px;
  left: -20px;
  z-index: 2;
`;

const Content1 = () => (
  <>
    <SectionStyled bg="dark">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col lg="6" className="my-5 my-lg-0">
            <div className="">
              <Box
                className=" "
                data-aos="zoom-out"
                data-aos-duration="750"
                data-aos-once="true"
                data-aos-delay="500"
              >
                <img src={imgContent} alt="" className="img-fluid" />
              </Box>
              <ShapeBox
                className=""
                data-aos="zoom-out"
                data-aos-duration="750"
                data-aos-once="true"
                data-aos-delay="500"
              >
                <img
                  src={imgShape}
                  alt=""
                  className="img-fluid"
                  css={`
                    opacity: 0.5;
                  `}
                />
              </ShapeBox>
            </div>
          </Col>
          <Col
            md="10"
            lg="6"
            className="mt-3 mt-lg-0"
            data-aos="fade-right"
            data-aos-duration="750"
            data-aos-once="true"
          >
            <Badge bg="secondary">New Feature Added!</Badge>
            <div className="mt-4">
              <Title color="light">
                Drag and drop <br className="d-none d-md-block" /> every
                elements
              </Title>
              <Text color="lightShade">
                Create custom landing pages with Omega that convert more
                visitors than any website. With lots of unique blocks, you can
                easily build a page without coding.
              </Text>
            </div>
          </Col>
        </Row>
      </Container>
    </SectionStyled>
  </>
);

export default Content1;
