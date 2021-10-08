import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import Gravatar from 'react-gravatar'
import { Title, Box, Text } from '../../components/Core'
import Slider from 'react-slick'
import { device, breakpoints } from '../../utils'
import { rgba } from 'polished'

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
    margin-left: -6px;

    @media ${device.lg} {
      margin-left: 40px;
    }
  }

  .slick-arrow.slick-next {
    right: 0;
    left: auto;
    transform: translate(50%, -50%);
    &:before {
      content: '\f061';
    }
    margin-right: -6px;
    @media ${device.lg} {
      margin-right: 40px;
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
  padding: 30px;
  &:focus {
    outline: none;
  }
`

const SliderCard = styled(Box)`
  border-radius: 10px;
  background: #fff;
  overflow: hidden;
  box-shadow: ${({ theme }) =>
    `0 52px 54px ${rgba(theme.colors.shadow, 0.125)}`};
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${device.sm} {
    padding: 35px 35px 20px 35px;
  }
  @media ${device.md} {
    padding: 10px;
    flex-direction: row;
  }
  @media ${device.lg} {
    padding: 0 0 30px 30px;

    margin: 60px 60px 100px 60px !important;
  }
`

const SliderImgContainer = styled(Box)`
  border-radius: 10px;
  overflow: hidden;

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
`

const SliderText = styled(Box)`
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  flex: auto;
  padding: 80px 30px 0px;
`

const Carousel = ({ content }) => {
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
      },
    ],
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col lg="12" xl="11">
          <SliderStyled {...slickSettings}>
            {content.map((person, i) => {
              return (
                <SliderItem key={i}>
                  <SliderCard>
                    <SliderImgContainer>
                      <Gravatar
                        email={person.email}
                        className="img-fluid"
                        size={200}
                      />
                    </SliderImgContainer>
                    <SliderText>
                      <Title variant="card" mb={0} mt={3}>
                        {person.whyTech}
                      </Title>
                      <Text color="dark" my={2}>
                        {person.answerTech}
                      </Text>
                      <Title variant="card" mb={0} mt={3}>
                        {person.fullname}
                      </Title>
                      <Text variant="small">{person.role}</Text>
                    </SliderText>
                  </SliderCard>
                </SliderItem>
              )
            })}
          </SliderStyled>
        </Col>
      </Row>
    </Container>
  )
}

export default Carousel
