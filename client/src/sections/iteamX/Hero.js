import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import {
  Title,
  Button,
  Section,
  Box,
  Typography,
  Span,
} from '../../components/Core'
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
                <Typography.H1 additionalClassName="tw-text-white tw-my-4">
                  {title}
                  <Span color="secondary">.</Span>
                </Typography.H1>
                <Typography.Paragraph light>
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
                    <Link href={getExternalOrInternalLink(content.link.link)}>
                      <Button
                        css={`
                          margin-top: 20px;
                          width: fit-content;
                        `}
                        color="dark"
                      >
                        {content.link.title}
                      </Button>
                    </Link>
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
