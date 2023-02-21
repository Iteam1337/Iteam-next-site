import React from 'react'

import { Box, CTALink, Typography } from '../../components/Core'
import { Container, Flex } from '../../components/Layout'
import { getRouteNameFromPageType } from '../../utils/helpers'

export const CTA = ({ content }) => {
  return (
    <>
      {/* <!-- CTA section --> */}
      <Box bg="dark" className="position-relative" py={[4, null, null, 5, 6]}>
        <Container>
          <Flex center>
            <div className="tw-w-4/5 lg:tw-w-full">
              <Box className="text-center">
                <Typography.H2 className="tw-text-white">
                  {content?.title}
                </Typography.H2>
                <CTALink
                  href={getRouteNameFromPageType(content?.cta?.reference?._ref)}
                  text={content?.cta?.title}
                  className="tw-mt-3"
                />
              </Box>
            </div>
          </Flex>
        </Container>
      </Box>
    </>
  )
}
