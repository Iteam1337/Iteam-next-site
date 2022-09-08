import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import { Title, Button, Section, Box, Text } from '../../components/Core'
import { urlFor } from '../../utils/helpers'

const ImageRight = styled(Box)`
  img {
    box-shadow: ${({ theme }) => `0 52px 54px ${theme.colors.shadow}`};
    border-radius: 10px;
  }
`
const Case = ({ content }) => {
  return (
    <Section id="design_sprint">
      <Container>
        <Row className="align-items-center">
          <Col lg="6" md="10" className="order-lg-2 mb-4">
            <div className="position-relative text-lg-right">
              <ImageRight className="">
                <img
                  src={urlFor(content.preview.imageCard.image.asset._ref)}
                  alt={content.preview.imageCard.image.alt}
                  className="img-fluid"
                />
              </ImageRight>
            </div>
          </Col>
          <Col lg="6" className="order-lg-1 mt-5 mt-lg-0">
            <div
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="50"
              data-aos-offset="0"
              data-aos-once="true"
            >
              <div>
                <Title>{content.title}</Title>
                <Text className="tw-mb-12">
                  {content.preview.imageCard.description}
                </Text>
                <Box>
                  <Button
                    onClick={() =>
                      (window.location.href = `/case/${content.slug.current}`)
                    }
                    bg="secondary"
                  >
                    Läs mer om {content.company}
                  </Button>
                </Box>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  )
}

export default Case
