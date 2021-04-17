import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text } from "../../components/Core";

import imgContent1 from "../../assets/image/jpeg/easy-image-1.jpg";
import imgContent2 from "../../assets/image/jpeg/easy-image-2.jpg";

const ContentImg = styled(Box)`
  box-shadow: ${({ theme }) => `0 42px 54px ${theme.colors.dark}`};
  border-radius: 10px;
  overflow: hidden;
  max-height: 515px;
`;

const Content2 = () => (
  <>
    <Section bg="#1e1e20;">
      <Container>
        <Row className="justify-content-center">
          <Col xl="7" lg="10" md="9">
            <div className="text-center">
              <Title color="light">Everything is easy</Title>
              <Text color="lightShade">
                Create custom landing pages with Omega that converts more
                visitors than any website. With lots of unique blocks, you can
                easily build a page without coding.
              </Text>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg="4" sm="5" className="mb-4 ">
            <ContentImg>
              <img src={imgContent1} alt="" className="img-fluid" />
            </ContentImg>
          </Col>
          <Col lg="8" sm="7" className="mb-4">
            <ContentImg>
              <img src={imgContent2} alt="" className="img-fluid" />
            </ContentImg>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default Content2;
