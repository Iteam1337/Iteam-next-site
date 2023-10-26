import React from 'react'

import { Carousel } from '../../components/Carousel'
import { Box, Section, Typography } from '../../components/Core'
import { Container, Flex } from '../../components/Layout'

export const Testimonial = ({ content, coworker, bg }) => {
  return (
    <Section bg={bg && '#F7F7FB'}>
      <Container>
        {coworker ? (
          <>
            <Flex className="tw-justify-center tw-pb-4">
              <div className="tw-w-4/5 lg:tw-w-full">
                <Typography.H2 className="tw-mb-0">
                  {content.section.title}
                </Typography.H2>
              </div>
              <div className="tw-w-4/5 lg:tw-w-full lg:tw-pl-5 ">
                <Typography.BlockContent
                  blocks={content.section.blockText.blockText}
                />
              </div>
            </Flex>
            <Box className="tw-mt-6">
              <Carousel coworker={true} content={content.carousel} />
            </Box>
          </>
        ) : (
          <>
            <Flex center className="tw-pb-12">
              <div className="tw-w-4/5">
                <Typography.H2 className="tw-text-center">
                  {content.title}
                </Typography.H2>
                <Typography.Paragraph className="tw-text-center">
                  {content.subtitle}
                </Typography.Paragraph>
              </div>
            </Flex>
            <Carousel coworker={false} content={content.texts} />
          </>
        )}
      </Container>
    </Section>
  )
}
