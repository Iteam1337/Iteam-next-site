import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import PageWrapper from '../components/PageWrapper'
import {
  Section,
  Title,
  Box,
  List,
  Anchor,
  Typography,
} from '../components/Core'

const StyledLi = styled.li`
  font-weight: 300 !important;
  margin-top: 1rem;
`

const Privacy = () => {
  return (
    <>
      <PageWrapper footerDark>
        <Section>
          <div className="pt-5"></div>
          <Container>
            <Row className="justify-content-center">
              <Col lg="9" xl="8">
                <Typography.H1>Personuppgiftshantering hos Iteam</Typography.H1>
                <Box mt={['40px', null, '50px']}>
                  <Typography.H2>Personuppgiftsansvarig</Typography.H2>
                  <Typography.ParagraphSmall>
                    Personuppgiftsansvarig är Iteam Solutions AB, 556551-6928.
                  </Typography.ParagraphSmall>
                </Box>
                <Box mt={['40px', null, '50px']}>
                  <Typography.H2>Vad är personuppgifter?</Typography.H2>
                  <Typography.ParagraphSmall>
                    Med personuppgifter avses all slags information som direkt
                    eller indirekt kan hänföras till en fysisk person som är i
                    livet. Nedan riktlinjer följer de skyldigheter och
                    rättigheter som gäller enligt dataskyddsförordningen eller
                    annan rättsligt bindande bestämmelse.
                  </Typography.ParagraphSmall>
                </Box>
                <Box mt={['40px', null, '50px']}>
                  <Typography.H2>Insamling av personuppgifter</Typography.H2>
                  <Typography.ParagraphSmall>
                    Vi samlar in personuppgifter på följande sätt:
                  </Typography.ParagraphSmall>
                  <List>
                    <StyledLi>
                      Du själv lämnar dessa till oss, exempelvis i samband med
                      att du blir kund hos oss.
                    </StyledLi>
                    <StyledLi>
                      Du själv lämnar dessa till oss i samband med frivilliga
                      användartester, workshops eller liknande tillställningar.
                    </StyledLi>
                    <StyledLi>
                      Du själv lämnar dessa till oss, exempelvis i samband med
                      att registrerar dig till våra event, i kontakt
                      försäljning, i kontakt via e-post, brev eller via
                      kontaktformulär.
                    </StyledLi>
                    <StyledLi>
                      Du själv lämnar dina uppgifter till en leverantör och
                      samarbetspartners som i sin tur har ditt medgivande att
                      dela dina personuppgifter med oss.
                    </StyledLi>
                    <StyledLi>
                      Vi förbehåller oss också rätten att inhämta uppgifter från
                      tredje part (ex Creditsafe, SPAR, UC m.fl.) Dessa
                      uppgifter är exempelvis namn, kontaktuppgifter,
                      bolagsengagemang och demografisk data, kreditvärdighet.
                    </StyledLi>
                  </List>
                </Box>
                <Box mt={['40px', null, '50px']}>
                  <Typography.H2>Kategorier av personuppgifter</Typography.H2>
                  <Typography.ParagraphSmall>
                    De kategorier av personuppgifter som vi samlar, eller har
                    rätt att samla in, är:
                  </Typography.ParagraphSmall>
                  <List>
                    <StyledLi>
                      Kundinformation, det vill säga de uppgifter som behövs för
                      att kunna bli kund hos oss
                    </StyledLi>
                    <StyledLi>
                      Kontaktuppgifter i samband med event, användartester,
                      paneler, eller motsvarande
                    </StyledLi>
                    <StyledLi>
                      Information om köpta produkter/tjänster och
                      betalningshistorik
                    </StyledLi>
                    <StyledLi>
                      Besöksinformation på icke-inloggade och inloggade
                      tjänster, det vill säga din användargenererade data, data
                      rörande vilken enhet som används och viss interaktionsdata
                    </StyledLi>
                  </List>
                </Box>
                <Box mt={['40px', null, '50px']}>
                  <Typography.H2>
                    Laglig grund och ändamål för behandling av personuppgifter
                  </Typography.H2>
                  <Typography.ParagraphSmall>
                    Vi samlar bara in personuppgifter för ändamål som har stöd i
                    gällande dataskyddsförordning. Det vanligaste är att
                    uppgifterna samlas in för behandling med stöd av den
                    rättsliga grunden <b>fullgörande av avtal.</b> Ändamålen är
                    till exempel:
                  </Typography.ParagraphSmall>

                  <List>
                    <StyledLi> ingå ett avtal med oss</StyledLi>
                    <StyledLi> få en offert på ett erbjudande</StyledLi>
                    <StyledLi> köpa en produkt/tjänst</StyledLi>
                    <StyledLi> fakturera tjänster</StyledLi>
                  </List>
                  <Typography.ParagraphSmall>
                    Med vårt <b>berättigade intresse </b> som grund behandlar vi
                    data för flera ändamål, till exempel:
                  </Typography.ParagraphSmall>
                  <List>
                    <StyledLi>
                      {' '}
                      för marknadsföring och profilering, det vill säga för att
                      kommunicera relevanta erbjudanden till dig{' '}
                    </StyledLi>
                    <StyledLi> för försäljning av våra erbjudanden</StyledLi>
                    <StyledLi> för att skicka nyhetsbrev</StyledLi>
                    <StyledLi>
                      {' '}
                      för att utveckla och förbättra våra produkter och tjänster{' '}
                    </StyledLi>
                    <StyledLi> för undersökningar och utvärderingar </StyledLi>
                  </List>
                  <Typography.ParagraphSmall>
                    Du kan även <b> lämna samtycke </b> till behandling i vissa
                    fall då inget av ovanstående gäller. Ett lämnat samtycke är
                    en aktiv handling från dig och den kan återkallas vilket
                    leder till att vi inte längre behandlar dina personuppgifter
                    ytterligare för det ändamålet.
                  </Typography.ParagraphSmall>
                </Box>
                <Box mt={['40px', null, '50px']}>
                  <Typography.H2>Överlämnande av personuppgifter</Typography.H2>
                  <Typography.ParagraphSmall>
                    Under vissa omständigheter kan vi komma att överlämna
                    personuppgifter till tredje part som då agerar
                    personuppgiftsbiträde. De aktörer som kan komma att behandla
                    insamlade personuppgifter är:
                  </Typography.ParagraphSmall>

                  <List>
                    <StyledLi> Ekonomiservice-leverantörer</StyledLi>
                    <StyledLi> IT-leverantörer</StyledLi>
                    <StyledLi> Säljpartners</StyledLi>
                    <StyledLi> CRM-leverantörer</StyledLi>
                    <StyledLi> Mediebyrå- och reklambyrå-partners</StyledLi>
                    <StyledLi> Uppdragsgivare</StyledLi>
                  </List>
                </Box>
                <Box mt={['40px', null, '50px']}>
                  <Typography.H2>
                    Inhämtning av personuppgifter från tredje part
                  </Typography.H2>
                  <Typography.ParagraphSmall>
                    För marknadsföring och försäljning inhämtar vi
                    personuppgifter från bl.a . Creditsafe, Bisnode och andra
                    offentliga källor i syfte att hitta mottagare för våra
                    erbjudanden.
                  </Typography.ParagraphSmall>
                </Box>
                <Box mt={['40px', null, '50px']}>
                  <Typography.H2>
                    Så länge sparas dina personuppgifter
                  </Typography.H2>
                  <Typography.ParagraphSmall>
                    Vi sparar inte personuppgifter längre än nödvändigt. Om du
                    inte är kund hos oss så behåller vi dina uppgifter i upp
                    till 48 månader. Vissa uppgifter kan dock behöva sparas för
                    längre tid för att uppfylla andra legala krav, till exempel
                    rörande bokföring där vi behöver spara uppgifter i enlighet
                    med bokföringslagen. Det finns också skäl att spara
                    uppgifterna för längre tid om det pågår en utredning eller
                    en tvist, även om kundförhållandet sedan tidigare har
                    upphört, eller i fall då du köpt en produkt av oss där vi
                    behöver spara uppgifterna för att på annat sätt kunna
                    fullgöra vårt åtagande.
                  </Typography.ParagraphSmall>
                </Box>

                <Box mt={['40px', null, '50px']}>
                  <Typography.H2>Säkerhet</Typography.H2>
                  <Typography.ParagraphSmall>
                    Vi vidtar fysiska, tekniska och organisatoriska åtgärder för
                    att skydda de personuppgifter som behandlas så att
                    uppgifterna inte förloras, förstörs, manipuleras eller blir
                    tillgängliga för obehöriga.
                  </Typography.ParagraphSmall>
                </Box>

                <Box mt={['40px', null, '50px']}>
                  <Typography.H2>Dina rättigheter</Typography.H2>
                  <Typography.ParagraphSmall>
                    Du har rätt till tillgång, rättelse och radering av
                    uppgifter enligt följande:
                  </Typography.ParagraphSmall>
                  <List>
                    <StyledLi>
                      {' '}
                      Du har rätt att få information om i vilka personuppgifter
                      vi innehar om dig.
                    </StyledLi>
                    <StyledLi>
                      {' '}
                      Du har rätt att begära rättelse av dina personuppgifter om
                      information om dom är felaktiga.
                    </StyledLi>
                    <StyledLi>
                      {' '}
                      Du har rätt att få dina personuppgifter raderade om
                      behandlingen grundar sig enbart på ditt samtycke och du
                      återkallar samtycket, om uppgifterna inte längre behövs
                      för de ändamål som de behandlats för eller om radering
                      krävs för att uppfylla en rättslig skyldighet
                    </StyledLi>
                  </List>
                </Box>

                <Box mt={['40px', null, '50px']}>
                  <Typography.ParagraphSmall>
                    Har du frågor om personuppgiftshantering och datasäkerhet,
                    kontakta oss på{' '}
                    <Anchor color="info" href="mailto:privacy@iteam.se">
                      privacy@iteam.se.
                    </Anchor>
                  </Typography.ParagraphSmall>
                </Box>
              </Col>
            </Row>
          </Container>
        </Section>
      </PageWrapper>
    </>
  )
}
export default Privacy
