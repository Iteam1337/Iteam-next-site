import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import {
  Section,
  Box,
  Title,
  Text,
  ImgContainer,
} from "../../../components/Core";

import imgCase1 from "../../../assets/image/case/skatteverket.jpeg";

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
                För en säkrare kvittohantering
              </Title>
              <Text variant="small">
                Tillsammans med Skatteverket och Karios Future har vi utvecklat
                ett självreglerande system för hantering av digitala kvitton.
                Lösningen är en prototyp av en teknisk arkitektur med syfte att
                säkerställa kvitton och fakturor i bokföringen och ge dessa en
                unik identitet. Det försvårar misstag och fusk och kan bidra
                till att reducera momsbedrägerier. Momsbedrägerier är ett
                omfattande problem och EU-kommissionen uppskattar
                momsbedrägerier inom EU till 137 miljarder Euro per år. Den
                digitala lösningen möjliggör även automatkontering vilket
                underlättar kvittohantering för affärer, slutkunder och
                redovisningsaktörer.
              </Text>
            </Box>
            <Box pb={["40px", null, "65px"]}>
              <Title variant="card" mb="18px">
                Demonstration av tekniken
              </Title>
              <Text variant="small">
                Konceptet bygger på att digitala kvitton omvandlas till hashar,
                vilket är oigenkännliga textsträngar. Genom digitala signaturer
                kan kvittonas legitimitet sedan verifieras. På detta sätt
                stannar det digitala kvittot hos den som gjort köpet. Fördelarna
                är att den enskilde individens integritet bevaras och att
                säljarnas försäljningsdata inte läcker ut. Samtidigt kan
                kontrollerande myndigheter utföra kontroller för att säkerställa
                att ett kvitto är äkta och att transaktionen har ägt rum, men
                till skillnad från idag kan verifikationerna inte manipuleras.
                <br />
                <br />
                Prototypen vi tagit fram demonstrerar ett komplett flöde från
                att ett kvitto registreras i en butik till att det attesteras i
                ett företags ekonomisystem.
                <br />
                <br />
                Vår prototyp bygger i huvudsak på tre hypoteser:
                <br />
                <br />
                <ul style={{ listStyle: "disc", marginLeft: "3rem" }}>
                  <li>
                    Vi kan avskaffa behovet av arkivering av fysiska kvitton.
                  </li>
                  <li>
                    Kryptoteknik kan hjälpa oss minska bedrägerier och misstag,
                    exempelvis med moms.
                  </li>
                  <li>
                    Genom att skapa förutsättningar för integrationer med
                    ekonomisystem kan vi möjliggöra automatkontering och minska
                    manuell administration.
                  </li>
                </ul>
                <br />
                <br />
                Vill du prova själv?{" "}
                <a href="https://www.digitala-kvitton.se/">
                  Klicka här för att testa prototypen
                </a>
              </Text>
            </Box>
          </Col>
          <Col lg="12" xl="10" className="offset-xl-1 pt-4">
            <Box pb={["40px", null, "65px"]}>
              <Title variant="card" mb="18px">
                Utforskande och iterativt arbetssätt
              </Title>
              <Text variant="small">
                Vi har utforskat möjliga tekniska lösningar för att skapa
                digitala kvitton och vilka avvägningar som finns genom att bygga
                en prototyp. Det utforskande arbetssättet har bidragit till att
                identifiera och hantera tekniska hinder löpande under projektets
                gång. All kod är open-source och{" "}
                <a href="https://github.com/Iteam1337/digital-receipts">
                  tillgänglig på Github
                </a>
                . Genom att vara transparenta hoppas vi på att inspirera samt ge
                möjligheten att lära av och bygga vidare på det vi gjort.
              </Text>
            </Box>
            <Box pb={["40px", null, "65px"]}>
              <Title variant="card" mb="18px">
                Kvittohanteringen har inte hängt med
              </Title>
              <Text variant="small">
                I den pågående digitaliseringen av samhället har digitala
                kvitton efterfrågas av konsumenter och företag. Att registrera
                och spara fysiska kvitton kräver stora resurser och försvårar
                för moderna arbetsplatser där många helt eller delvis arbetar på
                distans. Sättet som digitala kvitton produceras på idag
                underlättar för bedrägerier och försvårar skattekontroll.
                Kvittona kan kopieras och ett kvitto kan till exempel användas
                för att göra avdrag och få tillbaka moms i flera företag. Vår
                utmaning har varit att utforska tekniska lösningar för att
                möjliggöra en säker hantering, med en ny typ av digitala
                kvitton.
              </Text>
            </Box>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default CaseDetails;
