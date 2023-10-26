import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

import { CTALink, Section, Typography } from '../../components/Core'
import { Container, Flex } from '../../components/Layout'
import { buildInternalUrl, urlFor } from '../../utils/helpers'

const SectionStyled = styled(Section)`
  border-bottom: 1px solid #242427;
`

/*
 * This component is both for linking to an id or sending to another page.
 */
export const SectionWithImageAndCta = ({ content, referenceTo = '' }) => {
  return (
    <>
      <SectionStyled bg="dark">
        <Container>
          <Flex center>
            <div className="lg:mb-0 tw-mb-5 tw-w-full lg:tw-order-2 lg:tw-ml-10">
              <Image
                src={urlFor(content.imageWithAlt.asset._ref)}
                alt={content.imageWithAlt.alt}
                width={1500}
                height={1001}
                layout="responsive"
              />
            </div>
            <div
              className="tw-w-4/5 lg:tw-order-1 lg:tw-w-full"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="50"
              data-aos-offset="0"
              data-aos-once="true"
            >
              <Typography.H2 className="tw-text-white">
                {content.title}
              </Typography.H2>
              <Typography.BlockContent
                light
                blocks={content.blockText.blockText}
              />
              <CTALink
                href={
                  referenceTo
                    ? referenceTo
                    : buildInternalUrl(content.cta.reference)
                }
                text={referenceTo ? content.button : content.cta.title}
                className="tw-mt-8"
              />
            </div>
          </Flex>
        </Container>
      </SectionStyled>
    </>
  )
}
