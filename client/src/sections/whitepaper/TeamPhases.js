import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import Slider from 'react-slick'
import { rgba } from 'polished'

import { Title, Section, Box, Text } from '../../components/Core'
import { device, breakpoints } from '../../utils'

const SectionStyled = styled(Section)``

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
      content: '';
      font-family: 'Font Awesome 5 Free';
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
      content: '\f060';
    }
    @media ${device.md} {
      /* margin-left: 60px; */
    }
  }

  .slick-arrow.slick-next {
    right: 0;
    left: auto;
    transform: translate(50%, -50%);
    &:before {
      content: '\f061';
    }
    @media ${device.md} {
      /* margin-right: 60px; */
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
`

const SliderItem = styled(Box)`
  &:focus {
    outline: none;
  }
`

const SliderCard = styled(Box)`
  border-radius: 10px;
  background: #fff;
  overflow: hidden;
  box-shadow: ${({ theme }) =>
    `0 12px 34px -11px ${rgba(theme.colors.shadow, 0.125)}`};

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 30px;
  padding-left: 30px;
  padding-top: 50px;
  padding-bottom: 50px;
  @media ${device.sm} {
    padding-top: 90px;
    padding-bottom: 90px;
  }
  @media ${device.md} {
    padding-right: 50px;
    padding-left: 50px;
    flex-direction: row;
    align-items: center;
  }
  @media ${device.lg} {
    margin: 60px 0 100px !important;
    padding-right: 100px;
    padding-left: 100px;
  }
  @media ${device.xl} {
    padding-right: 120px;
    padding-left: 120px;
  }
`

const NumberBlock = styled(Box)`
  min-width: 215px;
  height: 213px;
  border-radius: 8px;
  background-color: #eae9f2;
  text-align: center;
  margin: 0 auto;
  @media ${device.md} {
    margin-left: 0;
  }
  span {
    color: ${({ theme }) => theme.colors.ash};
    font-size: 140px;
    font-weight: 900;
    letter-spacing: -4.38px;
  }
`

const SliderText = styled(Box)`
  display: flex;
  flex-direction: column;

  flex: auto;
  padding-left: 30px;
  padding-right: 30px;
  @media ${device.sm} {
    padding-left: 60px;
    padding-right: 0;
  }
  @media ${device.md} {
    padding-left: 85px;
  }
  @media ${device.lg} {
    padding-left: 120px;
  }
`

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
  }

  return (
    <>
      {/* <!-- testimonial section --> */}
      <SectionStyled bg="#f6f6f8" pb={['0px!important']}>
        <Container>
          <Row className="justify-content-center mb-4">
            <Col lg="10">
              <div className="text-center">
                <Title>Innehåll i PDF:en</Title>
                <Text>
                  Vi har samlat vår erfarenhet och bjuder nu på detta
                  kostnadsfritt till dig som är produktägare för team som du
                  vill ska bli xx och yy.
                </Text>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="12">
              <SliderStyled {...slickSettings}>
                <SliderItem>
                  <SliderCard>
                    <NumberBlock>
                      <span>1</span>
                    </NumberBlock>
                    <SliderText>
                      <Text variant="small" color="secondary">
                        Teamets faser
                      </Text>
                      <Title variant="card" fontSize="24px" mb={4} mt={2}>
                        Tillhörighet
                      </Title>
                      <Text color="dark">
                        Create custom landing pages with Omega that converts
                        more visitors than any website. With lots of unique
                        blocks, you can easily build a page without coding.
                      </Text>
                    </SliderText>
                  </SliderCard>
                </SliderItem>
                <SliderItem>
                  <SliderCard>
                    <NumberBlock>
                      <span>2</span>
                    </NumberBlock>
                    <SliderText>
                      <Text variant="small" color="secondary">
                        Teamets faser
                      </Text>
                      <Title variant="card" fontSize="24px" mb={4} mt={2}>
                        Opposion och konflikt
                      </Title>
                      <Text color="dark">
                        Create custom landing pages with Omega that converts
                        more visitors than any website. With lots of unique
                        blocks, you can easily build a page without coding.
                      </Text>
                    </SliderText>
                  </SliderCard>
                </SliderItem>
                <SliderItem>
                  <SliderCard>
                    <NumberBlock>
                      <span>3</span>
                    </NumberBlock>
                    <SliderText>
                      <Text variant="small" color="secondary">
                        Teamets faser
                      </Text>
                      <Title variant="card" fontSize="24px" mb={4} mt={2}>
                        Tillit och struktur
                      </Title>
                      <Text color="dark">
                        Create custom landing pages with Omega that converts
                        more visitors than any website. With lots of unique
                        blocks, you can easily build a page without coding.
                      </Text>
                    </SliderText>
                  </SliderCard>
                </SliderItem>
                <SliderItem>
                  <SliderCard>
                    <NumberBlock>
                      <span>4</span>
                    </NumberBlock>
                    <SliderText>
                      <Text variant="small" color="secondary">
                        Teamets faser
                      </Text>
                      <Title variant="card" fontSize="24px" mb={4} mt={2}>
                        Arbete och produktivitet
                      </Title>
                      <Text color="dark">
                        Create custom landing pages with Omega that converts
                        more visitors than any website. With lots of unique
                        blocks, you can easily build a page without coding.
                      </Text>
                    </SliderText>
                  </SliderCard>
                </SliderItem>
              </SliderStyled>
            </Col>
          </Row>
        </Container>
      </SectionStyled>
    </>
  )
}

export default Testimonial
