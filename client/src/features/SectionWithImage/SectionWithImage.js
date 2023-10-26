import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

import { Section, Typography } from '../../components/Core'
import { Container, Flex } from '../../components/Layout'
import { urlFor } from '../../utils/helpers'

const SectionStyled = styled(Section)`
  border-bottom: 1px solid ${({ bg }) => (bg == 'dark' ? '#242427' : 'white')};
  background-color: ${({ bg }) => (bg == 'dark' ? 'rgb(25,25,27)' : 'white')};
  overflow: hidden;
`
export const SectionWithImage = ({ content, bg = 'light' }) => {
  return (
    <SectionStyled bg={bg}>
      <Container>
        <Flex
          className="justify-content-center align-items-center"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="50"
          data-aos-offset="0"
          data-aos-once="true"
        >
          <div className="tw-mb-5 tw-w-full lg:tw-order-2 lg:tw-ml-10 lg:tw-mb-0">
            <Image
              src={urlFor(content.imageWithAlt.asset._ref)}
              alt={content.imageWithAlt.alt}
              width={2500}
              height={1667}
              layout="responsive"
            />
          </div>
          <div
            className="tw-w-4/5 lg:tw-order-1 lg:tw-w-full"
            data-aos-duration="750"
            data-aos-once="true"
          >
            <Typography.H2
              className={clsx(
                bg === 'dark' ? 'tw-text-white' : 'tw-text-dark-grey'
              )}
            >
              {content.title}
            </Typography.H2>
            <Typography.BlockContent
              light={bg === 'dark'}
              blocks={content.blockText.blockText}
            />
          </div>
        </Flex>
      </Container>
    </SectionStyled>
  )
}
