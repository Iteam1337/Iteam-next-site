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
          <Container css={`
            z-index: 10;
            margin-left: 0px;
          `}>
            <Row className="">
              <Col lg="7">
                <Title variant="hero">Ibland behöver man förstärkning</Title>
                <Text>
                  Se oss som Mr Wolf - vi stöttar befintliga team som kanske kört fast eller behöver fler hjärnor.
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
