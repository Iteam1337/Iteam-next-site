import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box, Text } from "../../components/Core";
import { device } from "../../utils";
import imgContentMobile from "../../assets/image/png/content-img1--mobile.webp";

const ShapeCard = styled(Box)`
  width: 305px;
  box-shadow: 0 32px 34px rgba(28, 27, 32, 0.2);
  position: absolute;
  top: 52%;
  left: 0%;
  transform: scale(0.85);
  @media ${device.sm} {
    left: 0;
    transform: scale(1);
  }
  @media ${device.md} {
    left: 0%;
  }
`;

const Content1 = () => (
  <>
    {/* <!-- Content section 1 --> */}
    <Section>
      <Container>
        <Row className="align-items-center">
          <Col md="12" lg="6" className="order-lg-2">
            <div className="position-relative pl-lg-5">
              <div
                className="pl-lg-4 text-center text-lg-right"
                data-aos="fade-down"
                data-aos-duration="750"
                data-aos-once="true"
              >
                <img src={imgContentMobile} alt="" className="img-fluid" />
              </div>

              <ShapeCard
                bg="warning"
                p="18px"
                borderRadius={8}
                className="d-flex align-items-start"
                data-aos="fade-right"
                data-aos-duration="750"
                data-aos-once="true"
                data-aos-delay="500"
              >
                <Box
                  width="30px"
                  minWidth="30px"
                  height="30px"
                  minHeight="30px"
                  bg="secondary"
                  color="light"
                  borderRadius="50%"
                  className="d-flex align-items-center justify-content-center"
                  mr={3}
                  mt={2}
                >
                  <i className="fas fa-bell"></i>
                </Box>

                <Box pr="40px">
                  <Text fontSize={1} lineHeight="24px" opacity={0.7} mb={0}>
                    Next meeting on 30 mins
                  </Text>
                  <Title variant="card" fontWeight={300} mb={0}>
                    Project Discussion with John
                  </Title>
                </Box>
              </ShapeCard>
            </div>
          </Col>
          <Col lg="6" className="order-lg-1 mt-5 mt-lg-0">
            <div
              data-aos="fade-right"
              data-aos-duration="750"
              data-aos-once="true"
            >
              <Box>
                <Title>Save time on development.</Title>
                <Text mb={4}>
                  Create custom landing pages with Omega that converts more
                  visitors than any website. With lots of unique blocks, you can
                  easily build a page without coding.
                </Text>

                <Button mt={3}>Get Started</Button>
              </Box>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default Content1;
