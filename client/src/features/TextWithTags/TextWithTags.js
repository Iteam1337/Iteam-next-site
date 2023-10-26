import React from 'react'

import { ContentCard } from '../../components/ContentCard'
import { Box, Section, Typography } from '../../components/Core'
import { Container, Flex, Grid } from '../../components/Layout'

export const TextWithTags = ({ content }) => {
  return (
    <Section bg="#f7f7fb">
      <Container>
        <Flex center>
          <Box className="text-center tw-w-4/5 lg:tw-w-full" mb={[4, 5]}>
            <Typography.H2>{content.title}</Typography.H2>
            {content?.subtitle?.blockText && (
              <Typography.BlockContent blocks={content.subtitle.blockText} />
            )}
          </Box>
        </Flex>
        <Grid>
          {content.keywords.map((service, i) => (
            <ContentCard title={service} key={i} />
          ))}
        </Grid>
      </Container>
    </Section>
  )
}
