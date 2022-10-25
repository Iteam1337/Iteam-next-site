import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import clsx from 'clsx'

import { Section, Typography, CTALink } from '../../components/Core'
import { getExternalOrInternalLink, hexToRGBA } from '../../utils/helpers'
import { urlFor } from '../../utils/helpers'

const SectionStyled = styled(Section)`
  background-image: ${({ color }) =>
    color
      ? `linear-gradient(
    147deg, rgba(${hexToRGBA(color)}, 0.17) 0%,
    rgba(84, 84, 212, 0) 100% 
  )`
      : 'linear-gradient(147deg, rgba(141, 141, 236, 0.17) 0%, rgba(84, 84, 212, 0) 100%)'};
`

const SectionStyledImage = styled(Section)`
  background: ${(props) => ` ${
    props.darkGradient === true
      ? ` linear-gradient(to left, rgba(0, 0, 0, 0.127), rgba(0, 0, 0, 0.8))`
      : `linear-gradient(
      to right,
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.1)
    ),
    linear-gradient(
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.1)
    )`
  },
    url(${urlFor(props.image)}) no-repeat center`};
  background-size: cover;
`

const MediaType = ({ mediaType, children }) => {
  switch (mediaType.type) {
    case 'color':
      return (
        <SectionStyled
          pt={['120px!important', null, '190px!important']}
          pb={['50px!important', null, '180px!important']}
          color={mediaType.color}
        >
          {children}
        </SectionStyled>
      )
    case 'image':
      return (
        <SectionStyledImage
          pt={['120px!important', null, '190px!important']}
          pb={['50px!important', null, '180px!important']}
          bg="dark"
          image={mediaType.image.asset._ref}
          alt={mediaType.image.alt}
          darkGradient={mediaType.darkGradient}
        >
          {children}
        </SectionStyledImage>
      )
    default:
      return (
        <SectionStyled
          pt={['120px!important', null, '190px!important']}
          pb={['50px!important', null, '180px!important']}
        >
          {children}
        </SectionStyled>
      )
  }
}

export const Hero = ({
  title,
  subtitle,
  mediaType,
  link,
  flipTexts = false,
}) => {
  return (
    <>
      <MediaType mediaType={mediaType}>
        <Container
          css={`
            z-index: 10;
          `}
        >
          <Row>
            <Col lg="7">
              <div
                style={{
                  display: 'flex',
                  flexDirection: flipTexts ? 'column-reverse' : 'column',
                }}
              >
                <Typography.H1
                  className={clsx(
                    mediaType.type === 'image'
                      ? mediaType.darkGradient
                        ? 'tw-text-white'
                        : 'tw-text-dark-gray'
                      : 'tw-text-dark-gray'
                  )}
                >
                  {title}
                </Typography.H1>
                <Typography.Paragraph className="tw-text-white">
                  <span className="tw-inline tw-whitespace-pre-wrap tw-bg-[rgb(0,0,0,0.7)] tw-box-decoration-clone tw-p-2 tw-leading-[2.46rem]">
                    {subtitle}
                  </span>
                </Typography.Paragraph>
                {link && (
                  <CTALink
                    href={getExternalOrInternalLink(link.link)}
                    text={link.title}
                    className="tw-mt-8 tw-w-fit"
                    variant="secondary"
                  />
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </MediaType>
    </>
  )
}
