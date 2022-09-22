import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import { Section, Box, Typography } from '../../components/Core'
import { device } from '../../utils'
import BlockContent from '../../components/BlockContent'
import { urlFor } from '../../utils/helpers'

const ImgStyled = styled.img`
  box-shadow: ${({ theme }) => `0 52px 54px ${theme.colors.shadow}`};
  border-radius: 0px;
  max-width: 70%;
  @media ${device.sm} {
    max-width: 50%;
  }
  @media ${device.md} {
    max-width: 33%;
  }
  @media ${device.lg} {
    max-width: 100%;
  }
  @media ${device.xl} {
    margin-left: -50px;
  }
`

const TextWithImageToLeft = ({ content }) => {
  return (
    <>
      <Section>
        <Container>
          <Row
            className="align-items-center"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="50"
            data-aos-offset="0"
            data-aos-once="true"
          >
            <Col lg="6" className="mb-4 mb-lg-0">
              <div className="pl-5">
                <ImgStyled
                  src={urlFor(content.imageWithAlt.asset._ref)}
                  alt={content.imageWithAlt.alt}
                  className="img-fluid"
                />
              </div>
            </Col>
            <Col lg="6" md="9">
              <Box className="pt-5 pt-lg-0">
                <Typography.H2>{content.title}</Typography.H2>

                <BlockContent
                  variant="thin"
                  blocks={content.blockText.blockText}
                />
              </Box>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  )
}

export default TextWithImageToLeft
