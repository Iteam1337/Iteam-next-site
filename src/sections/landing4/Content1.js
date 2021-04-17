import React from "react";
import styled from "styled-components";
import { rgba } from "polished";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Text } from "../../components/Core";
import { device } from "../../utils";
import imgContent from "../../assets/image/png/l5-content-image.png";

const ImgContainer = styled.div`
  margin-top: 50px;
  @media ${device.lg} {
    margin-top: 0px;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(55%, -50%);
  }
  @media ${device.xl} {
    transform: translate(40%, -50%);
  }
  @media (min-width: 1400px) {
    transform: translate(15%, -50%);
  }
`;

const ULStyled = styled.ul`
  list-style: none;
  margin: 0;
  padding-top: 15px;
  padding-left: 0;

  @media ${device.sm} {
    padding-top: 35px;
    display: flex;
    flex-wrap: wrap;
  }
  @media ${device.lg} {
    justify-content: space-between;
  }

  li {
    &:nth-child(odd) {
      @media ${device.sm} {
        margin-right: 40px;
      }
    }
    color: #19191b;
    font-size: 21px;
    font-weight: 500;
    letter-spacing: -0.66px;
    line-height: 50px;
    display: flex;
    margin-bottom: 5px;

    &:before {
      content: "\f00c";
      font-family: "Font Awesome 5 Free";
      font-weight: 900;
      display: inline-block;
      font-size: 13px;
      width: 30px;
      height: 30px;
      background-color: ${({ theme }) => rgba(theme.colors.secondary, 0.1)};
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 500px;
      color: ${({ theme }) => theme.colors.secondary};
      position: relative;
      top: 9px;
      margin-right: 13px;
    }
  }
`;

const Content1 = () => (
  <>
    {/* <!-- Content section 1 --> */}
    <Section
      bg="#F7F7FB"
      className="position-relative"
      py={["50px", null, "130px", null, "230px"]}
    >
      <Container>
        <Row className="align-items-center">
          <Col lg="6" className=" position-static order-lg-2">
            <ImgContainer className=" pl-lg-5">
              <img
                src={imgContent}
                alt=""
                className="img-fluid"
                data-aos="fade-left"
                data-aos-duration="750"
                data-aos-once="true"
                css={`
                  box-shadow: ${({ theme }) =>
                    `0 12px 84px ${theme.colors.shadow}`};
                  border-radius: 10px;
                `}
              />
            </ImgContainer>
          </Col>
          <Col lg="6" className="order-lg-1 mt-5 mt-lg-0">
            <div
              data-aos="fade-right"
              data-aos-duration="750"
              data-aos-once="true"
            >
              <div>
                <Title>
                  Make beautiful{" "}
                  <br className="d-none d-sm-block d-md-none d-lg-block" />{" "}
                  landing pages easily.
                </Title>
                <Text mb={4}>
                  Create custom landing pages with Omega that converts more
                  visitors than any website. With lots of unique blocks, you can
                  easily build a page without coding.
                </Text>

                <ULStyled>
                  <li>50+ HTML Elements</li>
                  <li>6 Month Support</li>
                  <li>Bootstrap 4 Framework</li>
                  <li>Lifetime Updates</li>
                </ULStyled>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default Content1;
