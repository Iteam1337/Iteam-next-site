import React from 'react'

import { Box, CTALink, Section, Typography } from '../../components/Core'
import { Container, Flex } from '../../components/Layout'

const FeatureCard = ({ title, children, ...rest }) => (
  <Box width={'100%'} bg="light" p="30px" borderRadius={10} {...rest}>
    <div className="d-flex justify-content-between align-items-start">
      <div>
        <Typography.H3>{title}</Typography.H3>
        <Typography.ParagraphSmall>{children}</Typography.ParagraphSmall>
      </div>
    </div>
  </Box>
)

export const SectionWithButtonAndTextGrid = ({ content, linkTo = 'book' }) => {
  const { section, textGrid, button } = content

  return (
    <Section className="tw-bg-gray-dark">
      <Container>
        <Flex center>
          <div
            className="tw-w-4/5 lg:tw-order-2 lg:tw-w-full lg:tw-pl-10"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="50"
            data-aos-offset="0"
            data-aos-once="true"
          >
            <Box>
              <Typography.H2 className="tw-text-white">
                {section.title}
              </Typography.H2>
              <Typography.BlockContent
                light
                blocks={section.blockText.blockText}
              />
              <CTALink className="tw-mt-8" href={`#${linkTo}`} text={button} />
            </Box>
          </div>
          <div className="lg:order-1 tw-mt-5 lg:tw-mt-0">
            <div
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="400"
              data-aos-offset="0"
              data-aos-once="true"
            >
              {textGrid.texts.map((block, i) => {
                return (
                  <div className={i != 0 && 'tw-mt-4'} key={i}>
                    <FeatureCard title={block.title}>{block.text}</FeatureCard>
                  </div>
                )
              })}
            </div>
          </div>
        </Flex>
      </Container>
    </Section>
  )
}
