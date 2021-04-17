import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Text } from "../../components/Core";

import imgContent from "../../assets/image/png/content3-img.png";

const SectionStyled = styled(Section)`
  border-bottom: 1px solid #242427;
`;

const Content3 = () => (
  <>
    <SectionStyled bg="dark">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col lg="5" className="offset-lg-1 order-lg-2 mb-5 mb-lg-0">
            <div>
              <div
                data-aos="zoom-out"
                data-aos-duration="750"
                data-aos-once="true"
                data-aos-delay="500"
              >
                <img src={imgContent} alt="" className="img-fluid" />
              </div>
            </div>
          </Col>
          <Col
            md="10"
            lg="6"
            className="order-lg-1"
            data-aos="fade-right"
            data-aos-duration="750"
            data-aos-once="true"
          >
            <div>
              <Title color="light">
                50k+ users are using this landing page.
              </Title>
              <Text color="lightShade">
                Create custom landing pages with Omega that convert more
                visitors than any website. With lots of unique blocks, you can
                easily build a page without coding.
              </Text>
              <div className="mt-5">
                <Button>Get Beta Access</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </SectionStyled>
  </>
);

export default Content3;
