import React from "react";
import { rgba } from "polished";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text } from "../../components/Core";
import ContentCard from "../../components/ContentCard";

const services = ["Backend", "Frontend", "Fullstack", "Arkitektur", "Devops"];

const Feature2 = () => (
  <>
    <Section bg="#f7f7fb">
      <Container>
        <Row className="justify-content-center">
          <Col lg="9">
            <Box className="text-center" mb={[4, 5]}>
              <Title>Tech</Title>
              <Text>
                Vi hjälper ditt team att bygga lösningar med tekniskt
                komplicerade backends, responsiva webbtjänster och mobilappar.
                Höga krav på användarvändlighet, realtidsintegrationer,
                händelsestyrda dataflöden och höga säkerhetskrav är vanliga i
                våra projekt. Oavsett om vi är ett autonomt team eller
                förstärker ett existerande så är agila arbetssätt och en
                automatiserad utvecklingsprocess med devops alltid närvarande.
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
