import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"

import { Title, Section, Box, Text } from "../../components/Core"

import imgContent1 from "../../assets/image/jpeg/_DSC6527_.jpg"
import imgContent2 from "../../assets/image/jpeg/Lounge-Martin-Mikael-Christian-Lowres.jpg"
import BlockContent from "../../components/BlockContent"
import { urlFor } from "../../utils/helpers"

const ContentImg = styled(Box)`
  box-shadow: ${({ theme }) => `0 42px 54px ${theme.colors.shadow}`};
  border-radius: 10px;
  overflow: hidden;
  max-height: 515px;
  height: 100%;
`

const Content = ({ content }) => (
  <>
    <Section>
      <Container>
        <Row className="justify-content-center pb-4">
          <Col lg="6">
            <Title variant="hero">{content.section.title}</Title>
          </Col>
          <Col lg="6" className="pl-lg-5">
            <BlockContent blocks={content.section.blockText.blockText} />
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg="4" sm="5" className="mb-4 ">
            <ContentImg>
              <img
                src={urlFor(content.layoutImages[0].asset._ref)}
                alt={content.layoutImages[0].alt}
                className="img-fluid"
                style={{ objectFit: "cover", height: "100%" }}
              />
            </ContentImg>
          </Col>
          <Col lg="8" sm="7" className="mb-4">
            <ContentImg>
              <img
                src={urlFor(content.layoutImages[1].asset._ref)}
                alt={content.layoutImages[1].alt}
                className="img-fluid"
                style={{ objectFit: "cover", height: "100%" }}
              />
            </ContentImg>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
)

export default Content
