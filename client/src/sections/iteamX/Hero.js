import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import { Section, Box, Typography, Span, CTALink } from '../../components/Core'
import { getExternalOrInternalLink } from '../../utils/helpers'

const Hero = ({ content }) => {
  const [title] = content.title.split('.')
  return (
    <>
      {/* <!-- Hero Area --> */}
      <Section bg="dark">
        <div className="pt-5"></div>
        <Container
          className="position-relative"
          css={`
            z-index: 10;
          `}
        >
          <Row>
            <Col md="11" lg="11" xl="9">
              <Box py={4}>
                <Typography.H1 className="tw-my-4 tw-text-white">
                  {title}
                  <Span color="secondary">.</Span>
                </Typography.H1>
                <Typography.Paragraph className="tw-text-white">
                  {content.subtitle}
                </Typography.Paragraph>
                <Box
                  pt="12px"
                  data-aos="fade-up"
                  data-aos-duration="300"
                  data-aos-once="true"
                  data-aos-delay="200"
                >
                  {content?.link?.link && (
                    <CTALink
                      href={getExternalOrInternalLink(content.link.link)}
                      text={content.link.title}
                      className="tw-mt-6"
                    />
                  )}
                </Box>
              </Box>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  )
}

export default Hero
