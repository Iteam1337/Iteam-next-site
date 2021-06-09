import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import PageWrapper from "../../components/PageWrapper";
import { Section, Title, Text, Box } from "../../components/Core";

import MetaTags from "../../components/MetaTags/MetaTags";
import CaseList from "../../sections/case/CaseList1";
import CaseDetails from "../../sections/case/skelleftea/CaseDetails";
import CTA from "../../sections/case/CTA";

const CaseStudyDetails = () => {
  return (
    <>
      <PageWrapper footerDark>
        <MetaTags
          title={" Skellefteå Kommunen"}
          description={"Kan man göra det på ett integritetssäkert sätt?"}
        />
        <Section className="pb-0">
          <div className="pt-5"></div>
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg="8">
                <Box className="text-center" mb={4}>
                  Skellefteå Kommunen
                </Box>
                <Title variant="hero">Ansiktsigenkänning för skolan</Title>
                <Text>Kan man göra det på ett integritetssäkert sätt?</Text>
              </Col>
            </Row>
          </Container>
        </Section>
        <CaseDetails />
        <CaseList />
        <CTA />
      </PageWrapper>
    </>
  );
};
export default CaseStudyDetails;
