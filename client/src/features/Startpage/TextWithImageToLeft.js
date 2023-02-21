import React from 'react'
import styled from 'styled-components'

import { Box, Section, Typography } from '../../components/Core'
import { Container, Flex } from '../../components/Layout'
import { device } from '../../utils'
import { urlFor } from '../../utils/helpers'

const ImgStyled = styled.img`
  box-shadow: ${({ theme }) => `0 52px 54px ${theme.colors.shadow}`};
  border-radius: 0px;
  max-width: 70%;
  @media ${device.sm} {
    max-width: 50%;
  }
  @media ${device.md} {
    max-width: 33%;
  }
  @media ${device.lg} {
    max-width: 100%;
  }
  @media ${device.xl} {
    margin-left: -50px;
  }
`

export const TextWithImageToLeft = ({ content }) => {
  return (
    <>
      <Section>
        <Container>
          <Flex
            center
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="50"
            data-aos-offset="0"
            data-aos-once="true"
          >
            <div className="tw-mb-4 tw-pl-5 lg:tw-mb-0">
              <ImgStyled
                src={urlFor(content.imageWithAlt.asset._ref)}
                alt={content.imageWithAlt.alt}
                className="img-fluid"
              />
            </div>
            <div className="tw-w-4/5 lg:tw-w-full">
              <Box className="pt-5 pt-lg-0">
                <Typography.H2>{content.title}</Typography.H2>
                <Typography.BlockContent blocks={content.blockText.blockText} />
              </Box>
            </div>
          </Flex>
        </Container>
      </Section>
    </>
  )
}
