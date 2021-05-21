import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Section } from "../../components/Core";
import PostCard from "../../components/PostCard";

import imgCase1 from "../../assets/image/case/matcha-kontraktet1.jpg";
import tjejjourenThumbnail from "../../assets/image/case/tjejjouren-thumbnail.jpeg";
import imgCase3 from "../../assets/image/case/photo-1588075592446-265fd1e6e76f.webp";
import imgBrand1 from "../../assets/image/case/sa-logo.png";
import imgBrand3 from "../../assets/image/case/skelleftea.jpg";

// TODO: add json with case

const CaseList = () => (
  <>
    {/* <!-- Feature section --> */}
    <Section className="position-relative">
      <Container>
        <Row className="justify-content-center">
          <Col lg="4" className="mb-5 mb-lg-0 flex-grow-1">
            <PostCard
              img={tjejjourenThumbnail}
              title="Tjejjouren Väst"
              link="/case/tjejjouren-vast"
            >
              Appen Stella ger tjejer stöd dygnet runt
            </PostCard>
          </Col>
          <Col lg="4" className="mb-5 mb-lg-0 flex-grow-1">
            <PostCard
              img={imgCase1}
              imgBrand={imgBrand1}
              title="Matcha kontraktet"
              link="/case/matcha-kontraktet"
            >
              Tryggare boendemiljö med automatisk spårning av olaglig
              andrahandsuthyrning
            </PostCard>
          </Col>
          <Col lg="4" className="mb-5 mb-lg-0 flex-grow-1">
            <PostCard
              img={imgCase3}
              imgBrand={imgBrand3}
              title="Skellefteå ansiktsigenkänning"
              link="/case/skelleftea"
            >
              Kan man använda ansiktsigenkänning för att registrera närvaro i en skola? Vi 
              hjälpte Skellefteå att försöka hitta en teknisk lösning som skyddade integriteten.
            </PostCard>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default CaseList;
