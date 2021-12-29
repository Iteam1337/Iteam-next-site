import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import { Title, Button, Section, Box, Text, Span } from '../../components/Core'
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
                <Text
                  color="light"
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-once="true"
                  data-aos-delay="700"
                >
                  {content.subtitle}
                </Text>
                <Title
                  my={4}
                  variant="hero"
                  color="light"
                  data-aos="fade-right"
                  data-aos-duration="600"
                  data-aos-once="true"
                  data-aos-delay="1000"
                >
                  {title}
                  <Span color="secondary">.</Span>
                </Title>
                <Box
                  pt="12px"
                  data-aos="fade-up"
                  data-aos-duration="700"
                  data-aos-once="true"
                  data-aos-delay="1300"
                >
                  {content?.link && (
                    <Link href={getExternalOrInternalLink(content.link.link)}>
                      <Button
                        css={`
                          margin-top: 20px;
                          width: fit-content;
                        `}
                        bg="secondary"
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
