import React from 'react'
import { Row, Col } from 'react-bootstrap'

import { Box, Typography, CTALink } from '../../components/Core'
import { Container } from '../../components/Layout'
import { getRouteNameFromPageType } from '../../utils/helpers'

export const CTA = ({ content }) => {
  return (
    <>
      {/* <!-- CTA section --> */}
      <Box bg="dark" className="position-relative" py={[4, null, null, 5, 6]}>
        <Container>
          <Row className="justify-content-center">
            <Col md="8" lg="7">
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
            </Col>
          </Row>
        </Container>
      </Box>
    </>
  )
}
