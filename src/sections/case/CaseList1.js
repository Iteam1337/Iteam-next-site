import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Section } from "../../components/Core";
import PostCard from "../../components/PostCard";

import imgCase1 from "../../assets/image/case/matcha-kontraktet1.jpg";
import imgCase2 from "../../assets/image/case/tjejjouren-thumbnail.jpeg";
import imgCase3 from "../../assets/image/case/photo-1588075592446-265fd1e6e76f.webp";
import imgCase4 from "../../assets/image/case/Digitala_kvitton.png";
import imgBrand1 from "../../assets/image/case/sa-logo.png";
import imgBrand3 from "../../assets/image/case/skelleftea.jpg";

// TODO: add json with case

const CaseList = () => (
  <>
    {/* <!-- Feature section --> */}
    <Section className="position-relative">
      <Container>
        <Row className="justify-content-center">
          <Col lg="4" className="mb-5 flex-grow-1">
            <PostCard
              img={imgCase2}
              title="Tjejjouren Väst"
              link="/case/tjejjouren-vast"
            >
              Appen Stella ger tjejer stöd dygnet runt
            </PostCard>
          </Col>
          <Col lg="4" className="mb-5 flex-grow-1">
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
          <Col lg="4" className="mb-5 flex-grow-1">
            <PostCard
              img={imgCase3}
              imgBrand={imgBrand3}
              title="Skellefteå ansiktsigenkänning"
              link="/case/skelleftea"
            >
              Kan man använda ansiktsigenkänning för att registrera närvaro i en
              skola? Vi hjälpte Skellefteå att försöka hitta en teknisk lösning
              som skyddade integriteten.
            </PostCard>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg="4" className="mb-5 flex-grow-1">
            <PostCard
              img={imgCase4}
              title="Skatteverket & Karios Future"
              link="/case/skatteverket-kairos-future"
            >
              Säkra kvitton genom kryptoteknik
            </PostCard>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default CaseList;
