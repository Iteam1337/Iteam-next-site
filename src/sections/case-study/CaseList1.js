import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Section } from "../../components/Core";
import PostCard from "../../components/PostCard";

import imgCase1 from "../../assets/image/jpeg/case-card-img.jpg";
import imgCase2 from "../../assets/image/jpeg/case-card-img-2.jpg";
import imgCase3 from "../../assets/image/jpeg/case-card-img-3.jpg";
import imgBrand1 from "../../assets/image/jpeg/case-card-brand-img.jpg";
import imgBrand2 from "../../assets/image/jpeg/case-card-brand-img-2.jpg";
import imgBrand3 from "../../assets/image/jpeg/case-card-brand-img-3.jpg";

const CaseList = () => (
  <>
    {/* <!-- Feature section --> */}
    <Section className="position-relative">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col lg="4" className="mb-5 mb-lg-0">
            <PostCard
              img={imgCase1}
              imgBrand={imgBrand1}
              title="Brag Mobile App"
            >
              Throwing consider dwelling bachelor joy her proposal laughter.
              Raptures returned disposed one entirely her men ham.
            </PostCard>
          </Col>
          <Col lg="4" className="mb-5 mb-lg-0">
            <PostCard
              img={imgCase2}
              imgBrand={imgBrand2}
              title="Brag Mobile App"
            >
              Throwing consider dwelling bachelor joy her proposal laughter.
              Raptures returned disposed one entirely her men ham.
            </PostCard>
          </Col>
          <Col lg="4" className="mb-5 mb-lg-0">
            <PostCard
              img={imgCase3}
              imgBrand={imgBrand3}
              title="Brag Mobile App"
            >
              Throwing consider dwelling bachelor joy her proposal laughter.
              Raptures returned disposed one entirely her men ham.
            </PostCard>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default CaseList;
