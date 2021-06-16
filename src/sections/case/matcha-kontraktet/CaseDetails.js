import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import {
  Section,
  Box,
  Title,
  Text,
  ImgContainer,
  Anchor,
} from "../../../components/Core"

import imgCase1 from "../../../assets/image/case/matcha-kontraktet1.jpg"
import imgCase2 from "../../../assets/image/case/matcha-screenshot.png"
import imgCase3 from "../../../assets/image/case/matcha-code.png"

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
                Sveriges Allmännyttas digitaliseringsinitiativ
              </Title>
              <Text variant="small">
                Sveriges Allmännytta samlar Sveriges 300 kommunala bostadsbolag.
                Cirka 100 av dessa deltar i Digitaliseringsinitiativet som är en
                gemensam satsning för att förstärka och accelerera
                medlemsbolagens digitalisering.
                En stor utmaning i bolagens digitalisering är de omfattande
                inlåsningseffekterna i branschen. Sveriges Allmännyttan har
                därför varit drivande i utvecklingen av en branschgemensam
                öppen API-standard, fastAPI. FastAPI ska möjliggöra utbyte av
                information mellan system oavsett leverantör, vilket möjliggör
                integrationer mellan system och nya tjänster.
                <br />
                <br />
                För att öka förståelsen för och därigenom användningen av fastAPI och locka till sig
                fler tredjepartsutvecklare gav Sveriges Allmännytta Iteam i
                uppdrag att göra en nulägesanalys av fastAPI, och att skapa en
                tillämpning baserad på fastAPI åt ett av de medlemsbolag som
                deltar i Digitaliseringsinitiativet.
              </Text>
            </Box>
            <Box pb={["40px", null, "65px"]}>
              <Title variant="card" mb="18px">
                Utvärdering och användning av fastAPI
              </Title>
              <Text variant="small">
                En viktig del av analysen av fastAPI handlade om developer experience,
                DX. Under processen att både lära sig fastAPI och bedöma enkelheten i
                att använda de identifierade vi ett antal trösklar som kommer kunna
                åtgärdas för att skapa en kortare startsträcka och snabbare förståelse
                hos utvecklare som ska börja utveckla tillämpningar.

                <br />
                <br />
                Utmaningen i uppdragets andra halva var att skapa en värdefull
                tillämpning för ett medlemsföretag. Detta i syfte att i förlängningen
                öka intresset för att beställa, kravställa och använda fastAPI hos medlemsbolagen.
                I uppdraget utgick vi från en version av fastAPI med läsmöjligheter bara till de mest
                grundläggande affärsentiteterna, som kontrakt, hyresgäster och lägenheter. Många av de tillämpningsidéer som finns hos medlemsbolagen handlar t.ex. om felanmälan och ärenden, vilket finns i senare versioner av fastAPI. Genom att visa på nyttoeffekter redan med grundläggande funktionalitet och möjlighet att kombinera information från olika system ökar intresset hos både bostadsbolag och systemleverantörer att vidareutveckla API:et.

              </Text>
            </Box>
            <Box pb={["40px", null, "65px"]}>
              <Title variant="card" mb="18px">
                Matcha kontraktet
              </Title>
              <Text variant="small">
                Tillsammans med medlemsbolaget Vätterhem hittade
                Digitaliseringsinitiativet och Iteam en verkligt värdeskapande
                tillämpning i form av automatisk spårning av otillåten
                andrahandsuthyrning. Förutom att så många som 50 000 hyresgäster
                inte får tillgång till en hyresrätt som de borde i enlighet med
                kötid o.s.v. medför otillåten andrahandsuthyrning en rad andra
                problem form av ökad otrygghet för grannarna, ofta oskäliga
                andrahandshyror (vilket är olagligt sen oktober 2019) och
                tydliga kopplingar till annan brottslighet som bidragsbrott.
              </Text>
            </Box>
          </Col>
        </Row>
        <Row>
          <Col lg="6" className="mb-lg-0 mb-30">
            <Box>
              <img src={imgCase2} alt="" className="img-fluid" />
            </Box>
          </Col>
          <Col lg="6">
            <Box>
              <img src={imgCase3} alt="" className="img-fluid" />
            </Box>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg="12" xl="10" className="offset-xl-1 pt-4">
            <Box pb={["40px", null, "65px"]}>
              <Text variant="small" mb={3}>
                Iteam tog fram en första version till en tjänst för förenklad
                användning av fastAPI, som både omtolkar dataformatet till ett
                mer lättanvänt format och ger större hjälp med färdigpaketerade
                anrop med vanliga sätt att filtrera och koppla ihop olika
                informationsobjekt. Baserat på den nya tjänsten byggdes sen i
                samarbete med Vätterhem en tjänst som automatiskt jämför
                adresserna i hyreskontrakten med hyresgästernas
                folkbokföringsadress. Adresser som inte överensstämmer skickas
                för granskning till en mänsklig användare, som kontrollerar om
                det finns giltiga skäl till skillnaden, eller om ärendet ska
                utredas grundligare. Den här jämförelsen av adresser görs redan,
                men manuellt genom uppslag och dokumentation i excelark.
              </Text>
              <blockquote>
                "Den största framgången är helt klart att vi har lyckats
                digitalisera en manuell process. Det kanske ser ut som en enkel
                sak att matcha ihop två källor, men från ett utgångsläge där man
                använder papper och penna och excel så är det en stor
                förbättring" Erika Strandberg, projektledare Sveriges
                Allmännytta
              </blockquote>
            </Box>
            <Box pb={["40px", null, "65px"]}>
              <Title variant="card" mb="18px">
                Nytta för många medlemsbolag
              </Title>
              <Text variant="small">
                Utifrån den Minimum Viable Product som togs fram i en agil
                arbetsprocess, finns många idéer till vidareutveckling. Eftersom
                tjänsten är webbaserad och bygger på fastAPI kan den med minimal
                insats också installeras och tas i bruk hos andra medlemsbolag.
                En viktig pusselbit i projektet var också att paketera tjänsten
                i form av en Docker-stack som kan installeras på valfri server
                som kör Docker, för att göra både drift och återanvändbarhet så
                stor som möjligt.
                <br />
                <br />
                Du kan läsa mer om projektet hos{" "}
                <Anchor color="info" href="https://utveckling.allmannyttan.se">
                  Allmännyttas Utvecklingsportal
                </Anchor>
                .
              </Text>
            </Box>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
)

export default CaseDetails
