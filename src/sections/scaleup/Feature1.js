import React from "react";
import { rgba } from "polished";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box, Text } from "../../components/Core";

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
              <Title color="light">Våra kompetenser</Title>
              <Text color="light">
                {/* Med användarna i fokus bygger vi något litet, en MVP, samlar in feedback och itererar tills vi har en väl fungerande tjänst som användarna älskar. Vi stöttar dig med allt du behöver. Ett korsfunktionellt team som fungerar. Rätt teknikval. Rätt metoder. Tillsammans når vi snabbt ut till era användare så att ni får nöjdare och gladare kunder och anställda. Det är vårt MVP-erbjudande.              </Text> */}
                Vi boostar teamet med kompetens inom era prioriterade områden.
                Våra konsulter är vana att snabbt onboardas till kundunik
                arkitektur och agila metoder. Vi blir snabbt en naturlig del av
                ert team!
              </Text>
              <a href="#book">
                <Button mt={4}>Kolla tillgänglighet</Button>
              </a>
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
                  <FeatureCard color="primary" title=" Agil coach">
                    Vi hjälper er att bygga högpresterande, välmående och
                    autonoma team och organisationer.

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
                  <FeatureCard color="ash" title="Tech">
                    Vi stärker upp ditt team med backend, frontend, fullstack,
                    dev-ops och arkitekter.
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
                  <FeatureCard color="secondary" title=" UX">
                    Vi hjälper ert team att sätta användaren i centrum.
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
