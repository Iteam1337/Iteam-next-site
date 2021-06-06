import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import PageWrapper from "../../components/PageWrapper";
import { Section, Title, Text, Box, ImgContainer } from "../../components/Core";
import imgRole from "../../assets/image/jpeg/from-top.jpg";

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
                    Vi vet att världen är i ett viktigt skifte och att vi kan 
                    bidra. Det gör vi genom vår metod för att lyckas med komplexa
                    projekt, genom att ta tillvara på egen innovation och
                    lärande samt genom att hjälpa våra kunder samverka och
                    engagera med open source-utveckling.
                    <br />
                    <br />
                    Under våren har vi startat två riktigt 
                    spännande nya samarbeten, med en streaming-tjänst i Stockholm 
                    och digital transporttjänst i Göteborg.  I Vinnova-projektet 
                    Predictive Movement arbetar vi med en AI-baserad tjänst för 
                    att samordna transporter i glesbygd. Nu söker vi dig som kommer 
                    vara en nyckelperson för att Iteam 
                    ska fortsätta vara en  partner i teknisk och
                    strategisk framkant, ett måste för hållbara digitala
                    lösningar i ett samhälle av idag.
                    <br />
                    <br />
                    Iteam har funnits sedan 1995 och är ett värderingsstyrt
                    företag med högt i tak, familjär stämning och ett brinnande
                    intresse för teknik & människa, framtiden och ett hållbart
                    samhälle. Idag är vi 24 personer utspridda i Sverige och
                    Paris. Distribuerade team har vi haft sedan 2016 och du kan 
                    välja att tillhöra något av våra kontor i Stockholm eller 
                    Göteborg, eller också arbeta från en annan ort i Sverige.
                  </Text>
                </Box>
                <ImgContainer
                  className="text-center"
                  pb={["50px", null, "75px"]}
                >
                  <img src={imgRole} alt="" className="img-fluid" />
                </ImgContainer>
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
                    arbete och genom mentorskap. Vår tech-stack är i sin helhet 
                    Node.js, React, ReactNative, Typescript, Docker, Kubernetes, 
                    ElasticSearch, GraphQL, PostgreSQL, Elixir, RabbitMQ, men 
                    ser olika ut i våra olika team. Vana vid automatisering och 
                    automatiserad testning är ett måste i alla våra uppdrag!
                  </Text>
                </Box>
                <Box pb={["40px", null, "65px"]}>
                  <Title variant="card" mb="18px">
                    Du behöver
                  </Title>
                  <ul style={{ listStyle: "disc", marginLeft: "3rem" }}>
                    <li>
                      Ha förmågan att förstå kundens affär och koppling till
                      tekniken samt diskutera det med kund och kollegor
                    </li>
                    <li>God samarbetsförmåga</li>
                    <li>
                      Goda kunskaper inom vår primära tech-stack
                      (t.ex. Node.js, React, Docker/Kubernetes)
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
                      3+ års erfarenhet av ledarskap (t.ex. facilitering, leda grupper, hålla utbildning, kultur, tech lead)
                    </li>
                    <li>Erfarenhet av agil, värdedriven utveckling</li>
                    <li>Erfarenhet av konsultverksamhet</li>
                    <li>Behärska svenska och engelska i tal och skrift</li>
                  </ul>
                </Box>
                <Box pb={["40px", null, "65px"]}>
                  <Title variant="card" mb="18px">
                    Plus i kanten
                  </Title>
                  <ul style={{ listStyle: "disc", marginLeft: "3rem" }}>
                    <li>
                      Du är aktiv och bidrar i utvecklarcommunityn (t.ex. Open
                      Source, Meetups)
                    </li>
                    <li>
                      Goda kunskaper i något annat språk (t.ex. Elixir, Go, Python, .NET, Rust, Java)
                    </li>
                    <li>Erfarenhet av hypotesdriven utveckling</li>
                    <li>Erfarenhet av försäljning</li>
                    <li>Erfarenhet av rekrytering</li>
                    <li>Förståelse för UX-design</li>
                    <li>Erfarenhet som agil coach eller scrum master</li>
                    <li>
                      Kanske kan du något vi inte ens visste att vi behövde? Överraska oss!
                    </li>
                  </ul>
                </Box>
                <Box pb={["40px", null, "65px"]}>
                  <Title variant="card" mb="18px">
                    Ansökan
                  </Title>
                  <Text variant="small">
                    Anställningsform: Tillsvidareanställning. 6 månaders provanställning, sedan fast anställning
                    <br />
                    Start: Omgående
                    <br />
                    Plats: Göteborg eller Stockholm
                    <br />
                    Ansök genom att maila ditt CV & några rader om dig till{" "}
                    <a href="mailto:joinus@iteam.se">
                      joinus@iteam.se
                    </a>
                  </Text>
                </Box>
                <Box pb={["40px", null, "65px"]}>
                  <Title variant="card" mb="18px">
                    Undrar du något om tjänsten?
                  </Title>
                  <Text variant="small">
                    Skicka din fråga till{" "}
                    <a href="mailto:johanna.grahn@iteam.se">
                      johanna.grahn@iteam.se
                    </a> (Head of People and Culture)
                    eller{" "}
                    <a href="mailto:christian.landgren@iteam.se">
                      christian.landgren@iteam.se
                    </a> (CEO)
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
