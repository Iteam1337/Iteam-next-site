import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import { rgba } from "polished";

import { Title, Section, Box, Text } from "../../components/Core";
import { device, breakpoints } from "../../utils";

import imgCustomer1 from "../../assets/image/jpeg/littorin.jpg";
import imgCustomer2 from "../../assets/image/jpeg/testimonial-image-2.jpg";
import imgQuote from "../../assets/image/png/quote-shape.png";

const SliderStyled = styled(Slider)`
  position: relative;
  .slick-arrow {
    position: absolute;
    top: 50%;
    font-size: 0;
    height: 65px;
    display: flex;
    width: 65px;
    background: ${({ theme }) => theme.colors.secondary};
    transition: 0.4s;
    border-radius: 500px;
    transform: translate(-50%, -50%);
    z-index: 999;
    margin-top: -20px;
    &::before {
      position: absolute;
      content: "";
      font-family: "Font Awesome 5 Free";
      font-weight: 900;
      font-size: 20px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #fff;
      transition: 0.4s;
    }
  }
  .slick-arrow.slick-prev {
    left: 0;
    &:before {
      content: "\f060";
    }
    @media ${device.md} {
      margin-left: 60px;
    }
  }

  .slick-arrow.slick-next {
    right: 0;
    left: auto;
    transform: translate(50%, -50%);
    &:before {
      content: "\f061";
    }
    @media ${device.md} {
      margin-right: 60px;
    }
  }

  .slick-arrow:hover,
  .slick-arrow:focus {
    background: ${({ theme }) => theme.colors.light}!important;
    color: ${({ theme }) => theme.colors.secondary}!important;
    &:before {
      color: ${({ theme }) => theme.colors.secondary}!important;
    }
  }
`;

const SliderItem = styled(Box)`
  &:focus {
    outline: none;
  }
`;

const SliderCard = styled(Box)`
  border-radius: 10px;
  background: #fff;
  overflow: hidden;
  box-shadow: ${({ theme }) =>
    `0 52px 54px ${rgba(theme.colors.shadow, 0.125)}`};
  display: flex;
  flex-direction: column;
  padding: 20px;
  @media ${device.sm} {
    padding: 35px 35px 20px 35px;
  }
  @media ${device.md} {
    padding: 10px;
    flex-direction: row;
  }
  @media ${device.lg} {
    margin: 60px 60px 100px 60px !important;
  }
`;

const SliderImgContainer = styled(Box)`
  border-radius: 10px;
  overflow: hidden;

  padding: 0 30px;

  @media ${device.sm} {
    min-width: 315px;
    padding: 0;
  }
  @media ${device.md} {
  }

  img {
    margin: 0 auto;
    max-width: unset;
    width: 100%;
  }

  @media ${device.sm} {
    max-width: 100%;
    width: auto;
  }
`;

const SliderText = styled(Box)`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: auto;
  padding: 50px 30px 0px;
  @media ${device.md} {
    padding: 20px 50px 20px;
  }
  @media ${device.lg} {
    padding: 30px 70px 20px;
  }
`;
const SliderQuoteShape = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  @media ${device.md} {
    padding-right: 30px;
    margin-bottom: 30px;
  }
`;

const Testimonial = () => {
  const slickSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: breakpoints.lg,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <>
      {/* <!-- testimonial section --> */}
      <Section bg="#F7F7FB" pb={["50px!important"]}>
        <Container>
          <Row className="justify-content-center mb-4">
            <Col lg="6" md="9">
              <div className="text-center">
                <Title>Vi har kul med våra kunder</Title>
                <Text>
                  Kreativitet kommer inte från krångliga avtal utan från samarbete och förtroende.
                </Text>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="12" xl="11">
              <SliderStyled {...slickSettings}>
                <SliderItem>
                  <SliderCard>
                    <SliderImgContainer>
                      <img src={imgCustomer1} alt="" />
                    </SliderImgContainer>
                    <SliderText>
                      <SliderQuoteShape>
                        <img src={imgQuote} alt="" className="img-fluid" />
                      </SliderQuoteShape>
                      <Text color="dark" my={2}>
                      Vi känner att vårt team på Iteam är mer som kollegor än leverantörer. Istället för att skriva en teknisk kravspecifikation att arbeta efter, så samarbetar vi kontinuerligt för att utveckla funktionalitet. Detta arbetssätt har gjort att vi kommit mycket längre än vi nånsin kunnat tro eftersom det varit så effektivt.
                      </Text>
                      <Title variant="card" mb={0} mt={3}>
                        Johan Littorin
                      </Title>
                      <Text variant="small">Grundare Vimla</Text>
                    </SliderText>
                  </SliderCard>
                </SliderItem>
                <SliderItem>
                  <SliderCard>
                    <SliderImgContainer>
                      <img src={imgCustomer2} alt="" />
                    </SliderImgContainer>
                    <SliderText>
                      <SliderQuoteShape>
                        <img src={imgQuote} alt="" className="img-fluid" />
                      </SliderQuoteShape>
                      <Text color="dark" my={2}>
                        OMG! I cannot believe that I have got a brand new
                        landing page after getting Omega. It was super easy to
                        edit and publish.
                      </Text>
                      <Title variant="card" mb={0} mt={3}>
                        Maria Vesconti
                      </Title>
                      <Text variant="small">Designer at Creativex</Text>
                    </SliderText>
                  </SliderCard>
                </SliderItem>
              </SliderStyled>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default Testimonial;
