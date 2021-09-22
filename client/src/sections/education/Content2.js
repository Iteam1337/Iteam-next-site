import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"

import { Title, Section, Box, Text } from "../../components/Core"

import christian from "../../assets/image/jpeg/Teacher-Christian.jpg"
import adam from "../../assets/image/jpeg/Adam.png"
import emmaklara from "../../assets/image/jpeg/Emma-Klara.jpg"

const ContentImg = styled(Box)`
  box-shadow: ${({ theme }) => `0 52px 54px ${theme.colors.shadow}`};
  border-radius: 10px;
  overflow: hidden;
  max-height: 515px;
`

const Content2 = () => (
  <>
    <Section>
      <Container>
        <Row className="justify-content-center">
          <Col xl="7" lg="10" md="9">
            <div className="text-center">
              <Title>Om lärarna</Title>
              <Text>
                Christian Landgren är en välkänd profil i branschen och håller i
                den inledande föreläsningen. Emma-Klara Wächter leder vårt Team
                Coach team och kan allt om gruppers utveckling och hur
                produktägare bör agera för att bygga välpresterande team. Adam
                Näslund är säkerhetsexpert och utvecklare och brinner för öppen
                källkod sedan länge.
              </Text>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg="4" sm="5" className="mb-4 ">
            <ContentImg>
              <img src={christian} alt="" className="img-fluid" />
            </ContentImg>
          </Col>
          <Col lg="4" sm="5" className="mb-4 ">
            <ContentImg>
              <img src={emmaklara} alt="" className="img-fluid" />
            </ContentImg>
          </Col>
          <Col lg="4" sm="5" className="mb-4">
            <ContentImg>
              <img src={adam} alt="" className="img-fluid" />
            </ContentImg>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
)

export default Content2
