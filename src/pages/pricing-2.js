import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import PageWrapper from "../components/PageWrapper";
import { Section, Title, Text } from "../components/Core";

import PricingTable2 from "../sections/pricing/PricingTable2";
import FAQ from "../sections/pricing/FAQ";

const Pricing2 = () => {
  return (
    <>
      <PageWrapper footerDark>
        <Section>
          <div className="pt-5"></div>
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg="6">
                <Title variant="hero">Pricing & Plans</Title>
                <Text>
                  Create custom landing pages with Omega that converts more
                  visitors than any website.
                </Text>
              </Col>
            </Row>
          </Container>
        </Section>
        <PricingTable2 />
        <FAQ />
      </PageWrapper>
    </>
  );
};
export default Pricing2;
