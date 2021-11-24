import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import { Title, Section, Text } from '../../components/Core'
import { device } from '../../utils'
import BlockContent from '../../components/BlockContent'
import { urlFor } from '../../utils/helpers'

const ImgContainer = styled.div`
  margin-top: 50px;
  @media ${device.lg} {
    margin-top: 0px;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(55%, -50%);
  }
  @media ${device.xl} {
    transform: translate(40%, -50%);
  }
  @media (min-width: 1400px) {
    transform: translate(15%, -50%);
  }
`

const TextWithImageToRight = ({ content }) => {
  return (
    <>
      <Section
        bg="#F7F7FB"
        className="position-relative"
        py={['50px', null, '130px', null, '230px']}
      >
        <Container>
          <Row className="align-items-center">
            <Col lg="6" className=" position-static order-lg-2">
              <ImgContainer className=" pl-lg-5">
                <img
                  src={urlFor(content.imageWithAlt.asset._ref)}
                  alt={content.imageWithAlt.alt}
                  className="img-fluid"
                  data-aos="fade-left"
                  data-aos-duration="600"
                  data-aos-once="true"
                  css={`
                    margin-right: -800px;
                    box-shadow: ${({ theme }) =>
                      `0 12px 84px ${theme.colors.shadow}`};
                    border-radius: 0;
                  `}
                />
              </ImgContainer>
            </Col>
            <Col lg="6" className="order-lg-1 mt-5 mt-lg-0">
              <div
                data-aos="fade-right"
                data-aos-duration="600"
                data-aos-once="true"
              >
                <div>
                  <Title>{content.title}</Title>
                  <BlockContent blocks={content.blockText.blockText} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  )
}

export default TextWithImageToRight
