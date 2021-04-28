import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Section } from "../../components/Core";
import CaseCard from "../../components/CaseCard";

import imgCase1 from "../../assets/image/png/case-media-img-1.png";
import imgCase2 from "../../assets/image/png/case-media-img-2.png";
import imgBrand1 from "../../assets/image/jpeg/case-card-brand-img.jpg";
import imgBrand2 from "../../assets/image/jpeg/case-card-brand-img-2.jpg";

const CaseList2 = () => (
  <>
    {/* <!-- Feature section --> */}
    <Section bg="#F7F7FB" className="position-relative">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col lg="6" className="mb-5 mb-lg-0">
            <CaseCard
              img={imgCase1}
              imgBrand={imgBrand1}
              title="Brag Mobile App"
            >
              Throwing consider dwelling bachelor joy her proposal laughter.
              Raptures returned disposed one entirely her men ham.
            </CaseCard>
          </Col>
          <Col lg="6" className="mb-5 mb-lg-0">
            <CaseCard
              img={imgCase2}
              imgBrand={imgBrand2}
              title="Brag Mobile App"
            >
              Throwing consider dwelling bachelor joy her proposal laughter.
              Raptures returned disposed one entirely her men ham.
            </CaseCard>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default CaseList2;
