import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import Gravatar from 'react-gravatar'
import { Title, Box, Text } from '../../components/Core'
import Slider from 'react-slick'
import { device, breakpoints } from '../../utils'
import { rgba } from 'polished'
import sanityClient from '../../sanity-client'
import { useNextSanityImage } from 'next-sanity-image'

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
  }
  .slick-arrow.slick-next {
    right: 0;
    left: auto;
    transform: translate(50%, -50%);
    &:before {
      content: '\f061';
    }
  }
  .slick-arrow:hover,
  .slick-arrow:focus {
    background: ${({ theme }) => theme.colors.light}!important;
    color: ${({ theme }) => theme.colors.secondary}!important;
    box-shadow: ${({ theme }) =>
      `0 1px 6px ${rgba(theme.colors.shadow, 0.125)}`};
    &:before {
      color: ${({ theme }) => theme.colors.secondary}!important;
    }
  }

  .slick-track {
    position: relative;
    top: 0;
    left: 0;
    display: flex;
    align-items: flex-start;

    @media ${device.md} {
      align-items: center;
    }
  }

  .slick-list {
    margin-bottom: 30px;
    border-radius: 10px;
    box-shadow: ${({ theme }) =>
      `0 10px 25px ${rgba(theme.colors.shadow, 0.125)}`};
    background: ${({ theme }) => theme.colors.light}!important;
  }

  .slick-slide {
    opacity: 0;
  }

  .slick-active {
    opacity: 1;
    animation: fade-in 0.3s ease-in;
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .slick-dots {
    position: static;
    margin-top: 30px;
  }
  .slick-dots li {
    width: 45px;
    height: 45px;
  }
  .slick-dots li button {
    width: 45px;
    height: 45px;
    background: ${({ theme }) => theme.colors.secondary};
    opacity: 1;
    transition: 0.2s;
    border-radius: 100%;
    box-shadow: ${({ theme }) =>
      `0 1px 6px ${rgba(theme.colors.shadow, 0.125)}`};
  }
  .slick-dots li button:hover,
  .slick-dots li button:focus {
    background: ${({ theme }) => theme.colors.light};
  }
  .slick-dots li.slick-active button {
    background: ${({ theme }) => theme.colors.light};
  }
  .slick-dots li button::before {
    display: none;
  }
`

const SliderItem = styled(Box)`
  padding: 30px 30px 60px;

  &:focus {
    outline: none;
  }

  @media ${device.md} {
    padding: 30px 90px 60px;
  }
`

const SliderCard = styled(Box)`
  background: #fff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;

  h4:first-of-type {
    margin-top: 0;
  }

  @media ${device.md} {
    padding: 10px;
    align-items: flex-start;
  }
  @media ${device.lg} {
    padding: 0 0 0 30px;
    flex-direction: row;
  }
`

const SliderImgContainer = styled(Box)`
  border-radius: 10px;
  overflow: hidden;
  min-width: 100%;

  img {
    margin: 0 auto;
    max-width: unset;
    width: 100%;
  }

  @media ${device.sm} {
    padding: 0;
    max-width: 100%;
    width: auto;
  }
  @media ${device.lg} {
    min-width: 315px;
    margin-top: 5px;
  }
`

const SliderText = styled(Box)`
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  flex: auto;
  padding: 60px 0 0 0;

  p {
    margin-top: 0;
  }

  @media ${device.lg} {
    padding: 0 0 0 30px;
  }
`

const Coworker = ({ item }) => {
  return (
    <SliderItem>
      <SliderCard>
        <SliderImgContainer>
          <Gravatar email={item.email} className="img-fluid" size={200} />
        </SliderImgContainer>
        <SliderText>
          <Title variant="card" mb={0} mt={3}>
            {item.whyTech}
          </Title>
          <Text color="dark" my={2}>
            {item.answerTech}
          </Text>
          <Title variant="card" mb={0} mt={3}>
            {item.fullname}
          </Title>
          <Text variant="small">{item.role}</Text>
        </SliderText>
      </SliderCard>
    </SliderItem>
  )
}

const Testimonial = ({ item }) => {
  const imageProps = useNextSanityImage(sanityClient, item?.image?.asset._ref)
  return (
    <SliderItem>
      <SliderCard>
        <SliderImgContainer>
          <img
            {...imageProps}
            alt={item.image.alt}
            style={{ height: 'auto' }}
          />
        </SliderImgContainer>
        <SliderText>
          <Text color="dark" my={2}>
            {item.quote}
          </Text>
          <Title variant="card" mb={0} mt={3}>
            {item.fullname}
          </Title>
          <Text variant="small">{item.role}</Text>
        </SliderText>
      </SliderCard>
    </SliderItem>
  )
}

const Carousel = ({ content, coworker = false }) => {
  const slickSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: breakpoints.md,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
    useCSS: false,
  }

  return (
    <Container
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-duration="500"
      data-aos-offset="0"
      data-aos-once="true"
    >
      <Row className="justify-content-center">
        <Col lg="12" xl="11">
          <SliderStyled {...slickSettings}>
            {content.map((person, i) =>
              coworker ? (
                <Coworker item={person} key={i} />
              ) : (
                <Testimonial item={person} key={i} />
              )
            )}
          </SliderStyled>
        </Col>
      </Row>
    </Container>
  )
}

export default Carousel
