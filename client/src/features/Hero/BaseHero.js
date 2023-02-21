import clsx from 'clsx'
import React from 'react'

import { CTALink, Section, Typography } from '../../components/Core'
import { Container } from '../../components/Layout'
import { getExternalOrInternalLink, urlFor } from '../../utils/helpers'

const SectionWithBackground = ({ mediaType, children, className }) => {
  if (mediaType?.type === 'color') {
    return (
      <Section
        // todo: set bg-color as tailwind util class when Box component has been refactored
        background={mediaType.color}
        className={className}
      >
        {children}
      </Section>
    )
  } else if (mediaType?.type === 'image') {
    return (
      <Section
        style={{
          backgroundImage: `url(${urlFor(mediaType?.image.asset._ref)})`,
        }}
        className={clsx(
          className,
          'tw-relative tw-bg-cover tw-bg-center tw-bg-no-repeat'
        )}
      >
        <div className="tw-relative tw-z-10">{children}</div>
        <div
          className={clsx(
            className,
            'tw-absolute tw-inset-0',
            mediaType.darkGradient
              ? 'tw-bg-gradient-to-l tw-from-[rgb(0,0,0,0.3)] tw-to-[rgb(0,0,0,0.5)]'
              : 'tw-bg-gradient-to-r tw-from-[rgb(255,255,255,0.9)] tw-via-[rgb(255,255,255,0.4)] tw-to-[rgb(255,255,255,0.1)]'
          )}
        />
      </Section>
    )
  }
  return (
    <Section
      className={clsx(
        className,
        'tw-bg-gradient-to-r tw-from-[rgb(141,141,236,0.17)] tw-to-[rgba(84,84,212,0)]'
      )}
    >
      {children}
    </Section>
  )
}

export const BaseHero = ({
  children,
  subtitle,
  mediaType,
  link,
  className,
}) => {
  return (
    <SectionWithBackground
      mediaType={mediaType}
      className={clsx(
        className,
        'tw-flex tw-flex-col tw-justify-center tw-pt-32 tw-pb-14 lg:tw-pt-48 lg:tw-pb-48'
      )}
    >
      <Container className="tw-h-full">
        <div>
          {children}
          {subtitle && mediaType.type === 'color' ? (
            <Typography.Paragraph className="tw-text-white">
              {subtitle}
            </Typography.Paragraph>
          ) : (
            <Typography.Paragraph className="tw-text-white">
              <span className="tw-inline tw-whitespace-pre-wrap tw-bg-[rgb(0,0,0,0.8)] tw-box-decoration-clone tw-p-2 tw-leading-[2.46rem]">
                {subtitle}
              </span>
            </Typography.Paragraph>
          )}
          {link && (
            <div
              data-aos="fade-up"
              data-aos-duration="300"
              data-aos-once="true"
              data-aos-delay="200"
            >
              <CTALink
                href={getExternalOrInternalLink(link.link)}
                text={link.title}
                className="tw-mt-8 tw-w-fit"
                variant="secondary"
              />
            </div>
          )}
        </div>
      </Container>
    </SectionWithBackground>
  )
}
