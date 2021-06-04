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
      <Box
        size={69}
        minWidth={69}
        minHeight={69}
        borderRadius="50%"
        color={color}
        fontSize="28px"
        className="d-flex justify-content-center align-items-center"
        mr="20px"
        css={`
          background-color: ${({ theme, color }) =>
            rgba(theme.colors[color], 0.1)};
        `}
      >
        <i className={`icon ${iconName}`}></i>
      </Box>
      <div>
        <Text
          color="heading"
          as="h3"
          fontSize={4}
          fontWeight={500}
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
              <Title color="light">Det är inte så svårt.</Title>
              <Text color="light" >
              Med användarna i fokus bygger vi något litet, en MVP, samlar in feedback och itererar tills vi har en väl fungerande tjänst som användarna älskar. Vi stöttar dig med allt du behöver. Ett korsfunktionellt team som fungerar. Rätt teknikval. Rätt metoder. Tillsammans når vi snabbt ut till era användare så att ni får nöjdare och gladare kunder och anställda. Det är vårt MVP-erbjudande.              </Text>
              <Button mt={4}>Learn more</Button>
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
                  <FeatureCard
                    color="primary"
                    title="Teknik som funkar"
                  >
Vi har koll på de senaste teknikerna och vi vet hur man får gammal teknik att fungera i den nya digitala världen.
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
Vi sätter alltid dina kunder och din verksamhet i centrum så att vi säkerställer att vi levererar något de vill ha. På så sätt skapar vi hela tiden värde för dig.
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
                    color="secondary"
                    title="Vi stöttar dig"
                  >
                   Vi har coacher, ux-strateger, affärsutvecklare och tekniska rådgivare som stöttar dig genom processen. Du behöver aldrig känna dig ensam.
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
