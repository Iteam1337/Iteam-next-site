import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import PageWrapper from "../../components/PageWrapper";
import { Section, Title, Text } from "../../components/Core";

import CaseList from "../../sections/case/CaseList1";
import CaseList2 from "../../sections/case/CaseList2";
import CTA from "../../sections/case/CTA";

const CaseStudy = () => {
  return (
    <>
      <PageWrapper footerDark>
        <Section className="pb-0">
          <div className="pt-5"></div>
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg="6">
                <Title variant="hero">Våra case</Title>
                <Text>
                  Create custom landing pages with Omega that converts more
                  visitors than any website.
                </Text>
              </Col>
            </Row>
          </Container>
        </Section>
        <CaseList />
        <CaseList2 />
        <CaseList />
        <CTA />
      </PageWrapper>
    </>
  );
};
export default CaseStudy;
