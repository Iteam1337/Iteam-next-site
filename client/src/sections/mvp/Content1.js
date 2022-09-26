import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import BlockContent from '../../components/BlockContent'
import { Button, Section, Box, Typography } from '../../components/Core'
import { device } from '../../utils'
import { urlFor } from '../../utils/helpers'

const ImageHalfContainer = styled(Box)`
  position: static;
  right: -260px;
  z-index: -1;
  height: 100%;

  .img-half {
    height: auto;
    @media ${device.lg} {
      height: 100%;
    }
  }
  @media ${device.lg} {
    position: absolute !important;
    height: 100%;
    right: -500px;
  }
  @media ${device.xl} {
    position: absolute !important;
    height: 100%;
    right: -30px;
  }
`

const ImageBottom = styled(Box)`
  border: 10px solid transparent;
  box-shadow: ${({ theme }) => `0 52px 54px ${theme.colors.shadow}`};
  position: absolute;
  left: 15px;
  bottom: 10%;
  border-radius: 50%;
  overflow: hidden;
  max-width: 50%;

  @media ${device.sm} {
    bottom: 15%;
    left: 0;
  }
  @media ${device.md} {
    max-width: 50%;
  }
  @media ${device.lg} {
    top: 55%;
    left: -95px;
    bottom: auto;
    max-width: 100%;
  }
`

const Content1 = ({ content }) => {
  return (
    <>
      <div className="overflow-hidden">
        <Container>
          <Row>
            <Col
              md={8}
              lg={6}
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="50"
              data-aos-offset="0"
              data-aos-once="true"
            >
              <Section py={[5, null, null, '190px']}>
                <div className="omga-02__content-text section-title order-lg-1">
                  <Typography.H2>{content.title}</Typography.H2>
                  <BlockContent blocks={content.blockText.blockText} />

                  <Button
                    mt={4}
                    onClick={() => (window.location.href = '#book')}
                  >
                    {content.button}
                  </Button>
                </div>
              </Section>
            </Col>
            <Col md={8} lg={6} className="position-relative mb-5 mb-lg-0">
              <ImageHalfContainer>
                <div className="h-100">
                  <img
                    src={urlFor(content.imageWithAlt.asset._ref)}
                    alt={content.imageWithAlt.alt}
                    className="img-half img-fluid"
                  />
                </div>
              </ImageHalfContainer>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Content1
