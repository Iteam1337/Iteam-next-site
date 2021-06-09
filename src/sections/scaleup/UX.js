import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text } from "../../components/Core";
import ContentCard from "../../components/ContentCard";

const services = [
  "Research och analys",
  "Design och facilitering",
  "Utforska designlösningar",
  "Planera och utföra tester",
  "UI-design",
];

const Feature2 = () => (
  <>
    <Section bg="#f7f7fb">
      <Container>
        <Row className="justify-content-center">
          <Col lg="9">
            <Box className="text-center" mb={[4, 5]}>
              <Title>User Experience (UX)</Title>
              <Text>
                Vi hjälper ert team att sätta användaren i centrum. Genom att
                tillämpa olika designmetoder och verktyg leder vi teamet genom
                alla delar av alla delar av designprocessen. Tillsammans med
                produktägare, intressenter och utvecklare utreder och analyserar
                vi användarnas behov och tar fram lösningar som skapar värde för
                slutanvändarna.
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
);

export default Feature2;
