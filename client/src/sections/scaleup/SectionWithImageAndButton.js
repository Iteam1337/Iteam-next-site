import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import { Title, Button, Section, Box } from '../../components/Core'
import { device } from '../../utils'
import BlockContent from '../../components/BlockContent'
import { urlFor } from '../../utils/helpers'

const ImageHalfContainer = styled(Box)`
  position: static;
  z-index: -1;
  height: 100%;

  .img-half {
    height: auto;
    @media ${device.lg} {
      height: 80%;
    }
  }
  @media ${device.lg} {
    position: absolute !important;
    height: 80%;
    margin-top: 30%;
  }
  @media ${device.xl} {
    position: absolute !important;
    height: 80%;
  }
`

const SectionWithImageAndButton = ({ content }) => {
  const { title, blockText, button, imageWithAlt } = content

  return (
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
                <Typography.H2>{title}</Typography.H2>
                <BlockContent blocks={blockText.blockText} />
                <Button
                  mt={4}
                  onClick={() => (window.location.href = '#pricing')}
                  bg="secondary"
                >
                  {button}
                </Button>
              </div>
            </Section>
          </Col>
          <Col md={8} lg={6} className="position-relative mb-5 mb-lg-0">
            <ImageHalfContainer>
              <div className="h-100">
                <img
                  src={urlFor(imageWithAlt.asset._ref)}
                  alt={imageWithAlt.alt}
                  className="img-half img-fluid"
                />
              </div>
            </ImageHalfContainer>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SectionWithImageAndButton
