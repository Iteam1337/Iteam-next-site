import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import Gravatar from 'react-gravatar'
import { Title, Box, Span, Anchor, Typography } from '../../components/Core'
import Slider from 'react-slick'
import { device, breakpoints } from '../../utils'
import { rgba } from 'polished'
import sanityClient from '../../sanity-client'
import { useNextSanityImage } from 'next-sanity-image'
import { buildInternalUrl } from '../../utils/helpers'

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
      color: ${({ theme }) => theme.colors.dark};
      transition: 0.4s;
    }
  }
  .slick-arrow.slick-prev {
    left: 0;
    &:before {
      content: '\f060';
      opacity: 1;
    }
  }
  .slick-arrow.slick-next {
    right: 0;
    left: auto;
    transform: translate(50%, -50%);
    &:before {
      content: '\f061';
      opacity: 1;
    }
  }
  .slick-arrow:hover,
  .slick-arrow:focus {
    background: ${({ theme }) => theme.colors.light}!important;
    color: ${({ theme }) => theme.colors.dark}!important;
    box-shadow: ${({ theme }) =>
      `0 1px 6px ${rgba(theme.colors.shadow, 0.125)}`};
    &:before {
      color: ${({ theme }) => theme.colors.dark}!important;
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

const Coworker = ({ item, active }) => {
  return (
    <SliderItem>
      <SliderCard>
        <SliderImgContainer>
          {item.email && (
            <Gravatar email={item.email} className="img-fluid" size={200} />
          )}
        </SliderImgContainer>
        <SliderText>
          <Typography.H3 additionalClassName="tw-mt-1">
            {item.whyTech}
          </Typography.H3>
          <Typography.Paragraph>{item.answerTech}</Typography.Paragraph>
          <Typography.ParagraphSmall additionalClassName="tw-mt-2 tw-font-bold">
            {item.fullname}
          </Typography.ParagraphSmall>
          <Typography.ParagraphSmall>{item.role}</Typography.ParagraphSmall>
          {active && (
            <Typography.ParagraphSmall additionalClassName="tw-mt-2">
              <Anchor href={`/about/${item.slug.current}`}>Läs mer…</Anchor>
            </Typography.ParagraphSmall>
          )}
        </SliderText>
      </SliderCard>
    </SliderItem>
  )
}

const Client = ({ item, active }) => {
  const imageProps = useNextSanityImage(sanityClient, item?.image?.asset._ref)
  return (
    <SliderItem active={active}>
      <SliderCard className="slider-card">
        <SliderImgContainer>
          <img
            {...imageProps}
            alt={item.image.alt}
            style={{ height: 'auto' }}
          />
        </SliderImgContainer>
        <SliderText>
          <Typography.Paragraph>{item.quote}</Typography.Paragraph>
          <Typography.ParagraphSmall additionalClassName="tw-mt-2 tw-font-bold">
            {item.fullname}
          </Typography.ParagraphSmall>
          <Typography.ParagraphSmall>{item.role}</Typography.ParagraphSmall>
          {active && item.reference && (
            <Typography.ParagraphSmall additionalClassName="tw-mt-2">
              <Anchor href={buildInternalUrl(item.reference)}>Läs mer…</Anchor>
            </Typography.ParagraphSmall>
          )}
        </SliderText>
      </SliderCard>
    </SliderItem>
  )
}

const Carousel = ({ content, coworker = false }) => {
  const [activeSlide, setActiveSlide] = useState(0)
  const arrLength = content.length

  useEffect(() => {
    // This tagets the anchor descendant of the active slide.
    // Somehow the active slide bypasses the <active> condition used when rendering the slides.
    const clonedLinks = document.querySelectorAll('.slick-cloned')
    clonedLinks.forEach((el) => {
      const anchor = el.querySelector(':scope a')
      if (anchor) {
        anchor.style.display = 'none'
      }
    })
  })

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
    beforeChange: (_, next) => {
      setTimeout(() => {
        setActiveSlide(next)
      }, 10)
    },
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
          <SliderStyled {...slickSettings} activeSlide={activeSlide}>
            {content.map((person, i) => {
              const active = activeSlide === i
              return coworker ? (
                <Coworker item={person} key={i} active={active} />
              ) : (
                <Client item={person} key={i} active={active} />
              )
            })}
          </SliderStyled>
        </Col>
      </Row>
    </Container>
  )
}

export default Carousel
