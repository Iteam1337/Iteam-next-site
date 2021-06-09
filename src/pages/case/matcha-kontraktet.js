import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import MetaTags from "../../components/MetaTags/MetaTags";
import PageWrapper from "../../components/PageWrapper";
import { Section, Title, Text, Box } from "../../components/Core";

import CaseList from "../../sections/case/CaseList1";
import CaseDetails from "../../sections/case/matcha-kontraktet/CaseDetails";
import CTA from "../../sections/case/CTA";

const CaseStudyDetails = () => {
  return (
    <>
      <PageWrapper footerDark>
        <MetaTags
          title={" Sveriges Allmännytta"}
          description={
            "Tryggare boendemiljö med automatisk spårning av olaglig andrahandsuthyrning"
          }
        />
        <Section className="pb-0">
          <div className="pt-5"></div>
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg="8">
                <Box className="text-center" mb={4}>
                  Sveriges Allmännytta
                </Box>
                <Title variant="hero">Matcha Kontraktet</Title>
                <Text>
                  Tryggare boendemiljö med automatisk spårning av olaglig
                  andrahandsuthyrning
                </Text>
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
