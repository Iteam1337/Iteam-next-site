import Image from 'next/image'
import React from 'react'

import { CTALink, Section, Typography } from '../../components/Core'
import { Container, Flex } from '../../components/Layout'
import { urlFor } from '../../utils/helpers'

export const SectionWithImageAndButton = ({ content }) => {
  const { title, blockText, button, imageWithAlt } = content

  return (
    <Section className="overflow-hidden">
      <Container>
        <Flex center>
          <div
            className="tw-w-4/5 lg:tw-w-full"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="50"
            data-aos-offset="0"
            data-aos-once="true"
          >
            <Typography.H2>{title}</Typography.H2>
            <Typography.BlockContent blocks={blockText.blockText} />
            <CTALink
              href="#pricing"
              text={button}
              className="tw-mt-8"
              variant="secondary"
            />
          </div>
          <div md={10} lg={5} className="tw-mt-5 tw-w-full lg:tw-mt-0">
            <Image
              src={urlFor(imageWithAlt.asset._ref)}
              alt={imageWithAlt.alt}
              width={1467}
              height={1667}
              layout="responsive"
            />
          </div>
        </Flex>
      </Container>
    </Section>
  )
}
