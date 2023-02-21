import Image from 'next/image'
import React from 'react'

import { CTALink, Section, Typography } from '../../components/Core'
import { Container, Flex } from '../../components/Layout'
import { urlFor } from '../../utils/helpers'

export const Content1 = ({ content }) => {
  return (
    <Section py={0}>
      <Container>
        <Flex center>
          <div
            className="tw-mt-8 tw-w-4/5 lg:tw-mt-0 lg:tw-w-full"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="50"
            data-aos-offset="0"
            data-aos-once="true"
          >
            <Typography.H2>{content.title}</Typography.H2>
            <Typography.BlockContent blocks={content.blockText.blockText} />
            <CTALink href="#book" text={content.button} className="tw-mt-8" />
          </div>
          <div className="tw-my-12 tw-w-1/2 lg:tw-my-0 lg:tw-ml-10">
            <Image
              src={urlFor(content.imageWithAlt.asset._ref)}
              alt={content.imageWithAlt.alt}
              width={1001}
              height={1500}
              layout="responsive"
            />
          </div>
        </Flex>
      </Container>
    </Section>
  )
}
