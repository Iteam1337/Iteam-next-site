import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import PageWrapper from "../components/PageWrapper";
import { Section, Title, Text, Box } from "../components/Core";

import CaseList from "../sections/case/CaseList1";
import CaseDetails from "../sections/case/CaseDetails";
import CTA from "../sections/case/CTA";
import imgBrand from "../assets/image/jpeg/case-card-brand-img-2--border.jpg";

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
                  <img src={imgBrand} alt="" className="img-fluid" />
                </Box>
                <Title variant="hero">Web app for Covet</Title>
                <Text>
                  Create custom landing pages with Omega that converts{" "}
                  <br className="d-none d-md-block"></br> more visitors than any
                  website.
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
