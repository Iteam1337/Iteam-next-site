import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col, Card } from 'react-bootstrap'

import { Title, Box, Text, Button } from '../../components/Core'
import { device } from '../../utils'
import sanityClient from '../../sanity-client'
import { useNextSanityImage } from 'next-sanity-image'
import Link from 'next/link'

const CaseCardStyled = styled(Card)`
  width: 100%;
  height: 100%;
  border: none;
  background-color: ${({ theme }) => theme.colors.dark};
  overflow: hidden;

  .img-container {
    position: relative;
    z-index: 1;
    img {
      border-radius: 8px 8px 0 0;
      max-width: 100%;
      width: 100%;
      height: 320px;
      object-fit: cover;
    }
  }
`

const CaseCardLink = styled.a`
  display: inline-block;
  transition: 0.4s;
  height: 100%;
  transition: 0.2s;

  &:hover,
  &:focus {
    transition: 0.4s;

    &:after {
      content: 'Läs mer';
      position: absolute;
      z-index: 3;
      right: 15px;
      bottom: 0;
      opacity: 1;
      padding: 1rem 1.5rem;
      background: ${({ theme }) => theme.colors.light};
      border-radius: 8px 0 8px 0;
      color: ${({ theme }) => theme.colors.dark};
      font-weight: 500;
      transition: 0.3s;
    }

    @media screen and (prefers-reduced-motion: no-preference) {
      transform: scale(1.01);

      &:after {
        right: 0;
      }
    }
  }
`

const TextContent = styled(Box)`
  position: relative;
  z-index: 1;
  transition: 0.4s;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding-top: 23px;
  padding-bottom: 21px;
  padding-left: 20px;
  padding-right: 20px;
  height: 100%;

  @media ${device.sm} {
    padding-top: 43px;
    padding-bottom: 41px;
    padding-left: 38px;
    padding-right: 38px;
  }
`

const Shape = styled(Box)`
  background: initial;
  position: absolute;
  width: 100%;
  left: 0;
  z-index: 2;
  bottom: 98.5%;
  svg {
    width: 100%;
    path {
      fill: ${({ theme, bg }) => theme.colors[bg]};
      transition: 0.4s;
    }
  }
`

const PreTitle = styled(Text)`
  font-size: 16px;
  font-weight: 300;
  letter-spacing: -0.5px;
  line-height: 28px;
  margin-bottom: 22px;
`

const TitleStyled = styled(Title)`
  letter-spacing: -1.06px;
  margin-bottom: 22px;
  font-size: 28px;
  font-weight: 700;
  line-height: 42px;
  @media ${device.sm} {
    font-size: 34px;
    font-weight: 700;
  }
`

const CaseCard = ({ isDark = true, bg = 'secondary', data }) => {
  const imageProps = useNextSanityImage(
    sanityClient,
    data.preview.imageCard.image.asset._ref
  )

  const previewDescription = () => {
    let trimmedDescription = data.preview.imageCard.description.slice(0, 150)
    trimmedDescription = trimmedDescription.slice(
      0,
      Math.min(trimmedDescription.length, trimmedDescription.lastIndexOf(' '))
    )
    return `${trimmedDescription} (…)`
  }

  console.log(previewDescription())
  return (
    <CaseCardStyled>
      <div className="img-container">
        <img {...imageProps} alt="" />
      </div>
      <TextContent bg={bg}>
        <Shape bg={bg}>
          <svg height="22" viewBox="0 0 540 22">
            <g>
              <g>
                <path d="M0 0s233.088 28.458 539.999 0c306.91-28.458 0 22 0 22H.06"></path>
              </g>
            </g>
          </svg>
        </Shape>
        <PreTitle color={isDark ? 'lightShade' : 'darkShade'}>
          {data.tags
            ? data.tags.map(
                (tag, i) => `${tag}${i < data.tags.length - 1 ? ', ' : ''} `
              )
            : data.title}
        </PreTitle>
        <TitleStyled color={isDark ? 'light' : 'dark'}>
          {data.title}
        </TitleStyled>
        <Text color={isDark ? 'lightShade' : 'darkShade'}>
          {previewDescription()}
        </Text>
      </TextContent>
    </CaseCardStyled>
  )
}

const CaseStudies = ({ cases }) => {
  return (
    <>
      {/* <!-- Content section --> */}
      <Box bg="dark">
        <Container className="pt-5">
          <Row>
            {cases.map((item, i) => (
              <Col
                key={i}
                lg="6"
                md="9"
                className="mb-4"
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="50"
                data-aos-offset="0"
                data-aos-once="true"
              >
                <Link href={`/case/${item.slug.current}`} passHref>
                  <CaseCardLink aria-label="Läs mer om detta case">
                    <CaseCard bg={'secondary'} isDark={false} data={item} />
                  </CaseCardLink>
                </Link>
              </Col>
            ))}
          </Row>
          {/* <Box className="text-center" pt={[4, null, null, null, 5]}>
            <Button variant="outline" color="light">
              Läs mer om våra Iteam X case
            </Button>
          </Box> */}
        </Container>
      </Box>
    </>
  )
}

export default CaseStudies
