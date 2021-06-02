import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import PageWrapper from "../../components/PageWrapper";
import { Section, Title, Text, Box } from "../../components/Core";

const OpeningDetails = () => {
  return (
    <>
      <PageWrapper footerDark>
        <Section className="pb-0">
          <div className="pt-5"></div>
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg="8">
                <Box className="text-center" mb={4}>
                  Backend developer
                </Box>
                <Title variant="hero">Iteam söker nu Backend developer!</Title>
                <Text></Text>
                <Title variant="hero">Rollen</Title>
                <Text>
                <b>Krav</b>
                <b>Meriterande</b>
                <b>Övrigt</b>
                Omfattning: Heltid<br/>
                Tillsättning: Snarast<br/>
                Plats: Göteborg eller Stockholm eller helt remote<br/>
                Frågor: Till <a href="matilto:johanna.grahn@iteam.se">johanna.grahn@iteam.se</a>
                </Text>
              </Col>
            </Row>
          </Container>
        </Section>
      </PageWrapper>
    </>
  );
};
export default OpeningDetails;
