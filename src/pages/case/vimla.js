import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import PageWrapper from "../../components/PageWrapper";
import { Section, Title, Text, Box } from "../../components/Core";

import CaseList from "../../sections/case/CaseList1";
import CaseDetails from "../../sections/case/vimla/CaseDetails";
import CTA from "../../sections/case/CTA";

const CaseStudyDetails = () => {
  return (
    <>
      <PageWrapper footerDark>
        <Section className="pb-0">
          <div className="pt-5"></div>
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg="8">
                <Box className="text-center" mb={4}>
                  Vimla
                </Box>
                <Title variant="hero">Vimla</Title>
                <Text>Digital plattform som strategisk framtidssatsning</Text>
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
