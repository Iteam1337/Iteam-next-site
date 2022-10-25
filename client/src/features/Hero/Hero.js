import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import clsx from 'clsx'

import { Section, Typography, CTALink } from '../../components/Core'
import { getExternalOrInternalLink, hexToRGBA } from '../../utils/helpers'
import { urlFor } from '../../utils/helpers'

const SectionWithBackground = ({ mediaType, children }) => {
  if (mediaType.type === 'color') {
    const rgb = hexToRGBA(mediaType.color)
    const colorArray = `${rgb[0]},${rgb[1]},${rgb[2]}`
    return (
      <Section
        className={clsx(
          `tw-bg-gradient-to-r tw-from-[rgb(${colorArray},0.17)] tw-to-[rgb(84,84,212,0)]`,
          'md:tw-pt-md:tw-pb-[null] tw-pt-[120px] tw-pb-[50px] md:tw-pb-[null] lg:tw-pt-[190px] lg:tw-pb-[180px]'
        )}
      >
        {children}
      </Section>
    )
  } else if (mediaType.type === 'image') {
    return (
      <Section
        style={{
          backgroundImage: `url(${urlFor(mediaType?.image.asset._ref)})`,
        }}
        className={
          'tw-relative tw-bg-cover tw-bg-center tw-bg-no-repeat tw-pt-[120px] tw-pb-[50px] lg:tw-pt-[190px] lg:tw-pb-[180px]'
        }
      >
        <div className="tw-relative tw-z-10">{children}</div>
        <div
          className={clsx(
            'tw-absolute tw-inset-0',
            mediaType.darkGradient
              ? 'tw-bg-gradient-to-l tw-from-[rgb(0,0,0,.127)] tw-to-[rgb(0,0,0,0.8)]'
              : 'tw-bg-gradient-to-r tw-from-[rgb(255,255,255,0.9)] tw-via-[rgb(255,255,255,0.4)] tw-to-[rgb(255,255,255,0.1)]'
          )}
        />
      </Section>
    )
  }
  return (
    <Section
      className={clsx(
        'tw-bg-gradient-to-r tw-from-[rgb(141,141,236,0.17)] tw-to-[rgba(84,84,212,0)]',
        'tw-pt-[120px] tw-pb-[50px]  lg:tw-pt-[190px] lg:tw-pb-[180px]'
      )}
    >
      {children}
    </Section>
  )
}

export const Hero = ({ title, subtitle, mediaType, link }) => {
  return (
    <SectionWithBackground mediaType={mediaType}>
      <Container>
        <Row>
          <Col lg="7">
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
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
    </SectionWithBackground>
  )
}
