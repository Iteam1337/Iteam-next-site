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

import imgHero from "../../assets/image/png/l7-hero-image.png";

const ImgRight = styled(Box)`
  @media ${device.sm} {
  }
`;

const Hero = () => {
  return (
    <>
      {/* <!-- Hero Area --> */}
      <Section bg="#FCFDFE" className="position-relative" pb="60px !important">
        <div className="pt-5"></div>
        <Container>
          <Row className="align-items-center position-relative">
            <Col
              md="5"
              xl="4"
              className="position-static pb-5"
              data-aos="fade-right"
              data-aos-duration="750"
              data-aos-delay="500"
              data-aos-once="true"
            >
              <ImgRight>
                <img src={imgHero} alt="" className="img-fluid" />
              </ImgRight>
            </Col>
            <Col md="7" xl="6" className="offset-xl-1">
              <div
                data-aos="fade-left"
                data-aos-duration="750"
                data-aos-delay="500"
                data-aos-once="true"
              >
                <Box>
                  <Title>
                    Travel the world &
                    <br className="d-none d-sm-block" />
                    meet new friends.
                  </Title>
                  <Box mb={4}>
                    <Text color="dark">
                      Create custom landing pages with Omega that convert more
                      visitors than any website. With lots of unique blocks, you
                      can easily build a page without coding.
                    </Text>
                  </Box>
                  <Box>
                    <form action="/">
                      <div className="position-relative">
                        <InputGroup
                          icon={<i className="icon icon-email-84" />}
                          placeholder="Email address"
                          css={`
                      
                       @media${device.sm}{
                        padding-right: 210px;
                      }
                      `}
                        />
                        <Button
                          css={`
                      margin-top: 1rem;
                      @media${device.sm}{
                        margin-top: 0;
                        position: absolute;
                        top: 50%;
                        right: 5px;
                        transform: translateY(-50%);
                      }

                      `}
                        >
                          I want to join
                        </Button>
                      </div>
                    </form>
                  </Box>
                </Box>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default Hero;
