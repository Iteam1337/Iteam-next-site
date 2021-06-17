import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import PageWrapper from "../components/PageWrapper"
import { Section, Title, Text, Box, List, Anchor } from "../components/Core"

const Privacy = () => {
  return (
    <>
      <PageWrapper footerDark>
        <Section>
          <div className="pt-5"></div>
          <Container>
            <Row className="justify-content-center">
              <Col lg="9" xl="8">
                <Title variant="" className="text-left">
                  Personuppgiftshantering hos Iteam
                </Title>
                <Box mt={["40px", null, "50px"]}>
                  <Title variant="card" fontSize="2rem" mb="30px">
                    Personuppgiftsansvarig
                  </Title>
                  <Text variant="small">
                    Personuppgiftsansvarig är Iteam Solutions AB, 556551-6928.
                  </Text>
                </Box>
                <Box mt={["40px", null, "50px"]}>
                  <Title variant="card" fontSize="2rem" mb="30px">
                    Vad är personuppgifter?
                  </Title>
                  <Text variant="small">
                    Med personuppgifter avses all slags information som direkt eller
                    indirekt kan hänföras till en fysisk person som är i livet. Nedan
                    riktlinjer följer de skyldigheter och rättigheter som gäller enligt
                    dataskyddsförordningen eller annan rättsligt bindande bestämmelse.

                  </Text>
                </Box>
                <Box mt={["40px", null, "50px"]}>
                  <Title variant="card" fontSize="2rem" mb="30px">
                    Insamling av personuppgifter
                  </Title>
                  <Text style={{ marginBottom: '1rem' }} variant="small">
                    Vi samlar in personuppgifter på följande sätt:
                  </Text>
                  <List>
                    <li>Du själv lämnar dessa till oss, exempelvis i samband med att du blir kund hos oss.</li>
                    <li>Du själv lämnar dessa till oss i samband med frivilliga användartester, workshops eller liknande tillställningar.</li>
                    <li>Du själv lämnar dessa till oss, exempelvis i samband med att registrerar dig till våra event, i kontakt försäljning, i kontakt via e-post, brev eller via kontaktformulär.</li>
                    <li>Du själv lämnar dina uppgifter till en leverantör och samarbetspartners som i sin tur har ditt medgivande att dela dina personuppgifter med oss.</li>
                    <li>Vi förbehåller oss också rätten att inhämta uppgifter från tredje part (ex Creditsafe, SPAR, UC m.fl.) Dessa uppgifter är exempelvis namn, kontaktuppgifter, bolagsengagemang och demografisk data, kreditvärdighet.</li>
                  </List>
                </Box>
                <Box mt={["40px", null, "50px"]}>
                  <Title variant="card" fontSize="2rem" mb="30px">
                    Kategorier av personuppgifter
                  </Title>
                  <Text style={{ marginBottom: '1rem' }} variant="small">
                    De kategorier av personuppgifter som vi samlar, eller har rätt att samla in, är:
                  </Text>
                  <List>
                    <li>
                      Kundinformation, det vill säga de uppgifter som behövs för att kunna bli kund hos oss
                    </li>
                    <li>
                      Kontaktuppgifter i samband med event, användartester, paneler, eller motsvarande
                    </li>
                    <li>
                      Information om köpta produkter/tjänster och betalningshistorik
                    </li>
                    <li>
                      Besöksinformation på icke-inloggade och inloggade tjänster, det vill säga din användargenererade data, data rörande vilken enhet som används och viss interaktionsdata
                    </li>
                  </List>
                </Box>
                <Box mt={["40px", null, "50px"]}>

                  <Title variant="card" fontSize="2rem" mb="30px">
                    Laglig grund och ändamål för behandling av personuppgifter
                  </Title>
                  <Text style={{ marginBottom: '1rem' }} variant="small">
                    Vi samlar bara in personuppgifter för ändamål som har stöd i gällande
                    dataskyddsförordning. Det vanligaste är att uppgifterna samlas in för
                    behandling med stöd av den rättsliga grunden <b>fullgörande av avtal.</b>
                    Ändamålen är till exempel:
                  </Text>

                  <List>
                    <li>ingå ett avtal med oss</li>
                    <li>få en offert på ett erbjudande</li>
                    <li>köpa en produkt/tjänst</li>
                    <li>fakturera tjänster</li>
                  </List>
                  <Text style={{ marginBottom: '1rem' }} variant="small">

                    Med vårt <b>berättigade intresse </b> som grund behandlar vi data för
                    flera ändamål, till exempel:
                  </Text>
                  <List>
                    <li> för marknadsföring och profilering, det vill säga för att kommunicera relevanta erbjudanden till dig </li>
                    <li> för försäljning av våra erbjudanden</li>
                    <li>  för att skicka nyhetsbrev</li>
                    <li> för att utveckla och förbättra våra produkter och tjänster </li>
                    <li> för undersökningar och utvärderingar </li>
                  </List>

                  Du kan även <b> lämna samtycke </b> till behandling i vissa fall då inget
                  av ovanstående gäller. Ett lämnat samtycke är en aktiv handling från dig
                  och den kan återkallas vilket leder till att vi inte längre behandlar dina
                  personuppgifter ytterligare för det ändamålet.

                </Box>
                <Box mt={["40px", null, "50px"]}>
                  <Title variant="card" fontSize="2rem" mb="30px">
                    Överlämnande av personuppgifter
                  </Title>
                  <Text style={{ marginBottom: '1rem' }} variant="small">
                    Under vissa omständigheter kan vi komma att överlämna personuppgifter
                    till tredje part som då agerar personuppgiftsbiträde. De aktörer som
                    kan komma att behandla insamlade personuppgifter är:
                  </Text>

                  <List>
                    <li>  Ekonomiservice-leverantörer</li>
                    <li>  IT-leverantörer</li>
                    <li>  Säljpartners</li>
                    <li>  CRM-leverantörer</li>
                    <li>  Mediebyrå- och reklambyrå-partners</li>
                    <li>  Uppdragsgivare</li>
                  </List>

                </Box>
                <Box mt={["40px", null, "50px"]}>
                  <Title variant="card" fontSize="2rem" mb="30px">
                    Inhämtning av personuppgifter från tredje part
                  </Title>
                  <Text variant="small">
                    För marknadsföring och försäljning inhämtar vi personuppgifter från bl.a
                    . Creditsafe, Bisnode och andra offentliga källor i syfte att hitta
                    mottagare för våra erbjudanden.
                  </Text>
                </Box>
                <Box mt={["40px", null, "50px"]}>
                  <Title variant="card" fontSize="2rem" mb="30px">
                    Så länge sparas dina personuppgifter
                  </Title>
                  <Text variant="small">
                    Vi sparar inte personuppgifter längre än nödvändigt. Om du inte är kund
                    hos oss så behåller vi dina uppgifter i upp till 48 månader. Vissa uppgifter
                    kan dock behöva sparas för längre tid för att uppfylla andra legala krav,
                    till exempel rörande bokföring där vi behöver spara uppgifter i enlighet
                    med bokföringslagen. Det finns också skäl att spara uppgifterna för längre
                    tid om det pågår en utredning eller en tvist, även om kundförhållandet
                    sedan tidigare har upphört, eller i fall då du köpt en produkt av oss
                    där vi behöver spara uppgifterna för att på annat sätt kunna fullgöra
                    vårt åtagande.
                  </Text>
                </Box>

                <Box mt={["40px", null, "50px"]}>
                  <Title variant="card" fontSize="2rem" mb="30px">
                    Säkerhet
                  </Title>
                  <Text variant="small">
                    Vi vidtar fysiska, tekniska och organisatoriska åtgärder för att skydda
                    de personuppgifter som behandlas så att uppgifterna inte förloras, förstörs,
                    manipuleras eller blir tillgängliga för obehöriga.
                  </Text>
                </Box>

                <Box mt={["40px", null, "50px"]}>
                  <Title variant="card" fontSize="2rem" mb="30px">
                    Dina rättigheter
                  </Title>
                  <Text style={{ marginBottom: '1rem' }} variant="small">
                    Du har rätt till tillgång, rättelse och radering av uppgifter enligt följande:
                  </Text>
                  <List>
                    <li>Du har rätt att få information om i vilka personuppgifter vi innehar om dig.</li>
                    <li>Du har rätt att begära rättelse av dina personuppgifter om information om dom är felaktiga.</li>
                    <li>Du har rätt att få dina personuppgifter raderade om behandlingen grundar sig enbart på ditt samtycke och du återkallar samtycket, om uppgifterna inte längre behövs för de ändamål som de behandlats för eller om radering krävs för att uppfylla en rättslig skyldighet.</li>
                  </List>
                </Box>

                <Box mt={["40px", null, "50px"]}>
                  <Text variant="small">
                    Har du frågor om personuppgiftshantering och datasäkerhet, kontakta oss på {" "}
                    <Anchor color="info" href="mailto:privacy@iteam.se">privacy@iteam.se.</Anchor>
                  </Text>
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

