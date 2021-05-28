import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Section } from "../../components/Core";
import PostCard from "../../components/PostCard";

// TODO: add json with case
import trrThumbnail from "../../assets/image/case/trr-case-phone.png";
import imgCase1 from "../../assets/image/case/matcha-kontraktet1.jpg";
import imgCase2 from "../../assets/image/jpeg/case-card-img-2.jpg";
import imgCase3 from "../../assets/image/jpeg/case-card-img-3.jpg";
import imgCase4 from "../../assets/image/case/Digitala_kvitton.png";
import imgBrand1 from "../../assets/image/jpeg/case-card-brand-img.jpg";
import imgBrand2 from "../../assets/image/jpeg/case-card-brand-img-2.jpg";
import imgBrand3 from "../../assets/image/jpeg/case-card-brand-img-3.jpg";

const Column = (props) => <Col sm={6} lg={4} className="mb-4" {...props} />;

const CaseList = () => (
  <>
    {/* <!-- Feature section --> */}
    <Section className="position-relative">
      <Container>
        <Row>
          <Column>
            <PostCard
              img={imgCase2}
              title="Tjejjouren Väst"
              link="/case/tjejjouren-vast"
            >
              Appen Stella ger tjejer stöd dygnet runt
            </PostCard>
          </Column>
          <Column>
            <PostCard img={trrThumbnail} title="TRR" link="/case/trr">
              Vi rustar Sveriges bästa omställningsaktör för framtiden
            </PostCard>
          </Column>
          <Column>
            <PostCard
              img={imgCase1}
              imgBrand={imgBrand1}
              title="Matcha kontraktet"
              link="/case/matcha-kontraktet"
            >
              Tryggare boendemiljö med automatisk spårning av olaglig
              andrahandsuthyrning
            </PostCard>
          </Column>
          <Column>
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
          </Column>
          <Column>
            <PostCard
              img={imgCase4}
              title="Skatteverket & Karios Future"
              link="/case/skatteverket-kairos-future"
            >
              Säkra kvitton genom kryptoteknik
            </PostCard>
          </Column>
        </Row>
      </Container>
    </Section>
  </>
);

export default CaseList;
