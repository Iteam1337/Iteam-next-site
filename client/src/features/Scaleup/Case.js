import Image from 'next/image'
import React from 'react'

import { CTALink, Section, Typography } from '../../components/Core'
import { Container, Flex } from '../../components/Layout'
import { urlFor } from '../../utils/helpers'

export const Case = ({ content }) => {
  return (
    <Section id="design_sprint">
      <Container>
        <Flex center>
          <div className="tw-mb-4 tw-w-full lg:tw-order-2">
            <div className="tw-relative lg:tw-text-right">
              <div className="tw-overflow-hidden tw-rounded-md tw-shadow-md">
                <Image
                  src={urlFor(content.preview.imageCard.image.asset._ref)}
                  alt={content.preview.imageCard.image.alt}
                  width={3140}
                  height={3141}
                  layout="responsive"
                />
              </div>
            </div>
          </div>
          <div className="tw-mt-5 lg:tw-order-1 lg:tw-mt-0">
            <div
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="50"
              data-aos-offset="0"
              data-aos-once="true"
            >
              <Flex center>
                <div className="tw-w-4/5 lg:tw-w-full">
                  <Typography.H2>{content.title}</Typography.H2>
                  <Typography.Paragraph>
                    {content.preview.imageCard.description}
                  </Typography.Paragraph>
                  <CTALink
                    href={`/case/${content.slug.current}`}
                    text={`Läs mer om ${content.company}`}
                    className="tw-mt-8"
                    variant="secondary"
                  />
                </div>
              </Flex>
            </div>
          </div>
        </Flex>
      </Container>
    </Section>
  )
}
