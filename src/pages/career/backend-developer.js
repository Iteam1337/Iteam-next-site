import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import PageWrapper from "../../components/PageWrapper";
import { Section, Title, Text, Box } from "../../components/Core";

const OpeningDetails = () => {
  return (
    <PageWrapper footerDark>
      <Section className="pb-0">
        <div className="pt-5"></div>
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg="8">
              <Box className="text-center" mb={4}>
                Ledig tjänst
              </Box>
              <Title variant="hero">Backend developer</Title>
            </Col>
          </Row>
        </Container>
      </Section>

      <Section className="position-relative" borderBottom="1px solid #eae9f2;">
        <Container>
          <Row>
            <Col lg="12" xl="10" className="offset-xl-1">
              <Box pb={["40px", null, "65px"]}>
                <Title variant="card" mb="18px">
                  Iteam söker nu Backend developer!
                </Title>
              </Box>

              <Box pb={["40px", null, "65px"]}>
                <Title variant="card" mb="18px">
                  Övrigt
                </Title>
                <Text variant="small">
                  Omfattning: Heltid
                  <br />
                  <br />
                  Tillsättning: Snarast
                  <br />
                  <br />
                  Plats: Göteborg eller Stockholm eller helt remote
                  <br />
                  <br />
                  Frågor: Till{" "}
                  <a href="mailto:johanna.grahn@iteam.se">
                    johanna.grahn@iteam.se
                  </a>
                </Text>
              </Box>
            </Col>
          </Row>
        </Container>
      </Section>
    </PageWrapper>
  );
};
export default OpeningDetails;
