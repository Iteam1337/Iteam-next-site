import React from "react";
import { rgba } from "polished";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box } from "../../components/Core";
import ContentCard from "../../components/ContentCard";

const services = [
  "API",
  "Appar",
  "Plattformar",
  "Widgets",
  "Interna portaler",
  "Webbapplikationer",
  "Integrationer för nya tjänster",
  "Chatbottar",
  "Automatiseringar",
];

const Feature2 = () => (
  <>
    <Section bg="#f7f7fb">
      <Container>
        <Row className="justify-content-center">
          <Col lg="9">
            <Box className="text-center" mb={[4, 5]}>
              <Title>
                Vi bygger det
                <br />
                du behöver
              </Title>
            </Box>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {services.map((service) => (
            <Col
              lg="4"
              md="6"
              className="mb-4"
              data-aos="zoom-in"
              data-aos-duration="750"
              data-aos-once="true"
              data-aos-delay="50"
            >
              <ContentCard title={service} color="primary" />
            </Col>
          ))}
        </Row>
      </Container>
    </Section>
  </>
);

export default Feature2;
