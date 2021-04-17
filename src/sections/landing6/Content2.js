import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text } from "../../components/Core";

import imgC1 from "../../assets/image/jpeg/l7-content2-image-1.jpg";
import imgC2 from "../../assets/image/jpeg/l7-content2-image-2.jpg";
import imgC3 from "../../assets/image/jpeg/l7-content2-image-3.jpg";
import imgC4 from "../../assets/image/jpeg/l7-content2-image-4.jpg";

const SectionStyled = styled(Section)``;

const SingleImage = styled(Box)`
  display: flex;
  flex-direction: column;
  img {
    padding-bottom: 15px;
    padding-right: 15px;
    border-radius: 8px;
  }
`;

const Content2 = () => {
  return (
    <>
      {/* <!-- Content2 section --> */}
      <SectionStyled pt="0!important">
        <Container>
          <Row className="align-items-center">
            <Col lg="6" className="mb-4 mb-lg-0">
              <Box className="d-flex">
                <SingleImage>
                  <img
                    src={imgC1}
                    alt=""
                    className="img-fluid"
                    data-aos="zoom-in"
                    data-aos-duration="750"
                    data-aos-once="true"
                  />
                  <img
                    src={imgC2}
                    alt=""
                    className="img-fluid"
                    data-aos="zoom-in"
                    data-aos-duration="750"
                    data-aos-delay="500"
                    data-aos-once="true"
                  />
                </SingleImage>
                <SingleImage>
                  <img
                    src={imgC3}
                    alt=""
                    className="img-fluid"
                    data-aos="zoom-in"
                    data-aos-duration="750"
                    data-aos-delay="1000"
                    data-aos-once="true"
                  />
                  <img
                    src={imgC4}
                    alt=""
                    className="img-fluid"
                    data-aos="zoom-in"
                    data-aos-duration="750"
                    data-aos-delay="1500"
                    data-aos-once="true"
                  />
                </SingleImage>
              </Box>
            </Col>
            <Col lg="6" md={9}>
              <div>
                <Title>
                  See the world &amp;{" "}
                  <br className="d-none d-sm-block d-md-none d-xl-block" />
                  spend less always.
                </Title>
                <Text>
                  Create custom landing pages with Omega that converts more
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
};

export default Content2;
