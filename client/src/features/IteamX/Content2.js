import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

import { Box, CTALink, Section, Typography } from '../../components/Core'
import { Container, Flex } from '../../components/Layout'
import { urlFor } from '../../utils/helpers'

const ImageRight = styled(Box)`
  img {
    box-shadow: ${({ theme }) => `0 52px 54px ${theme.colors.shadow}`};
    border-radius: 10px;
  }
`

export const Content2 = ({ content }) => {
  return (
    <>
      {/* <!-- Content section 1 --> */}
      <Section bg="dark" id="ai_sustainability">
        <Container>
          <Flex center>
            <div
              className="tw-order-2 tw-mt-12 tw-w-4/5 lg:tw-order-1 lg:tw-mt-0 lg:tw-w-full"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="50"
              data-aos-offset="0"
              data-aos-once="true"
            >
              <Typography.H2 className="tw-text-white">
                {content.title}
              </Typography.H2>
              <div className="tw-mb-9">
                <Typography.BlockContent
                  light
                  blocks={content.blockText.blockText}
                />
              </div>
              <CTALink
                href="https://predictivemovement.se"
                text={content.cta.title}
              />
            </div>
            <div className="tw-relative tw-order-1 tw-w-full lg:tw-order-2">
              <ImageRight>
                <Image
                  src={urlFor(content.imageWithAlt.asset._ref)}
                  alt={content.imageWithAlt.alt}
                  width={1526}
                  height={918}
                  layout="responsive"
                />
              </ImageRight>
            </div>
          </Flex>
        </Container>
      </Section>
    </>
  )
}
