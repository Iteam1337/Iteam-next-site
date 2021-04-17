import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text, Button } from "../../components/Core";

import imgPhone from "../../assets/image/png/l7-mobile-2.png";

const SectionStyled = styled(Section)``;

const Content3 = () => {
  return (
    <>
      {/* <!-- Content3 section --> */}
      <SectionStyled>
        <Container>
          <Row className="align-items-center">
            <Col lg="6" className="mb-4 mb-lg-0 pl-lg-5 order-lg-2">
              <div
                data-aos="fade-right"
                data-aos-duration="750"
                data-aos-delay="500"
                data-aos-once="true"
              >
                <img src={imgPhone} alt="" className="img-fluid" />
              </div>
            </Col>
            <Col lg="6" md={9} className="order-lg-1">
              <div>
                <Title>
                  Improving your{" "}
                  <br className="d-none d-sm-block d-md-none d-xl-block" /> all
                  travel experience.
                </Title>
                <Text>
                  Create custom landing pages with Omega that converts more
                  visitors than any website. With lots of unique blocks, you can
                  easily build a page without coding.
                </Text>
                <Box mt={4}>
                  <Button>Get this app</Button>
                </Box>
              </div>
            </Col>
          </Row>
        </Container>
      </SectionStyled>
    </>
  );
};

export default Content3;
