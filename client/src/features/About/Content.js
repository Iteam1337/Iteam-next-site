import Image from 'next/image'
import React from 'react'

import { Section, Typography } from '../../components/Core'
import { Container, Flex } from '../../components/Layout'
import { urlFor } from '../../utils/helpers'

export const Content = ({ content }) => (
  <>
    <Section>
      <Container>
        <Flex className="tw-justify-center tw-pb-4">
          <Typography.H2>{content.section.title}</Typography.H2>
          <Typography.BlockContent
            blocks={content.section.blockText.blockText}
          />
        </Flex>
        <div className="tw-flex tw-flex-col tw-gap-8 md:tw-flex-row">
          {content.layoutImages.map((image, index) => {
            return (
              <div
                key={index}
                className="tw-flex-0 tw-relative tw-h-52 tw-overflow-hidden tw-rounded-md md:tw-h-96 md:tw-flex-1"
              >
                <Image
                  src={urlFor(image.asset._ref)}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            )
          })}
        </div>
      </Container>
    </Section>
  </>
)
