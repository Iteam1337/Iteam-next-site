import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import { Title, Section } from '../../components/Core'
import BlockContent from '../../components/BlockContent'
import { urlFor } from '../../utils/helpers'

const SectionStyled = styled(Section)`
  border-bottom: 1px solid #242427;
`

const DesignatedTeam = ({ content }) => {
  return (
    <SectionStyled bg="dark">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col lg="5" className="offset-lg-1 order-lg-2 mb-5 mb-lg-0">
            <div>
              <div
                data-aos="zoom-out"
                data-aos-duration="750"
                data-aos-once="true"
                data-aos-delay="500"
              >
                <img
                  src={urlFor(content.imageWithAlt.asset._ref)}
                  alt={content.imageWithAlt.alt}
                  className="img-fluid"
                />
              </div>
            </div>
          </Col>
          <Col
            md="10"
            lg="6"
            className="order-lg-1"
            data-aos="fade-right"
            data-aos-duration="750"
            data-aos-once="true"
          >
            <div>
              <Title color="light">{content.title}</Title>
              <BlockContent
                color="light"
                blocks={content.blockText.blockText}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </SectionStyled>
  )
}

export default DesignatedTeam
