import Image from 'next/image'
import React from 'react'

import { Section, Typography } from '../../components/Core'
import { Container, Flex } from '../../components/Layout'
import { urlFor } from '../../utils/helpers'

export const TextWithImageToRight = ({ content }) => {
  return (
    <>
      <Section
        bg="#F7F7FB"
        className="position-relative"
        py={['50px', null, '130px', null, '230px']}
      >
        <Container>
          <div
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="50"
            data-aos-offset="0"
            data-aos-once="true"
          >
            <Flex center>
              <div className="tw-order-2 tw-mt-5 tw-w-4/5 lg:tw-order-1 lg:tw-mt-0 lg:tw-w-full">
                <Typography.H2>{content.title}</Typography.H2>
                <Typography.BlockContent blocks={content.blockText.blockText} />
              </div>
              <div className="tw-order-1 tw-mb-5 tw-w-full lg:tw-order-2 lg:tw-ml-10 lg:tw-mb-0">
                <Image
                  src={urlFor(content.imageWithAlt.asset._ref)}
                  alt={content.imageWithAlt.alt}
                  width={1500}
                  height={1001}
                  layout="responsive"
                />
              </div>
            </Flex>
          </div>
        </Container>
      </Section>
    </>
  )
}
