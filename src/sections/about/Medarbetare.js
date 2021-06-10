import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Title, Section, Text, Anchor } from "../../components/Core";

const FadeIn = ({ direction, children }) => (
  <Col
    md={8}
    lg={6}
    data-aos={`fade-${direction}`}
    data-aos-duration="750"
    data-aos-once="true"
    data-aos-delay="500"
  >
    {children}
  </Col>
);

const InfoSection = ({ text, title }) => (
  <Row className="py-5">
    <FadeIn direction="right">
      <Title variant="card">{title}</Title>
    </FadeIn>
    <FadeIn direction="left">
      <Text>{text}</Text>
    </FadeIn>
  </Row>
);

const Medarbetare = ({ info }) => (
  <Container>
    <Section>
      <Row className="py-5">
        <FadeIn direction="right">
          <Title variant="card">Kontakt</Title>
        </FadeIn>
        <FadeIn direction="left">
          <Text>
            <Anchor href={`tel:${info.phoneNumber}`} color="info">
              {info.phoneNumber}
            </Anchor>
          </Text>
          <Text>
            <Anchor href={`mailto:${info.email}`} color="info">
              {info.email}
            </Anchor>
          </Text>
        </FadeIn>
      </Row>
      {info.why && (
        <InfoSection title="Varför jobbar du med teknik?" text={info.why} />
      )}
      {info.background && (
        <InfoSection title="Bakgrund" text={info.background} />
      )}
      {info.specialty && (
        <InfoSection title=" Specialistkompetens" text={info.specialty} />
      )}
    </Section>
  </Container>
);

export default Medarbetare;