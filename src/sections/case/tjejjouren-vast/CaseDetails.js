import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import {
  Section,
  Box,
  Title,
  Text,
  ImgContainer,
} from "../../../components/Core";

import imgCase1 from "../../../assets/image/case/tjejjouren-vast1.png";
import imgCase2 from "../../../assets/image/case/tjejjouren-vast-case-phone.png";

const CaseDetails = () => (
  <>
    <Section className="position-relative" borderBottom="1px solid #eae9f2;">
      <Container>
        <ImgContainer className="text-center" pb={["50px", null, "75px"]}>
          <img src={imgCase1} alt="" className="img-fluid" />
        </ImgContainer>

        <Row>
          <Col lg="12" xl="10" className="offset-xl-1">
            <Box pb={["40px", null, "65px"]}>
              <Title variant="card" mb="18px">
                En ny app som ger stöd
              </Title>
              <Text variant="small">
                Tillsammans med Tjejjouren Väst har vi tagit fram mobilappen
                Stella för att erbjuda stöd till tjejer. I av appen får tjejer
                hjälp dygnet runt – helt på deras egna villkor.
                <br />
                <br />
                Det finns information, stöd och hjälp kring ämnen som kan vara
                svåra att prata om. De kan de läsa om var de kan vända sig om
                någon gör dem illa, om de mår dåligt eller om de behöver annat
                stöd.
                <br />
                <br />
                Tjejer kan också chatta med Tjejjouren Väst direkt och skriva
                ner sina tankar om saker som händer i loggen. Appen är också
                fylld med övningar. Dessa övningar syftar till att öka känslan
                av trygghet, till exempel när de ska sova, känner oro eller
                panik.
                <br />
                <br />
                Ladda ner appen i{" "}
                <a href="https://apps.apple.com/se/app/stella/id1462918466">
                  Appstore
                </a>{" "}
                eller i{" "}
                <a href="https://play.google.com/store/apps/details?id=se.tjejjourenvast">
                  Google Play
                </a>
                .
              </Text>
            </Box>
            <Box pb={["40px", null, "65px"]}>
              <Title variant="card" mb="18px">
                Process
              </Title>
              <Text variant="small">
                Med en begränsad budget var vi ett litet team som arbetade med
                det här projektet. För att kunna skapa mesta möjliga värde
                arbetade vi utifrån att ta fram en “Minimum Loveable Product”.
                Vårt största fokus var att allt vi gjorde skulle vara värdefullt
                för användarna. Detta för att så snart som möjligt kunna släppa
                någonting som kunde hjälpa tjejer.
              </Text>
            </Box>
          </Col>
        </Row>
        <Row>
          <Col lg="12" xl="10" className="offset-xl-1">
            <Box>
              <ImgContainer className="text-center">
                <img src={imgCase2} alt="" className="img-fluid" />
              </ImgContainer>
            </Box>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg="12" xl="10" className="offset-xl-1 pt-4">
            <Box pb={["40px", null, "65px"]}>
              <Title variant="card" mb="18px">
                Utmaning
              </Title>
              <Text variant="small">
                Vår största utmaning i projektet var att kunna göra mesta
                möjliga med begränsade medel. Valet av process gjordes med
                utgångspunkten att det fanns en stor osäkerhet i hur långt vi
                kunde hinna på den korta tiden. Därför ville vi säkerställa att
                all tid ledde till ett ökat värde.
              </Text>
            </Box>
            <Box pb={["40px", null, "65px"]}>
              <Title variant="card" mb="18px">
                Om Tjejjouren Väst
              </Title>
              <Text variant="small">
                Tjejjouren Väst är en ideell förening som arbetar för att stärka
                tjejers rättigheter och motarbeta den ökande psykiska ohälsan
                bland unga tjejer. De arbetar med nätbaserat stöd i form chat,
                mail och numera mobilapp. Tjejjouren Väst är beroende av
                sponsorer och bedrivs med stöd av Västra Götalandsregionen.
              </Text>
            </Box>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default CaseDetails;
