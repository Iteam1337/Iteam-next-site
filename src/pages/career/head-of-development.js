import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import PageWrapper from "../../components/PageWrapper";
import { Section, Title, Text, Box } from "../../components/Core";

const OpeningDetails = () => {
  return (
    <>
      <PageWrapper footerDark>
        <Section className="pb-0">
          <div className="pt-5"></div>
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg="8">
                <Box className="text-center" mb={4}>
                  Ledig tjänst
                </Box>
                <Title variant="hero">Head of Development</Title>
              </Col>
            </Row>
          </Container>
        </Section>

        <Section
          className="position-relative"
          borderBottom="1px solid #eae9f2;"
        >
          <Container>
            <Row>
              <Col lg="12" xl="10" className="offset-xl-1">
                <Box pb={["40px", null, "65px"]}>
                  <Title variant="card" mb="18px">
                    Iteam söker Head of Development!
                  </Title>
                  <Text variant="small">
                    Iteam kommer ur pandemin med nya krafter och hopp om
                    framtiden! Vi vet att världen är i ett viktigt skifte och
                    att vi kan bidra genom vår metod för att lyckas med komplexa
                    projekt, genom att ta tillvara på egen innovation och
                    lärande samt genom att hjälpa våra kunder samverka och
                    engagera med open source-utveckling.
                    <br />
                    <br />
                    Under våren har vi rekryterat två nya utvecklare och två
                    UX:are och förutom den här tjänsten söker vi också efter en
                    senior backend-utvecklare. Vi har också startat två riktigt
                    spännande samarbeten, med en streaming-tjänst i Stockholm
                    och digital transporttjänst i Göteborg, och håller dessutom
                    på att köra ett par sista piloter med Predictive Movement
                    som är ett Vinnova-finansierat projekt där vi på Iteam
                    bidrar med en AI-baserad tjänst för att samordna transporter
                    i glesbygd.
                    <br />
                    <br />
                    Nu söker vi dig som kommer vara en nyckelperson för att
                    fortsätta vår tradition att vara en partner i teknisk och
                    strategisk framkant, ett måste för hållbara digitala
                    lösningar i ett samhälle av idag.
                    <br />
                    <br />
                    Iteam har funnits sedan 1995 och är ett värderingsstyrt
                    företag med högt i tak, familjär stämning och ett brinnande
                    intresse för teknik & människa, framtiden och ett hållbart
                    samhälle. Idag är vi 24 personer utspridda i Sverige och
                    Paris. Distribuerade team har vi haft sedan 2016 men du
                    kommer att vara situerad i Stockholm eller Göteborg.
                  </Text>
                </Box>
                <Box pb={["40px", null, "65px"]}>
                  <Title variant="card" mb="18px">
                    Rollen
                  </Title>
                  <Text variant="small">
                    I rollen som Head of Development kommer du att arbeta ihop
                    med 12 utvecklare (and counting), samt med vår ledningsgrupp
                    där vi tillsammans stöttar våra team och utvecklar vår
                    verksamhet och affär.
                    <br />
                    <br />
                    Du är ansvarig för att driva arbetet med vår tekniska
                    roadmap, kompetensutveckling, intäktsbudget och beläggning
                    samt att arbeta med och vidareutveckla vår kultur bland
                    utvecklarna. Tillsammans med ansvariga för UX och Agila
                    Coacher utvecklar du vårt arbetssätt och castar till teamen.
                    Tillsammans med sälj- och marknadsgruppen bidrar du till att
                    göra vårt arbete synligt mot våra befintliga och potentiella
                    kunder.
                    <br />
                    <br />
                    På Iteam gillar vi att sticka händerna i myllan och de
                    flesta av oss i ledningsroller arbetar också i kundteam på
                    ett eller annat sätt. Det tror vi att också du gillar! I
                    agila, tvärfunktionella team bygger du innovativa
                    applikationer med hjälp av den senaste tekniken. Du
                    utforskar och utvärderar nya tekniker och metoder, sprider
                    din kunskap och omsätter den i praktiken - i ditt dagliga
                    arbete, på kodluncher och genom mentorskap. Vår tech-stack
                    är primärt Open Source (ex Node.js, React, Docker, Elixir,
                    Python och Go). Vana vid automatisering och automatiserad
                    testning är ett måste i våra uppdrag!
                  </Text>
                </Box>
                <Box pb={["40px", null, "65px"]}>
                  <Title variant="card" mb="18px">
                    Krav
                  </Title>
                  <Text variant="small">
                    <ul style={{ listStyle: "disc", marginLeft: "3rem" }}>
                      <li>
                        Ha förmågan att förstå kundens affär och koppling till
                        tekniken samt diskutera det med kund och kollegor
                      </li>
                      <li>God samarbetsförmåga</li>
                      <li>
                        - Goda kunskaper inom vår primära tech-stack Open Source
                        (ex Node.js, React, Docker/Kubernetes)
                      </li>
                      <li>
                        Skriva kod som är testbar samt skriva automatiska tester
                      </li>
                      <li>
                        Erfarenhet av att utvärdera nya teknik såsom språk,
                        frameworks
                      </li>
                      <li>5+ års erfarenhet av utveckling</li>
                      <li>
                        3+ års erfarenhet av ledarskap (facilitering, leda
                        grupper, hålla utbildning, kultur)
                      </li>
                      <li>Erfarenhet av agil, värdedriven utveckling</li>
                      <li>Erfarenhet av konsultverksamhet</li>
                      <li>Behärska svenska och engelska i tal och skrift</li>
                    </ul>
                  </Text>
                </Box>
                <Box pb={["40px", null, "65px"]}>
                  <Title variant="card" mb="18px">
                    Meriterande
                  </Title>
                  <Text variant="small">
                    <ul style={{ listStyle: "disc", marginLeft: "3rem" }}>
                      <li>
                        Du är aktiv och bidrar i utvecklarcommunityn (t.ex. Open
                        Source, Meetups)
                      </li>
                      <li>Kunskaper i hypotesdriven utveckling</li>
                      <li>Erfarenhet av försäljning</li>
                      <li>Erfarenhet av rekrytering</li>
                      <li>
                        Erfarenhet av andra språk (t.ex. Elixir, Go, Python,
                        .NET)
                      </li>
                      <li>E2E-testning med t.ex. Cypress eller Selenium</li>
                      <li>Förståelse för UX-design</li>
                      <li>Erfarenhet som agil coach eller scrum master</li>
                    </ul>
                  </Text>
                </Box>
                <Box pb={["40px", null, "65px"]}>
                  <Title variant="card" mb="18px">
                    Övrigt
                  </Title>
                  <Text variant="small">
                    Omfattning: Heltid
                    <br />
                    <br />
                    Tillsättning: Snarast
                    <br />
                    <br />
                    Plats: Göteborg eller Stockholm
                    <br />
                    <br />
                    Frågor: Till{" "}
                    <a href="mailto:johanna.grahn@iteam.se">
                      johanna.grahn@iteam.se
                    </a>
                  </Text>
                </Box>
              </Col>
            </Row>
          </Container>
        </Section>
      </PageWrapper>
    </>
  );
};
export default OpeningDetails;
