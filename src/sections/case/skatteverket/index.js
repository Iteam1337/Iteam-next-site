import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Box, Title, Text } from "../../../components/Core";

import imgCase1 from "../../../assets/image/case/skatteverket.jpeg";
import { marginLeft } from "styled-system";

const ImgContainer = styled(Box)`
  border-radius: 10px;
  overflow: hidden;
`;

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
                Kvittohantering i en digital värld
              </Title>
              <Text variant="small">
                I takt med den framskridande digitaliseringen av samhället
                efterfrågas digitala kvitton i allt högre grad, av både
                konsumenter och företag. Att registrera och spara fysiska
                kvitton är resurskrävande och dåligt anpassat till moderna
                arbetsplatser där många helt eller delvis arbetar på distans.
                Sättet som digitala kvitton produceras och hanteras på idag
                underlättar för bedrägerier och försvårar skattekontroll.
                Kvitton kan enkelt kopieras och ett kvitto kan till exempel
                användas för att göra avdrag och få tillbaka moms i flera
                företag. Momsbedrägerier är ett omfattande problem som enbart
                inom EU uppskattas uppgå till 300-800 miljarder SEK per år.
                <br />
                <br />
                Skatteverket och Kairos Future gav därför Iteam i uppdrag att
                utforska tekniska lösningar för att möjliggöra en säker
                hantering med en ny typ av digitala kvitton.
              </Text>
            </Box>
            <Box pb={["40px", null, "65px"]}>
              <Title variant="card" mb="18px">
                Ökad säkerhet med bibehållen integritet
              </Title>
              <Text variant="small">
                Vår lösning innebär att digitala kvitton omvandlas till
                hashvärden, vilket är oigenkännliga textsträngar som blir unika
                för varje kvitto. Genom att dessa hashvärden signeras digitalt
                med stark kryptering kan kvittonas legitimitet sedan garanterat
                verifieras. Det digitala kvittot hos den som gjort köpet.
                Eftersom ett hashningen inte kan reversas, d.v.s. kvittots
                innehåll kan inte fås fram utifrån hashvärdet, gör detta att den
                enskilde individens integritet bevaras och att säljarnas
                försäljningsdata inte läcker ut. Samtidigt kan kontrollerande
                myndigheter utföra kontroller för att säkerställa att ett kvitto
                är äkta, att transaktionen har ägt rum och att inte samma
                digitala kvitto har använts flera gånger. Detta självreglerande
                system möjliggör även automatkontering vilket underlättar
                kvittohantering för affärer, slutkunder och redovisningsaktörer.
                <br />
                <br />
                Under projektet tog vi fram en prototyp som demonstrerar ett
                komplett flöde från att ett kvitto registreras i en butik till
                att det attesteras i ett företags ekonomisystem.
                <br />
                <br />
                <Title variant="card" mb="18px">
                  Utforskande och iterativt arbetssätt
                </Title>
                Vår prototyp bygger i huvudsak på tre hypoteser:
                <br />
                <br />
                <ul style={{ listStyle: "disc", marginLeft: "3rem" }}>
                  <li>
                    Vi kan avskaffa behovet av arkivering av fysiska kvitton.
                  </li>
                  <li>Kryptoteknik kan hjälpa oss minska momsbedrägerier.</li>
                  <li>
                    Genom att skapa förutsättningar för integrationer med
                    ekonomisystem kan vi möjliggöra automatkontering och minska
                    manuell administration.
                  </li>
                </ul>
                <br />
                <br />
                Vi har utifrån dessa hypoteser utforskat möjliga tekniska
                lösningar för att skapa digitala kvitton och vilka avvägningar
                som finns genom att bygga en prototyp. Det utforskande
                arbetssättet har bidragit till att identifiera och hantera
                tekniska hinder löpande under projektets gång. All kod som
                skapats under projektet är open source och tillgänglig på
                Github. Genom att vara transparenta hoppas vi på att inspirera
                samt ge andra möjligheten att lära av och bygga vidare på det vi
                gjort.
              </Text>
            </Box>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default CaseDetails;
