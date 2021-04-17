import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { rgba } from "polished";
import styled from "styled-components";

import { Title, Section, Box, Text } from "../../components/Core";
import { device } from "../../utils";

import svgCurve from "../../assets/image/svg/l1-curve-content2.svg";
import imgContentMobile from "../../assets/image/png/content-img2--mobile.webp";

const ShapeTop = styled(Box)`
  position: absolute;
  top: 0;
  left: -150px;
  img {
    min-width: 100%;
  }
`;

const ShapeCard = styled(Box)`
  width: 305px;
  box-shadow: ${({ theme }) => `0 32px 34px ${theme.colors.border}`};
  position: absolute;
  top: 20%;
  left: 0;
  z-index: 2;
  transform: scale(0.85);
  @media ${device.sm} {
    transform: scale(1);
    left: -14%;
  }
`;

const ContentCard = ({
  color = "primary",
  className,
  iconName,
  title,
  children,
  ...rest
}) => (
  <Box
    width={360}
    bg="light"
    border="1px solid"
    borderColor="border"
    p="20px"
    borderRadius={10}
    className={`d-flex ${className}`}
    {...rest}
    css={`
      min-width: 100%;
      width: 100%;
      @media ${device.sm} {
        width: 360px;
        min-width: 360px;
      }
    `}
  >
    <Box
      size={55}
      minWidth={55}
      borderRadius="50%"
      color={color}
      fontSize="28px"
      className="d-flex justify-content-center align-items-center"
      css={`
        background-color: ${({ theme, color }) =>
          rgba(theme.colors[color], 0.1)};
      `}
      mr={3}
    >
      <i className={`icon ${iconName}`}></i>
    </Box>
    <div>
      <Title variant="card" mb={0}>
        {title}
      </Title>

      <Text>{children}</Text>
    </div>
  </Box>
);

const Content2 = () => (
  <>
    {/* <!-- Content section 2 --> */}
    <Section bg="#f7f7fb" className="position-relative">
      <ShapeTop>
        <img src={svgCurve} alt="" className="img-fluid" />
      </ShapeTop>
      <Container>
        <Row className="align-items-center">
          <Col lg="5" md="9" sm="10" className="mb-5 mb-lg-0">
            <div className="position-relative">
              <div
                data-aos="fade-down"
                data-aos-duration="750"
                data-aos-once="true"
              >
                <img src={imgContentMobile} alt="" className="img-fluid" />
              </div>
              {/* <ShapeCard
                bg="primary"
                p="18px"
                borderRadius={8}
                className="d-flex align-items-center"
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
                >
                  <i className="fas fa-bell"></i>
                </Box>

                <div>
                  <Text color="light" fontSize={1} opacity={0.7} mb={2}>
                    Deadline: Oct 29, 2020
                  </Text>
                  <Title variant="card" color="light" fontWeight={300}>
                    You’ve got a new project from David!
                  </Title>
                </div>
              </ShapeCard> */}
              <ShapeCard
                bg="primary"
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
                  <Text
                    color="light"
                    lineHeight="24px"
                    fontSize={1}
                    opacity={0.7}
                    mb={0}
                  >
                    Deadline: Oct 29, 2020
                  </Text>
                  <Title variant="card" color="light" fontWeight={300} mb={0}>
                    You’ve got a new project from David!
                  </Title>
                </Box>
              </ShapeCard>
            </div>
          </Col>
          <Col lg="7">
            <div
              data-aos="fade-left"
              data-aos-duration="750"
              data-aos-once="true"
            >
              <div className="content-text pl-lg--50">
                <div className="section-title">
                  <Title>
                    It’s everything you’ll <br className="d-none d-sm-block" />{" "}
                    ever need.
                  </Title>
                  <Text mb={4}>
                    Create custom landing pages with Omega that converts more
                    visitors than any website. With lots of unique blocks, you
                    can easily build a page without coding.
                  </Text>
                </div>
                <div className="mt-5">
                  <ContentCard
                    title="50+ Unique Design Blocks"
                    color="primary"
                    iconName="icon-cards-2"
                    mb={3}
                  >
                    with Carefully Coded
                  </ContentCard>
                  <ContentCard
                    title="Mobile First Design
"
                    color="secondary"
                    iconName="icon-phone-charging-3-2"
                  >
                    on Every Devices
                  </ContentCard>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default Content2;
