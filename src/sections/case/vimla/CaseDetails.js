import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Image from "next/image"

import {
  Section,
  Box,
  Title,
  Text,
  ImgContainer,
} from "../../../components/Core"
import Quote from "../../../components/Quote"

import vimlaImg from "../../../assets/image/case/vimla-laptop-transparent.png"

const CaseDetails = () => (
  <>
    <Section className="position-relative" borderBottom="1px solid #eae9f2;">
      <Container>
        <Row>
          <Col lg="12" xl="10" className="offset-xl-1">
            <Box pb={["40px", null, "65px"]}>
              <Title variant="card" mb="18px">
                En ny sorts mobiloperatör
              </Title>
              <Text variant="small">
                Iteams samarbete med Vimla började redan innan varumärket ens
                var färdigställt. Telenor kom till oss med en idé om att starta
                en schysstare mobiloperatör, från grunden. Tanken var att se
                sina kunder som medlemmar och låta dem vara delaktiga i hur
                tjänster och funktioner skulle utvecklas för att lösa deras
                behov. Tillsammans utformade vi upplägget för hela varumärket,
                där man istället för att subventionera mobiler istället satsade
                på låga fasta priser, abonnemang utan bindningstid och inga
                dolda avgifter.
                <br />
                <br />
                Iteam fick i uppdrag att bygga Vimlas digitala plattform utifrån
                de krav som finns hos en nytänkande mobiloperatör. Ett
                strategiskt val var att helt ta bort telefonsupporten och
                istället bygga en community kring varumärket. Diskussionsforumet
                som communityn kretsar kring möjliggör samtidigt användarsupport
                från Vimla och att medlemmarna hjälper varandra med återkommande
                problem. Medlemmarna får en naturlig plats att interagera med
                varumärket och kan direkt påverka vilka nya tjänster som ska tas
                fram och vilka irriterande moment som ska prioriteras högst för
                åtgärd.
              </Text>
            </Box>
            <Box>
              <ImgContainer className="text-center" >
                <Image
                  height={209}
                  width={345}
                  layout="responsive"
                  src={vimlaImg}
                  alt="Vimla"
                />
              </ImgContainer>
            </Box>
            <Box style={{ marginTop: '1rem' }} pb={["40px", null, "65px"]}>
              <Title variant="card" mb="18px">
                Unika relationer
              </Title>
              <Text variant="small">
                På samma sätt som Vimla vill knyta sina kunder närmare sig och
                gör de till medlemmar ville de arbeta nära sina leverantörer.
              </Text>
              <Row className="mt-5">
                <Col lg="12" xl="10" className="offset-xl-1 pt-4">
                  <Box pb={["40px", null, "65px"]}>
                    <Quote
                      text={`Vi känner att vårt team på Iteam är mer som kollegor än
                leverantörer. Istället för att skriva en teknisk
                kravspecifikation att arbeta efter, så samarbetar vi
                kontinuerligt för att utveckla funktionalitet. Detta arbetssätt
                har gjort att vi kommit mycket längre än vi nånsin kunnat tro
                eftersom det varit så effektivt.`}
                      author=" Johan Littorin"
                      authorTitle="Grundare och chef för Vimla"
                    />
                  </Box>
                </Col>
              </Row>
              <Text variant="small">
                En viktig komponent i Vimlas digitala plattform som Iteam har
                utvecklat är medlemsappen. I den medlemmar kan hantera sitt
                abonnemang - få full översikt över fakturor, utnyttja surfmängd,
                koll på sparad surfmängd mellan månader (vilket Vimla var först
                i sverige med att införa) och även göra ändringar som att
                aktivera utlandssamtal, byta betalsätt eller sätta abonnemanget
                på paus. Funktionerna i appen utvecklades också som en
                webbtjänst, för de medlemmar som hellre hanterar sina abonnemang
                från sin dator.
              </Text>
            </Box>

            <Box pb={["40px", null, "65px"]}>
              <Title variant="card" mb="18px">
                Plattform och innovation
              </Title>
              <Text variant="small">
                Som ryggrad i plattformen utvecklade Iteam ett REST-baserat API.
                API:et fungerade både som backend för de egna kanalerna i form
                av medlemsapp och webb, som nav för integrationer mellan interna
                system och som kontaktpunkt för integrationer med
                tredjepartstjänster som betaltjänster. API:et håller samman
                datautbyte och orkestrering av affärsprocesser.
                <br />
                <br />
                När Vimla gick över till ett mjukvarudefinierat nät (SDN) fick
                Iteam i uppdrag att bygga den första tillämpningen - appen
                Filter där medlemmarna kan blockera samtal från utvalda nummer
                och istället få pushnotiser (eller ingenting alls) när någon
                ringer från dem.
                <br />
                <br />
                Vimla är idag den teleoperatör som har högst s.k. Net Promoter
                Score (NPS), vilket betyder att deras medlemmar i högre grad än
                andra operatörers kunder rekommenderar sin tjänst till andra.
                Flera år i rad har Vimla vunnit “årets mobiloperatör” på
                Telekomgalan.
              </Text>
            </Box>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
)

export default CaseDetails
