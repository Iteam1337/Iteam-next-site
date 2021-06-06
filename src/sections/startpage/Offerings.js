import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { rgba } from "polished";
import styled from "styled-components";

import { Title, Section, Box, Text } from "../../components/Core";
import { device } from "../../utils";

import svgCurve from "../../assets/image/svg/l1-curve-content2.svg";
import imgContentMobile from "../../assets/image/jpeg/Christian-Hopper-Lowres.jpg";
import Link from 'next/link'

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
  href,
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
    className={`d-flex ${className}`}
    {...rest}
    css={`
      min-width: 100%;
      width: 100%;
      @media ${device.sm} {
        width: 360px;
        min-width: 360px;
      }
      & a {
        text-decoration: none;
      }
      &:hover {
        box-shadow: 0 52px 54px rgba(25, 25, 27, 0.3);
        border-radius: 10px;
      }
      &:hover i {
        transform: translateX(10px);
        opacity: 1;
      }
    `}
  >
    <div>
      <a href={href}>
        <Title variant="card" mb={0}>
          {title}
        </Title>

        <Text>{children}</Text>
      </a>
    </div>
  </Box>
);

const Offerings = () => (
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
                bg="secondary"
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
                  color="dark"
                  borderRadius="50%"
                  className="d-flex align-items-center justify-content-center"
                  mr={3}
                  mt={2}
                >
                  <i className="fas fa-bell"></i>
                </Box>

                <Box pr="40px">
                  <Text
                    color="dark"
                    lineHeight="24px"
                    fontSize={1}
                    opacity={0.7}
                    mb={0}
                  >
                    {new Date().toLocaleTimeString()}
                  </Text>
                  <Title variant="card" color="dark" fontWeight={300} mb={0}>
                    Vi behöver en app innan jul, har ni ett team?
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
                    Vi erbjuder dig hjälp i alla stadier av ett projekt
                  </Title>
                </div>
                <div className="mt-5">
                  <ContentCard
                    title="Iteam X"
                    color="primary"
                    href="/iteamX"
                    mb={3}
                  >
                    När du inte vet vad som är möjligt

                  </ContentCard>
                  <ContentCard
                    title="Iteam MVP"
                    color="secondary"
                    href="/mvp"
                    mb={3}
                  >
                    När du vill bygga nytt
                  </ContentCard>
                  <ContentCard
                    title="Iteam Scale-up"
                    color="secondary"
                    href="/scaleup"
                    mb={3}
                  >
                    Öka tempot/utbilda dina team
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

export default Offerings;
