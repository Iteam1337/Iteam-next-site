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
                Vi hjälper ditt team att bygga tekniskt komplicerade backends,
                ibland med flera databaser, integrationer med andra interna och
                externa system, realtidssystem, händelsestyrda dataflöden och
                höga säkerhetskrav. Beroende på mognaden i teamets arbetssätt
                och erfarenhet kan vår roll vara autonomt team, ren
                resursförstärkning eller som mentorer som hjälper ett
                existerande team att nå sin fulla potential.
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
