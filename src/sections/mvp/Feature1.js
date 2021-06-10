import React from "react";
import { rgba } from "polished";
import { Container, Row, Col } from "react-bootstrap";
import {
  Title,
  Button,
  Section,
  Box,
  Text,
  Anchor,
} from "../../components/Core";

const FeatureCard = ({
  color = "primary",
  iconName,
  title,
  children,
  ...rest
}) => (
  <Box width={"100%"} bg="light" p="30px" borderRadius={10} {...rest}>
    <div className="d-flex justify-content-between align-items-start">
      <div>
        <Text
          color="heading"
          as="h3"
          fontSize={4}
          fontWeight={700}
          letterSpacing={-0.75}
          mb={2}
        >
          {title}
        </Text>
        <Text fontSize={2} lineHeight={1.75}>
          {children}
        </Text>
      </div>
    </div>
  </Box>
);

const Feature = () => (
  <>
    <Section bg="ash">
      <Container>
        <Row className="align-items-center">
          <Col
            md="8"
            lg="6"
            className="offset-lg-1 pl-lg-5 order-lg-2"
            data-aos="fade-left"
            data-aos-duration="600"
            data-aos-once="true"
            data-aos-delay="500"
          >
            <Box>
              <Title color="light">Vi bygger din idé</Title>
              <Text color="light">
                {/* Med användarna i fokus bygger vi något litet, en MVP, samlar in feedback och itererar tills vi har en väl fungerande tjänst som användarna älskar. Vi stöttar dig med allt du behöver. Ett korsfunktionellt team som fungerar. Rätt teknikval. Rätt metoder. Tillsammans når vi snabbt ut till era användare så att ni får nöjdare och gladare kunder och anställda. Det är vårt MVP-erbjudande.              </Text> */}
                Oavsett om du har ett problem du behöver lösa eller redan har en
                idé så hjälper vi dig. Vi börjar där du står och utgår ifrån det
                helt enkelt. Ibland gör vi en
                <Anchor href="#design_sprint"> Designsprint </Anchor>
                för att kickstarta samarbetet. Andra gånger gör vi research om
                användarbehov för att försäkra oss om att vi löser rätt problem.
              </Text>
              <Button mt={4} onClick={() => (window.location.href = "#book")}>
                Boka möte
              </Button>
            </Box>
          </Col>
          <Col md="8" lg="5" className="order-lg-1 mt-5 mt-lg-0">
            <div>
              <Row className="justify-content-center">
                <Col
                  md="12"
                  data-aos="fade-right"
                  data-aos-duration="600"
                  data-aos-once="true"
                  data-aos-delay="50"
                >
                  <FeatureCard color="primary" title="Teknik som funkar">
                    Vi har koll på de senaste teknikerna och vi vet hur man får
                    gammal teknik att fungera ihop med ny.
                  </FeatureCard>
                </Col>
                <Col
                  md="12"
                  className="mt-4"
                  data-aos="fade-right"
                  data-aos-duration="600"
                  data-aos-once="true"
                  data-aos-delay="50"
                >
                  <FeatureCard
                    color="ash"
                    title="Användaren i centrum
"
                  >
                    Vi vet att nöjda användare är bra business. Därför sätter vi
                    alltid dem i centrum och utgår från riktiga behov när vi tar
                    fram nya lösningar.
                  </FeatureCard>
                </Col>
                <Col
                  md="12"
                  className="mt-4"
                  data-aos="fade-right"
                  data-aos-duration="600"
                  data-aos-once="true"
                  data-aos-delay="50"
                >
                  <FeatureCard color="secondary" title="Vi stöttar dig">
                    Våra coacher har stor erfarenhet och finns här för dig. Vi
                    blir ditt bollplank för tjänste- och produktutveckling och
                    hjälper dig hitta rätt process framåt.
                  </FeatureCard>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default Feature;
