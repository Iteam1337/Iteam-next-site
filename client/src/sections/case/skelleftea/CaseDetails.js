import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import {
  Section,
  Box,
  Title,
  Text,
  ImgContainer,
} from "../../../components/Core"

import imgCase1 from "../../../assets/image/case/photo-1588075592446-265fd1e6e76f.webp"
import imgCase2 from "../../../assets/image/case/tjejjouren-vast-case-phone.png"

const CaseDetails = () => (
  <>
    <Section className="position-relative" borderBottom="1px solid #eae9f2;">
      <Container>
        <ImgContainer className="text-center" pb={["50px", null, "75px"]}>
          <img src={imgCase1} alt="" className="img-fluid" />
          <i>Bild: Unsplash, tagen i Atlanta, Georgia</i>
        </ImgContainer>

        <Row>
          <Col lg="12" xl="10" className="offset-xl-1">
            <Box pb={["40px", null, "65px"]}>
              <Text mb="18px">
                Skellefteå kommun har höga ambitioner inom digitalisering med
                ledstjärnan “om vi skall kunna utvecklas som kommun och region
                måste vi tillvarata hela bygdens förutsättningar när det gäller
                att leva, bo och verka”. Kommunen har uppskattat att lärare i
                kommunens skolor lägger cirka 16 000 timmar per år på
                närvaroregistrering, och har identifierat det som ett utmärkt
                område för effektivisering med digitala medel.
              </Text>
              <Title variant="card" mb="18px">
                Pilottest slutade i sanktionsavgift
              </Title>
              <Text variant="small" mb="18px">
                Under 2019 inledde därför Skellefteå kommun pilottester med
                effektivare sätt att registera närvaro på en av sina
                gymnasieskolor - det mest framgångsrika använde
                ansiktsigenkänning. Man genomförde innan start ett omfattande
                utredningsarbete kring hur GDPR skulle påverka projektet och
                vilka åtgärder som måste vidtas som konsekvens. Bland annat var
                deltagande i pilottesterna helt valfritt, man hämtade in
                samtycke från både elever och deras målsmän och man isolerade
                den tekniska utrustningen både fysiskt och elektroniskt från
                omvärlden. Trots detta ledde en tillsyn från Datainspektionen
                till en sanktionsavgift mot kommunen. Eftersom Skellefteå kommun
                tror på digitalisering som en positiv kraft har kommunen har
                överklagat Datainspektionens beslut till Kammarrätten.
              </Text>
              <Title variant="card" mb="18px">
                Kan man lösa problemet med Egendata?
              </Title>
              <Text variant="small" mb="18px">
                Parallellt med den juridiska processen kontaktade Skellefteå
                kommun Iteam för hjälp med att se om en annan teknisk lösning
                skulle kunna lösa utmaningen att använda ansiktsigenkänning i
                skolmiljö utan att bryta mot Datainspektionens hårda
                GDPR-tolkning. Lösningen blev en helt ny hantering av känsliga
                personuppgifter som inte bygger på medgivande till att kommunen
                lagrar personuppgifter - den bygger istället på att kommunen
                inte alls lagrar några personuppgifter. Konceptet heter Egendata
                och bygger på att varje elev lagrar personuppgifterna på en
                plats som de själva kontrollerar. Elevens ansiktsmodell lagras
                med en stark kryptering och eleven kan därefter dela ut en
                nyckel till kommunen som då kan läsa in modellen när den behövs
                för närvarokontrollen. Informationen finns bara i minnet på
                systemet som genomför ansiktsigenkänningen, och eleven kan via
                en mobilapp när som helst återkalla nyckeln man delat till
                kommunen och därmed stoppa tillgången till personuppgifterna.
                Hela projektet har präglats av sin explorativa natur och har
                inneburit ett mycket nära samarbete mellan Iteam och kunden, med
                en spännande mix av teknisk, juridisk och verksamhetsnära
                kompetens.
              </Text>

              <Title variant="card" mb="18px">
                Nytt lösningsförslag inskickat till myndigheten
              </Title>
              <Text variant="small">
                Den nya arkitekturen för lagring av personuppgifter hos
                personuppgiftslämnaren själv möjliggör att användningen av
                personuppgifterna ses som ett avtal istället för ett medgivande.
                Det stora fokuset på kryptering, transparens och direktkontroll
                hos användaren som är kännetecknande för Egendata talar för ett
                nytt och positivt besked från Datainspektionen. En ansökan om
                förhandssamråd kring den nya lösningen är nu inskickad och
                väntar på svar från myndigheten.
              </Text>
            </Box>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
)

export default CaseDetails
