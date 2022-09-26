import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'

import { Button, Section, Box, Typography } from '../../components/Core'
import { device } from '../../utils'
import { urlFor } from '../../utils/helpers'

const ImageBottom = styled(Box)`
  border: 10px solid transparent;
  box-shadow: ${({ theme }) => `0 52px 54px ${theme.colors.shadow}`};
  position: absolute;
  top: 52%;
  left: -3%;
  z-index: 2;
  border-radius: 500px;
  overflow: hidden;
  max-width: 50%;

  @media ${device.md} {
    max-width: 100%;
  }
  @media ${device.lg} {
    left: 6%;
  }
  @media ${device.xl} {
    left: 8%;
  }
`

const ImageRight = styled(Box)`
  img {
    box-shadow: ${({ theme }) => `0 52px 54px ${theme.colors.shadow}`};
    border-radius: 10px;
  }
`

const Content2 = ({ content }) => {
  return (
    <>
      {/* <!-- Content section 1 --> */}
      <Section bg="dark" id="ai_sustainability">
        <Container>
          <Row className="align-items-center">
            <Col lg="6" md="10" className="order-lg-2 mb-4">
              <div className="position-relative text-lg-right">
                <ImageRight className="">
                  <img
                    src={urlFor(content.imageWithAlt.asset._ref)}
                    alt={content.imageWithAlt.alt}
                    className="img-fluid"
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
                    className="tw-text-white"
                    blocks={content.blockText.blockText}
                  />
                </div>
                <a href="https://predictivemovement.se">
                  <Button bg="secondary" color="dark">
                    {content.cta.title}
                  </Button>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  )
}

export default Content2
