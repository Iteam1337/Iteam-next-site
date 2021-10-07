import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"
import Gravatar from "react-gravatar"
import { Title, Section, Box, Text, Anchor } from "../../components/Core"
import Quote from "../../components/Quote"
import BlockContent from "../../components/BlockContent"

const Card = styled.div`
  min-height: 100%;
  box-shadow: 0px 42px 54px rgb(20 19 50 / 18%);
  box-shadow: 0px 10px 80px rgb(20 19 50 / 15%);
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 35px;
  transition: 0.4s;
  border-radius: 10px;
`

const Content = ({ content }) => {
  return (
    <>
      <Section>
        <Container>
          <Row className="justify-content-center pb-4">
            <Col lg="6">
              <Title variant="hero">{content.title}</Title>
            </Col>
            <Col lg="6" className="pl-lg-5">
              <BlockContent blocks={content.blockText.blockText} />
            </Col>
          </Row>
          <Box>
            <Card>
              <Row className="justify-content-center align-items-center">
                <Col lg="3" className="mb-5 mb-md-0 w-auto">
                  <Gravatar
                    email="izabella.larsson@iteam.se"
                    className="img-fluid"
                    size={200}
                    className="rounded-circle"
                  />
                </Col>
                <Col lg="8">
                  <Title variant="card">Varför jobbar du med teknik?</Title>
                  <Quote
                    text="För mig handlar det om att vara en del av någonting som kan
                    förändra och förbättra vardagen för människor. Men också att
                    det är en branch som hela tiden utvecklas, man blir aldrig
                    riktigt fullärd utan det finns alltid mer att lära sig."
                    author="Izabella Larsson"
                    authorTitle="Utvecklare"
                  />
                </Col>
              </Row>
            </Card>
          </Box>
        </Container>
      </Section>
    </>
  )
}

export default Content
