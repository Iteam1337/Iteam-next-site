import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import Image from 'next/image'

import { Section, Box, Typography, CTALink } from '../../components/Core'
import { urlFor } from '../../utils/helpers'
import { Container } from '../../components/Layout'

const ImageRight = styled(Box)`
  img {
    box-shadow: ${({ theme }) => `0 52px 54px ${theme.colors.shadow}`};
    border-radius: 10px;
  }
`

export const Content2 = ({ content }) => {
  return (
    <>
      {/* <!-- Content section 1 --> */}
      <Section bg="dark" id="ai_sustainability">
        <Container>
          <Row className="align-items-center">
            <Col lg="6" md="10" className="order-lg-2 mb-4">
              <div className="position-relative text-lg-right">
                <ImageRight>
                  <Image
                    src={urlFor(content.imageWithAlt.asset._ref)}
                    alt={content.imageWithAlt.alt}
                    width={1526}
                    height={918}
                    layout="responsive"
                  />
                </ImageRight>
              </div>
            </Col>
            <Col
              lg="6"
              className="order-lg-1 mt-5 mt-lg-0"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="50"
              data-aos-offset="0"
              data-aos-once="true"
            >
              <div>
                <Typography.H2 className="tw-text-white">
                  {content.title}
                </Typography.H2>
                <div className="tw-mb-9">
                  <Typography.BlockContent
                    light
                    blocks={content.blockText.blockText}
                  />
                </div>
                <CTALink
                  href="https://predictivemovement.se"
                  text={content.cta.title}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  )
}
