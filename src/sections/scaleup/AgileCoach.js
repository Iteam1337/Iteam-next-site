import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import { Title, Section, Box, Text } from "../../components/Core"
import ContentCard from "../../components/ContentCard"

const services = [
  "Agila principer och metoder",
  "Teamdynamik",
  "Design och facilitering",
  "1-1 coachning",
  "SAFe och agil skalning",
]

const Feature2 = () => (
  <>
    <Section bg="#f7f7fb">
      <Container>
        <Row className="justify-content-center">
          <Col lg="9">
            <Box className="text-center" mb={[4, 5]}>
              <Title>Agil Coach</Title>
              <Text>
                Vi hjälper team med effektiva processer och skapar psykologisk
                trygghet som grund i arbetet mot leverans. Vi coachar i
                produktägarskap, agilt ledarskap och agila principer, ramverk
                och metoder. Tillsammans med er bygger vi högpresterande,
                välmående och autonoma team och organisationer.
              </Text>
            </Box>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {services.map((service, i) => (
            <ContentCard title={service} key={i} />
          ))}
        </Row>
      </Container>
    </Section>
  </>
)

export default Feature2
